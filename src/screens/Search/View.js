import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import FoodItem from "../../components/Application/FoodItem/View";
import Styles from "./Styles";
import Globals from "../../utils/Globals";
import {Icon} from "react-native-elements";
import AppInput from "../../components/Application/AppInput/View";
import TextInput from "../../components/Global/TextInput/View";
import Routes from "../../navigation/Routes";
import Typography from "../../../branding/carter/styles/Typography";
import fonts from "../../../branding/carter/assets/Fonts";
import assets from "../../../branding/carter/assets/Assets";
import colors from "../../../branding/carter/styles/Colors";

import AppConfig from "../../../branding/App_config";

const styles = AppConfig.styling.default;


const searchHistoryArray = [
    "Fresh Apricots",
    "Frozen Pizza",
    "Bananas",
    "Cheetos",
    "Discounted Items",
    "Fresh Vegetables",
]


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return(

            <View  style={[{flex: 1}]}>

                <View style={{paddingTop: Globals.SAFE_AREA_INSET.top + hp (1), paddingRight: wp(5), backgroundColor: "white", flexDirection: "row", paddingVertical: hp(1)}}>

                    <TouchableWithoutFeedback onPress={() => {this.props.navigation.goBack()}}>
                        <View style={{width: wp("10"), justifyContent: "center", marginLeft: wp(2)}}>
                            <Image source={assets.arrow_left_icon}
                                   resizeMode={"contain"}
                                   style={{width: hp(2.5), height: hp (2.5), tintColor: colors.textColorBlack1}} />
                        </View>
                    </TouchableWithoutFeedback>

                    <TextInput
                        placeholder={"Search"}
                        placeholderTextColor={colors.textColorBlack1}
                        leftIcon={
                            <Image source={assets.search_icon}
                                   resizeMode={"contain"}
                                   style={{width: hp(2), height: hp (2), tintColor: colors.textColorBlack1}} />
                        }
                        containerStyle={[
                            {
                                backgroundColor: colors.textColorGrey2,
                                flex: 1
                            },

                        ]}
                        leftIconContainerStyle={{
                            paddingRight: wp('5')
                        }}
                        onChangeText={(value) => {

                        }}
                    />



                </View>


                <View style={{alignItems: "center"}}>
                    <TouchableOpacity  onPress={() => {this.props.navigation.navigate(Routes.APPLY_FILTERS)}}>
                        <View style={{
                            width: styles.gridWidth,
                            flexDirection: "row",
                            alignItem: "center",
                            justifyContent: "space-between",
                            paddingVertical: hp("2"),
                            marginTop: hp("1"),
                        }}>
                            <Text style={{
                                fontFamily: fonts.RUBIK_MEDIUM,
                                fontSize: Typography.P3,
                                color: colors.textColorBlack1
                            }}>Search History</Text>
                            <Text style={{
                                fontFamily: fonts.RUBIK_MEDIUM,
                                fontSize: Typography.P5,
                                color: colors.textColorBlue1
                            }}>Clear</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row', flexShrink: 1, flexWrap: 'wrap'}}>
                        {searchHistoryArray.map(item => {
                            return (
                                <View
                                    style={{
                                        backgroundColor: 'white',
                                        padding: hp(1),
                                        marginHorizontal: hp(1),
                                        marginBottom: hp("0.5")
                                    }}>
                                    <Text
                                        ellipsizeMode={'tail'}
                                        style={{fontSize: Typography.P6, fontFamily: fonts.RUBIK_REGULAR, color: colors.textColorGrey1}}>
                                        {item}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>

                    <TouchableOpacity  onPress={() => {}}>
                        <View style={{
                            width: styles.gridWidth,
                            flexDirection: "row",
                            alignItem: "center",
                            justifyContent: "space-between",
                            paddingVertical: hp("2"),
                            marginTop: hp("1"),
                        }}>
                            <Text style={{
                                fontFamily: fonts.RUBIK_MEDIUM,
                                fontSize: Typography.P3,
                                color: colors.textColorBlack1
                            }}>Discover More</Text>
                            <Text style={{
                                fontFamily: fonts.RUBIK_MEDIUM,
                                fontSize: Typography.P5,
                                color: colors.textColorBlue1
                            }}>Refresh</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row', flexShrink: 1, flexWrap: 'wrap'}}>
                        {searchHistoryArray.map(item => {
                            return (
                                <View
                                    style={{
                                        backgroundColor: 'white',
                                        padding: hp(1),
                                        marginHorizontal: hp(1),
                                        marginBottom: hp("0.5")
                                    }}>
                                    <Text
                                        ellipsizeMode={'tail'}
                                        style={{fontSize: Typography.P6, fontFamily: fonts.RUBIK_REGULAR, color: colors.textColorGrey1}}>
                                        {item}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                </View>

                <View style={{flexDirection: "row", justifyContent: "space-around", flex: 1, alignItems: "flex-end", marginBottom: Globals.SAFE_AREA_INSET.bottom + hp(2)}}>

                    <TouchableOpacity onPress={() => {

                    }}>
                        <View style={[styles.socialButton,{borderRadius: hp(0.3), width: wp(46), justifyContent: "center", backgroundColor: "white"}]}>

                            <Image source={assets.camera_regular_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />

                            <Text style={[{
                                fontFamily: fonts.RUBIK_REGULAR,
                                fontSize: Typography.P4,
                                marginLeft: wp(2),
                                color: colors.textColorBlack1
                            }]}>{"Image Search"}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {

                    }}>
                        <View style={[styles.socialButton,{borderRadius: hp(0.3),width: wp(46), justifyContent: "center", backgroundColor: "white"}]}>

                            <Image source={assets.microphone_regular_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />

                            <Text style={[{
                                fontFamily: fonts.RUBIK_REGULAR,
                                fontSize: Typography.P4,
                                marginLeft: wp(2),
                                color: colors.textColorBlack1
                            }]}>{"Voice Search"}</Text>
                        </View>
                    </TouchableOpacity>

                </View>




            </View>

        );
    }
}
