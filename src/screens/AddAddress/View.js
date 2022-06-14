import React, { useRef, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View";
import AppButton from "../../components/Application/AppButton/View";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { CustomSwitch } from "../../components/Global/CustomSwitch/View";
import { Styles } from "./Styles";
import { useTheme } from "@react-navigation/native";
import AppConfig from "../../../branding/App_config";

const assets = AppConfig.assets.default;


export const AddAddress = (props) => {

  //Input reference for KeyboardAwareScrollView
  let inputRef = useRef();

  //Theme based styling and colors
  const { colors } = useTheme();
  const screenStyles = Styles(colors);


  //Internal input field states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");


  return (

    <BaseView
      navigation={props.navigation}
      title={"Add Address"}
      headerWithBack
      applyBottomSafeArea
      childView={() => {

        return (

          <View style={screenStyles.mainContainer}>

            <KeyboardAwareScrollView
              keyboardShouldPersistTaps={"never"}
              getTextInputRefs={() => {
                return [inputRef];
              }}
              showsVerticalScrollIndicator={false}>

              <View style={screenStyles.mainContainer}>

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  leftIcon={assets.account_icon}
                  placeholder={"Name"}
                  value={name}
                  onChangeText={(name) => {
                    setName(name);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  leftIcon={assets.envelop_icon}
                  placeholder={"Email Address"}
                  value={email}
                  keyboardType={"email-address"}
                  onChangeText={(email) => {
                    setEmail(email);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  leftIcon={assets.phone_icon}
                  placeholder={"Phone"}
                  value={phone}
                  keyboardType={"phone-pad"}
                  onChangeText={(phone) => {
                    setPhone(phone);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  leftIcon={assets.map_marker_icon}
                  placeholder={"Address"}
                  value={address}
                  onChangeText={(address) => {
                    setAddress(address);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  leftIcon={assets.mailbox_icon}
                  placeholder={"Zip code"}
                  value={zipCode}
                  onChangeText={(zipCode) => {
                    setZipCode(zipCode);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  leftIcon={assets.map_icon}
                  placeholder={"City"}
                  value={city}
                  onChangeText={(city) => {
                    setCity(city);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  leftIcon={assets.globe_icon}
                  placeholder={"Country"}
                  value={country}
                  onChangeText={(country) => {
                    setCountry(country);
                  }}
                />

                <View style={ screenStyles.switchContainer }>

                  <CustomSwitch
                    initialValue={false}
                    onValueChange={(value) => {

                    }}
                  />

                  <Text style={screenStyles.defaultText}>{"Make Default"}</Text>
                </View>
              </View>


            </KeyboardAwareScrollView>


            <View style={screenStyles.bottomButton}>

              <AppButton
                title={"Add Address"}
                onPress={() => {
                  props.navigation.goBack();
                }}
              />

            </View>


          </View>


        );


      }}

    />


  );
};
