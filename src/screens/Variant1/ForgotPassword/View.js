import React, {useRef} from 'react';
import {StatusBar, View,} from 'react-native';
import {Image, Text} from 'react-native-elements';
import AppConfig from '../../../../branding/App_config';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppInput from "../../../components/Application/AppInput/View"
import Style from "./Style";
import AppHeader from "../../../components/Application/AppHeader/View"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import AppButton from "../../../components/Application/AppButton/View";


const assets = AppConfig.assets.default;

export const Variant1ForgotPassword = (props) => {

    let inputRef = useRef();

    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps={'never'}
            getTextInputRefs={() => {
                return [inputRef];
            }}
            showsVerticalScrollIndicator={false}>
            <View style={Style.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>

                <Image source={assets.signup_form_header1} style={Style.headerImage}/>

                <AppHeader
                    isTranslucent
                    navigation={props.navigation}
                    transparentHeader
                    headerWithBack
                    title={"Forgot Password"}
                />

                <View style={[Style.bottomContainer]}>
                    <Text style={Style.titleText}>{"Forgot Password!"}</Text>

                    <Text style={Style.subtitleText}>{"Quickly change password"}</Text>

                    <AppInput
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
    )

}
