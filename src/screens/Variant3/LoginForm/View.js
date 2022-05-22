import React, {useRef} from 'react';
import {ImageBackground, StatusBar, View,} from 'react-native';
import {Button, Text} from 'react-native-elements';
import AppConfig from '../../../../branding/App_config';
import AppInput from "../../../components/Application/AppInput/View"
import Routes from '../../../navigation/Routes';
import Style from "./Style";
import {StackActions} from "@react-navigation/native";
import AppHeader from "../../../components/Application/AppHeader/View"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import {CustomSwitch} from "../../../components/Global/CustomSwitch/View";
import AppButton from "../../../components/Application/AppButton/View";


const assets = AppConfig.assets.default;
const styles = AppConfig.styling.default;

export const Variant3LoginFormScreen = (props) => {

    let inputRef = useRef();

    return (
        <ImageBackground source={assets.login_form_header3} style={{flex: 1}} resizeMode={"cover"}>

            <KeyboardAwareScrollView
                keyboardShouldPersistTaps={'never'}
                getTextInputRefs={() => {
                    return [inputRef];
                }}
                showsVerticalScrollIndicator={false}>
                <View style={Style.container}>
                    <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>

                    <AppHeader
                        isTranslucent
                        navigation={props.navigation}
                        transparentHeader
                        whiteHeader
                        headerWithBack
                        title={"Login"}
                    />


                    <View style={[Style.bottomContainer]}>
                        <Text style={Style.titleText}>{"Welcome Back!"}</Text>

                        <Text style={Style.subtitleText}>{"Sign in to your account"}</Text>

                        <AppInput
                            {...styles.secondaryInputStyle}
                            textInputRef={r => (inputRef = r)}
                            leftIcon={assets.envelop_icon}
                            placeholder={"Email Address"}
                            onChangeText={(value) => {
                            }}
                        />

                        <AppInput
                            {...styles.secondaryInputStyle}
                            textInputRef={r => (inputRef = r)}
                            isPasswordField
                            leftIcon={assets.lock_icon}
                            placeholder={"Password"}
                            onChangeText={(value) => {
                            }}
                        />

                        <View style={Style.forgotPasswordContainer}>

                            <View style={{justifyContent: "center"}}>
                                <CustomSwitch
                                    initialValue={false}
                                    onValueChange={(value) => {
                                    }}
                                />
                            </View>

                            <Text
                                style={Style.accountText}>{"Remember me"}</Text>

                            <View style={{flex: 1, alignItems: "flex-end"}}>
                                <Button
                                    title={"Forgot Password"}
                                    type={"clear"}
                                    containerStyle={{}}
                                    titleStyle={Style.forgotPasswordButton}
                                    onPress={() =>
                                        props.navigation.navigate(Routes.FORGOT_PASSWORD_FORM_SCREEN3)
                                    }
                                />
                            </View>

                        </View>


                        <AppButton
                            title={"Login"}
                            onPress={() => {
                                props.navigation.dispatch(
                                    StackActions.replace(Routes.HOME_VARIANT3)
                                );
                            }}
                        />

                        <View style={Style.accountBottomContainer}>
                            <Text style={Style.accountText}>{"Don't have an account?"}</Text>
                            <Button
                                title={"Signup"}
                                type={"clear"}
                                titleStyle={Style.signupButton}
                                onPress={() =>
                                    props.navigation.navigate(Routes.SIGNUP_FORM_SCREEN3)
                                }
                            />
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </ImageBackground>
    )


}

