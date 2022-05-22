import React from 'react';

import {Image, Text, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Styles from "./Assets/Styles/Styles";
import AppConfig from "../../../../branding/App_config";

const colors = AppConfig.colors.default;


export const InputButton = (props) => {

    return (

        <TouchableOpacity onPress={props.onPress} style={Styles.buttonContainer}>
            <Image source={props.leftIcon}
                   style={{
                       width: hp(2),
                       height: hp(2),
                       tintColor: colors.iconColorGrey1,
                       marginLeft: wp(5)
                   }}
                   resizeMode={"contain"}/>
            <Text style={Styles.Text}>{props.text}</Text>
        </TouchableOpacity>

    );

}
