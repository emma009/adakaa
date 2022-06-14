import React from 'react';
import {Image, View} from 'react-native';

import BaseView from "../BaseView"
import {Text} from "react-native-elements";
import Routes from "../../navigation/Routes";
import AppButton from "../../components/Application/AppButton/View";
import { useTheme } from "@react-navigation/native";
import AppConfig from "../../../branding/App_config";
import {Styles} from "./Styles"

const assets = AppConfig.assets.default;


export const OrderSuccess = (props) => {

  const { colors } = useTheme();
  const screenStyles = Styles(colors);

    return (

        <BaseView
            navigation={props.navigation}
            title={"Order Success"}
            headerWithBack
            applyBottomSafeArea
            childView={() => {
                return (

                    <View style={screenStyles.container}>


                        <View style={screenStyles.mainContainer}>

                            <Image
                                source={assets.cart_regular_icon}
                                style={screenStyles.cartIcon}/>

                            <Text style={screenStyles.titleText}>Your Order was successful!</Text>

                            <Text style={screenStyles.subtitleText}>You'll get a response within a few minutes</Text>

                        </View>

                        <View style={{flex: 0.1, justifyContent: "flex-end"}}>
                            <AppButton
                                title={'Track Order'}
                                onPress={() => {
                                    props.navigation.navigate(Routes.TRACK_ORDERS)
                                }}
                            />
                        </View>

                    </View>

                );
            }}
        />

    );

}
