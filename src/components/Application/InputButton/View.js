import React from 'react';
import { Image, Text, TouchableOpacity, useColorScheme } from "react-native";
import { Styles } from "./Styles";
import { useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../../branding/carter/styles/light/Style";

export const InputButton = (props) => {

  //Theme based styling and colors
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);

  const itemStyles = Styles(scheme, globalStyles, colors);


    return (
        <TouchableOpacity onPress={props.onPress} style={itemStyles.buttonContainer}>
            <Image source={props.leftIcon}
                   style={itemStyles.leftIcon}
                   resizeMode={"contain"}/>
            <Text style={itemStyles.Text}>{props.text}</Text>
        </TouchableOpacity>
    );

}
