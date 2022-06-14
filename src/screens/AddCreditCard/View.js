import React, { useState } from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-elements";

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { CustomSwitch } from "../../components/Global/CustomSwitch/View";
import AppButton from "../../components/Application/AppButton/View";
import { useTheme } from "@react-navigation/native";
import AppConfig from "../../../branding/App_config";
import { Styles } from "./Styles";

const assets = AppConfig.assets.default;

const creditCardFrontImage = require("./assets/credit_card.png");

export const AddCreditCard = (props) => {

  //Input reference for KeyboardAwareScrollView
  let inputRef = React.createRef();


  //Theme based styling and colors
  const { colors } = useTheme();
  const screenStyles = Styles(colors);


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
              showsVerticalScrollIndicator={false}>

              <View style={screenStyles.mainContainer}>

                <Image
                  source={creditCardFrontImage}
                  style={screenStyles.creditCardImageStyle}
                  resizeMode={"contain"}
                />


                <AppInput
                  textInputRef={r => (inputRef = r)}
                  leftIcon={assets.account_icon}
                  placeholder={"CardHolder Name"}
                  value={name}
                  onChangeText={(name) => {
                    setName(name);
                  }}
                />

                <AppInput
                  textInputRef={r => (inputRef = r)}
                  leftIcon={assets.credit_card_icon}
                  placeholder={"Card Number"}
                  value={cardNumber}
                  onChangeText={(cardNumber) => {
                    setCardNumber(cardNumber);
                  }}
                />

                <View style={screenStyles.horizontalInputsContainer}>

                  <AppInput
                    textInputRef={r => (inputRef = r)}
                    leftIcon={assets.calendar_icon}
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
                    leftIcon={assets.lock_icon}
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
