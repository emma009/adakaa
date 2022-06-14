import React from 'react';
import { Image, Platform, TouchableWithoutFeedback, useColorScheme, View, ViewPropTypes } from "react-native";
import {Header} from 'react-native-elements';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'
import AppConfig from "../../../../branding/App_config";
import { useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../../branding/carter/styles/light/Style";

const PropTypes = require('prop-types');

const assets = AppConfig.assets.default;
const fonts = AppConfig.fonts.default;
const lightColors = AppConfig.lightColors.default;
const Typography = AppConfig.typography.default;


const AppHeader = (props) => {

    //Theme based styling and colors
    const scheme = useColorScheme();
    const { colors } = useTheme();

    const overrideTheme = props.overrideTheme || false;

    const globalStyles = overrideTheme ?
      (overrideTheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(lightColors)) :
      (scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors));

    const navigation = props.navigation || "";
    const title = props.title || "Title";
    const transparentHeader = props.transparentHeader || false;
    const headerWithBack = props.headerWithBack || false;
    const darkIcons = props.darkIcons || false;
    const headerWithBackground = props.headerWithBackground || false;
    const rightIcon = props.rightIcon || "";
    const isTranslucent = props.isTranslucent || false;
    const headerIconStyle = props.headerIconStyle || globalStyles.headerStyles.headerIconStyle;
    const headerIconContainerStyle = props.headerIconContainerStyle || globalStyles.headerStyles.headerIconContainerStyle;
    const centerContainerStyle = props.centerContainerStyle || globalStyles.headerStyles.centerContainerStyle;
    const onRightIconPress = props.onRightIconPress || (() => {});
    const containerStyle = props.containerStyle || globalStyles.headerStyles.containerStyle;
    const containerShadow = props.containerShadow || globalStyles.headerStyles.headerShadowStyle;

    const transparentContainerStyle = globalStyles.headerStyles.transparentContainerStyle;


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
                                   tintColor: overrideTheme ?
                                     (overrideTheme === "dark" ? colors.headerPrimaryColor : lightColors.headerPrimaryColor)
                                     : ((darkIcons || headerWithBackground) ? colors.headerPrimaryColor : colors.white)

                               }, headerIconStyle]}
                        />
                    </View>
                </TouchableWithoutFeedback>
            }

            centerComponent={{
                text: title,
                style: {
                    color: overrideTheme ?
                      (overrideTheme === "dark" ? colors.headerPrimaryColor : lightColors.headerPrimaryColor)
                      : ((darkIcons || headerWithBackground) ? colors.headerPrimaryColor : colors.white),
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
                                   tintColor: overrideTheme ?
                                     (overrideTheme === "dark" ? colors.headerPrimaryColor : lightColors.headerPrimaryColor)
                                     : ((darkIcons || headerWithBackground) ? colors.headerPrimaryColor : colors.white),
                               }, headerIconStyle]}
                        />
                    </View>
                </TouchableWithoutFeedback>
            }
            containerStyle={[
                !transparentHeader && containerShadow,
                headerWithBackground && containerStyle,
                transparentHeader && transparentContainerStyle,
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
    containerStyle: ViewPropTypes.style,

    title: PropTypes.string,
    headerWithBack: PropTypes.bool,
    transparentHeader: PropTypes.bool,
    darkIcons: PropTypes.bool,
    headerWithBackground: PropTypes.bool,
    isTranslucent: PropTypes.bool,

    rightIcon: PropTypes.string,
    onRightIconPress: PropTypes.func,
    topInset: PropTypes.number

};


export default AppHeader;
