import React, {Component} from 'react';

import {Icon} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import TextInput from "../../Global/TextInput/View";
import {ViewPropTypes} from "react-native";

const PropTypes = require('prop-types');

class AppInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            placeholder,
            placeholderTextColor,
            onChangeText,
            leftIcon,
            leftIconColor,
            isPasswordField,
            backgroundColor,
            value,
            multiline,
            keyboardType
        } = this.props;


        return (

            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                leftIcon={
                    <Icon
                        name={leftIcon}
                        type='font-awesome'
                        size={15}
                        color={leftIconColor}
                    />}
                containerStyle={[
                    {
                        backgroundColor: backgroundColor,
                        marginVertical: hp("0.5"),
                    },
                    multiline && {height: hp("30")},

                    ]}
                leftIconContainerStyle={{
                    paddingRight: wp('5')
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

    multiline: PropTypes.bool,

    keyboardType:PropTypes.string
};

AppInput.defaultProps = {
    placeholder: "Text",
    placeholderTextColor: "#697281",
    leftIconColor: "#697281",
    backgroundColor: "#fff",
    isPasswordField: false,
    multiline: false
};

module.exports = AppInput;

