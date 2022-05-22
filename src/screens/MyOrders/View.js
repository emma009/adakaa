import React, {useState} from 'react';
import {Animated, Image, ScrollView, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Accordion from 'react-native-collapsible/Accordion';
import BaseView from "../BaseView"
import {Divider, Text} from "react-native-elements";
import AppConfig from "../../../branding/App_config";
import Styles from "./Styles";
import assets from "../../../branding/carter/assets/Assets";
import Easing from "react-native/Libraries/Animated/src/Easing";
import Globals from "../../utils/Globals";

const colors = AppConfig.colors.default;


export const MyOrders = (props) => {

    const [activeSections, setActiveSections] = useState([]);


    const renderOrdersHeader = (section, index, isActive) => {

        const spin = section.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg']
        });

        if (isActive) {
            Animated.timing(
                section.spinValue,
                {
                    toValue: 1,
                    duration: 300,
                    easing: Easing.linear,
                    useNativeDriver: true
                }
            ).start()
        } else {
            Animated.timing(
                section.spinValue,
                {
                    toValue: 0,
                    duration: 300,
                    easing: Easing.linear,
                    useNativeDriver: true
                }
            ).start()
        }


        return (
            <View>
                <View style={[Styles.headerContainer, isActive && Styles.headerContainerActive]}>

                    <View
                        style={[Styles.headerLeftIconContainer,
                            section.isOrderDelivered && {backgroundColor: colors.textColorGrey2}]}>
                        <Image source={assets.box_open_icon} style={[
                            Styles.headerLeftIcon,
                            {tintColor: section.isOrderDelivered ? colors.textColorGrey1 : colors.primaryGreenColor}
                        ]}/>
                    </View>

                    <View>
                        <Text
                            style={[
                                Styles.headerTitleText,
                                section.isOrderDelivered && {color: colors.textColorGrey1}
                            ]}>{section.orderNo}</Text>
                        <Text style={Styles.headerSubtitleText}>{section.dateTime}</Text>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={Styles.headerSubtitleText}>{"Items: "}</Text>
                            <Text style={[
                                {
                                    color: section.isOrderDelivered ? colors.textColorGrey1 : colors.textColorBlack1,
                                    marginRight: wp(2)
                                },
                                Styles.headerSubtitleValueText
                            ]}>{"10"}</Text>
                            <Text style={Styles.headerSubtitleText}>{"Total: "}</Text>
                            <Text style={[
                                {
                                    color: section.isOrderDelivered ? colors.textColorGrey1 : colors.textColorBlack1
                                },
                                Styles.headerSubtitleValueText
                            ]}>{"$ 16.99"}</Text>


                        </View>


                    </View>

                    <View style={Styles.headerRightIconContainer}>
                        <Animated.Image source={assets.drop_down_icon} style={[
                            {transform: [{rotate: spin}]},
                            Styles.headerRightIcon
                        ]} resizeMode={"contain"}/>
                    </View>

                </View>

                {
                    section.isOrderDelivered && !isActive &&
                    <View style={Styles.headerOrderDeliverContainer}>

                        <View style={Styles.headerOrderDeliverCircle}/>

                        <Text style={Styles.headerSubtitleText}>{"Order Delivered"}</Text>

                        <Text style={Styles.headerOrderDeliverDateText}>{"Dec 10, 2020"}</Text>

                    </View>
                }

            </View>

        );
    };

    const renderOrdersContent = section => {
        return (
            <View style={Styles.contentContainerStyle}>

                <View style={Styles.contentItemContainer}>
                    <View style={Styles.contentItemLeftContainer}>
                        <View
                            style={[
                                Styles.contentItemCircle,
                                {
                                    backgroundColor: section.isOrderPlaced ? colors.buttonGreenColor : colors.iconColorGrey1
                                }
                            ]}/>

                        <Divider
                            style={[
                                Styles.contentItemLine,
                                {
                                    backgroundColor: section.isOrderPlaced ? colors.buttonGreenColor : colors.iconColorGrey1
                                }
                            ]}/>
                    </View>
                    <Text style={Styles.contentItemLeftText}>{"Orders Placed"}</Text>
                    <Text style={Styles.contentItemRightText}>{section.orderPlaced}</Text>
                </View>

                <View style={Styles.contentItemContainer}>
                    <View style={Styles.contentItemLeftContainer}>
                        <View
                            style={[
                                Styles.contentItemCircle,
                                {
                                    backgroundColor: section.isOrderConfirmed ? colors.buttonGreenColor : colors.iconColorGrey1
                                }
                            ]}/>

                        <Divider
                            style={[
                                Styles.contentItemLine,
                                {
                                    backgroundColor: section.isOrderConfirmed ? colors.buttonGreenColor : colors.iconColorGrey1
                                }
                            ]}/>
                    </View>
                    <Text style={Styles.contentItemLeftText}>{"Order Confirmed"}</Text>
                    <Text style={Styles.contentItemRightText}>{section.orderConfirmed}</Text>
                </View>

                <View style={Styles.contentItemContainer}>
                    <View style={Styles.contentItemLeftContainer}>
                        <View
                            style={[
                                Styles.contentItemCircle,
                                {
                                    backgroundColor: section.isOrderShipped ? colors.buttonGreenColor : colors.iconColorGrey1
                                }
                            ]}/>

                        <Divider
                            style={[
                                Styles.contentItemLine,
                                {
                                    backgroundColor: section.isOrderShipped ? colors.buttonGreenColor : colors.iconColorGrey1
                                }
                            ]}/>
                    </View>
                    <Text style={Styles.contentItemLeftText}>{"Order Shipped"}</Text>
                    <Text style={Styles.contentItemRightText}>{section.orderShipped}</Text>
                </View>

                <View style={Styles.contentItemContainer}>
                    <View style={Styles.contentItemLeftContainer}>
                        <View
                            style={[
                                Styles.contentItemCircle,
                                {
                                    backgroundColor: section.isOrderOutOfDelivery ? colors.buttonGreenColor : colors.iconColorGrey1
                                }
                            ]}/>

                        <Divider
                            style={[
                                Styles.contentItemLine,
                                {
                                    backgroundColor: section.isOrderOutOfDelivery ? colors.buttonGreenColor : colors.iconColorGrey1
                                }
                            ]}/>
                    </View>
                    <Text
                        style={[Styles.contentItemLeftText, {color: section.isOrderOutOfDelivery ? colors.textColorBlack1 : colors.textColorGrey1}]}>{"Out of Delivery"}</Text>
                    <Text style={[Styles.contentItemRightText]}>{section.outOfDelivery}</Text>
                </View>

                <View style={Styles.contentItemContainer}>
                    <View style={Styles.contentItemLeftContainer}>
                        <View
                            style={[
                                Styles.contentItemCircle,
                                {
                                    backgroundColor: section.isOrderDelivered ? colors.buttonGreenColor : colors.iconColorGrey1
                                }
                            ]}/>

                    </View>
                    <Text
                        style={[Styles.contentItemLeftText, {color: section.isOrderOutOfDelivery ? colors.textColorBlack1 : colors.textColorGrey1}]}>{"Order Delivered"}</Text>
                    <Text style={Styles.contentItemRightText}>{section.orderDelivered}</Text>
                </View>

            </View>
        );
    };

    const _updateSections = allActiveSections => {
        setActiveSections(allActiveSections)
    };

    return (

        <BaseView
            title={"My Orders"}
            navigation={props.navigation}
            showAppHeader={true}
            headerWithBack={!props.hideBack}
            childView={() => {
                return (

                    <ScrollView>

                        <Accordion
                            sections={Globals.ordersItems}
                            activeSections={activeSections}
                            renderHeader={renderOrdersHeader}
                            renderContent={renderOrdersContent}
                            expandMultiple={false}
                            sectionContainerStyle={{marginBottom: hp("1")}}
                            onChange={_updateSections}
                        />

                    </ScrollView>

                );
            }}
        />

    );

}
