import React from 'react';
import {StatusBar, View,} from 'react-native';
import {Button, Image, Text} from 'react-native-elements';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppConfig from '../../../../branding/App_config';
import Routes from '../../../navigation/Routes';
import Style from "./Style"
import AppHeader from "../../../components/Application/AppHeader/View"
import AppSocialButton from "../../../components/Application/AppSocialButton/View";

const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;

export const Variant1LoginScreen = (props) => {

    return (
        <View style={Style.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>

            <Image source={assets.login_header1} style={Style.headerImage}/>

            <AppHeader
                isTranslucent
                transparentHeader
                title={"Welcome"}
            />


            <View style={[Style.bottomContainer]}>
                <Text style={Style.titleText}>{"Welcome"}</Text>

                <Text
                    style={Style.subtitleText}>{"To the world's no. 1 grocery app for Android and IOS. We deliver everything on time."}</Text>

                <AppSocialButton onPress={() => {
                }}
                                 containerStyle={{marginBottom: hp(0.5)}}
                                 buttonStyle={{
                                     backgroundColor: colors.white,
                                 }}
                                 titleStyle={{
                                     color: colors.textColorGrey1
                                 }}
                                 iconStyle={{
                                     tintColor: colors.red
                                 }}
                                 title={"Connect using Google"}
                                 icon={assets.google_icon}
                />


                <AppSocialButton onPress={() => {
                    props.navigation.navigate(Routes.SIGNUP_FORM_SCREEN1);
                }}
                                 title={"Create an account"}
                                 icon={assets.account_icon}
                />

                <View style={[Style.accountBottomContainer, {}]}>
                    <Text style={Style.accountText}>{"Already have an account?"}</Text>
                    <Button
                        title={"Login"}
                        type={"clear"}
                        titleStyle={Style.loginButton}
                        onPress={() =>
                            props.navigation.navigate(Routes.LOGIN_FORM_SCREEN1)
                        }
                    />

                </View>
            </View>
        </View>
    )

}
