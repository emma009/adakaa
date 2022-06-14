import React from 'react';
import {Button} from "react-native-elements";
import { useColorScheme } from "react-native";
import { useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../../branding/carter/styles/light/Style";

const PropTypes = require('prop-types');

const AppButton = (props) => {


  const scheme = useColorScheme();
  const { colors } = useTheme();
  const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);



  const buttonStyle = props.buttonStyle || globalStyles.primaryButtonStyle;
      const titleStyle = props.titleStyle || globalStyles.primaryButtonTextStyle;
      const title = props.title || "Text"
    const onPress = props.onPress || (() => {})


  return (

        <Button
            buttonStyle={buttonStyle}
            title={title}
            titleStyle={titleStyle}
            onPress={() => {
                onPress()
            }}/>

    )
}

AppButton.propTypes = {

    title: PropTypes.string,

    onPress: PropTypes.func.isRequired,

    buttonStyle: PropTypes.any,

    titleStyle: PropTypes.any,
};

export default AppButton;

