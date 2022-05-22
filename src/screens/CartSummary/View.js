import React from 'react';
import {FlatList, Image, ScrollView, StatusBar, View} from 'react-native';

import BaseView from "../BaseView"
import Routes from "../../navigation/Routes";
import {Divider, Text} from "react-native-elements";
import AppConfig from "../../../branding/App_config";
import Styles from "./Styles";
import Globals from "../../utils/Globals";
import {AddressItem} from "../../components/Application/AddressItem/View";
import {CardItem} from "../../components/Application/CardItem/View";
import AppButton from "../../components/Application/AppButton/View";

const colors = AppConfig.colors.default;

export const CartSummary = (props) => {

    const renderCartItems = (item, index) => {
        return (
            <View style={[
                Styles.cartItemContainer,
                index !== Globals.foodItems.length - 1 && {
                    borderBottomWidth: 1,
                    borderBottomColor: colors.borderColorLight
                }
            ]}>

                <Image
                    source={item.image}
                    style={Styles.cartItemLeftImage}
                />

                <View>

                    <Text style={Styles.cartItemNameText}>{item.title}</Text>
                    <Text style={Styles.cartItemWeightText}>{item.weight}</Text>
                </View>

                <Text style={Styles.cartItemPriceText}>{item.price}</Text>

            </View>
        );
    }

    return (

        <BaseView
            navigation={props.navigation}
            title={"Cart Summary"}
            childView={() => {

                return (

                    <View style={Styles.container}>

                        <StatusBar backgroundColor={colors.textColorGrey2} barStyle="dark-content"/>

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{
                                height: "68%",
                            }}
                            contentContainerStyle={{}}
                        >

                            <CardItem
                                isActive={false}
                                item={Globals.paymentMethodItems.cardItems[2]}
                                onPress={() => {
                                }}/>

                            <AddressItem
                                isActive={false}
                                item={Globals.addressItems[1]}
                                onPress={() => {
                                }}
                            />

                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={Globals.foodItems}
                                renderItem={({item, index}) => {
                                    return renderCartItems(item, index)
                                }}
                            />

                        </ScrollView>

                        <View style={Styles.bottomContainer}>

                            <View style={Styles.receiptItemContainer}>
                                <Text style={Styles.boldLabelText}>Subtotal (6) Items:</Text>
                                <Text style={Styles.boldLabelValueText}>$36.45</Text>
                            </View>

                            <Divider style={Styles.receiptItemDivider}/>

                            <View style={Styles.receiptItemContainer}>
                                <Text style={Styles.normalLabelText}>Promotional Discounts:</Text>
                                <Text style={Styles.normalLabelValueText}>-$9.50</Text>
                            </View>

                            <View style={Styles.receiptItemContainer}>
                                <Text style={Styles.normalLabelText}>Delivery Charges:</Text>
                                <Text style={Styles.normalLabelValueText}>$5.00</Text>
                            </View>

                            {/*<View style={Styles.receiptItemContainer}>*/}
                            {/*    <Text style={Styles.subtotalLabelText}>Add Coupon:</Text>*/}
                            {/*    <Text style={{*/}
                            {/*        fontFamily: Fonts.RUBIK_MEDIUM,*/}
                            {/*        fontSize: Typography.P5,*/}
                            {/*        color: colors.textColorBlack1,*/}
                            {/*        flex: 1,*/}
                            {/*        textAlign: "right",*/}
                            {/*    }}>Enter Code Here</Text>*/}
                            {/*</View>*/}

                            <Divider style={Styles.receiptItemDivider}/>

                            <View style={[Styles.receiptItemContainer, {marginBottom: 0}]}>
                                <Text style={Styles.boldLabelText}>Total</Text>
                                <Text style={Styles.boldLabelValueText}>$16.99</Text>
                            </View>


                        </View>


                        <AppButton
                            title={'Place Order'}
                            onPress={() => {
                                props.navigation.navigate(Routes.ORDER_SUCCESS);
                            }}
                        />

                    </View>

                );

            }}

        />

    )

}

