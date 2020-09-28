import React, {Component} from 'react';

import {Button, Image, Input} from 'react-native-elements';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {ViewPropTypes} from "react-native";
import Typography from "../../../../branding/carter/styles/Typography";
import fonts from "../../../../branding/carter/assets/Fonts";

const PropTypes = require('prop-types');

const normalEyeIcon = require("./images/Eye_password.png");
const slashEyeIcon = require("./images/Eye_line.png");

class TextInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showObscureText: true,
        }

    }

    getEyeIcon = () => {

        const {showObscureText} = this.state;

        if (showObscureText) {
            return slashEyeIcon;
        }
        else {
            return normalEyeIcon;
        }

    };

    render() {

        const {showObscureText} = this.state;


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
            textInputRef
        } = this.props;


        const eyeIcon = this.getEyeIcon();



        return (

            <Input
                {...this.props}
                ref={textInputRef}
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

                inputStyle={[{fontFamily:fonts.RUBIK_REGULAR, fontSize: Typography.P4}, inputStyle]}
                label={label}
                labelStyle={[labelStyle]}
                labelProps={labelProps}
                leftIcon={leftIcon}
                leftIconContainerStyle={leftIconContainerStyle}
                rightIcon={(isPasswordField  && showPassword ) ? () => {
                    return (
                        <Button
                            ViewComponent={() => {
                                return (
                                    <Image source={eyeIcon} style={{width:wp(5),height:wp(5)}} resizeMode={"contain"}/>
                                );
                            }}
                            onPress={() => {
                                this.setState({showObscureText:!showObscureText})
                            }}
                        />
                        );
                } : rightIcon}

                secureTextEntry={isPasswordField? showPassword ? showObscureText :  true :false }

                rightIconContainerStyle={rightIconContainerStyle}

            />


        )
    }


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
    rightIcon: PropTypes.any,
    rightIconContainerStyle: ViewPropTypes.style,
    isPasswordField: PropTypes.bool,
    showPassword: PropTypes.bool,
    value:PropTypes.string,
    keyboardType:PropTypes.string

};

TextInput.defaultProps = {
    placeholder: "Text",
    inputContainerStyle: {borderBottomWidth: 0},
    isPasswordField: false,
    showPassword: false,
};

module.exports = TextInput;

