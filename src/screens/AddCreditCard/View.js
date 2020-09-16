import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {Button, Rating, Text} from 'react-native-elements';
import Routes from "../../navigation/Routes";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View"
import Styles from "./Styles";
import {StackActions} from "@react-navigation/native";
import AppConfig from "../../../branding/App_config";

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
                                leftIcon={'google'}
                                placeholder={"Cardholder Name"}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                leftIcon={'google'}
                                placeholder={"Card Name"}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                leftIcon={'google'}
                                placeholder={"Expiry"}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                leftIcon={'google'}
                                placeholder={"CVV"}
                                onChangeText={(value) => {}}
                            />

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
