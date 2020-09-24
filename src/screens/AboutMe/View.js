import React, {Component} from 'react';
import {FlatList, ScrollView, View, ViewComponent} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView"
import {Button, Divider, Text} from "react-native-elements";
import AppConfig from "../../../branding/App_config";
import Routes from "../../navigation/Routes";
import ShippingAddress from "../../components/Application/ShippingProgress/View"
import Styles from "./Styles";
import AppInput from "../../components/Application/AppInput/View";
import assets from "../../../branding/carter/assets/Assets";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;


export default class CheckoutDelivery extends Component {

    inputRef = React.createRef();

    constructor(props) {
        super(props);
    }

    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"About Me"}
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

                            <Text style={Styles.typeHeader}>{"Personal Details"}</Text>

                            <AppInput
                                textInputRef={r => (this.inputRef = r)}
                                leftIcon={assets.account_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Name"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                textInputRef={r => (this.inputRef = r)}
                                leftIcon={assets.envelop_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Email Address"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                textInputRef={r => (this.inputRef = r)}
                                leftIcon={assets.phone_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Phone"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <Text style={Styles.typeHeader}>{"Change Password"}</Text>

                            <AppInput
                                textInputRef={r => (this.inputRef = r)}
                                leftIcon={assets.lock_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Password"}
                                placeholderTextColor={colors.textColorGrey1}
                                isPasswordField
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                textInputRef={r => (this.inputRef = r)}
                                leftIcon={assets.lock_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Confirm Password"}
                                placeholderTextColor={colors.textColorGrey1}
                                isPasswordField
                                onChangeText={(value) => {}}
                            />



                        </View>

                        </KeyboardAwareScrollView>
                            <View style={{flex: 1, justifyContent: "flex-end", marginBottom: hp("1")}}>

                                <Button
                                    buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                    title={'Save Settings'}
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
