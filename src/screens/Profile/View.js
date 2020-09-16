import React, { Component } from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Avatar, Button, Icon} from 'react-native-elements';

import Routes from "../../navigation/Routes";
import Styles from "./Styles";
import AppConfig from "../../../branding/App_config";
import fonts from "../../../branding/carter/assets/Fonts";
import Typography from "../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

export default class ProfileMenu extends  Component {



    render(){
        return(
            <View style={{flex: 1}}>


                <View style={{width: "100%", height: hp("20"), backgroundColor: "white"}}/>

                <View style={{width: "100%", height: hp("80"), backgroundColor: "#f3f5f8", alignItems: "center"}}>

                    <View style={{alignItems: "center", marginTop: hp("8"), marginBottom: hp("2")}}>
                        <Text style={{fontFamily: fonts.RUBIK_MEDIUM, fontSize: Typography.P1}}>{"Jessica Simpson"}</Text>
                        <Text style={{fontFamily: fonts.RUBIK_REGULAR, fontSize: Typography.P5}}>{"gfx.partner@gmail.com"}</Text>
                    </View>

                    <View style={Styles.paymentMethodMainContainer}>

                        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(Routes.ABOUT_ME)}}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>
                                    <Icon
                                        name="google"
                                        type='font-awesome'
                                        size={hp("2")}
                                        color={colors.buttonGreenColor}
                                    />
                                </View>

                                <Text style={{marginTop: hp("1")}}>{"About Me"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(Routes.MY_ORDERS)}}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>
                                    <Icon
                                        name="google"
                                        type='font-awesome'
                                        size={hp("2")}
                                        color={colors.buttonGreenColor}
                                    />
                                </View>

                                <Text style={{marginTop: hp("1")}}>{"My Orders"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(Routes.ABOUT_ME)}}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>
                                    <Icon
                                        name="google"
                                        type='font-awesome'
                                        size={hp("2")}
                                        color={colors.buttonGreenColor}
                                    />
                                </View>

                                <Text style={{marginTop: hp("1")}}>{"My Favourites"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                    </View>

                    <View style={Styles.paymentMethodMainContainer}>

                        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(Routes.My_Address)}}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>
                                    <Icon
                                        name="google"
                                        type='font-awesome'
                                        size={hp("2")}
                                        color={colors.buttonGreenColor}
                                    />
                                </View>

                                <Text style={{marginTop: hp("1")}}>{"My Address"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(Routes.My_CREDIT_CARDS)}}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>
                                    <Icon
                                        name="google"
                                        type='font-awesome'
                                        size={hp("2")}
                                        color={colors.buttonGreenColor}
                                    />
                                </View>

                                <Text style={{marginTop: hp("1")}}>{"Credit Cards"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(Routes.TRANSACTIONS)}}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>
                                    <Icon
                                        name="google"
                                        type='font-awesome'
                                        size={hp("2")}
                                        color={colors.buttonGreenColor}
                                    />
                                </View>

                                <Text style={{marginTop: hp("1")}}>{"Transactions"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                    </View>

                    <View style={Styles.paymentMethodMainContainer}>

                        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(Routes.NOTIFICATIONS)}}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>
                                    <Icon
                                        name="google"
                                        type='font-awesome'
                                        size={hp("2")}
                                        color={colors.buttonGreenColor}
                                    />
                                </View>

                                <Text style={{marginTop: hp("1")}}>{"Notifications"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(Routes.CATEGORY_LIST)}}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>
                                    <Icon
                                        name="google"
                                        type='font-awesome'
                                        size={hp("2")}
                                        color={colors.buttonGreenColor}
                                    />
                                </View>

                                <Text style={{marginTop: hp("1")}}>{"Categories"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(Routes.ABOUT_ME)}}>

                            <View style={Styles.paymentMethodInnerContainer}>
                                <View style={Styles.profileItemCircle}>
                                    <Icon
                                        name="google"
                                        type='font-awesome'
                                        size={hp("2")}
                                        color={colors.buttonGreenColor}
                                    />
                                </View>

                                <Text style={{marginTop: hp("1")}}>{"Sign Out"}</Text>
                            </View>

                        </TouchableWithoutFeedback>

                    </View>



                </View>


                <Avatar
                    rounded
                    source={{
                        uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }}
                    size={hp("13")}
                    containerStyle={{position: "absolute", top: hp("13"), alignSelf: "center"}}
                />

            </View>
        );
    }


}

// <View style={{alignItems: "center", paddingTop: hp("10%")}}>
//     <Avatar
//         rounded
//         size={"large"}
//     />
// </View>
// <View style={{width: wp("100%"), height: "100%", backgroundColor: "grey", alignItems: "center"}}>
//     <View style={{width: wp("85%"), height: "100%", paddingTop: hp("5%")}}>
//         <ProfileMenuItem
//             source={require("./Assets/Images/icon.png")}
//             onPress={() => { this.props.navigation.navigate(Routes.ABOUT_ME) }}
//         />
//     </View>
// </View>
