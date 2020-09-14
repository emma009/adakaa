import React, {Component} from 'react';
import {View, Platform, TouchableWithoutFeedback} from "react-native"
import {Button, Header, Icon} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import TextInput from "../../Global/TextInput/View";
import Style from "./Style"
import fonts from "../../../../branding/carter/assets/Fonts";
import Typography from "../../../../branding/carter/styles/Typography";
import Globals from "../../../utils/Globals";

const PropTypes = require('prop-types');

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
            onRightIconPress
        } = this.props;

        return (

            <Header
                leftComponent={
                    headerWithBack &&
                        <TouchableWithoutFeedback onPress={() => {navigation.goBack();}}>
                            <View style={{width: wp("10"), height: "100%", justifyContent: "center", zIndex: 1}}>
                                <Icon
                                    name="google"
                                    type='font-awesome'
                                    size={hp("3")}
                                    color={(blackIcons || whiteHeader) ? "black": "white"}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                }

                centerComponent={{ text: title, style: { color: whiteHeader ? "black": "white", fontFamily: fonts.RUBIK_MEDIUM, fontSize: Typography.P1 } }}
                centerContainerStyle={{justifyContent: "center", height: "100%"}}
                rightComponent={
                    rightIcon !== "" &&
                    <TouchableWithoutFeedback onPress={() => {onRightIconPress();}}>
                        <View style={{width: wp("10"), height: "100%", justifyContent: "center", zIndex: 1}}>
                            <Icon
                                name="google"
                                type='font-awesome'
                                size={hp("3")}
                                color={(blackIcons || whiteHeader) ? "black": "white"}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                }

                containerStyle={[transparentHeader && Style.transparentHeader, whiteHeader && Style.whiteHeader, {marginBottom: hp("2")}, Platform.OS === 'android' && {marginTop: -22}]}

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
    rightIcon: ""
};

module.exports = AppHeader;

