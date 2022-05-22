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
const styles = AppConfig.styling.default;

export const Variant2ForgotPassword = (props) => {

    let inputRef = useRef();

    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps={'never'}
            style={{flex: 1, backgroundColor: "white"}}
            getTextInputRefs={() => {
                return [inputRef];
            }}
            showsVerticalScrollIndicator={false}>
            <View style={Style.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content"/>


                <AppHeader
                    navigation={props.navigation}
                    isTranslucent
                    headerWithBack
                    whiteHeader
                    title={"Forgot Password"}
                />

                <View style={Style.imageContainer}>
                    <Image source={assets.intro1_img4} style={Style.headerImage} />
                </View>




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
    )

}

