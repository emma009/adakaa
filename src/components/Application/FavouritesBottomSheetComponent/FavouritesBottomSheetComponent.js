import React, {Component, useRef, useState} from 'react';

import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import { Button } from 'react-native-elements';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../../branding/App_config";
import AppInput from "../AppInput/View"
import Globals from "../../../utils/Globals";
import Style from "./Style";
import AppButton from "../AppButton/View";


const Typography = AppConfig.typography.default;
const fonts = AppConfig.fonts.default;
const assets = AppConfig.assets.default;
const styles = AppConfig.styling.default;
const colors = AppConfig.colors.default;

export const FavouritesBottomSheetComponent = (props) => {

    // viewType : 0 = Empty List
    // viewType : 1 = Create New List
    // viewType : 2 = Favourite List
    const [viewType, setViewType] = useState(2);

    const [favouriteList, setFavouriteList] = useState(Globals.favouritesList);

    const [selectedFavouriteList, setSelectedFavouriteList] = useState(Globals.favouritesList[0].itemLabel);

    let textInputRef;

    return(
        <View style={Style.container}>


            <TouchableOpacity
                onPress={() => {

                    let tempViewType = viewType;

                    if (tempViewType === 2) {
                        tempViewType = -1;
                    }

                    setViewType(tempViewType + 1)

                }}
                style={{marginLeft: wp(5), flexDirection: "row", alignItems: "center", width: "100%", height: hp(8), backgroundColor: colors.textColorGrey2}}>
                <View style={[{
                    width: hp("6"),
                    height: hp("6"),
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: hp("3"),
                    backgroundColor: colors.primaryGreenColor
                }]}>
                    <Image source={assets.cart_regular_icon} style={{width: hp(3), height: hp(3), tintColor: "white"}} resizeMode={"contain"} />
                </View>

                <Text style={{
                    fontSize: Typography.P3,
                    fontFamily: fonts.RUBIK_MEDIUM,
                    color: colors.textColorBlack1,
                    marginLeft: wp(5)
                }}>{viewType === 0 ? "Saved to Default List": viewType === 1 ? "Create new List" : "Saved to " + selectedFavouriteList}</Text>

            </TouchableOpacity>

            <View style={{height: hp(25), justifyContent: "center"}}>


                {/*Empty Text*/}

                {
                    viewType === 0 &&

                    <Text style={{
                        fontSize: Typography.P3,
                        fontFamily: fonts.RUBIK_REGULAR,
                        color: colors.textColorGrey1,
                        width: "60%",
                        textAlign: "center",
                        alignSelf: "center"
                    }}>{"You've not created any lists. Create a new list."}</Text>

                }

                {/*Create New List Item*/}

                {
                    viewType === 1 &&

                    <View style={{width: "90%", alignSelf: "center"}}>
                        <AppInput
                            textInputRef={r => (textInputRef = r)}
                            leftIcon={assets.cart_regular_icon}
                            leftIconColor={colors.iconColorGrey1}
                            placeholder={"Enter your list title"}
                            placeholderTextColor={colors.textColorGrey1}
                            backgroundColor={colors.textColorGrey2}
                            onChangeText={(value) => {}}
                        />


                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            style={{marginTop: hp(2)}}
                            data={favouriteList}

                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        style={{width: hp(5), height: hp(5), borderRadius: hp(2.5), alignItems: "center", justifyContent: "center", marginRight: wp(2), backgroundColor: item.backgroundColor}}
                                        onPress={() => {

                                            setFavouriteList((favouriteList) => {

                                                favouriteList.map((favouriteItem, favouriteIndex) => {

                                                    if (index === favouriteIndex) {
                                                        favouriteItem.selected = true
                                                    }
                                                    else {
                                                        favouriteItem.selected = false
                                                    }

                                                })

                                                return [...favouriteList]

                                            })

                                        }}>

                                        {
                                            item.selected &&
                                            <Image source={assets.tick_icon} style={{width: hp(2), height: hp(2), tintColor: "white"}} resizeMode={"contain"} />
                                        }


                                    </TouchableOpacity>
                                );
                            }}
                        />



                    </View>
                }

                {
                    viewType === 2 &&
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        style={{marginTop: hp(2)}}
                        data={favouriteList}

                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        props.onItemSelect();


                                            // setFavouriteList((favouriteList) => {
                                            //
                                            //     favouriteList.map((favouriteItem, favouriteIndex) => {
                                            //
                                            //         if (index === favouriteIndex) {
                                            //             setSelectedFavouriteList(favouriteItem.itemLabel)
                                            //             favouriteItem.selected = true
                                            //         }
                                            //         else {
                                            //             favouriteItem.selected = false
                                            //         }
                                            //
                                            //     })
                                            //
                                            //     return [...favouriteList]
                                            //
                                            // })


                                    }}
                                    style={{paddingVertical: hp(1), backgroundColor: item.selected ? colors.textColorGrey2 : "transparent"}}>
                                    <Text style={{
                                        fontSize: Typography.P3,
                                        fontFamily: fonts.RUBIK_MEDIUM,
                                        color: colors.textColorBlack1,
                                        paddingLeft: wp(5)
                                    }}>{item.itemLabel}</Text>
                                </TouchableOpacity>

                            );
                        }}
                    />
                }



            </View>




            <View style={{flex: 1, width: "90%", alignSelf: "center"}}>

                <AppButton
                    title={'Create a New List'}
                    onPress={() => {
                        if (viewType === 2) {
                            setViewType(1)
                        }
                        else {
                            setViewType(2)
                        }
                    }}
                />

            </View>



        </View>


    );


}
