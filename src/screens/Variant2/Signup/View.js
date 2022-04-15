import React, {Component} from 'react';
import {
    View,
    TouchableOpacity, StatusBar,
} from 'react-native';
import {Header, Icon, Image, Text, Button} from 'react-native-elements';
import AppConfig from '../../../../branding/App_config';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Style from "./Style";
import AppHeader from "../../../components/Application/AppHeader/View";
import AppInput from "../../../components/Application/AppInput/View";
import Routes from "../../../navigation/Routes";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import TextInput from "../../../components/Global/TextInput/View";


const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;


export default class SignupFormScreen extends Component {
    inputRef = React.createRef();
    componentDidMount(){

    }


    render () {

        return (

            <KeyboardAwareScrollView
                keyboardShouldPersistTaps={'never'}
                style={{flex: 1, backgroundColor: "white"}}
                getTextInputRefs={() => {
                    return [this.inputRef];
                }}
                showsVerticalScrollIndicator={false}>

            <View style={{flex: 1, alignItems: 'center', backgroundColor: "white"}}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                <AppHeader
                    isTranslucent
                    navigation={this.props.navigation}
                    headerWithBack
                    whiteHeader
                    title={"Signup"}
                />

                    <Image source={assets.signup_form_header2} style={Style.headerImage} resizeMode={"contain"} />




                <View style={[Style.bottomContainer]}>
                    <Text style={Style.welcomeHeader}>{"Create Account!"}</Text>

                    <Text style={Style.welcomeDescription}>{"Quickly create account"}</Text>



                            <AppInput
                                textInputRef={r => (this.inputRef = r)}
                                leftIcon={assets.envelop_icon}
                                backgroundColor={colors.textColorGrey2}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Email Address"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                textInputRef={r => (this.inputRef = r)}
                                leftIcon={assets.phone_icon}
                                backgroundColor={colors.textColorGrey2}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Phone"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <AppInput
                                textInputRef={r => (this.inputRef = r)}
                                isPasswordField
                                leftIcon={assets.lock_icon}
                                backgroundColor={colors.textColorGrey2}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Password"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />




                    <Button containerStyle={[Style.signupButton]}
                            buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                            title={'Signup'}
                            titleStyle={styles.buttonStyle}
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

            </KeyboardAwareScrollView>
        )

    }


    onSignUpPress = () => {
        this.props.navigation.navigate(Routes.LOGIN_FORM_SCREEN1);
    };

}
