import React, {Component} from 'react';
import {View} from 'react-native';
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

export default class AddAddress extends  Component {




    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Add Address"}
                childView={() => {

                    return (

                        <View style={{flex: 1}}>

                            <AppInput
                                leftIcon={'google'}
                                placeholder={"Name"}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                leftIcon={'google'}
                                placeholder={"Email Address"}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                leftIcon={'google'}
                                placeholder={"Phone"}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                leftIcon={'google'}
                                placeholder={"Address"}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                leftIcon={'google'}
                                placeholder={"Zip Code"}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                leftIcon={'google'}
                                placeholder={"City"}
                                onChangeText={(value) => {}}
                            />

                            <View style={{flex: 1, justifyContent: "flex-end", marginBottom: hp("1")}}>

                                <Button
                                    buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                    title={'Add Address'}
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
