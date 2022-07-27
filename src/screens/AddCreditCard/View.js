import React, { useState } from "react";
import { Image, useColorScheme, View } from "react-native";
import { Text } from "react-native-elements";

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { CustomSwitch } from "../../components/Global/CustomSwitch/View";
import AppButton from "../../components/Application/AppButton/View";
import { useTheme } from "@react-navigation/native";
import AppConfig from "../../../branding/App_config";
import { Styles } from "./Styles";
import { commonDarkStyles } from "../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../branding/carter/styles/light/Style";
import IconNames from "../../../branding/carter/assets/IconNames";

const assets = AppConfig.assets.default;

const creditCardFrontImage = require("./assets/credit_card.png");

export const AddCreditCard = (props) => {

  //Input reference for KeyboardAwareScrollView
  let inputRef = React.createRef();


  //Theme based styling and colors
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const screenStyles = Styles(colors);
  const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);


  //Internal input field states
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCVV] = useState("");

  return (

    <BaseView
      navigation={props.navigation}
      title={"Add Credit Card"}
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
              contentContainerStyle={screenStyles.parentContainer}
              showsVerticalScrollIndicator={false}>

              <View style={{}}>

                <Image
                  source={creditCardFrontImage}
                  style={screenStyles.creditCardImageStyle}
                  resizeMode={"cover"}
                />


                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.CircleUser}
                  placeholder={"CardHolder Name"}
                  value={name}
                  onChangeText={(name) => {
                    setName(name);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  {...globalStyles.secondaryInputStyle}
                  leftIcon={IconNames.CreditCard}
                  placeholder={"Card Number"}
                  value={cardNumber}
                  onChangeText={(cardNumber) => {
                    setCardNumber(cardNumber);
                  }}
                />

                <View style={screenStyles.horizontalInputsContainer}>

                  <AppInput
                    textInputRef={r => (inputRef = r)}
                    {...globalStyles.secondaryInputStyle}
                    leftIcon={IconNames.Calendar}
                    placeholder={"Expiry"}
                    containerStyle={{
                      flex: 0.48,
                    }}
                    value={expiry}
                    onChangeText={(expiry) => {
                      setExpiry(expiry);
                    }}
                  />

                  <AppInput
                    textInputRef={r => (inputRef = r)}
                    {...globalStyles.secondaryInputStyle}
                    leftIcon={IconNames.LockKeyhole}
                    placeholder={"CVV"}
                    containerStyle={{
                      flex: 0.48,
                    }}
                    value={cvv}
                    onChangeText={(cvv) => {
                      setCVV(cvv);
                    }}
                  />

                </View>

                <View style={screenStyles.switchContainer}>

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
                title={"Add Credit Card"}
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
