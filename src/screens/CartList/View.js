import React from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import BaseView from "../BaseView"
import Routes from "../../navigation/Routes";
import {CartItem} from "../../components/Application/CartItem/View";
import {Divider, Text} from "react-native-elements";
import AppConfig from "../../../branding/App_config";
import Styles from "./Styles";
import Globals from "../../utils/Globals";
import AppButton from "../../components/Application/AppButton/View";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

export const CartList = (props) => {

    return (

        <View style={Styles.mainContainer}>

            <StatusBar backgroundColor={colors.textColorGrey2} barStyle="dark-content" />
            <View style={[Styles.flatListContainer]}>
                <BaseView
                    showAppHeader={true}
                    title={"Shopping Cart"}
                    headerWithBack={false}
                    applyBottomSafeArea={false}
                    navigation={props.navigation}
                    childView={() => {

                        return (

                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={Globals.foodItems}
                                renderItem={({ item }) =>
                                    <CartItem
                                        title={item.title}
                                        image={item.image}
                                        bigImage={item.bigImage}
                                        price={item.price}
                                        weight={item.weight}
                                        discount={item.discount}
                                        cartCount={item.cartCount}
                                        cartCountChange={(count) => { console.log(count) }}
                                        navigation={props.navigation}
                                    />
                                }
                            />

                        );

                    }}

                />
            </View>

            <View style={Styles.bottomContainer}>

                <View style={Styles.totalContainer}>
                    <Text style={Styles.subtotalLabelText}>SubTotal</Text>
                    <Text style={Styles.subtotalValueText}>$16.99</Text>
                </View>

                <View style={Styles.totalContainer}>
                    <Text style={Styles.subtotalLabelText}>Shipping</Text>
                    <Text style={Styles.subtotalValueText}>$16.99</Text>
                </View>

                <Divider style={{
                    width: styles.gridWidth,
                    height: 1,
                    alignSelf: "center",
                    marginBottom: hp("1"),
                    backgroundColor: colors.borderColorLight}} />

                <View style={Styles.totalContainer}>
                    <Text style={Styles.totalLabelText}>Total</Text>
                    <Text style={Styles.totalValueText}>$16.99</Text>
                </View>

                <AppButton
                    title={'Checkout'}
                    onPress={() => {
                        props.navigation.navigate(Routes.CHECKOUT_DELIVERY)
                    }}
                />

            </View>
        </View>

    )

}
