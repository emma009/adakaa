import React from 'react';
import {Image, View} from 'react-native';
import {Divider, Text} from 'react-native-elements';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView";
import Styles from "./Styles";
import AppConfig from "../../../branding/App_config";
import assets from "../../../branding/carter/assets/Assets";
import AppButton from "../../components/Application/AppButton/View";
import Routes from "../../navigation/Routes";
import {StackActions} from "@react-navigation/native";
import Config from "../../../branding/carter/configuration/Config";

const colors = AppConfig.colors.default;

export const TrackOrder = (props) => {

    const renderOrderHeader = () => {
        return <View style={Styles.headerContainer}>

            <View style={Styles.headerLeftIconContainer}>

                <Image source={assets.order_icon} style={Styles.headerLeftIcon}/>

            </View>

            <View>
                <Text style={Styles.headerTitleText}>{"Order # 44698"}</Text>
                <Text style={Styles.subtitleText}>{"Placed on December 15, 2020"}</Text>

                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={Styles.subtitleText}>{"Items: "}</Text>
                    <Text style={[
                        {marginRight: wp(2)},
                        Styles.subtitleValueText
                    ]}>{"10"}</Text>
                    <Text style={Styles.subtitleText}>{"Total: "}</Text>
                    <Text style={Styles.subtitleValueText}>{"$ 16.99"}</Text>
                </View>
            </View>

        </View>
    }

    const renderOrderContent = () => {
        return <View style={Styles.contentContainer}>

            <View style={Styles.orderStatusItemContainer}>
                <View style={Styles.orderStatusLeftContainer}>
                    <View style={[Styles.orderStatusLeftIconContainer, {backgroundColor: colors.secondaryGreenColor}]}>
                        <Image source={assets.order_placed_icon}
                               style={[Styles.orderStatusLeftIcon, {tintColor: colors.primaryGreenColor}]}/>
                    </View>

                    <Divider style={[Styles.orderStatusLine, {backgroundColor: colors.primaryGreenColor}]}/>
                </View>
                <View>
                    <Text style={Styles.orderStatusTitle}>{"Orders Placed"}</Text>
                    <Text style={Styles.orderStatusSubtitle}>{"Dec 10, 2020"}</Text>
                </View>

            </View>

            <View style={Styles.orderStatusItemContainer}>
                <View style={Styles.orderStatusLeftContainer}>
                    <View style={[Styles.orderStatusLeftIconContainer, {backgroundColor: colors.secondaryGreenColor}]}>
                        <Image source={assets.order_confirmed_icon}
                               style={[Styles.orderStatusLeftIcon, {tintColor: colors.primaryGreenColor}]}/>
                    </View>

                    <Divider style={[Styles.orderStatusLine, {backgroundColor: colors.primaryGreenColor}]}/>
                </View>
                <View>
                    <Text style={Styles.orderStatusTitle}>{"Order Confirmed"}</Text>
                    <Text style={Styles.orderStatusSubtitle}>{"Dec 10, 2020"}</Text>
                </View>

            </View>

            <View style={Styles.orderStatusItemContainer}>
                <View style={Styles.orderStatusLeftContainer}>
                    <View style={[Styles.orderStatusLeftIconContainer, {backgroundColor: colors.secondaryGreenColor}]}>
                        <Image source={assets.order_shipped_icon}
                               style={[Styles.orderStatusLeftIcon, {tintColor: colors.primaryGreenColor}]}/>
                    </View>

                    <Divider style={[Styles.orderStatusLine, {backgroundColor: colors.borderColorLight1}]}/>
                </View>
                <View>
                    <Text style={Styles.orderStatusTitle}>{"Order Shipped"}</Text>
                    <Text style={Styles.orderStatusSubtitle}>{"Dec 10, 2020"}</Text>
                </View>

            </View>

            <View style={Styles.orderStatusItemContainer}>
                <View style={Styles.orderStatusLeftContainer}>
                    <View style={[Styles.orderStatusLeftIconContainer, {backgroundColor: colors.textColorGrey2}]}>
                        <Image source={assets.out_for_delivery_icon}
                               style={[Styles.orderStatusLeftIcon, {tintColor: colors.iconColorGrey1}]}/>
                    </View>

                    <Divider style={[Styles.orderStatusLine, {backgroundColor: colors.borderColorLight1}]}/>
                </View>
                <View>
                    <Text style={Styles.orderStatusTitle}>{"Out of Delivery"}</Text>
                    <Text style={Styles.orderStatusSubtitle}>{"Pending"}</Text>
                </View>

            </View>

            <View style={Styles.orderStatusItemContainer}>
                <View style={Styles.orderStatusLeftContainer}>
                    <View style={[Styles.orderStatusLeftIconContainer, {backgroundColor: colors.textColorGrey2}]}>
                        <Image source={assets.order_delivered_icon}
                               style={[Styles.orderStatusLeftIcon, {tintColor: colors.iconColorGrey1}]}/>
                    </View>
                </View>
                <View>
                    <Text style={Styles.orderStatusTitle}>{"Order Delivered"}</Text>
                    <Text style={Styles.orderStatusSubtitle}>{"Pending"}</Text>
                </View>

            </View>

        </View>
    }

    return (

        <BaseView
            navigation={props.navigation}
            title={"Track Order"}
            childView={() => {

                return (

                    <View style={{flex: 1}}>

                        {renderOrderHeader()}

                        {renderOrderContent()}

                        <View style={{flex: 1, justifyContent: "flex-end"}}>

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
