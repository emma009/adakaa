import React, {createRef, useState} from 'react';
import {FlatList, Image, ScrollView, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styles from "./Styles";
import Globals from "../../utils/Globals";
import AppConfig from "../../../branding/App_config";
import {Text} from "react-native-elements";
import BaseView from "../BaseView";
import Accordion from "react-native-collapsible/Accordion";
import {FavouritesBottomSheetComponent}
    from "../../components/Application/FavouritesBottomSheetComponent/FavouritesBottomSheetComponent";
import RBSheet from "react-native-raw-bottom-sheet";
import {FavouriteItem} from "../../components/Application/FavouriteItem/View";
import AppButton from "../../components/Application/AppButton/View";
import Routes from "../../navigation/Routes";

const colors = AppConfig.colors.default;
const assets = AppConfig.assets.default;


export const Favourites = (props) => {

    const [favouritesList, setFavouritesList] = useState(Globals.favouriteItems);
    const [activeSections, setActiveSections] = useState([]);

    let sheetRef = createRef();

    const renderFavouritesHeader = (section, index, isActive) => {

        return <FavouriteItem
            isActive={isActive}
            item={section}
            onDeletePress={() => {
                setFavouritesList((favouritesList) => {

                    favouritesList.splice(index, 1);

                    return [...favouritesList]

                })
            }}
        />
    };

    const renderFavouritesContent = section => {
        return (
            <View style={{backgroundColor: "white"}}>

                <View style={{flex: 1}}>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={section.items}
                        renderItem={({item}) => {
                            return (
                                <View style={Styles.contentItemContainer}>
                                    <View style={[Styles.contentItemLeftIconContainer]}>
                                        <Image
                                            source={item.image}
                                            style={Styles.contentItemLeftIcon}/>
                                    </View>

                                    <View>
                                        <Text style={Styles.titleText}>{item.title}</Text>

                                        <View style={{
                                            flexDirection: "row",
                                            marginTop: hp(0.5)
                                        }}>

                                            <View style={{
                                                borderRightWidth: 1,
                                                borderRightColor: colors.borderColorLight
                                            }}>
                                                <Text style={Styles.weightText}>{item.weight}</Text>
                                            </View>

                                            <Text style={Styles.priceText}>{item.price}</Text>

                                        </View>

                                    </View>
                                </View>
                            );
                        }}/>


                    <View style={{width: "80%", marginVertical: hp(2), alignSelf: "center"}}>
                        <AppButton
                            title={'Checkout with this list'}
                            onPress={() => {
                                props.navigation.navigate(Routes.CART_SUMMARY)
                            }}
                        />

                    </View>


                </View>

            </View>
        );
    };

    const _updateSections = allActiveSections => {
        setActiveSections(allActiveSections)
    };

    return (

        <BaseView
            navigation={props.navigation}
            showAppHeader={true}
            title={"My List"}
            rightIcon={assets.plus_circle_icon}
            onRightIconPress={() => {
                sheetRef.open()
            }}
            headerWithBack={false}
            childView={() => {
                return (

                    <View style={{flex: 1}}>

                        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>

                            <Accordion
                                sections={favouritesList}
                                activeSections={activeSections}
                                renderHeader={renderFavouritesHeader}
                                renderContent={renderFavouritesContent}
                                expandMultiple={false}
                                sectionContainerStyle={{marginBottom: hp("1")}}
                                onChange={_updateSections}
                            />


                        </ScrollView>


                        <RBSheet
                            ref={ref => {
                                sheetRef = ref;
                            }}
                            height={hp(42)}
                        >

                            <FavouritesBottomSheetComponent
                                onItemSelect={() => {
                                    sheetRef.close()
                                }}
                            />

                        </RBSheet>

                    </View>


                );
            }}
        />

    );


}
