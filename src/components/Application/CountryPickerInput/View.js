import React, { useState } from "react";
import { Image, TouchableOpacity, useColorScheme, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../../branding/carter/styles/light/Style";
import AppInput from "../AppInput/View";
import CountryPicker from "react-native-country-picker-modal";
import { Text } from "react-native-elements";
import AppConfig from "../../../../branding/App_config";
import { Styles } from "./Styles";
import { SvgIcon } from "../SvgIcon/View";
import IconNames from "../../../../branding/carter/assets/IconNames";

const PropTypes = require("prop-types");


const assets = AppConfig.assets.default;


export const CountryPickerInput = (props) => {


  const scheme = useColorScheme();
  const { colors } = useTheme();
  const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);
  const itemStyles = Styles(globalStyles, scheme, colors);

  const [openCountryPicker, setOpenCountryPicker] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    callingCode: "354",
    flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAMAAABpA6zvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAFFQTFRFADiXBDuYACuQVXi3////4W5v1R0dBz6aAC6SV3q4WHq4BC6SAB6JVXCz4W1vSnCzjaLL4m1u1R4e4m5u/vz85HBw5XV120BA1iQk1ykpjqLMkEWlzwAAAAFiS0dEBI9o2VEAAAAJcEhZcwAAAEgAAABIAEbJaz4AAACQSURBVDjL7dLRCoQgEAXQUccprTR1K9v//9ANwgqURdinYs/LvFy4zChAwrhASSRRcAbf/IM/BVnStGoP6rZhOeBJ1w9oiAwOfcdzIBJlR3TeBxytEjnA0wsnomkbJSAPxs1LjMvsjCwAOnmK6xq3UVIfvFSHvTqUq6uXOfbX6Txvq0vnqT549RPe4T8+KfgBgwQOT3egtFcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTMtMTAtMDdUMTM6MTQ6MzIrMDI6MDCAJh3/AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDEzLTEwLTA3VDEzOjE0OjMyKzAyOjAw8XulQwAAAABJRU5ErkJggg==",
    name: "Iceland",
  });

  const [phone, setPhone] = useState("");


  return (
    <View style={[itemStyles.mainContainer, props.containerStyle]}>

      <TouchableOpacity
        style={itemStyles.leftContainer}
        onPress={() => {
          setOpenCountryPicker(true);
        }}
      >


        <Image
          source={{ uri: selectedCountry.flag }}
          style={itemStyles.flagImage} />

        <Text style={itemStyles.callingCode}>{"+" + selectedCountry.callingCode}</Text>

        <SvgIcon type={IconNames.ChevronDown} width={15} height={15} color={colors.inputColor} />


      </TouchableOpacity>

      <AppInput
        {...props}
        {...globalStyles.secondaryInputStyle}
        containerStyle={itemStyles.inputContainerStyle}
        rightIconSource={IconNames.CircleXMark}
        showLeftIcon={false}
        rightIconPress={() => {
          setPhone("");
        }}
        keyboardType={"number-pad"}
        placeholder={"  Phone"}
        value={phone}
        onChangeText={(phone) => {
          setPhone(phone);
        }} />

      <CountryPicker
        visible={openCountryPicker}
        withCallingCode
        withFlag
        withCountryNameButton
        onClose={() => {
          setOpenCountryPicker(false);
        }}
        onSelect={(country) => {
          setSelectedCountry(country);
        }}
      />


    </View>

  );
};

CountryPickerInput.propTypes = {

  title: PropTypes.string,

  onPress: PropTypes.func.isRequired,

  buttonStyle: PropTypes.any,

  titleStyle: PropTypes.any,

};
