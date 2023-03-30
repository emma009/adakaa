import React, {useRef, useState} from 'react';
import {ActivityIndicator, Alert, ToastAndroid, useColorScheme, View} from "react-native";
import {Button, Image, Text} from 'react-native-elements';
import AppConfig from '../../../../branding/App_config';
import {Styles} from "./Style";
import AppHeader from "../../../components/Application/AppHeader/View";
import AppInput from "../../../components/Application/AppInput/View";
import Routes from "../../../navigation/Routes";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import AppButton from "../../../components/Application/AppButton/View";
import {useTheme} from "@react-navigation/native";
import {commonDarkStyles} from "../../../../branding/carter/styles/dark/Style";
import {commonLightStyles} from "../../../../branding/carter/styles/light/Style";
import IconNames from "../../../../branding/carter/assets/IconNames";
import {FocusAwareStatusBar} from "../../../components/Application/FocusAwareStatusBar/FocusAwareStatusBar";
import {  TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import LottieView from 'lottie-react-native';



const assets = AppConfig.assets.default;


export const Variant1SignupScreen = (props) => {

    //Theme based styling and colors
    const scheme = useColorScheme();
    const {colors} = useTheme();
    const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);
    const screenStyles = Styles(globalStyles, colors);

    //Internal States
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);


const douserReg = async function () {

    // Note that these values come from state variables that we've declared before
    const usernameValue = email;
    const userphone = phone;
    const passwordValue = password;

    
    console.log('React world',usernameValue, 'password', passwordValue);


        

        if(usernameValue == undefined || usernameValue == ''){


            if (Platform.OS === 'android' ) {

                ToastAndroid.show('Email field is required', ToastAndroid.SHORT);

            }else{
                   //ToastAndroid.show(, ToastAndroid.SHORT);
                 Alert.alert('Please enter email to continue');

            }

         

        }else if(userphone ==  undefined || userphone == ''){

            if (Platform.OS === 'android' ) {

                ToastAndroid.show('Phone field is required', ToastAndroid.SHORT);

            }else{
                   //ToastAndroid.show(, ToastAndroid.SHORT);
                 Alert.alert('Phone enter password to continue');

            }
        }
        else if(passwordValue ==  undefined || passwordValue == ''){

            if (Platform.OS === 'android' ) {

                ToastAndroid.show('Password field is required', ToastAndroid.SHORT);

            }else{
                   //ToastAndroid.show(, ToastAndroid.SHORT);
                 Alert.alert('Please enter password to continue');

            }
        }
        
        else{

            setLoading(true);

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    email: usernameValue,
                    phone: userphone,
                    password: passwordValue
                 })
            };
            const response = await fetch('http://127.0.0.1:8000/api/register', requestOptions);
            const data = await response.json();
            console.log('neww', data.code);
            if(data.code == '560'){

                Alert.alert(data.message);
                setLoading(false);


            }else{

                Alert.alert(
                    'Successful',
                    'Please login to continue',
                );

                props.navigation.navigate(Routes.LOGIN_FORM_SCREEN1)
                setLoading(false);

            }
            
          



        }
      

  
  };



    //References
    let inputRef = useRef();

    return (

        
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps={'never'}
            getTextInputRefs={() => {
                return [inputRef];
            }}
            style={screenStyles.scrollViewContainer}
            contentContainerStyle={screenStyles.scrollViewContentContainer}
            showsVerticalScrollIndicator={false}>

            <View style={screenStyles.container}>

           

                <FocusAwareStatusBar translucent backgroundColor="transparent" barStyle="light-content"/>

                <View style={screenStyles.headerContainer}>
                    <Image source={assets.signup_form_header1} style={screenStyles.headerImage}/>
                </View>

                <AppHeader
                    isTranslucent
                    navigation={props.navigation}
                    transparentHeader
                    headerWithBack
                    title={"Signup"}
                />

                <View style={[screenStyles.bottomContainer]}>
                    <Text style={screenStyles.titleText}>{"Create Account!"}</Text>

                    <Text style={screenStyles.subtitleText}>{"Quickly create account"}</Text>


                   
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
                        leftIcon={IconNames.PhoneFlip}
                        //skeyboardType='numeric'
                        placeholder={"Phone"}
                        value={phone}
                   //     keyboardType={"phone-pad"}
                        keyboardType = 'number-pad'
                        maxLength={11}
                        onChangeText={(phone) => {
                            setPhone(phone)
                        }}
                    />

                    <AppInput
                        {...globalStyles.secondaryInputStyle}
                        containerStyle={screenStyles.passwordInputContainer}
                        textInputRef={r => (inputRef = r)}
                        isPasswordField
                        leftIcon={IconNames.LockKeyhole}
                        placeholder={"Password"}
                        value={password}
                        onChangeText={(password) => {
                            setPassword(password)
                        }}
                    />



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
                                    title={"Signup"}
                                    onPress={() => {
                                        //props.navigation.navigate(Routes.LOGIN_FORM_SCREEN1);

                                        douserReg();
                                    }}
                                />
                            )
                        }
                        </View>


                    <View style={screenStyles.accountBottomContainer}>
                        <Text style={screenStyles.accountText}>{"Already have an account?"}</Text>
                        <Button

                            title={"Login"}
                            type={"clear"}
                            titleStyle={screenStyles.loginButton}
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

const styles = StyleSheet.create({
    buttonContainer:{
      backgroundColor:"#fc5c65",
      padding:10,
      width:100,
      borderRadius:50,
      alignItems:"center",
      justifyContent:"center",
      alignItems:"center",
      alignSelf:"center",
      top:"50%"
    },  
    container:{
      flex:1,
  
      backgroundColor:"white"
    },
    text:{
      fontWeight:"600",
      fontFamily:"Avenir",
      fontSize:18,
      color:"#d1d3d4"
    }
  });
