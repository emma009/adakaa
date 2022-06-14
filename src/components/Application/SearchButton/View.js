import React from 'react';

import { Image, Text, TouchableOpacity, useColorScheme } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import { Styles } from "./Styles";
import AppConfig from "../../../../branding/App_config";
import { useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../../branding/carter/styles/light/Style";

const assets = AppConfig.assets.default;

export const SearchButton = (props) => {

  //Theme based styling and colors
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, scheme, colors);

    return (

        <TouchableOpacity onPress={props.onPress} style={screenStyles.buttonContainer}>
            <Image source={assets.search_icon}
                   style={screenStyles.leftIcon}
                   resizeMode={"contain"}/>
            <Text style={screenStyles.Text}>Search keywords...</Text>
            <Image source={assets.filter_icon}
                   style={screenStyles.rightIcon}
                   resizeMode={"contain"}/>
        </TouchableOpacity>

    );

}
