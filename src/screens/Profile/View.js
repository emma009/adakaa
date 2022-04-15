import React, { Component } from 'react';
import {View, Text, TouchableWithoutFeedback, Image, StatusBar} from 'react-native';

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Avatar} from 'react-native-elements';

import Routes from "../../navigation/Routes";
import Styles from "./Styles";
import AppConfig from "../../../branding/App_config";
import fonts from "../../../branding/carter/assets/Fonts";
import Typography from "../../../branding/carter/styles/Typography";
import assets from "../../../branding/carter/assets/Assets";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

export default class ProfileMenu extends  Component {



    render(){
        return(
            <View style={{flex: 1}}>
                <StatusBar backgroundColor={"white"} barStyle="dark-content" />

                <View style={{width: "100%", height: hp("20"), backgroundColor: "white"}}/>

                <View style={{width: "100%", height: hp("80"), backgroundColor: colors.textColorGrey2, alignItems: "center"}}>

                    <View style={{alignItems: "center", marginTop: hp("8"), marginBottom: hp("2")}}>
                        <Text style={{fontFamily: fonts.RUBIK_MEDIUM, fontSize: Typography.P1, color: colors.textColorBlack1}}>{"Jessica Simpson"}</Text>
                        <Text style={{fontFamily: fonts.RUBIK_REGULAR, fontSize: Typography.P5, color: colors.textColorGrey1}}>{"gfx.partner@gmail.com"}</Text>
                    </View>

                    <View style={Styles.paymentMethodMainContainer}>

                        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(Routes.ABOUT_ME)}}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>

                                    <Image source={assets.user_icon} style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />

                                </View>

                                <Text style={{marginTop: hp("2"), fontFamily: fonts.RUBIK_REGULAR, fontSize: Typography.P5, color: colors.textColorGrey1}}>{"About Me"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(Routes.MY_ORDERS)}}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>
                                    <Image source={assets.order_icon} style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />
                                </View>

                                <Text style={{marginTop: hp("2"), fontFamily: fonts.RUBIK_REGULAR, fontSize: Typography.P5, color: colors.textColorGrey1}}>{"My Orders"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => {
                            // this.props.navigation.navigate(Routes.ABOUT_ME)
                        }}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>
                                    <Image source={assets.heart_regular_icon} style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />
                                </View>

                                <Text style={{marginTop: hp("2"), fontFamily: fonts.RUBIK_REGULAR, fontSize: Typography.P5, color: colors.textColorGrey1}}>{"My Favourites"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                    </View>

                    <View style={Styles.paymentMethodMainContainer}>

                        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(Routes.My_Address)}}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>
                                    <Image source={assets.map_marker_icon} style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />
                                </View>

                                <Text style={{marginTop: hp("2"), fontFamily: fonts.RUBIK_REGULAR, fontSize: Typography.P5, color: colors.textColorGrey1}}>{"My Address"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(Routes.My_CREDIT_CARDS)}}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>
                                    <Image source={assets.credit_card_icon} style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />
                                </View>

                                <Text style={{marginTop: hp("2"), fontFamily: fonts.RUBIK_REGULAR, fontSize: Typography.P5, color: colors.textColorGrey1}}>{"Credit Cards"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(Routes.TRANSACTIONS)}}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>
                                    <Image source={assets.transaction_icon} style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />
                                </View>

                                <Text style={{marginTop: hp("2"), fontFamily: fonts.RUBIK_REGULAR, fontSize: Typography.P5, color: colors.textColorGrey1}}>{"Transactions"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                    </View>

                    <View style={Styles.paymentMethodMainContainer}>

                        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(Routes.NOTIFICATIONS)}}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>
                                    <Image source={assets.notification_icon} style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />
                                </View>

                                <Text style={{marginTop: hp("2"), fontFamily: fonts.RUBIK_REGULAR, fontSize: Typography.P5, color: colors.textColorGrey1}}>{"Notifications"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(Routes.CATEGORY_LIST)}}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>
                                    <Image source={assets.categories_icon} style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />
                                </View>

                                <Text style={{marginTop: hp("2"), fontFamily: fonts.RUBIK_REGULAR, fontSize: Typography.P5, color: colors.textColorGrey1}}>{"Categories"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(Routes.ABOUT_ME)}}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>
                                    <Image source={assets.sign_out_icon} style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />
                                </View>

                                <Text style={{marginTop: hp("2"), fontFamily: fonts.RUBIK_REGULAR, fontSize: Typography.P5, color: colors.textColorGrey1}}>{"Sign Out"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                    </View>



                </View>


                <Avatar
                    rounded
                    source={assets.profile_image}
                    size={hp("13")}
                    containerStyle={{position: "absolute", top: hp("13"), alignSelf: "center"}}
                 />

            </View>
        );
    }


}
