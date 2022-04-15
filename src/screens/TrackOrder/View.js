import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {Button, Divider, Icon, Rating, Text} from 'react-native-elements';
import Routes from "../../navigation/Routes";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View"
import Styles from "./Styles";
import {StackActions} from "@react-navigation/native";
import AppConfig from "../../../branding/App_config";
import assets from "../../../branding/carter/assets/Assets";
import Typography from "../../../branding/carter/styles/Typography";
import fonts from "../../../branding/carter/assets/Fonts";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

export default class TrackOrder extends  Component {




    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Track Order"}
                childView={() => {

                    return (

                        <View style={{flex: 1}}>
                            <View style={Styles.foodItemContainer}>

                                <View style={[Styles.orderProgressCircle, {backgroundColor: colors.secondaryGreenColor}]}>

                                    <Image source={assets.order_icon} style={{width: hp(2.5), height: hp(2.5), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />

                                </View>

                                <View style={{marginLeft: wp("3")}}>
                                    <Text style={Styles.orderNo}>{"Order # 44698"}</Text>
                                    <Text style={Styles.dateTime}>{"Placed on December 15, 2020"}</Text>

                                    <View style={{flexDirection: "row", alignItems: "center"}}>
                                        <Text style={{
                                            fontSize: Typography.P6,
                                            fontFamily: fonts.RUBIK_LIGHT,
                                            color: colors.textColorGrey1
                                        }}>{"Items: "}</Text>
                                        <Text style={{
                                            fontSize: Typography.P4,
                                            fontFamily: fonts.RUBIK_MEDIUM,
                                            color: colors.textColorBlack1,
                                            marginRight: wp(2)
                                        }}>{"10"}</Text>
                                        <Text style={{
                                            fontSize: Typography.P6,
                                            fontFamily: fonts.RUBIK_LIGHT,
                                            color: colors.textColorGrey1
                                        }}>{"Total: "}</Text>
                                        <Text style={{
                                            fontSize: Typography.P4,
                                            fontFamily: fonts.RUBIK_MEDIUM,
                                            color: colors.textColorBlack1
                                        }}>{"$ 16.99"}</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={{flexDirection: "row", paddingHorizontal: wp ('3'), paddingVertical: hp("2"), marginTop: hp(1), backgroundColor: "white"}}>

                                <View style={{flex: 1, alignItems: "center"}}>

                                    <View style={{width: "100%", flexDirection: "row"}}>
                                        <View style={{alignItems: "center", marginRight: wp("3")}}>
                                            <View style={[Styles.orderProgressCircle, {backgroundColor: colors.secondaryGreenColor}]} >
                                                <Image source={assets.order_placed_icon} style={{width: hp(2.5), height: hp(2.5), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />
                                            </View>

                                            <Divider style={[Styles.orderProgressLine, {backgroundColor: colors.primaryGreenColor}]} />
                                        </View>
                                        <View style={{}}>
                                            <Text style={Styles.orderProgressTitle}>{"Orders Placed"}</Text>
                                            <Text style={Styles.orderProgressSubTitle}>{"Dec 10, 2020"}</Text>
                                        </View>

                                    </View>

                                    <View style={{width: "100%", flexDirection: "row"}}>
                                        <View style={{alignItems: "center", marginRight: wp("3")}}>
                                            <View style={[Styles.orderProgressCircle, {backgroundColor: colors.secondaryGreenColor}]} >
                                                <Image source={assets.order_confirmed_icon} style={{width: hp(2.5), height: hp(2.5), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />
                                            </View>

                                            <Divider style={[Styles.orderProgressLine, {backgroundColor:colors.primaryGreenColor}]} />
                                        </View>
                                        <View>
                                            <Text style={Styles.orderProgressTitle}>{"Order Confirmed"}</Text>
                                            <Text style={Styles.orderProgressSubTitle}>{"Dec 10, 2020"}</Text>
                                        </View>

                                    </View>

                                    <View style={{width: "100%", flexDirection: "row"}}>
                                        <View style={{alignItems: "center", marginRight: wp("3")}}>
                                            <View style={[Styles.orderProgressCircle, {backgroundColor: colors.secondaryGreenColor}]} >
                                                <Image source={assets.order_shipped_icon} style={{width: hp(2.5), height: hp(2.5), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />
                                            </View>

                                            <Divider style={[Styles.orderProgressLine, {backgroundColor: colors.borderColorLight1}]} />
                                        </View>
                                        <View>
                                            <Text style={Styles.orderProgressTitle}>{"Order Shipped"}</Text>
                                            <Text style={Styles.orderProgressSubTitle}>{"Dec 10, 2020"}</Text>
                                        </View>

                                    </View>

                                    <View style={{width: "100%", flexDirection: "row"}}>
                                        <View style={{alignItems: "center", marginRight: wp("3")}}>
                                            <View style={[Styles.orderProgressCircle, {backgroundColor: colors.textColorGrey2}]} >
                                                <Image source={assets.out_for_delivery_icon} style={{width: hp(2.5), height: hp(2.5), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />
                                            </View>

                                            <Divider style={[Styles.orderProgressLine, {backgroundColor: colors.borderColorLight1}]} />
                                        </View>
                                        <View>
                                            <Text style={Styles.orderProgressTitle}>{"Out of Delivery"}</Text>
                                            <Text style={Styles.orderProgressSubTitle}>{"Pending"}</Text>
                                        </View>

                                    </View>

                                    <View style={{width: "100%", flexDirection: "row"}}>
                                        <View style={{alignItems: "center", marginRight: wp("3")}}>
                                            <View style={[Styles.orderProgressCircle, {backgroundColor: colors.textColorGrey2}]} >
                                                <Image source={assets.order_delivered_icon} style={{width: hp(2.5), height: hp(2.5), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={Styles.orderProgressTitle}>{"Order Delivered"}</Text>
                                            <Text style={Styles.orderProgressSubTitle}>{"Pending"}</Text>
                                        </View>

                                    </View>

                                </View>

                            </View>

                        </View>




                    );



                }}

            />


        );
    }
}
