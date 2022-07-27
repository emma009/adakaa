import React, { useEffect, useRef, useState } from "react";
import { Keyboard, ScrollView, StatusBar, useColorScheme, View } from "react-native";
import {Image, Text} from 'react-native-elements';
import AppConfig from '../../../branding/App_config';
import { Styles } from "./Style";
import AppHeader from "../../components/Application/AppHeader/View"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import AppButton from "../../components/Application/AppButton/View";
import { StackActions, useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../branding/carter/styles/light/Style";
import OtpInputs from 'react-native-otp-inputs';
import Routes from "../../navigation/Routes";


const assets = AppConfig.assets.default;

export const VerifyPhoneOTP = (props) => {


  const [keyboardHeight, setKeyboardHeight] = useState(false);


  //Theme based styling and colors
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, colors);



  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event) => {
        setKeyboardHeight(event.endCoordinates.height)
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0)
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

    return (
            <View style={screenStyles.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>

                <AppHeader
                    navigation={props.navigation}
                    headerWithBack
                    headerWithBackground
                    title={"Verify Number"}
                />

                <View style={screenStyles.mainContainer}>
                    <Text style={screenStyles.titleText}>{"Verify your Number"}</Text>

                    <Text style={screenStyles.subtitleText}>{"Enter your OTP code below."}</Text>

                  <View style={screenStyles.otpInputMainContainer}>
                    <OtpInputs
                      autoFocus
                      clearTextOnFocus
                      handleChange={(code) => {
                        if (code.length === 6) {
                          props.navigation.dispatch(
                            StackActions.pop(2)
                          );
                        }
                      }}
                      numberOfInputs={6}
                      inputStyles={screenStyles.otpInput}
                    />
                  </View>


                  <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: "flex-end", bottom: keyboardHeight}}>
                  <View style={screenStyles.didntReceivedContainer}>
                    <Text style={screenStyles.didntReceivedText}>{"Didn\'nt receive the code?"}</Text>
                    <Text style={screenStyles.resendText}>{"Resend a new Code."}</Text>
                  </View>
                  </ScrollView>

                </View>
            </View>

    )

}
