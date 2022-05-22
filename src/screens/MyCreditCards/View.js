import React, {useRef, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Accordion from 'react-native-collapsible/Accordion';
import BaseView from "../BaseView"
import {Text} from "react-native-elements";
import AppConfig from "../../../branding/App_config";
import Routes from "../../navigation/Routes";
import Styles from "./Styles";
import AppInput from "../../components/Application/AppInput/View";
import assets from "../../../branding/carter/assets/Assets";
import {CustomSwitch} from "../../components/Global/CustomSwitch/View";
import AppButton from "../../components/Application/AppButton/View";
import Globals from "../../utils/Globals";
import {CardItem} from "../../components/Application/CardItem/View";

const styles = AppConfig.styling.default;


export const MyCreditCards = (props) => {

    const [activeSections, setActiveSections] = useState([]);

    let inputRef = useRef();

    const renderCreditCardsHeader = (section, index, isActive) => {

        return <CardItem
            isTouchable={false}
            showAnimatedIcon
            isActive={isActive}
            item={section}
        />

    };

    const renderCreditCardsContent = section => {
        return (
            <View style={Styles.contentContainer}>

                <AppInput
                    textInputRef= {r => (inputRef = r)}
                    {...styles.secondaryInputStyle}
                    leftIcon={assets.account_icon}
                    placeholder={"Cardholder Name"}
                    onChangeText={(value) => {
                    }}
                />

                <AppInput
                    textInputRef= {r => (inputRef = r)}
                    {...styles.secondaryInputStyle}
                    leftIcon={assets.credit_card_icon}
                    placeholder={"Card Number"}
                    onChangeText={(value) => {
                    }}
                />

                <View style={{flexDirection: "row", justifyContent: "space-between"}}>


                    <AppInput
                        textInputRef= {r => (inputRef = r)}
                        {...styles.secondaryInputStyle}
                        leftIcon={assets.calendar_icon}
                        placeholder={"Expiry"}
                        containerStyle={{
                            flex: 0.48
                        }}
                        onChangeText={(value) => {
                        }}
                    />


                    <AppInput
                        textInputRef= {r => (inputRef = r)}
                        {...styles.secondaryInputStyle}
                        leftIcon={assets.lock_icon}
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

                    <Text style={Styles.defaultText}>{"Make Default"}</Text>
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
            rightIcon={assets.plus_circle_icon}
            onRightIconPress={() => {
                props.navigation.navigate(Routes.ADD_CREDIT_CARD)
            }}
            childView={() => {
                return (

                    <View style={{flex: 1}}>

                        <ScrollView style={{flex: 0.9}}>

                            <Accordion
                                sections={Globals.paymentMethodItems.cardItems}
                                activeSections={activeSections}
                                renderHeader={renderCreditCardsHeader}
                                renderContent={renderCreditCardsContent}
                                expandMultiple={false}
                                sectionContainerStyle={{marginBottom: hp("1")}}
                                onChange={_updateSections}
                            />


                        </ScrollView>

                        <AppButton
                            title={'Save Settings'}
                            onPress={() => {
                                props.navigation.goBack()
                            }}
                        />

                    </View>


                );
            }}
        />

    );
}
