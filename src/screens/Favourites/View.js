import React, {Component} from 'react';
import {Animated, FlatList, Image, ScrollView, StatusBar, Switch, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import FoodItem from "../../components/Application/FoodItem/View";
import Styles from "./Styles";
import styles from "../../../branding/carter/styles/Style";
import Globals from "../../utils/Globals";
import AppConfig from "../../../branding/App_config";
import Easing from "react-native/Libraries/Animated/src/Easing";
import {Button, Text} from "react-native-elements";
import fonts from "../../../branding/carter/assets/Fonts";
import Typography from "../../../branding/carter/styles/Typography";
import assets from "../../../branding/carter/assets/Assets";
import AppInput from "../../components/Application/AppInput/View";
import TextInput from "../../components/Global/TextInput/View";
import BaseView from "../BaseView";
import Routes from "../../navigation/Routes";
import Accordion from "react-native-collapsible/Accordion";
const colors = AppConfig.colors.default;

const favouites = [
    {

        listName: 'Groceries',
        totalItems: "4",
        addedOn: "11/07/2020",
        backgroundColor: colors.primaryGreenColor,

        items: Globals.foodItems,

        spinValue: new Animated.Value(0)
    },
    {

        listName: 'Sunday Snacks',
        totalItems: "4",
        addedOn: "11/07/2020",
        backgroundColor: colors.red,

        items: Globals.foodItems,

        spinValue: new Animated.Value(0)
    },
    {

        listName: 'Vegetables',
        totalItems: "4",
        addedOn: "11/07/2020",
        backgroundColor: colors.orange,

        items: Globals.foodItems,

        spinValue: new Animated.Value(0)
    },
    {

        listName: 'Snacks',
        totalItems: "4",
        addedOn: "11/07/2020",
        backgroundColor: colors.purple,

        items: Globals.foodItems,

        spinValue: new Animated.Value(0)
    },
];

export default class Favouites extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSections: [0],
        };

    }

    renderFavouritesHeader = (section, index, isActive) => {


        const spin = section.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg']
        });

        if (isActive) {
            Animated.timing(
                section.spinValue,
                {
                    toValue: 1,
                    duration: 300,
                    easing: Easing.linear,
                    useNativeDriver: true  // To make use of native driver for performance
                }
            ).start()
        }
        else {
            Animated.timing(
                section.spinValue,
                {
                    toValue: 0,
                    duration: 300,
                    easing: Easing.linear,
                    useNativeDriver: true  // To make use of native driver for performance
                }
            ).start()
        }


        return (
            <View style={[Styles.foodItemContainer, isActive && {borderBottomWidth: 1, borderBottomColor: colors.borderColorLight}]}>


                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <View style={[Styles.profileItemCircle, {backgroundColor: section.backgroundColor}]}>
                        <Image source={assets.cart_regular_icon} style={{width: hp(3), height: hp(3), tintColor: "white"}} resizeMode={"contain"} />
                    </View>

                    <View style={{marginLeft: wp("3")}}>
                        <Text style={Styles.nameTitle}>{section.listName}</Text>

                        <View style={{flexDirection: "row", alignItems: "center", marginVertical: hp(0.5)}}>
                            <Text style={{
                                fontSize: Typography.P7,
                                fontFamily: fonts.RUBIK_REGULAR,
                                color: colors.textColorGrey1
                            }}>{"Total items: "}</Text>
                            <Text style={{
                                fontSize: Typography.P7,
                                fontFamily: fonts.RUBIK_REGULAR,
                                color: colors.textColorGrey1,
                                marginRight: wp(2)
                            }}>{section.totalItems}</Text>
                        </View>

                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={{
                                fontSize: Typography.P7,
                                fontFamily: fonts.RUBIK_REGULAR,
                                color: colors.textColorGrey1
                            }}>{"Added on: "}</Text>
                            <Text style={{
                                fontSize: Typography.P7,
                                fontFamily: fonts.RUBIK_REGULAR,
                                color: colors.textColorGrey1,
                                marginRight: wp(2)
                            }}>{section.addedOn}</Text>
                        </View>


                    </View>
                </View>

                <View style={{flex: 1, justifyContent: "center", alignItems: "flex-end", paddingRight: wp("5"),}}>
                    <Animated.Image source={assets.drop_down_icon} style={{transform: [{rotate: spin}], width: hp(2.5), height: hp(2.5), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />
                </View>

            </View>
        );
    };

    renderFavouritesContent = section => {
        return (
            <View style={{backgroundColor: "white"}}>

                <View style={{flex: 1}}>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={section.items}
                        renderItem={({ item }) => {
                            return (
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    paddingVertical: hp(1),
                                    borderBottomWidth: 1, borderBottomColor: colors.borderColorLight
                                }}>
                                  <View style={[Styles.profileItemCircle]}>
                                      <Image source={item.image} style={{width: hp(6), height: hp(6)}} resizeMode={"contain"} />
                                  </View>

                                  <View style={{marginLeft: wp("3")}}>
                                      <Text style={Styles.nameTitle}>{item.title}</Text>

                                      <View style={{flexDirection: "row", alignItems: "center", marginTop: hp(0.5)}}>

                                          <View style={{borderRightWidth: 1, borderRightColor: colors.borderColorLight}}>
                                              <Text style={{
                                                  fontSize: Typography.P7,
                                                  fontFamily: fonts.RUBIK_REGULAR,
                                                  color: colors.textColorGrey1,
                                                  marginRight: wp(2),
                                              }}>{item.weight}</Text>
                                          </View>



                                          <Text style={{
                                              fontSize: Typography.P7,
                                              fontFamily: fonts.RUBIK_REGULAR,
                                              color: colors.tertiaryGreenColor,
                                              paddingLeft: wp(2),
                                          }}>{item.price}</Text>
                                      </View>


                                  </View>
                              </View>
                            );
                        }} />

                    <Button
                        containerStyle={{marginVertical: hp(2), width: "80%", alignSelf: "center"}}
                        buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                        title={'Checkout with this list'}
                        titleStyle={styles.buttonStyle}
                        onPress={() => {

                        }}/>

                </View>

            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                showAppHeader={false}
                childView={() => {
                    return (

                        <View style={{flex: 1}}>

                            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>

                                <Accordion
                                    sections={favouites}
                                    activeSections={this.state.activeSections}
                                    renderHeader={this.renderFavouritesHeader}
                                    renderContent={this.renderFavouritesContent}
                                    expandMultiple={false}
                                    sectionContainerStyle={{marginBottom: hp("1")}}
                                    onChange={this._updateSections}
                                />


                            </ScrollView>

                        </View>




                    );
                }}
            />

        );
    }
}
