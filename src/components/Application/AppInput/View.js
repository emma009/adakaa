import React, {Component} from 'react';

import {Icon} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import TextInput from "../../Global/TextInput/View";
import {Image, ViewPropTypes} from "react-native";

const PropTypes = require('prop-types');

class AppInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
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
            keyboardType
        } = this.props;


        return (

            <TextInput
                {...this.props}
                textInputRef={textInputRef}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                leftIcon={
                    <Image source={leftIcon} style={{width: hp(2), height: hp(2), tintColor: leftIconColor}} resizeMode={"contain"} />
                }
                containerStyle={[
                    {
                        backgroundColor: backgroundColor,
                        marginVertical: hp("0.5"),
                    },
                    multilineInput && {height: hp("30")},

                    ]}
                leftIconContainerStyle={{
                    paddingRight: wp('3'),
                }}
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


}

AppInput.propTypes = {

    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,

    value: PropTypes.string,

    leftIcon:  PropTypes.string,
    leftIconColor:  PropTypes.string,

    backgroundColor: PropTypes.string,

    onChangeText: PropTypes.func.isRequired,

    isPasswordField: PropTypes.bool,

    multilineInput: PropTypes.bool,

    keyboardType:PropTypes.string
};

AppInput.defaultProps = {
    placeholder: "Text",
    placeholderTextColor: "#697281",
    leftIconColor: "#697281",
    backgroundColor: "#fff",
    isPasswordField: false,
    multilineInput: false
};

module.exports = AppInput;

