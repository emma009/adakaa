import React, {Component} from 'react';
import {TouchableOpacity, TouchableWithoutFeedback, View,} from 'react-native';
import {Button, Header, Icon, Image, Text} from 'react-native-elements';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppConfig from '../../../branding/App_config';
import Routes from '../../navigation/Routes';
import Style from "./Style"
import AppHeader from "../../components/Application/AppHeader/View"
import fonts from "../../../branding/carter/assets/Fonts";
import Typography from "../../../branding/carter/styles/Typography";

const assets = AppConfig.assets.default;
const styles = AppConfig.styling.default;
const colors = AppConfig.colors.default;


export default class LoginScreen extends Component {

    componentDidMount(){

    }

    render () {

        return (
            <View style={{flex: 1, alignItems: 'center', backgroundColor: colors.textColorGrey2}}>

                <Image source={assets.login_header} style={Style.headerImage} />

                <AppHeader
                    transparentHeader
                    title={"Welcome"}
                />


                <View style={[Style.bottomContainer]}>
                    <Text style={Style.welcomeHeader}>{"Welcome"}</Text>

                    <Text style={Style.welcomeDescription}>{"To the world's no. 1 grocery app for Android and IOS. We deliver everything on time."}</Text>

                    <TouchableOpacity style={{marginBottom: hp(0.5)}} onPress={() => {
                        this.onGoogleSignInPress()
                    }}>

                        <View style={[styles.socialButton, Style.googleSignInButton,{borderRadius: hp(0.3)}]}>

                            <Icon
                                name="google"
                                type='font-awesome'
                                size={hp(2)}
                                color="red"
                                containerStyle={{position: "absolute", left: wp("5")}}
                            />
                            <Text style={[styles.buttonStyle, {
                                color: colors.textColorGrey1,
                                width: "100%",
                                textAlign: "center"
                            }]}>{"Connect using Google"}</Text>


                        </View>
                    </TouchableOpacity>




                    <TouchableOpacity onPress={() => {
                        this.onSignUpPress()
                    }}>
                        <View style={[styles.socialButton, Style.signUpButton,{borderRadius: hp(0.3)}]}>

                            <Image source={assets.account_icon} containerStyle={{width: hp(2), height: hp(2), position: "absolute", left: wp("5")}} resizeMode={"contain"} />

                            <Text style={[styles.buttonStyle, {
                                color: "white",
                                width: "100%",
                                textAlign: "center"
                            }]}>{"Create an account"}</Text>
                        </View>
                    </TouchableOpacity>


                    <View style={[Style.accountBottomContainer, {}]}>
                        <Text style={Style.accountText}>{"Already have an account?"}</Text>
                        <Button
                            title={"Login"}
                            type={"clear"}
                            titleStyle={Style.loginButton}
                            onPress={() =>
                                this.onLoginPress()
                            }
                        />

                    </View>
                </View>
            </View>
        )

    }

    onGoogleSignInPress = () => {


    };

    onSignUpPress = () => {

        this.props.navigation.navigate(Routes.SIGNUP_FORM_SCREEN);
    };

    onLoginPress = () => {

        this.props.navigation.navigate(Routes.LOGIN_FORM_SCREEN);
    };

}
