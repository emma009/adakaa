import React from 'react';
import { Image, useColorScheme, View } from "react-native";
import {Divider, Text} from 'react-native-elements';

import BaseView from "../BaseView";
import { Styles } from "./Styles";
import AppConfig from "../../../branding/App_config";
import AppButton from "../../components/Application/AppButton/View";
import Routes from "../../navigation/Routes";
import { StackActions, useTheme } from "@react-navigation/native";
import Config from "../../../branding/carter/configuration/Config";

const assets = AppConfig.assets.default;

export const TrackOrder = (props) => {

    //Theme based styling and colors
    const scheme = useColorScheme();
    const { colors } = useTheme();
    const screenStyles = Styles(scheme, colors);


    const renderOrderHeader = () => {
        return <View style={screenStyles.headerContainer}>

            <View style={screenStyles.headerLeftIconContainer}>

                <Image source={assets.order_icon} style={screenStyles.headerLeftIcon}/>

            </View>

            <View>
                <Text style={screenStyles.headerTitleText}>{"Order # 44698"}</Text>
                <Text style={screenStyles.subtitleText}>{"Placed on December 15, 2020"}</Text>

                <View style={screenStyles.itemsHorizontalContainer}>
                    <Text style={screenStyles.subtitleText}>{"Items: "}</Text>
                    <Text style={[
                        screenStyles.subtitleValueText
                    ]}>{"10"}</Text>
                    <Text style={screenStyles.subtitleText}>{"Total: "}</Text>
                    <Text style={screenStyles.subtitleValueText}>{"$ 16.99"}</Text>
                </View>
            </View>

        </View>
    }

    const renderOrderContent = () => {
        return <View style={screenStyles.contentContainer}>

            <View style={screenStyles.orderStatusItemContainer}>
                <View style={screenStyles.orderStatusLeftContainer}>
                    <View style={[screenStyles.orderStatusLeftIconContainer, {backgroundColor: colors.tertiaryBackground}]}>
                        <Image source={assets.order_placed_icon}
                               style={[screenStyles.orderStatusLeftIcon, {tintColor: colors.activeColor}]}/>
                    </View>

                    <Divider style={[screenStyles.orderStatusLine, {backgroundColor: colors.activeColor}]}/>
                </View>
                <View>
                    <Text style={screenStyles.orderStatusTitle}>{"Orders Placed"}</Text>
                    <Text style={screenStyles.orderStatusSubtitle}>{"Dec 10, 2020"}</Text>
                </View>

            </View>

            <View style={screenStyles.orderStatusItemContainer}>
                <View style={screenStyles.orderStatusLeftContainer}>
                    <View style={[screenStyles.orderStatusLeftIconContainer, {backgroundColor: colors.tertiaryBackground}]}>
                        <Image source={assets.order_confirmed_icon}
                               style={[screenStyles.orderStatusLeftIcon, {tintColor: colors.activeColor}]}/>
                    </View>

                    <Divider style={[screenStyles.orderStatusLine, {backgroundColor: colors.activeColor}]}/>
                </View>
                <View>
                    <Text style={screenStyles.orderStatusTitle}>{"Order Confirmed"}</Text>
                    <Text style={screenStyles.orderStatusSubtitle}>{"Dec 10, 2020"}</Text>
                </View>

            </View>

            <View style={screenStyles.orderStatusItemContainer}>
                <View style={screenStyles.orderStatusLeftContainer}>
                    <View style={[screenStyles.orderStatusLeftIconContainer, {backgroundColor: colors.tertiaryBackground}]}>
                        <Image source={assets.order_shipped_icon}
                               style={[screenStyles.orderStatusLeftIcon, {tintColor: colors.activeColor}]}/>
                    </View>

                    <Divider style={[screenStyles.orderStatusLine, {backgroundColor: colors.activeColor}]}/>
                </View>
                <View>
                    <Text style={screenStyles.orderStatusTitle}>{"Order Shipped"}</Text>
                    <Text style={screenStyles.orderStatusSubtitle}>{"Dec 10, 2020"}</Text>
                </View>

            </View>

            <View style={screenStyles.orderStatusItemContainer}>
                <View style={screenStyles.orderStatusLeftContainer}>
                    <View style={[screenStyles.orderStatusLeftIconContainer, {backgroundColor: colors.inputSecondaryBackground}]}>
                        <Image source={assets.out_for_delivery_icon}
                               style={[screenStyles.orderStatusLeftIcon, {tintColor: colors.switchBorder}]}/>
                    </View>

                    <Divider style={[screenStyles.orderStatusLine, {backgroundColor: colors.borderColorLight}]}/>
                </View>
                <View>
                    <Text style={screenStyles.orderStatusTitle}>{"Out of Delivery"}</Text>
                    <Text style={screenStyles.orderStatusSubtitle}>{"Pending"}</Text>
                </View>

            </View>

            <View style={screenStyles.orderStatusItemContainer}>
                <View style={screenStyles.orderStatusLeftContainer}>
                    <View style={[screenStyles.orderStatusLeftIconContainer, {backgroundColor: colors.inputSecondaryBackground}]}>
                        <Image source={assets.order_delivered_icon}
                               style={[screenStyles.orderStatusLeftIcon, {tintColor: colors.switchBorder}]}/>
                    </View>
                </View>
                <View>
                    <Text style={screenStyles.orderStatusTitle}>{"Order Delivered"}</Text>
                    <Text style={screenStyles.orderStatusSubtitle}>{"Pending"}</Text>
                </View>

            </View>

        </View>
    }

    return (

        <BaseView
            navigation={props.navigation}
            title={"Track Order"}
            headerWithBack
            applyBottomSafeArea
            childView={() => {

                return (

                    <View style={screenStyles.container}>

                        {renderOrderHeader()}

                        {renderOrderContent()}

                        <View style={screenStyles.bottomContainer}>

                            <AppButton
                                title={'Go Back'}
                                onPress={() => {
                                    props.navigation.dispatch(
                                        StackActions.replace(Config.SELECTED_VARIANT === Routes.INTRO_SCREEN1 ?
                                        Routes.HOME_VARIANT1 : Config.SELECTED_VARIANT === Routes.INTRO_SCREEN1 ?
                                        Routes.HOME_VARIANT2 :
                                        Routes.HOME_VARIANT3)
                                    );
                                }}
                            />

                        </View>
                    </View>
                );

            }}

        />

    );

}
