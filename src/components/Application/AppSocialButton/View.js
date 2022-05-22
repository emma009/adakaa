import React from 'react';
import AppConfig from "../../../../branding/App_config";
import {Text} from "react-native-elements";
import {Image, TouchableOpacity, View} from "react-native";
import Style from "./Style";

const PropTypes = require('prop-types');

const styles = AppConfig.styling.default;


const AppSocialButton = (props) => {

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
            style={containerStyle}
            onPress={() => {
                onPress();
            }}>
            <View style={[
                styles.primaryButtonStyle,
                Style.container,
                buttonStyle
            ]}>


                <Image source={icon} style={[
                    Style.icon,
                    iconStyle
                ]}
                />

                <Text style={[
                    styles.primaryButtonTextStyle,
                    Style.title,
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

AppSocialButton.defaultProps = {
    title: "Text",
    icon: ""
};

export default AppSocialButton;

