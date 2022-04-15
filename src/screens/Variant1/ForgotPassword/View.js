import React, {Component} from 'react';
import {
    View,
    TouchableOpacity, StatusBar,
} from 'react-native';
import {Header, Icon, Image, Text, Button, CheckBox} from 'react-native-elements';
import AppConfig from '../../../../branding/App_config';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppInput from "../../../components/Application/AppInput/View"
import Routes from '../../../navigation/Routes';
import Style from "./Style";
import {StackActions} from "@react-navigation/native";
import AppHeader from "../../../components/Application/AppHeader/View"
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
            <View style={{flex: 1, alignItems: 'center', backgroundColor: colors.textColorGrey2}}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

                <Image source={assets.signup_form_header1} style={Style.headerImage} />

                <AppHeader
                    isTranslucent
                    navigation={this.props.navigation}
                    transparentHeader
                    headerWithBack
                    title={"Forgot Passsword"}
                />

                <View style={[Style.bottomContainer]}>
                    <Text style={Style.welcomeHeader}>{"Forgot Password!"}</Text>

                    <Text style={Style.welcomeDescription}>{"Quickly change password"}</Text>

                    <AppInput
                        textInputRef={r => (this.inputRef = r)}
                        leftIcon={assets.envelop_icon}
                        leftIconColor={colors.iconColorGrey1}
                        placeholder={"Email Address"}
                        placeholderTextColor={colors.textColorGrey1}
                        onChangeText={(value) => {}}
                    />

                    <Button containerStyle={Style.loginButton}
                            buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                            title={'Forgot Password'}
                            titleStyle={styles.buttonStyle}
                            onPress={() => {
                                this.onForgotPasswordPress()
                            }}/>

                </View>
            </View>
            </KeyboardAwareScrollView>
        )

    }

    onForgotPasswordPress = () => {
        this.props.navigation.navigate(Routes.LOGIN_FORM_SCREEN);
    };

}
