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
import IconNames from "../../../branding/carter/assets/IconNames";

const assets = AppConfig.assets.default;

export const MyAddress = (props) => {


  //Theme based styling and colors
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const screenStyles = Styles(scheme, colors);


  //Internal states
  const [activeSections, setActiveSections] = useState([]);

  //References
  let inputRef = useRef();

  const renderAddressesHeader = (section, index, isActive) => {

    if (index === 0) {
      return <View style={screenStyles.addressFirstItem}>
        <AddressItem
          isTouchable={false}
          isActive={isActive}
          showAnimatedIcon
          item={section}
        />
      </View>
    }
    else if (index === Globals.addressItems.length - 1) {
      return <View style={screenStyles.addressLastItem}>
        <AddressItem
          isTouchable={false}
          isActive={isActive}
          showAnimatedIcon
          item={section}
        />
      </View>
    }
    else {
      return <AddressItem
        isTouchable={false}
        isActive={isActive}
        showAnimatedIcon
        item={section}
      />;
    }



  };

  const renderAddressesContent = section => {
    return (
      <View style={screenStyles.contentContainer}>


        <AppInput
          textInputRef={r => (inputRef = r)}
          leftIcon={IconNames.CircleUser}
          placeholder={"Name"}
          onChangeText={(value) => {
          }}
        />

        <AppInput
          textInputRef={r => (inputRef = r)}
          leftIcon={IconNames.MapMarkerAlt}
          placeholder={"Address"}
          onChangeText={(value) => {
          }}
        />

        <View style={ screenStyles.horizontalInputsContainer }>


          <AppInput
            textInputRef={r => (inputRef = r)}
            leftIcon={IconNames.Map}
            placeholder={"City"}
            containerStyle={screenStyles.horizontalInput}
            onChangeText={(value) => {
            }}
          />


          <AppInput
            textInputRef={r => (inputRef = r)}
            leftIcon={IconNames.Mailbox}
            placeholder={"Zip Code"}
            containerStyle={screenStyles.horizontalInput}
            onChangeText={(value) => {
            }}
          />

        </View>


        <AppInput
          textInputRef={r => (inputRef = r)}
          leftIcon={IconNames.Globe}
          placeholder={"Country"}
          onChangeText={(value) => {
          }}
        />

        <AppInput
          textInputRef={r => (inputRef = r)}
          leftIcon={IconNames.PhoneFlip}
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
      rightIcon={IconNames.PlusCircle}
      onRightIconPress={() => {
        props.navigation.navigate(Routes.Add_Address);
      }}
      headerWithBack
      applyBottomSafeArea
      childView={() => {
        return (

          <View style={screenStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={ screenStyles.scrollViewContainer }>

              <Accordion
                sections={Globals.addressItems}
                activeSections={activeSections}
                renderHeader={renderAddressesHeader}
                renderContent={renderAddressesContent}
                underlayColor={"transparent"}
                expandMultiple={false}
                sectionContainerStyle={ screenStyles.containerSpacing }
                onChange={_updateSections}
              />


            </ScrollView>

            <View style={screenStyles.bottomContainer}>

            <AppButton
              title={"Save Settings"}
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
