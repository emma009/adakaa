import React, {useState} from 'react';
import { FlatList, Image, TouchableOpacity, useColorScheme, View } from "react-native";

import BaseView from "../BaseView"
import {Text} from "react-native-elements";
import Routes from "../../navigation/Routes";
import { Styles } from "./Styles";
import AppButton from "../../components/Application/AppButton/View";
import { useTheme } from "@react-navigation/native";
import Globals from "../../utils/Globals";
import AppConfig from "../../../branding/App_config";

const assets = AppConfig.assets.default;


export const CheckoutPayment = (props) => {

    //Theme based styling and colors
    const scheme = useColorScheme();
    const { colors } = useTheme();
    const screenStyles = Styles(scheme, colors);

    //Internal states
    const [selectedItem, setSelectedItem] = useState(Globals.paymentMethodItems.paymentMethods[0])
    const [paymentMethods, setPaymentMethods] = useState(Globals.paymentMethodItems.paymentMethods)

    const renderPaymentMethodItem = (item, index) => {
        return (
            <TouchableOpacity
                onPress={() => {

                    setPaymentMethods((paymentMethods) => {
                        paymentMethods.map(paymentMethod => paymentMethod.isActive = false)

                        paymentMethods[index].isActive = true;
                        setSelectedItem(paymentMethods[index])

                        return [...paymentMethods];
                    })

                }}
                style={[screenStyles.paymentMethodItemParentContainer, item.isActive && {
                    borderWidth: 1,
                    borderColor: colors.activeColor
                }]}>

                <View style={screenStyles.paymentMethodItemContainer}>

                    <Image source={item.icon} style={[
                      screenStyles.icon, {
                        tintColor: item.isActive ? colors.activeColor : colors.inactiveColor
                    }]} resizeMode={"contain"}/>


                    <View style={screenStyles.nameContainer}>
                        <View>
                            <Text style={screenStyles.nameTitle}>{item.type}</Text>
                        </View>


                        {
                            item.isActive &&
                            <View style={screenStyles.rightIconContainer}>
                                <Image source={assets.check_circle_icon}
                                       style={screenStyles.icon}
                                       resizeMode={"contain"}/>
                            </View>
                        }

                    </View>
                </View>


            </TouchableOpacity>
        );
    }

    const onPaymentMethodPress = () => {

        if (selectedItem.type === "Credit Card" || selectedItem.type === "Apple Pay") {
            props.navigation.navigate(Routes.CHECKOUT_SELECT_CARD)
        } else if (selectedItem.type === "Paypal") {
            props.navigation.navigate(Routes.CHECKOUT_SELECT_ACCOUNT)
        } else if (selectedItem.type === "Self Pickup") {
            props.navigation.navigate(Routes.SELF_PICKUP)
        } else {
            props.navigation.navigate(Routes.CART_SUMMARY)
        }
    }


    return (

        <BaseView
            navigation={props.navigation}
            title={"Payment Method"}
            headerWithBack
            applyBottomSafeArea
            childView={() => {
                return (

                    <View style={screenStyles.container}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={paymentMethods}
                            renderItem={({item, index}) => {

                                return renderPaymentMethodItem(item, index)

                            }}
                        />

                        <AppButton
                            title={'Next'}
                            onPress={() => {
                                onPaymentMethodPress()

                            }}
                        />

                    </View>

                );
            }}
        />

    );
}

