import React, {useRef} from 'react';
import {ImageBackground, StatusBar, View,} from 'react-native';
import {Text} from 'react-native-elements';
import AppConfig from '../../../../branding/App_config';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppInput from "../../../components/Application/AppInput/View"
import Style from "./Style";
import AppHeader from "../../../components/Application/AppHeader/View"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import AppButton from "../../../components/Application/AppButton/View";


const assets = AppConfig.assets.default;
const styles = AppConfig.styling.default;

export const Variant3ForgotPassword = (props) => {

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
                    <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>

                    <AppHeader
                        isTranslucent
                        navigation={props.navigation}
                        transparentHeader
                        headerWithBack
                        whiteHeader
                        title={"Forgot Password"}
                    />

                    <View style={[Style.bottomContainer]}>
                        <Text style={Style.titleText}>{"Forgot Password!"}</Text>

                        <Text style={Style.subtitleText}>{"Quickly change password"}</Text>

                        <AppInput
                            {...styles.secondaryInputStyle}
                            containerStyle={{marginBottom: hp(2)}}
                            textInputRef={r => (inputRef = r)}
                            leftIcon={assets.envelop_icon}
                            placeholder={"Email Address"}
                            onChangeText={(value) => {
                            }}
                        />

                        <AppButton
                            title={'Forgot Password'}
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
