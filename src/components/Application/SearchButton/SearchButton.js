import React from 'react';

import {Image, Text, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Styles from "./Assets/Styles/Styles";
import AppConfig from "../../../../branding/App_config";

const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;

export const SearchButton = (props) => {

    return (

        <TouchableOpacity onPress={props.onPress} style={Styles.buttonContainer}>
            <Image source={assets.search_icon}
                   style={{
                       width: hp(2),
                       height: hp(2), tintColor: colors.iconColorGrey1, marginLeft: wp(5)
                   }}
                   resizeMode={"contain"}/>
            <Text style={Styles.Text}>Search keywords...</Text>
            <Image source={assets.filter_icon}
                   style={{
                       width: hp(2),
                       height: hp(2), tintColor: colors.iconColorGrey1, position: "absolute", right: wp(5)
                   }}
                   resizeMode={"contain"}/>
        </TouchableOpacity>

    );

}
