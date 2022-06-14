import React, { useRef, useState } from "react";
import { ScrollView, useColorScheme, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import BaseView from "../BaseView";
import { Text } from "react-native-elements";
import Routes from "../../navigation/Routes";
import AppInput from "../../components/Application/AppInput/View";
import { CustomSwitch } from "../../components/Global/CustomSwitch/View";
import Globals from "../../utils/Globals";
import { AddressItem } from "../../components/Application/AddressItem/View";
import AppButton from "../../components/Application/AppButton/View";
import { Styles } from "./Styles";
import { useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../branding/carter/styles/light/Style";
import AppConfig from "../../../branding/App_config";

const assets = AppConfig.assets.default;

export const MyAddress = (props) => {


  //Theme based styling and colors
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const screenStyles = Styles(scheme, colors);
  const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);


  //Internal states
  const [activeSections, setActiveSections] = useState([]);

  //References
  let inputRef = useRef();

  const renderAddressesHeader = (section, index, isActive) => {

    return <AddressItem
      isTouchable={false}
      isActive={isActive}
      showAnimatedIcon
      item={section}
    />;

  };

  const renderAddressesContent = section => {
    return (
      <View style={screenStyles.contentContainer}>


        <AppInput
          textInputRef={r => (inputRef = r)}
          {...globalStyles.secondaryInputStyle}
          leftIcon={assets.account_icon}
          placeholder={"Name"}
          onChangeText={(value) => {
          }}
        />

        <AppInput
          textInputRef={r => (inputRef = r)}
          {...globalStyles.secondaryInputStyle}
          leftIcon={assets.map_marker_icon}
          placeholder={"Address"}
          onChangeText={(value) => {
          }}
        />

        <View style={ screenStyles.horizontalInputsContainer }>


          <AppInput
            textInputRef={r => (inputRef = r)}
            {...globalStyles.secondaryInputStyle}
            leftIcon={assets.map_marker_icon}
            placeholder={"City"}
            containerStyle={screenStyles.horizontalInput}
            onChangeText={(value) => {
            }}
          />


          <AppInput
            textInputRef={r => (inputRef = r)}
            {...globalStyles.secondaryInputStyle}
            leftIcon={assets.mailbox_icon}
            placeholder={"Zip Code"}
            containerStyle={screenStyles.horizontalInput}
            onChangeText={(value) => {
            }}
          />

        </View>


        <AppInput
          textInputRef={r => (inputRef = r)}
          {...globalStyles.secondaryInputStyle}
          leftIcon={assets.globe_icon}
          placeholder={"Country"}
          onChangeText={(value) => {
          }}
        />

        <AppInput
          textInputRef={r => (inputRef = r)}
          {...globalStyles.secondaryInputStyle}
          leftIcon={assets.phone_icon}
          placeholder={"Phone"}
          onChangeText={(value) => {
          }}
        />

        <View style={ screenStyles.defaultContainer }>

          <CustomSwitch
            initialValue={false}
            onValueChange={(value) => {
            }}
          />

          <Text style={screenStyles.defaultText}>{"Make Default"}</Text>
        </View>

      </View>
    );
  };

  const _updateSections = allActiveSections => {
    setActiveSections(allActiveSections);
  };


  return (

    <BaseView
      navigation={props.navigation}
      title={"My Address"}
      rightIcon={assets.plus_circle_icon}
      onRightIconPress={() => {
        props.navigation.navigate(Routes.Add_Address);
      }}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (

          <View style={screenStyles.container}>
            <ScrollView style={ screenStyles.scrollViewContainer }>

              <Accordion
                sections={Globals.addressItems}
                activeSections={activeSections}
                renderHeader={renderAddressesHeader}
                renderContent={renderAddressesContent}
                expandMultiple={false}
                sectionContainerStyle={ screenStyles.containerSpacing }
                onChange={_updateSections}
              />


            </ScrollView>

            <AppButton
              title={"Save Settings"}
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          </View>


        );
      }}
    />

  );
};
