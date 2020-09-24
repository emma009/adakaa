import React, {Component} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {Button, Rating, Text} from 'react-native-elements';
import Routes from "../../navigation/Routes";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View"
import Styles from "./Styles";
import {StackActions} from "@react-navigation/native";
import AppConfig from "../../../branding/App_config";
import assets from "../../../branding/carter/assets/Assets";
import TextInput from "../../components/Global/TextInput/View";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

export default class AddCreditCard extends  Component {




    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Add Credit Card"}
                childView={() => {

                    return (

                        <View style={{flex: 1}}>

                            <Image source={require("./assets/credit_card.png")} style={{width: "100%", height: hp("30")}} resizeMode={"contain"} />


                            <AppInput
                                leftIcon={assets.account_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"CardHolder Name"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                leftIcon={assets.credit_card_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Card Number"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>

                                <TextInput
                                    placeholder={"Expiry"}
                                    placeholderTextColor={colors.textColorGrey1}
                                    leftIcon={
                                        <Image source={assets.calendar_icon}
                                               resizeMode={"contain"}
                                               style={{width: hp(2), height: hp (2), tintColor: colors.iconColorGrey1}} />
                                    }
                                    containerStyle={[
                                        {
                                            backgroundColor: "white",
                                            width: wp(44),
                                            marginVertical: hp("0.5"),
                                        },

                                    ]}
                                    leftIconContainerStyle={{
                                        paddingRight: wp('3')
                                    }}
                                    onChangeText={(value) => {

                                    }}
                                />

                                <TextInput
                                    placeholder={"CVV"}
                                    placeholderTextColor={colors.textColorGrey1}
                                    leftIcon={
                                        <Image source={assets.lock_icon}
                                               resizeMode={"contain"}
                                               style={{width: hp(2), height: hp (2), tintColor: colors.iconColorGrey1}} />
                                    }
                                    containerStyle={[
                                        {
                                            backgroundColor: "white",
                                            width: wp(44),
                                            marginVertical: hp("0.5"),
                                        },

                                    ]}
                                    leftIconContainerStyle={{
                                        paddingRight: wp('3')
                                    }}
                                    onChangeText={(value) => {

                                    }}
                                />

                            </View>

                            <View style={{flex: 1, justifyContent: "flex-end", marginBottom: hp("1")}}>

                                <Button
                                    buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                    title={'Add Credit Card'}
                                    titleStyle={styles.buttonFontStyle}
                                    onPress={() => {

                                    }}/>

                            </View>


                        </View>


                    );



                }}

            />


        );
    }
}
