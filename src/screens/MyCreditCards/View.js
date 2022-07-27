import React, {useRef, useState} from 'react';
import { ScrollView, useColorScheme, View } from "react-native";
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Accordion from 'react-native-collapsible/Accordion';
import BaseView from "../BaseView"
import {Text} from "react-native-elements";
import Routes from "../../navigation/Routes";
import { Styles } from "./Styles";
import AppInput from "../../components/Application/AppInput/View";
import {CustomSwitch} from "../../components/Global/CustomSwitch/View";
import AppButton from "../../components/Application/AppButton/View";
import Globals from "../../utils/Globals";
import {CardItem} from "../../components/Application/CardItem/View";
import { useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../branding/carter/styles/light/Style";
import AppConfig from "../../../branding/App_config";
import IconNames from "../../../branding/carter/assets/IconNames";

const assets = AppConfig.assets.default;


export const MyCreditCards = (props) => {

  //Theme based styling and colors
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const screenStyles = Styles(scheme, colors);

  //Internal states
  const [activeSections, setActiveSections] = useState([]);

  //References
    let inputRef = useRef();

    const renderCreditCardsHeader = (section, index, isActive) => {

      if (index === 0) {
        return <View style={screenStyles.creditCardFirstItem}>
          <CardItem
          isTouchable={false}
          showAnimatedIcon
          isActive={isActive}
          item={section}
        />
        </View>
      }
      else if (index === Globals.paymentMethodItems.cardItems.length - 1) {
        return <View style={screenStyles.creditCardLastItem}>
          <CardItem
            isTouchable={false}
            showAnimatedIcon
            isActive={isActive}
            item={section}
          />
        </View>
      }
      else {
        return <CardItem
          isTouchable={false}
          showAnimatedIcon
          isActive={isActive}
          item={section}
        />
      }



    };

    const renderCreditCardsContent = section => {
        return (
            <View style={screenStyles.contentContainer}>

                <AppInput
                    textInputRef= {r => (inputRef = r)}
                    leftIcon={IconNames.CircleUser}
                    placeholder={"Cardholder Name"}
                    onChangeText={(value) => {
                    }}
                />

                <AppInput
                    textInputRef= {r => (inputRef = r)}
                    leftIcon={IconNames.CreditCard}
                    placeholder={"Card Number"}
                    onChangeText={(value) => {
                    }}
                />

                <View style={{flexDirection: "row", justifyContent: "space-between"}}>


                    <AppInput
                        textInputRef= {r => (inputRef = r)}
                        leftIcon={IconNames.Calendar}
                        placeholder={"Expiry"}
                        containerStyle={{
                            flex: 0.48
                        }}
                        onChangeText={(value) => {
                        }}
                    />


                    <AppInput
                        textInputRef= {r => (inputRef = r)}
                        leftIcon={IconNames.LockKeyhole}
                        placeholder={"CVV"}
                        containerStyle={{
                            flex: 0.48
                        }}
                        onChangeText={(value) => {
                        }}
                    />

                </View>
                <View style={{flexDirection: "row", marginTop: hp(1)}}>

                    <CustomSwitch
                        initialValue={section.isDefault}
                        onValueChange={(value) => {
                        }}
                    />

                    <Text style={screenStyles.defaultText}>{"Make Default"}</Text>
                </View>


            </View>
        );
    };

    const _updateSections = allActiveSections => {
        setActiveSections(allActiveSections)
    };

    return (

        <BaseView
            navigation={props.navigation}
            title={"Credit Cards"}
            rightIcon={IconNames.PlusCircle}
            onRightIconPress={() => {
                props.navigation.navigate(Routes.ADD_CREDIT_CARD)
            }}
            headerWithBack
            applyBottomSafeArea
            childView={() => {
                return (

                    <View style={ screenStyles.container }>

                        <ScrollView showsVerticalScrollIndicator={false} style={ screenStyles.scrollViewContainer }>

                            <Accordion
                                sections={Globals.paymentMethodItems.cardItems}
                                activeSections={activeSections}
                                renderHeader={renderCreditCardsHeader}
                                renderContent={renderCreditCardsContent}
                                expandMultiple={false}
                                underlayColor={"transparent"}
                                sectionContainerStyle={screenStyles.containerSpacing}
                                onChange={_updateSections}
                            />

                        </ScrollView>

                      <View style={screenStyles.bottomContainer}>
                        <AppButton
                            title={'Save Settings'}
                            onPress={() => {
                                props.navigation.goBack()
                            }}
                        />

                      </View>

                    </View>


                );
            }}
        />

    );
}
