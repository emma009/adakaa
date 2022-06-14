import React, {useRef, useState} from 'react';
import { ImageBackground, StatusBar, useColorScheme, View } from "react-native";
import {Text} from 'react-native-elements';
import AppConfig from '../../../../branding/App_config';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppInput from "../../../components/Application/AppInput/View"
import { Styles } from "./Style";
import AppHeader from "../../../components/Application/AppHeader/View"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import AppButton from "../../../components/Application/AppButton/View";
import { useTheme } from "@react-navigation/native";
import { commonLightStyles } from "../../../../branding/carter/styles/light/Style";


const assets = AppConfig.assets.default;
const lightColors = AppConfig.lightColors.default;


export const Variant3ForgotPassword = (props) => {


    //Theme based styling and colors
    const { colors } = useTheme();
    const globalStyles = commonLightStyles(colors);
    const screenStyles = Styles(globalStyles, colors, lightColors);


    //Internal States
    const [email, setEmail] = useState("")


    //References
    let inputRef = useRef();

    return (
        <ImageBackground source={assets.signup_form_header3} style={screenStyles.mainContainer} resizeMode={"cover"}>

            <KeyboardAwareScrollView
                keyboardShouldPersistTaps={'never'}
                getTextInputRefs={() => {
                    return [inputRef];
                }}
                showsVerticalScrollIndicator={false}>
                <View style={screenStyles.container}>
                    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>

                    <AppHeader
                      overrideTheme={"light"}
                      isTranslucent
                        navigation={props.navigation}
                        transparentHeader
                        headerWithBack
                        headerWithBackground
                        title={"Password Recovery"}
                    />

                    <View style={[screenStyles.bottomContainer]}>

                        <Text style={screenStyles.titleText}>{"Forgot Password"}</Text>

                        <Text style={screenStyles.subtitleText}>{"Enter your email and we'll send you instructions on how to reset it."}</Text>

                        <AppInput
                            {...globalStyles.secondaryInputStyle}
                            containerStyle={{marginBottom: hp(1)}}
                            textInputRef={r => (inputRef = r)}
                            leftIcon={assets.envelop_icon}
                            keyboardType={"email-address"}
                            placeholder={"Email Address"}
                            value={email}
                            onChangeText={(email) => {
                                setEmail(email)
                            }}
                        />

                        <AppButton
                            title={'Send Link'}
                            onPress={() => {
                                props.navigation.goBack();
                            }}
                        />

                    </View>
                </View>
            </KeyboardAwareScrollView>
        </ImageBackground>
    )


}
