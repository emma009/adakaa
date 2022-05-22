import React, {useRef} from 'react';
import {View,} from 'react-native';
import {Button, Image, Text} from 'react-native-elements';
import AppConfig from '../../../../branding/App_config';
import Style from "./Style";
import AppHeader from "../../../components/Application/AppHeader/View";
import AppInput from "../../../components/Application/AppInput/View";
import Routes from "../../../navigation/Routes";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import AppButton from "../../../components/Application/AppButton/View";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";


const assets = AppConfig.assets.default;


export const Variant1SignupScreen = (props) => {

    let inputRef = useRef();

    return (

        <KeyboardAwareScrollView
            keyboardShouldPersistTaps={'never'}
            getTextInputRefs={() => {
                return [inputRef];
            }}
            showsVerticalScrollIndicator={false}>

            <View style={Style.container}>


                <Image source={assets.signup_form_header1} style={Style.headerImage}/>

                <AppHeader
                    isTranslucent
                    navigation={props.navigation}
                    transparentHeader
                    headerWithBack
                    title={"Signup"}
                />


                <View style={[Style.bottomContainer]}>
                    <Text style={Style.titleText}>{"Create Account!"}</Text>

                    <Text style={Style.subtitleText}>{"Quickly create account"}</Text>


                    <AppInput
                        textInputRef={r => (this.inputRef = r)}
                        leftIcon={assets.envelop_icon}
                        placeholder={"Email Address"}
                        onChangeText={(value) => {
                        }}
                    />

                    <AppInput
                        textInputRef={r => (inputRef = r)}
                        leftIcon={assets.phone_icon}
                        placeholder={"Phone"}
                        onChangeText={(value) => {
                        }}
                    />

                    <AppInput
                        containerStyle={{marginBottom: hp(1)}}
                        textInputRef={r => (inputRef = r)}
                        isPasswordField
                        leftIcon={assets.lock_icon}
                        placeholder={"Password"}
                        onChangeText={(value) => {
                        }}
                    />

                    <AppButton
                        title={"Signup"}
                        onPress={() => {
                            props.navigation.navigate(Routes.LOGIN_FORM_SCREEN1);
                        }}
                    />

                    <View style={Style.accountBottomContainer}>
                        <Text style={Style.accountText}>{"Already have an account?"}</Text>
                        <Button

                            title={"Login"}
                            type={"clear"}
                            titleStyle={Style.loginButton}
                            onPress={() =>
                                props.navigation.goBack()
                            }
                        />
                    </View>
                </View>


            </View>

        </KeyboardAwareScrollView>
    )

}
