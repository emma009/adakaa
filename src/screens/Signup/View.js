import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import {Header, Icon, Image, Text, Button} from 'react-native-elements';
import AppConfig from '../../../branding/App_config';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Style from "./Style";
import AppHeader from "../../components/Application/AppHeader/View";
import AppInput from "../../components/Application/AppInput/View";
import Routes from "../../navigation/Routes";


const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;


export default class SignupFormScreen extends Component {

    componentDidMount(){

    }


    render () {

        return (
            <View style={{flex: 1, alignItems: 'center'}}>


                    <Image source={assets.login_header} style={Style.headerImage} />

                    <AppHeader
                        navigation={this.props.navigation}
                        transparentHeader
                        headerWithBack
                        title={"Signup"}
                    />

                <View style={[Style.bottomContainer]}>
                    <Text style={Style.welcomeHeader}>{"Create Account!"}</Text>

                    <Text style={Style.welcomeDescription}>{"Quickly create account"}</Text>

                    <AppInput
                        leftIcon={'google'}
                        placeholder={"Email Address"}
                        onChangeText={(value) => {}}
                    />

                    <AppInput
                        leftIcon={'google'}
                        placeholder={"Phone"}
                        onChangeText={(value) => {}}
                    />

                    <AppInput
                        isPasswordField
                        leftIcon={'google'}
                        placeholder={"Password"}
                        onChangeText={(value) => {}}
                    />

                    <Button containerStyle={Style.signupButton}
                            buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                            title={'Signup'}
                            titleStyle={styles.buttonFontStyle}
                            onPress={() => {
                                this.onSignUpPress()
                            }}/>

                    <View style={Style.accountBottomContainer}>
                        <Text style={Style.accountText}>{"Already have an account?"}</Text>
                        <Button
                            title={"Login"}
                            type={"clear"}
                            titleStyle={Style.loginButton}
                            onPress={() =>
                                this.props.navigation.goBack()
                            }
                        />
                    </View>
                </View>
            </View>
        )

    }


    onSignUpPress = () => {
        this.props.navigation.navigate(Routes.LOGIN_FORM_SCREEN);
    };

}
