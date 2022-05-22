import React, {useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView"
import {Text} from "react-native-elements";
import AppConfig from "../../../branding/App_config";
import Routes from "../../navigation/Routes";
import Styles from "./Styles";
import assets from "../../../branding/carter/assets/Assets";
import AppButton from "../../components/Application/AppButton/View";

const colors = AppConfig.colors.default;


export const CheckoutPayment = (props) => {

    const [selectedItem, setSelectedItem] = useState({
        isActive: true,
        icon: assets.credit_card_icon,
        type: 'Credit Card',
    })

    const [paymentMethods, setPaymentMethods] = useState([
        {
            isActive: true,
            icon: assets.credit_card_icon,
            type: 'Credit Card',
        },
        {
            isActive: false,
            icon: assets.paypal_icon,
            type: 'Paypal',
        },
        {
            isActive: false,
            icon: assets.apple_icon,
            type: 'Apple Pay',
        },
        {
            isActive: false,
            icon: assets.transaction_icon,
            type: 'Cash on Delivery',
        },
        {
            isActive: false,
            icon: assets.cart_regular_icon,
            type: 'Self Pickup',
        },
    ])

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
                style={[Styles.foodItemContainer, item.isActive && {
                    borderWidth: 1,
                    borderColor: colors.primaryGreenColor
                }]}>


                <View style={{
                    flex: 1, flexDirection: "row",
                    alignItems: "center",
                }}>

                    <Image source={item.icon} style={{
                        width: hp(3),
                        height: hp(3),
                        tintColor: item.isActive ? colors.primaryGreenColor : colors.iconColorGrey1
                    }} resizeMode={"contain"}/>


                    <View style={{marginHorizontal: wp("3"), flexDirection: "row", flex: 1}}>
                        <View>
                            <Text style={Styles.nameTitle}>{item.type}</Text>
                        </View>


                        {
                            item.isActive &&
                            <View style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "flex-end",
                                paddingRight: wp("5")
                            }}>
                                <Image source={assets.check_circle_icon}
                                       style={{width: hp(2.5), height: hp(2.5), tintColor: colors.primaryGreenColor}}
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
            childView={() => {
                return (

                    <View style={{flex: 1}}>
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

