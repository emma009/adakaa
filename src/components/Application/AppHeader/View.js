import React, {Component} from 'react';
import {View, Platform, TouchableWithoutFeedback, Image} from "react-native"
import {Button, Header, Icon} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import TextInput from "../../Global/TextInput/View";
import Style from "./Style"
import fonts from "../../../../branding/carter/assets/Fonts";
import Typography from "../../../../branding/carter/styles/Typography";
import Globals from "../../../utils/Globals";
import AppConfig from "../../../../branding/App_config";
import colors from "../../../../branding/carter/styles/Colors";

const PropTypes = require('prop-types');
const assets = AppConfig.assets.default;


class AppHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            navigation,
            title,
            transparentHeader,
            headerWithBack,
            blackIcons,
            whiteHeader,
            rightIcon,
            onRightIconPress,
            isTranslucent,
        } = this.props;

        return (

            <Header
                leftComponent={
                    headerWithBack &&
                        <TouchableWithoutFeedback onPress={() => {navigation.goBack();}}>
                            <View style={{width: wp("10"), height: "100%", justifyContent: "center", zIndex: 1, alignItems: "center"}}>
                                <Image source={assets.arrow_left_icon}
                                       resizeMode={"contain"}
                                       style={{width: hp(2.5), height: hp (2.5), tintColor: (blackIcons || whiteHeader) ? colors.textColorBlack1: "white"}} />
                            </View>
                        </TouchableWithoutFeedback>
                }

                centerComponent={{ text: title, style: { color: whiteHeader ? colors.textColorBlack1: "white", fontFamily: fonts.RUBIK_MEDIUM, fontSize: Typography.P1 } }}
                centerContainerStyle={{justifyContent: "center", height: "100%"}}
                rightComponent={
                    rightIcon !== "" &&
                    <TouchableWithoutFeedback onPress={() => {onRightIconPress();}}>
                        <View style={{width: wp("10"), height: "100%", justifyContent: "center", zIndex: 1, alignItems: "center"}}>
                            <Image source={rightIcon}
                                   resizeMode={"contain"}
                                   style={{width: hp(2.5), height: hp (2.5), tintColor: (blackIcons || whiteHeader) ? colors.textColorBlack1: "white"}} />
                        </View>
                    </TouchableWithoutFeedback>
                }

                containerStyle={[whiteHeader && Style.whiteHeader, transparentHeader && Style.transparentHeader , {marginBottom: hp("2"), borderBottomWidth: 0}, Platform.OS === 'android' && {marginTop: isTranslucent ? -10 : 0}]}

            />


        )
    }


}

AppHeader.propTypes = {

    navigation: PropTypes.any,

    title:   PropTypes.string,
    headerWithBack: PropTypes.bool,
    transparentHeader: PropTypes.bool,
    blackIcons:  PropTypes.bool,
    whiteHeader: PropTypes.bool,
    isTranslucent: PropTypes.bool,

    rightIcon: PropTypes.string,
    onRightIconPress: PropTypes.func,
    topInset: PropTypes.number

};

AppHeader.defaultProps = {
    title: "Title",
    headerWithBack: false,
    transparentHeader: false,
    whiteHeader: false,
    blackIcons: false,
    isTranslucent: false,
    rightIcon: ""
};

module.exports = AppHeader;

