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


const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

export default class LoginFormScreen extends Component {

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
            <View style={{flex: 1, alignItems: 'center'}}>

                <Image source={assets.login_header} style={Style.headerImage} />

                <AppHeader
                    navigation={this.props.navigation}
                    transparentHeader
                    headerWithBack
                    title={"Forgot Passsword"}
                />

                <View style={[Style.bottomContainer]}>
                    <Text style={Style.welcomeHeader}>{"Forgot Password!"}</Text>

                    <Text style={Style.welcomeDescription}>{"Quickly change password"}</Text>

                    <AppInput
                        leftIcon={'google'}
                        placeholder={"Email Address"}
                        onChangeText={(value) => {}}
                    />

                    <Button containerStyle={Style.loginButton}
                            buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                            title={'Forgot Password'}
                            titleStyle={styles.buttonFontStyle}
                            onPress={() => {
                                this.onForgotPasswordPress()
                            }}/>

                </View>
            </View>
        )

    }

    onForgotPasswordPress = () => {
        this.props.navigation.navigate(Routes.LOGIN_FORM_SCREEN);
    };

}
