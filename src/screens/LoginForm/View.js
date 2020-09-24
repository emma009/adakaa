import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import {Header, Icon, Image, Text, Button, CheckBox} from 'react-native-elements';
import AppConfig from '../../../branding/App_config';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppInput from "../../components/Application/AppInput/View"
import Routes from '../../navigation/Routes';
import Style from "./Style";
import {StackActions} from "@react-navigation/native";
import AppHeader from "../../components/Application/AppHeader/View"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";


const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

export default class LoginFormScreen extends Component {
    inputRef = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        }

    }

    componentDidMount(){

    }


    render () {

        return (
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps={'never'}
                // style={{flex: 1}}
                getTextInputRefs={() => {
                    return [this.inputRef];
                }}
                showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, alignItems: 'center'}}>

                <Image source={assets.login_header} style={Style.headerImage} />

                <AppHeader
                    navigation={this.props.navigation}
                    transparentHeader
                    headerWithBack
                    title={"Login"}
                    />


                <View style={[Style.bottomContainer]}>
                    <Text style={Style.welcomeHeader}>{"Welcome"}</Text>

                    <Text style={Style.welcomeDescription}>{"Sign in to your account"}</Text>

                    <AppInput
                        textInputRef={r => (this.inputRef = r)}
                        leftIcon={assets.envelop_icon}
                        leftIconColor={colors.iconColorGrey1}
                        placeholder={"Email Address"}
                        placeholderTextColor={colors.textColorGrey1}
                        onChangeText={(value) => {}}
                    />

                    <AppInput
                        textInputRef={r => (this.inputRef = r)}
                        isPasswordField
                        leftIcon={assets.lock_icon}
                        leftIconColor={colors.iconColorGrey1}
                        placeholder={"Password"}
                        placeholderTextColor={colors.textColorGrey1}
                        onChangeText={(value) => {}}
                    />

                    <View style={Style.forgotPasswordContainer}>

                        <Button
                            title={"Forgot Password"}
                            type={"clear"}
                            titleStyle={Style.forgotPasswordButton}
                            onPress={() =>
                                this.onForgotPasswordPress()
                            }
                        />
                    </View>

                    <Button containerStyle={Style.loginButton}
                            buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                            title={'LOGIN'}
                            titleStyle={styles.buttonFontStyle}
                            onPress={() => {
                                this.onLoginPress()
                            }}/>

                    <View style={Style.accountBottomContainer}>
                        <Text style={Style.accountText}>{"Don't have an account?"}</Text>
                        <Button
                            title={"Signup"}
                            type={"clear"}
                            titleStyle={Style.signupButton}
                            onPress={() =>
                                this.onSignUpPress()
                            }
                        />
                    </View>
                </View>
            </View>
            </KeyboardAwareScrollView>
        )

    }

    onForgotPasswordPress = () => {
        this.props.navigation.navigate(Routes.FORGOT_PASSWORD_FORM_SCREEN);
    };

    onLoginPress = () => {
        this.props.navigation.dispatch(
            StackActions.replace(Routes.HOME)
        );
    };

    onSignUpPress = () => {
        this.props.navigation.navigate(Routes.SIGNUP_FORM_SCREEN);
    };

}
