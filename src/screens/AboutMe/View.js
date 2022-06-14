import React, { useRef, useState } from "react";
import { View } from "react-native";

import BaseView from "../BaseView";
import { Text } from "react-native-elements";
import { Styles } from "./Styles";
import AppInput from "../../components/Application/AppInput/View";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import AppButton from "../../components/Application/AppButton/View";
import { useTheme } from "@react-navigation/native";
import AppConfig from "../../../branding/App_config";

const assets = AppConfig.assets.default;


export const AboutMe = (props) => {

  //Input reference for KeyboardAwareScrollView
  let inputRef = useRef();

  //Theme based styling and colors
  const { colors } = useTheme();
  const screenStyles = Styles(colors);


  //Internal input field states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  return (

    <BaseView
      navigation={props.navigation}
      title={"About Me"}
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

                <Text style={screenStyles.typeHeader}>{"Personal Details"}</Text>

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
                  onChangeText={(email) => {
                    setEmail(email);
                  }}
                  keyboardType={"email-address"}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  leftIcon={assets.phone_icon}
                  placeholder={"Phone"}
                  value={phone}
                  onChangeText={(phone) => {
                    setPhone(phone);
                  }}
                  keyboardType={"phone-pad"}
                />

                <Text style={screenStyles.typeHeader}>{"Change Password"}</Text>

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  leftIcon={assets.lock_icon}
                  placeholder={"Current Password"}
                  isPasswordField
                  value={currentPassword}
                  onChangeText={(currentPassword) => {
                    setCurrentPassword(currentPassword);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  leftIcon={assets.lock_icon}
                  placeholder={"Password"}
                  isPasswordField
                  value={newPassword}
                  onChangeText={(newPassword) => {
                    setNewPassword(newPassword);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  leftIcon={assets.lock_icon}
                  placeholder={"Confirm Password"}
                  isPasswordField
                  value={confirmPassword}
                  onChangeText={(confirmPassword) => {
                    setConfirmPassword(confirmPassword);
                  }}
                />


              </View>

            </KeyboardAwareScrollView>

            <View style={screenStyles.bottomButton}>

              <AppButton
                title={"Save Changes"}
                onPress={() => {

                }}
              />

            </View>


          </View>


        );
      }}
    />

  );

};
