import React, { Component } from 'react';

import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../../branding/App_config";
import Typography from "../../../../branding/carter/styles/Typography";
import fonts from "../../../../branding/carter/assets/Fonts";
import styles from "../../../../branding/carter/styles/Style";
import AppInput from "../AppInput/View"
const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;


export default class FavouritesBottomSheetComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

            // viewType : 0 = Empty List
            // viewType : 1 = Create New List
            // viewType : 2 = Favourite List
            viewType: 0,

            selectedFavouriteList: "Sunday Snacks",

            favouritesLists: [
                {
                    itemLabel: "Groceries",
                    selected: false
                },
                {
                    itemLabel: "Sunday Snacks",
                    selected: true
                },
                {
                    itemLabel: "Vegetables",
                    selected: false
                },
                {
                    itemLabel: "Snacks",
                    selected: false
                },
                {
                    itemLabel: "fruits",
                    selected: false
                },
                {
                    itemLabel: "Meat",
                    selected: false
                },
                {
                    itemLabel: "Dieting Plan",
                    selected: false
                },
                {
                    itemLabel: "Sports",
                    selected: false
                }
            ],


            listTypes: [
                {
                    backgroundColor: "#6cc51d",
                    selected: false
                },
                {
                    backgroundColor: "#bf0d3f",
                    selected: true
                },
                {
                    backgroundColor: "#f88e11",
                    selected: false
                },
                {
                    backgroundColor: "#efb019",
                    selected: false
                },
                {
                    backgroundColor: "#b71dc5",
                    selected: false
                },
                {
                    backgroundColor: "#1d68c5",
                    selected: false
                },
                {
                    backgroundColor: "#1dafc5",
                    selected: false
                }
            ]

        }

    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: "white"}}>


                <TouchableOpacity
                    onPress={() => {

                        let viewType = this.state.viewType;

                        if (viewType === 2) {
                            viewType = -1;
                        }

                        this.setState({
                            viewType: viewType + 1
                        })

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
                    }}>{this.state.viewType === 0 ? "Saved to Default List": this.state.viewType === 1 ? "Create new List" : "Saved to " + this.state.selectedFavouriteList}</Text>

                </TouchableOpacity>

                <View style={{height: hp(25), justifyContent: "center"}}>


                    {/*Empty Text*/}

                    {
                        this.state.viewType === 0 &&

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
                        this.state.viewType === 1 &&

                        <View style={{width: "90%", alignSelf: "center"}}>
                            <AppInput
                                textIsnputRef={r => (this.inputRef = r)}
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
                                data={this.state.listTypes}

                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity
                                            style={{width: hp(5), height: hp(5), borderRadius: hp(2.5), alignItems: "center", justifyContent: "center", marginRight: wp(2), backgroundColor: item.backgroundColor}}
                                            onPress={() => {
                                                let listTypes = [...this.state.listTypes];

                                                listTypes.map((listType, listTypeIndex) => {

                                                    if (index === listTypeIndex) {

                                                        listType.selected = true
                                                    }
                                                    else {
                                                        listType.selected = false
                                                    }

                                                })

                                                this.setState({listTypes});
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
                        this.state.viewType === 2 &&
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            style={{marginTop: hp(2)}}
                            data={this.state.favouritesLists}

                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            let favouritesLists = [...this.state.favouritesLists];

                                            favouritesLists.map((listItem, listItemIndex) => {

                                                if (index === listItemIndex) {
                                                    this.setState({
                                                        selectedFavouriteList: listItem.itemLabel
                                                    })
                                                    listItem.selected = true
                                                }
                                                else {
                                                    listItem.selected = false
                                                }

                                            })

                                            this.setState({favouritesLists});


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

                <View style={{flex: 1, width: "100%", justifyContent: "center"}}>

                    <Button
                        buttonStyle={[{ width: "90%", alignSelf: "center", backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                        title={'Create a New List'}
                        titleStyle={styles.buttonStyle}
                        onPress={() => {

                            this.setState({
                                viewType: 1
                            })
                        }}/>

                </View>



            </View>


        );
    }
}
