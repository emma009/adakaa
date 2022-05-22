import React from 'react';
import {Image, Platform, TouchableWithoutFeedback, View} from "react-native"
import {Header} from 'react-native-elements';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Style from "./Style"
import AppConfig from "../../../../branding/App_config";

const PropTypes = require('prop-types');

const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;
const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;
const commonStyles = AppConfig.styling.default;


const AppHeader = (props) => {


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
        headerIconStyle,
        headerIconContainerStyle,
        centerContainerStyle
    } = props;

    return (

        <Header
            leftComponent={
                headerWithBack &&
                <TouchableWithoutFeedback onPress={() => {
                    navigation.goBack()
                }}>
                    <View style={headerIconContainerStyle}>
                        <Image source={
                            assets.arrow_left_icon
                        }
                               resizeMode={"contain"}
                               style={[{
                                   tintColor: (blackIcons || whiteHeader) ? colors.textColorBlack1 : colors.white
                               }, headerIconStyle]}
                        />
                    </View>
                </TouchableWithoutFeedback>
            }

            centerComponent={{
                text: title,
                style: {
                    color: whiteHeader ? colors.textColorBlack1 : colors.white,
                    fontFamily: fonts.RUBIK_MEDIUM,
                    fontSize: Typography.P1
                }
            }}
            centerContainerStyle={centerContainerStyle}
            rightComponent={
                rightIcon !== "" &&
                <TouchableWithoutFeedback onPress={() => {
                    onRightIconPress();
                }}>
                    <View style={headerIconContainerStyle}>
                        <Image source={rightIcon}
                               resizeMode={"contain"}
                               style={[{
                                   tintColor: (blackIcons || whiteHeader) ? colors.textColorBlack1 : colors.white
                               }, headerIconStyle]}
                        />
                    </View>
                </TouchableWithoutFeedback>
            }
            containerStyle={[
                !transparentHeader && Style.shadow,
                whiteHeader && Style.whiteHeader,
                transparentHeader && Style.transparentHeader,
                {
                    marginBottom: hp("2"),
                    borderBottomWidth: 0
                },
                Platform.OS === 'android' && {
                    marginTop: isTranslucent ? -10 : 0
                }]}

        />

    )

}

AppHeader.propTypes = {

    navigation: PropTypes.any,

    title: PropTypes.string,
    headerWithBack: PropTypes.bool,
    transparentHeader: PropTypes.bool,
    blackIcons: PropTypes.bool,
    whiteHeader: PropTypes.bool,
    isTranslucent: PropTypes.bool,

    rightIcon: PropTypes.string,
    onRightIconPress: PropTypes.func,
    topInset: PropTypes.number

};

AppHeader.defaultProps = {
    ...commonStyles.headerStyles,
    title: "Title",
    headerWithBack: false,
    transparentHeader: false,
    whiteHeader: false,
    blackIcons: false,
    isTranslucent: false,
    rightIcon: ""
};

export default AppHeader;
