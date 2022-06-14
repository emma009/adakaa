import React from 'react';
import { FlatList, useColorScheme, View } from "react-native";

import BaseView from "../BaseView"
import Routes from "../../navigation/Routes";
import {CartItem} from "../../components/Application/CartItem/View";
import {Divider, Text} from "react-native-elements";
import { Styles } from "./Styles";
import Globals from "../../utils/Globals";
import AppButton from "../../components/Application/AppButton/View";
import { useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../branding/carter/styles/light/Style";

export const CartList = (props) => {

  //Theme based styling and colors
  const { colors } = useTheme();
  const scheme = useColorScheme();
  const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, colors);

    return (

        <View style={screenStyles.mainContainer}>

            <View style={[screenStyles.flatListContainer]}>
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
                                        cartCountChange={(count) => {  }}
                                        navigation={props.navigation}
                                    />
                                }
                            />

                        );

                    }}

                />
            </View>

            <View style={screenStyles.bottomContainerParent}>
              <View style={screenStyles.bottomContainer}>

                <View style={screenStyles.totalContainer}>
                  <Text style={screenStyles.subtotalLabelText}>SubTotal</Text>
                  <Text style={screenStyles.subtotalValueText}>$16.99</Text>
                </View>

                <View style={screenStyles.totalContainer}>
                  <Text style={screenStyles.subtotalLabelText}>Shipping</Text>
                  <Text style={screenStyles.subtotalValueText}>$16.99</Text>
                </View>

                <Divider style={screenStyles.horizontalDivider} />

                <View style={screenStyles.totalContainer}>
                  <Text style={screenStyles.totalLabelText}>Total</Text>
                  <Text style={screenStyles.totalValueText}>$16.99</Text>
                </View>

                <AppButton
                  title={'Checkout'}
                  onPress={() => {
                    props.navigation.navigate(Routes.CHECKOUT_DELIVERY)
                  }}
                />

              </View>
            </View>
        </View>

    )

}
