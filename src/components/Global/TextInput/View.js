import React, {useState} from 'react';

import {Input} from 'react-native-elements';
import {Image, TouchableOpacity, ViewPropTypes} from "react-native";
import AppConfig from "../../../../branding/App_config";
import Style from "./Styles"

const PropTypes = require('prop-types');

const colors = AppConfig.colors.default;
const assets = AppConfig.assets.default;


export const TextInput = (props) => {

    const [showObscureText, setShowObscureText] = useState(true);

    const getEyeIcon = () => {

        if (showObscureText) {
            return assets.eye_slash_icon;
        } else {
            return assets.eye_icon;
        }

    };

    const {
        placeholder,
        placeholderTextColor,
        onChangeText,
        containerStyle,
        disabled,
        disabledInputStyle,
        inputContainerStyle,
        errorMessage,
        errorStyle,
        errorProps,
        inputComponent,
        inputStyle,
        label,
        labelStyle,
        labelProps,
        leftIcon,
        leftIconContainerStyle,
        rightIcon,
        rightIconContainerStyle,
        showPassword,
        isPasswordField,
        value,
        keyboardType,
        textInputRef,
        rightIconPress,
        rightIconSource,
        rightIconTintColor
    } = props;


    return (

        <Input
            {...props}
            ref={(r) => textInputRef(r)}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            onChangeText={(text) => onChangeText(text)}
            containerStyle={containerStyle}
            disabled={disabled}
            value={value}
            disabledInputStyle={disabledInputStyle}
            inputContainerStyle={inputContainerStyle}
            errorMessage={errorMessage}
            errorStyle={errorStyle}
            errorProps={errorProps}
            inputComponent={inputComponent}
            keyboardType={keyboardType}

            inputStyle={[Style.defaultInputStyles, inputStyle]}
            label={label}
            labelStyle={[labelStyle]}
            labelProps={labelProps}
            leftIcon={leftIcon}
            leftIconContainerStyle={leftIconContainerStyle}


            rightIcon={(isPasswordField && showPassword) ? () => {
                return (
                    <TouchableOpacity onPress={() => setShowObscureText((showObscureText) => {
                        return !showObscureText
                    })}>
                        <Image source={getEyeIcon()} style={[
                            Style.rightIcon,
                            {tintColor: rightIconTintColor}
                        ]}
                               resizeMode={"contain"}/>
                    </TouchableOpacity>
                );
            } : rightIconSource ? () => {

                return (
                    <TouchableOpacity onPress={() => {
                        rightIconPress ? rightIconPress() : {}
                    }}>
                        <Image source={rightIconSource} style={[
                            Style.rightIcon,
                            {tintColor: rightIconTintColor}
                        ]}/>
                    </TouchableOpacity>
                );


            } : () => {
                return null
            }}

            secureTextEntry={isPasswordField ? showPassword ? showObscureText : true : false}

            rightIconContainerStyle={rightIconContainerStyle}

        />


    )

}


TextInput.propTypes = {

    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,

    containerStyle: ViewPropTypes.style,
    disabled: PropTypes.bool,
    disabledInputStyle: ViewPropTypes.style,
    inputContainerStyle: ViewPropTypes.style,
    errorMessage: PropTypes.string,
    errorStyle: ViewPropTypes.style,
    errorProps: PropTypes.any,
    inputComponent: PropTypes.node,
    inputStyle: ViewPropTypes.style,
    label: PropTypes.any,
    labelStyle: ViewPropTypes.style,
    labelProps: PropTypes.any,
    leftIcon: PropTypes.any,
    leftIconContainerStyle: ViewPropTypes.style,
    rightIconSource: PropTypes.any,
    rightIconPress: PropTypes.func,
    rightIconContainerStyle: ViewPropTypes.style,
    isPasswordField: PropTypes.bool,
    showPassword: PropTypes.bool,
    value: PropTypes.string,
    keyboardType: PropTypes.string

};

TextInput.defaultProps = {
    placeholder: "Text",
    inputContainerStyle: {borderBottomWidth: 0},
    isPasswordField: false,
    showPassword: false,
    rightIconTintColor: colors.iconColorGrey1,
    rightIconPress: () => {
    }
};

