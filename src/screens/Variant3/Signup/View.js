import React, {useRef} from 'react';
import {ImageBackground, View,} from 'react-native';
import {Button, Text} from 'react-native-elements';
import AppConfig from '../../../../branding/App_config';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Style from "./Style";
import AppHeader from "../../../components/Application/AppHeader/View";
import AppInput from "../../../components/Application/AppInput/View";
import Routes from "../../../navigation/Routes";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import AppButton from "../../../components/Application/AppButton/View";


const assets = AppConfig.assets.default;
const styles = AppConfig.styling.default;

export const Variant3SignupScreen = (props) => {

    let inputRef = useRef();

    return (


        <ImageBackground source={assets.signup_form_header3} style={{flex: 1}} resizeMode={"cover"}>

            <KeyboardAwareScrollView
                keyboardShouldPersistTaps={'never'}
                getTextInputRefs={() => {
                    return [inputRef];
                }}
                showsVerticalScrollIndicator={false}>

                <View style={Style.container}>

                    <AppHeader
                        isTranslucent
                        navigation={props.navigation}
                        transparentHeader
                        whiteHeader
                        headerWithBack
                        title={"Signup"}
                    />


                    <View style={[Style.bottomContainer]}>
                        <Text style={Style.titleText}>{"Create Account!"}</Text>

                        <Text style={Style.subtitleText}>{"Quickly create account"}</Text>


                        <AppInput
                            {...styles.secondaryInputStyle}
                            textInputRef={r => (this.inputRef = r)}
                            leftIcon={assets.envelop_icon}
                            placeholder={"Email Address"}
                            onChangeText={(value) => {
                            }}
                        />

                        <AppInput
                            {...styles.secondaryInputStyle}
                            textInputRef={r => (inputRef = r)}
                            leftIcon={assets.phone_icon}
                            placeholder={"Phone"}
                            onChangeText={(value) => {
                            }}
                        />

                        <AppInput
                            {...styles.secondaryInputStyle}
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
                                props.navigation.navigate(Routes.LOGIN_FORM_SCREEN3);
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

        </ImageBackground>
    )

}

