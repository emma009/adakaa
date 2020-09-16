import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Divider, Icon, Rating, Text} from 'react-native-elements';
import Routes from "../../navigation/Routes";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View"
import Styles from "./Styles";
import {StackActions} from "@react-navigation/native";
import AppConfig from "../../../branding/App_config";

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

                                <View style={Styles.profileItemCircle}>
                                    <Icon
                                        name="google"
                                        type='font-awesome'
                                        size={hp("3")}
                                        color={colors.buttonGreenColor}
                                    />
                                </View>

                                <View style={{marginLeft: wp("3")}}>
                                    <Text style={Styles.orderNo}>{"Order # 44698"}</Text>
                                    <Text style={Styles.dateTime}>{"Placed on December 15, 2020"}</Text>


                                </View>

                            </View>

                            <View style={{flexDirection: "row", paddingHorizontal: wp ('3'), paddingVertical: hp("2"), backgroundColor: "white"}}>

                                <View style={{flex: 1, alignItems: "center"}}>

                                    <View style={{flexDirection: "row"}}>
                                        <View style={{alignItems: "center", marginRight: wp("2")}}>
                                            <View style={[Styles.orderProgressCircle, {backgroundColor: colors.buttonGreenColor}]} />

                                            <Divider style={[Styles.orderProgressLine, {backgroundColor: colors.buttonGreenColor}]} />
                                        </View>
                                        <Text style={Styles.orderProgressTitle}>{"Orders Placed"}</Text>
                                        <Text style={Styles.orderProgressSubTitle}>{"Dec 10, 2020"}</Text>
                                    </View>

                                    <View style={{flexDirection: "row"}}>
                                        <View style={{alignItems: "center", marginRight: wp("2")}}>
                                            <View style={[Styles.orderProgressCircle, {backgroundColor: colors.buttonGreenColor}]} />

                                            <Divider style={[Styles.orderProgressLine, {backgroundColor:colors.buttonGreenColor}]} />
                                        </View>
                                        <Text style={Styles.orderProgressTitle}>{"Order Confirmed"}</Text>
                                        <Text style={Styles.orderProgressSubTitle}>{"Dec 10, 2020"}</Text>
                                    </View>

                                    <View style={{flexDirection: "row"}}>
                                        <View style={{alignItems: "center", marginRight: wp("2")}}>
                                            <View style={[Styles.orderProgressCircle, {backgroundColor: "#B3BCCA"}]} />

                                            <Divider style={[Styles.orderProgressLine, {backgroundColor: "#B3BCCA"}]} />
                                        </View>
                                        <Text style={Styles.orderProgressTitle}>{"Order Shipped"}</Text>
                                        <Text style={Styles.orderProgressSubTitle}>{"Pending"}</Text>
                                    </View>

                                    <View style={{flexDirection: "row"}}>
                                        <View style={{alignItems: "center", marginRight: wp("2")}}>
                                            <View style={[Styles.orderProgressCircle, {backgroundColor: "#B3BCCA"}]} />

                                            <Divider style={[Styles.orderProgressLine, {backgroundColor: "#B3BCCA"}]} />
                                        </View>
                                        <Text style={Styles.orderProgressTitle}>{"Out of Delivery"}</Text>
                                        <Text style={Styles.orderProgressSubTitle}>{"Pending"}</Text>
                                    </View>

                                    <View style={{flexDirection: "row"}}>
                                        <View style={{alignItems: "center", marginRight: wp("2")}}>
                                            <View style={[Styles.orderProgressCircle, {backgroundColor: "#B3BCCA"}]} />
                                        </View>
                                        <Text style={Styles.orderProgressTitle}>{"Order Delivered"}</Text>
                                        <Text style={Styles.orderProgressSubTitle}>{"Pending"}</Text>
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
