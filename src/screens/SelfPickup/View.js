import React, { useRef, useState } from "react";
import { useColorScheme, View } from "react-native";
import Routes from "../../navigation/Routes";

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View";
import AppConfig from "../../../branding/App_config";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { InputButton } from "../../components/Application/InputButton/View";
import moment from "moment";
import AppButton from "../../components/Application/AppButton/View";
import { useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../branding/carter/styles/light/Style";
import { Text } from "react-native-elements";
import { Styles } from "./Styles";
import IconNames from "../../../branding/carter/assets/IconNames";


const assets = AppConfig.assets.default;

export const SelfPickup = (props) => {

  //Theme based styling and colors
  const { colors } = useTheme();
  const scheme = useColorScheme();
  const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(colors);


  //Internal States
  const [outlet, setOutlet] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState("");
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [time, setTime] = useState("");


  //References
  let inputRef = useRef();



  return (

    <BaseView
      navigation={props.navigation}
      title={"Self Pickup"}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (

          <View style={screenStyles.container}>

            <View style={screenStyles.mainContainer}>


              <Text style={screenStyles.typeHeader}>{"Details"}</Text>


              <AppInput
                {...globalStyles.secondaryInputStyle}
                textInputRef={r => (inputRef = r)}
                leftIcon={IconNames.Globe}
                placeholder={"Outlet"}
                value={outlet}
                onChangeText={(outlet) => {
                  setOutlet(outlet);
                }}
              />

              <Text style={screenStyles.typeHeader}>{"Schedule"}</Text>

              <InputButton
                leftIcon={IconNames.CalendarAlt}
                text={date ? moment(date).format("YYYY-MM-DD") : "Date"}
                onPress={() => {
                  setShowDatePicker(true);
                }}

              />

              <InputButton
                leftIcon={IconNames.Clock}
                text={time ? moment(time).format("hh:mm A") : "Time"}
                onPress={() => {
                  setShowTimePicker(true);
                }}

              />
            </View>




            <View style={screenStyles.bottomContainer}>

              <AppButton
                title={"Next"}
                onPress={() => {
                  props.navigation.navigate(Routes.CART_SUMMARY);
                }}
              />

            </View>


            <DateTimePickerModal
              isVisible={showTimePicker}
              mode="time"
              date={time || new Date()}
              onConfirm={(value) => {
                const currentTime = value || new Date();
                setTime(currentTime);
                setShowTimePicker(false);

              }}
              onCancel={() => setShowTimePicker(false)}
            />

            <DateTimePickerModal
              isVisible={showDatePicker}
              mode="date"
              date={date || new Date()}
              onConfirm={(value) => {
                const currentDate = value || new Date();
                setDate(currentDate);
                setShowDatePicker(false);
              }}
              onCancel={() => setShowDatePicker(false)}
            />


          </View>

        );


      }}

    />


  );

};

