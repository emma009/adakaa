import React, {Component} from 'react';
import {Switch, View} from 'react-native';
import {Button, Rating, Text} from 'react-native-elements';
import Routes from "../../navigation/Routes";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View"
import Styles from "./Styles";
import {StackActions} from "@react-navigation/native";
import AppConfig from "../../../branding/App_config";
import assets from "../../../branding/carter/assets/Assets";
import fonts from "../../../branding/carter/assets/Fonts";
import Typography from "../../../branding/carter/styles/Typography";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

export default class SelfPickup extends  Component {
    inputRef = React.createRef();


    constructor(props) {
        super(props);


        this.state = {
            isDefault: true
        }
    }


    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Self Pickup"}
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



                            <AppInput
                                textInputRef={r => (this.inputRef = r)}
                                leftIcon={assets.globe_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Outlet"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                textInputRef={r => (this.inputRef = r)}
                                leftIcon={assets.calendar_icon2}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Date"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                textInputRef={r => (this.inputRef = r)}
                                leftIcon={assets.clock_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Time Slot"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />


                                </View>



                            </KeyboardAwareScrollView>




                            <View style={{flex: 1, justifyContent: "flex-end", marginBottom: hp("1")}}>

                                <Button
                                    buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                    title={'Next'}
                                    titleStyle={styles.buttonStyle}
                                    onPress={() => {
                                        this.props.navigation.navigate(Routes.CART_SUMMARY)
                                    }}/>

                            </View>


                        </View>


                    );



                }}

            />


        );
    }
}
