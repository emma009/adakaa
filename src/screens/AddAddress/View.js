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
import assets from "../../../branding/carter/assets/Assets";

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
                                leftIcon={assets.account_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Name"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                leftIcon={assets.envelop_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Email Address"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                leftIcon={assets.phone_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Phone"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                leftIcon={assets.map_marker_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Address"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                leftIcon={assets.mailbox_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Zip code"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                leftIcon={assets.map_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"City"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                leftIcon={assets.globe_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Country"}
                                placeholderTextColor={colors.textColorGrey1}
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
