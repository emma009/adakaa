import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {TextInput} from "../../Global/TextInput/View";
import {Image} from "react-native";
import AppConfig from "../../../../branding/App_config";

const PropTypes = require('prop-types');

const commonStyles = AppConfig.styling.default;



const AppInput = (props) => {

    const {
        textInputRef,
        placeholder,
        placeholderTextColor,
        onChangeText,
        leftIcon,
        leftIconColor,
        isPasswordField,
        backgroundColor,
        value,
        multilineInput,
        keyboardType,
        defaultContainerStyle,
        containerStyle,
        leftIconContainerStyle,
        multilineInputHeight,
        showLeftIcon
    } = props;




    return (

        <TextInput
            {...props}
            textInputRef={textInputRef}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            leftIcon={
                showLeftIcon && <Image source={leftIcon} style={{
                    width: hp(2),
                    height: hp(2),
                    tintColor: leftIconColor
                }}
                                       resizeMode={"contain"} />
            }
            containerStyle={[
                {
                    backgroundColor: backgroundColor,
                },
                defaultContainerStyle,
                containerStyle,
                multilineInput && multilineInputHeight,
            ]}
            leftIconContainerStyle={leftIconContainerStyle}
            onChangeText={(value) => {
                onChangeText(value)
            }}
            value={value}
            keyboardType={keyboardType}
            showPassword={isPasswordField}
            isPasswordField={isPasswordField}
        />



    )
}

AppInput.propTypes = {

    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,

    value: PropTypes.string,
    containerStyle: PropTypes.any,

    showLeftIcon:  PropTypes.bool,
    leftIcon:  PropTypes.string,
    leftIconColor:  PropTypes.string,

    backgroundColor: PropTypes.string,

    onChangeText: PropTypes.func.isRequired,

    isPasswordField: PropTypes.bool,

    multilineInput: PropTypes.bool,

    keyboardType:PropTypes.string
};

AppInput.defaultProps = {
    ...commonStyles.primaryInputStyle,
    placeholder: "Text",
    showLeftIcon: true,
    isPasswordField: false,
    multilineInput: false
};

export default AppInput;
