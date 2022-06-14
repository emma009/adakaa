import React from 'react';
import {Text} from "react-native-elements";
import { Image, TouchableOpacity, useColorScheme, View } from "react-native";
import { Styles } from "./Style";
import { useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../../branding/carter/styles/light/Style";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const PropTypes = require('prop-types');

export const AppSocialButton = (props) => {

    //Theme based styling and colors
    const scheme = useColorScheme();
    const { colors } = useTheme();
    const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);
    const itemStyles = Styles(globalStyles, colors);

    const {
        icon,
        title,
        onPress,
        containerStyle,
        buttonStyle,
        iconStyle,
        titleStyle
    } = props;


    return (

        <TouchableOpacity
            style={[containerStyle, {borderRadius: hp(1.75)}]}
            onPress={() => {
                onPress();
            }}>
            <View style={[globalStyles.primaryButtonStyle, itemStyles.container, buttonStyle, {
                borderRadius: hp(0.75)
            }]}>


                <Image source={icon} style={[
                    itemStyles.icon,
                    iconStyle
                ]}
                />

                <Text style={[
                    globalStyles.primaryButtonTextStyle,
                    itemStyles.title,
                    titleStyle
                ]}>{title}</Text>
            </View>
        </TouchableOpacity>

    )
}

AppSocialButton.propTypes = {

    icon: PropTypes.string,

    title: PropTypes.string,

    containerStyle: PropTypes.any,

    buttonStyle: PropTypes.any,

    iconStyle: PropTypes.any,

    titleStyle: PropTypes.any,

    onPress: PropTypes.func.isRequired,

};

