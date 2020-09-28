import React, {Component} from 'react';
import {Image, ScrollView, Switch, View} from 'react-native';
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
import fonts from "../../../branding/carter/assets/Fonts";
import Typography from "../../../branding/carter/styles/Typography";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

export default class AddCreditCard extends  Component {


    inputRef = React.createRef();

    constructor() {
        super();

        this.state = {
            isDefault: true
        }

    }


    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Add Credit Card"}
                childView={() => {

                    return (

                        <View style={{flex: 1}}>

                            <KeyboardAwareScrollView
                                keyboardShouldPersistTaps={'never'}
                                // style={{flex: 1}}
                                getTextInputRefs={() => {
                                    return [this.inputRef];
                                }}
                                showsVerticalScrollIndicator={false}>

                                <View style={{flex: 1}}>

                            <Image source={require("./assets/credit_card.png")} style={{width: "100%", height: hp("30")}} resizeMode={"contain"} />


                            <AppInput
                                textInputRef={r => (this.inputRef = r)}
                                leftIcon={assets.account_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"CardHolder Name"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                textInputRef={r => (this.inputRef = r)}
                                leftIcon={assets.credit_card_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Card Number"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>

                                <TextInput
                                    textInputRef={r => (this.inputRef = r)}
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
                                    textInputRef={r => (this.inputRef = r)}
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

                            <View style={{flexDirection: "row"}}>
                                <Switch
                                    trackColor={{ false: colors.iconColorGrey1, true: colors.primaryGreenColor }}
                                    style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                                    thumbColor={this.state.isDefault ? colors.primaryGreenColor : colors.iconColorGrey1}
                                    onValueChange={(value) => {
                                        this.setState({
                                            isDefault: value
                                        })
                                    }}
                                    value={this.state.isDefault}
                                />

                                <Text style={{alignSelf: "center",fontFamily: fonts.RUBIK_REGULAR,
                                    fontSize: Typography.P4,
                                    color: colors.textColorGrey1}}>{"Make Default"}</Text>
                            </View>

                                </View>



                            </KeyboardAwareScrollView>



                            <View style={{flex: 1, justifyContent: "flex-end", marginBottom: hp("1")}}>

                                <Button
                                    buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                    title={'Add Credit Card'}
                                    titleStyle={styles.buttonStyle}
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
