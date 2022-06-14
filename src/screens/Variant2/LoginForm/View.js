import React, {useRef, useState} from 'react';
import { StatusBar, useColorScheme, View } from "react-native";
import {Button, Image, Text} from 'react-native-elements';
import AppConfig from '../../../../branding/App_config';
import AppInput from "../../../components/Application/AppInput/View"
import Routes from '../../../navigation/Routes';
import { Styles } from "./Style";
import { StackActions, useTheme } from "@react-navigation/native";
import AppHeader from "../../../components/Application/AppHeader/View"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import {CustomSwitch} from "../../../components/Global/CustomSwitch/View";
import AppButton from "../../../components/Application/AppButton/View";
import { commonDarkStyles } from "../../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../../branding/carter/styles/light/Style";


const assets = AppConfig.assets.default;

export const Variant2LoginFormScreen = (props) => {


    //Theme based styling and colors
    const scheme = useColorScheme();
    const { colors } = useTheme();
    const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);
    const screenStyles = Styles(globalStyles, colors);


    //Internal States
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    //References
    let inputRef = useRef();

    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps={'never'}
            style={screenStyles.scrollViewContainer}
            contentContainerStyle={screenStyles.scrollViewContentContainer}
            getTextInputRefs={() => {
                return [inputRef];
            }}
            showsVerticalScrollIndicator={false}>
            <View style={screenStyles.container}>
                <StatusBar translucent backgroundColor={"transparent"} barStyle="dark-content"/>

                <AppHeader
                    navigation={props.navigation}
                    isTranslucent
                    headerWithBack
                    containerStyle={screenStyles.headerContainer}
                    containerShadow={{}}
                    headerWithBackground
                    title={"Login"}
                />

                <View style={screenStyles.imageContainer}>
                    <Image source={assets.intro1_img2} style={screenStyles.headerImage} />
                </View>

                <View style={[screenStyles.bottomContainer]}>
                    <Text style={screenStyles.titleText}>{"Welcome Back!"}</Text>

                    <Text style={screenStyles.subtitleText}>{"Sign in to your account"}</Text>

                    <AppInput
                        textInputRef={r => (inputRef = r)}
                        leftIcon={assets.envelop_icon}
                        placeholder={"Email Address"}
                        value={email}
                        keyboardType={"email-address"}
                        onChangeText={(email) => {
                            setEmail(email)
                        }}
                    />

                    <AppInput
                        textInputRef={r => (inputRef = r)}
                        isPasswordField
                        leftIcon={assets.lock_icon}
                        placeholder={"Password"}
                        value={password}
                        onChangeText={(password) => {
                            setPassword(password)
                        }}
                    />

                    <View style={screenStyles.forgotPasswordContainer}>

                        <View style={screenStyles.switchContainer}>
                            <CustomSwitch
                                initialValue={false}
                                onValueChange={(value) => {
                                }}
                            />
                        </View>

                        <Text
                            style={screenStyles.accountText}>{"Remember me"}</Text>

                        <View style={screenStyles.bottomButtonContainer}>
                            <Button
                                title={"Forgot Password"}
                                type={"clear"}
                                containerStyle={{}}
                                titleStyle={screenStyles.forgotPasswordButton}
                                onPress={() =>
                                    props.navigation.navigate(Routes.FORGOT_PASSWORD_FORM_SCREEN2)
                                }
                            />
                        </View>

                    </View>


                    <AppButton
                        title={"Login"}
                        onPress={() => {
                            props.navigation.dispatch(
                                StackActions.replace(Routes.HOME_VARIANT2)
                            );
                        }}
                    />

                    <View style={screenStyles.accountBottomContainer}>
                        <Text style={screenStyles.accountText}>{"Don't have an account?"}</Text>
                        <Button
                            title={"Signup"}
                            type={"clear"}
                            titleStyle={screenStyles.signupButton}
                            onPress={() =>
                                props.navigation.navigate(Routes.SIGNUP_FORM_SCREEN2)
                            }
                        />
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )

}
