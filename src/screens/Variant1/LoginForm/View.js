import React, {useRef, useState} from 'react';
import {useColorScheme, View, Alert, ActivityIndicator} from "react-native";
import {Button, Image, Text} from 'react-native-elements';
import AppConfig from '../../../../branding/App_config';
import AppInput from "../../../components/Application/AppInput/View"
import Routes from '../../../navigation/Routes';
import {Styles} from "./Style";
import {CommonActions, useTheme} from "@react-navigation/native";
import AppHeader from "../../../components/Application/AppHeader/View"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import {CustomSwitch} from "../../../components/Global/CustomSwitch/View";
import AppButton from "../../../components/Application/AppButton/View";
import {commonDarkStyles} from "../../../../branding/carter/styles/dark/Style";
import {commonLightStyles} from "../../../../branding/carter/styles/light/Style";
import IconNames from "../../../../branding/carter/assets/IconNames";
import {FocusAwareStatusBar} from "../../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar";
import Spinner from 'react-native-loading-spinner-overlay';

import {
    ToastAndroid,
    Platform,
    AlertIOS,
  } from 'react-native';



const assets = AppConfig.assets.default;



export const Variant1LoginFormScreen = (props) => {

    
    

    //Theme based styling and colors
    const scheme = useColorScheme();
    const {colors} = useTheme();
    const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);
    const screenStyles = Styles(globalStyles, colors);


    //Internal States
   // const [email, setEmail] = useState("")
   // const [password, setPassword] = useState("")

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginPending, setLoginPending] = useState(false);
    const [loading, setLoading] = useState(false);

    



const doUserLogIn = async function () {

    // Note that these values come from state variables that we've declared before
    const usernameValue = email;
    const passwordValue = password;
    console.log('React world',usernameValue, 'password', passwordValue);
    


    
        if(usernameValue == undefined || usernameValue == ''){


            if (Platform.OS === 'android' ) {

                ToastAndroid.show('Email field is required', ToastAndroid.SHORT);

            }else{
                   //ToastAndroid.show(, ToastAndroid.SHORT);
                 Alert.alert('Please enter email to continue');

            }

         

        }else if(passwordValue ==  undefined || passwordValue == ''){

            if (Platform.OS === 'android' ) {

                ToastAndroid.show('Password field is required', ToastAndroid.SHORT);

            }else{
                   //ToastAndroid.show(, ToastAndroid.SHORT);
                 Alert.alert('Please enter password to continue');

            }
        }else{


            setLoading(true);

           


            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    email: usernameValue,
                    password: passwordValue
                 })
            };
            const response = await fetch('http://127.0.0.1:8000/api/login2', requestOptions)
            
            .catch(error => {
            console.error('5555555',error);
            });

            const data = await response.json();
            console.log('neww', data);
            
            if(data.code == '560'){

                Alert.alert(data.message);
                setLoading(false);


            }else{

                Alert.alert(
                    'Login Successful',
                    'Welcome to Adakaa',
                );

                //AsyncStorage.setItem('userSession', JSON.stringify(data));



                props.navigation.navigate(Routes.HOME_VARIANT1)
                setLoading(false);

            }




            





        }
      

  
  };

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
                <FocusAwareStatusBar translucent backgroundColor="transparent" barStyle="light-content"/>

                <View style={screenStyles.headerContainer}>
                    <Image source={assets.login_form_header1} style={screenStyles.headerImage}/>
                </View>

             

                <AppHeader
                    isTranslucent
                    navigation={props.navigation}
                    transparentHeader
                    headerWithBack
                    title={"Login"}
                />

                <View style={[screenStyles.bottomContainer]}>
                    <Text style={screenStyles.titleText}>{"Welcome Back!"}</Text>

                    <Text style={screenStyles.subtitleText}>{"Sign inx to your account"}</Text>

                    <AppInput
                        {...globalStyles.secondaryInputStyle}
                        textInputRef={r => (inputRef = r)}
                        leftIcon={IconNames.Envelope}
                        placeholder={"Email Address"}
                        value={email}
                        keyboardType={"email-address"}
                        onChangeText={(email) => {
                            setEmail(email)
                        }}
                    />

                    <AppInput
                        {...globalStyles.secondaryInputStyle}
                        textInputRef={r => (inputRef = r)}
                        isPasswordField
                        leftIcon={IconNames.LockKeyhole}
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

                        <Button
                            title={"Forgot Password"}
                            type={"clear"}
                            containerStyle={screenStyles.forgotPasswordButtonContainer}
                            titleStyle={screenStyles.forgotPasswordButton}
                            onPress={() =>
                                props.navigation.navigate(Routes.FORGOT_PASSWORD_FORM_SCREEN1)
                            }
                        />

                    </View>


                    <View>
                        {
                            loading?(
                            (
                                <ActivityIndicator size="large" color="#00ff00" animating={true} style={
                                                {
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                opacity: 1.0,
                                                height: 200,
                                                }} />
                            )
                                ):(
                           
                                <AppButton
                                    title={"Login"}
                                    onPress={() => {
                                        //props.navigation.navigate(Routes.LOGIN_FORM_SCREEN1);

                                        doUserLogIn();
                                    }}
                                />
                            )
                        }
                        </View>

                    

                    <View style={screenStyles.accountBottomContainer}>
                        <Text style={screenStyles.accountText}>{"Don't have an account?"}</Text>
                        <Button
                            title={"Signup"}
                            type={"clear"}
                            titleStyle={screenStyles.signupButton}
                            onPress={() =>
                                props.navigation.navigate(Routes.SIGNUP_FORM_SCREEN1)
                            }
                        />
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )



    

}

