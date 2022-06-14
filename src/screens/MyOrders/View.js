import React, {useState} from 'react';
import { Animated, Image, ScrollView, useColorScheme, View } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Accordion from 'react-native-collapsible/Accordion';
import BaseView from "../BaseView"
import {Divider, Text} from "react-native-elements";
import { Styles } from "./Styles";
import Easing from "react-native/Libraries/Animated/src/Easing";
import Globals from "../../utils/Globals";
import { useTheme } from "@react-navigation/native";
import AppConfig from "../../../branding/App_config";

const assets = AppConfig.assets.default;

//Animation Constants
const activeAnimConfig = {
  toValue: 1,
  duration: 300,
  easing: Easing.linear,
  useNativeDriver: true,
};

const deActiveAnimConfig = {
  toValue: 0,
  duration: 300,
  easing: Easing.linear,
  useNativeDriver: true,
};
export const MyOrders = (props) => {

  //Theme based styling and colors
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const screenStyles = Styles(scheme, colors);


  //Internal States
  const [activeSections, setActiveSections] = useState([]);

    const renderOrdersHeader = (section, index, isActive) => {

        const spin = section.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg']
        });

        if (isActive) {
            Animated.timing(
                section.spinValue,
                activeAnimConfig
            ).start()
        } else {
            Animated.timing(
                section.spinValue,
                deActiveAnimConfig
            ).start()
        }

        return (
            <View>
                <View style={[screenStyles.headerContainer, isActive && screenStyles.headerContainerActive]}>

                    <View
                        style={[screenStyles.headerLeftIconContainer,
                            section.isOrderDelivered && {backgroundColor: colors.subHeadingTertiaryColor}]}>
                        <Image source={assets.box_open_icon} style={[
                            screenStyles.headerLeftIcon,
                            {tintColor: section.isOrderDelivered ? colors.subHeadingColor : colors.subHeadingSecondaryColor}
                        ]}/>
                    </View>

                    <View>
                        <Text
                            style={[
                                screenStyles.headerTitleText,
                                section.isOrderDelivered && {color: colors.subHeadingColor}
                            ]}>{section.orderNo}</Text>
                        <Text style={screenStyles.headerSubtitleText}>{section.dateTime}</Text>
                        <View style={ screenStyles.itemsHorizontalContainer }>
                            <Text style={screenStyles.headerSubtitleText}>{"Items: "}</Text>
                            <Text style={[
                                {
                                    color: section.isOrderDelivered ? colors.subHeadingColor : colors.headingColor,
                                    marginRight: wp(2)
                                },
                                screenStyles.headerSubtitleValueText
                            ]}>{"10"}</Text>
                            <Text style={screenStyles.headerSubtitleText}>{"Total: "}</Text>
                            <Text style={[
                                {
                                    color: section.isOrderDelivered ? colors.subHeadingColor : colors.headingColor
                                },
                                screenStyles.headerSubtitleValueText
                            ]}>{"$ 16.99"}</Text>


                        </View>


                    </View>

                    <View style={screenStyles.headerRightIconContainer}>
                        <Animated.Image source={assets.drop_down_icon} style={[
                            {transform: [{rotate: spin}]},
                            screenStyles.headerRightIcon
                        ]} resizeMode={"contain"}/>
                    </View>

                </View>

                {
                    section.isOrderDelivered && !isActive &&
                    <View style={screenStyles.headerOrderDeliverContainer}>

                        <View style={screenStyles.headerOrderDeliverCircle}/>

                        <Text style={screenStyles.headerSubtitleText}>{"Order Delivered"}</Text>

                        <Text style={screenStyles.headerOrderDeliverDateText}>{"Dec 10, 2020"}</Text>

                    </View>
                }

            </View>

        );
    };

    const renderOrdersContent = section => {
        return (
            <View style={screenStyles.contentContainerStyle}>

                <View style={screenStyles.contentItemContainer}>
                    <View style={screenStyles.contentItemLeftContainer}>
                        <View
                            style={[
                                screenStyles.contentItemCircle,
                                {
                                    backgroundColor: section.isOrderPlaced ? colors.subHeadingSecondaryColor : colors.subHeadingColor
                                }
                            ]}/>

                        <Divider
                            style={[
                                screenStyles.contentItemLine,
                                {
                                    backgroundColor: section.isOrderPlaced ? colors.subHeadingSecondaryColor : colors.subHeadingColor
                                }
                            ]}/>
                    </View>
                    <Text style={screenStyles.contentItemLeftText}>{"Orders Placed"}</Text>
                    <Text style={screenStyles.contentItemRightText}>{section.orderPlaced}</Text>
                </View>

                <View style={screenStyles.contentItemContainer}>
                    <View style={screenStyles.contentItemLeftContainer}>
                        <View
                            style={[
                                screenStyles.contentItemCircle,
                                {
                                    backgroundColor: section.isOrderConfirmed ? colors.subHeadingSecondaryColor : colors.subHeadingColor
                                }
                            ]}/>

                        <Divider
                            style={[
                                screenStyles.contentItemLine,
                                {
                                    backgroundColor: section.isOrderConfirmed ? colors.subHeadingSecondaryColor : colors.subHeadingColor
                                }
                            ]}/>
                    </View>
                    <Text style={screenStyles.contentItemLeftText}>{"Order Confirmed"}</Text>
                    <Text style={screenStyles.contentItemRightText}>{section.orderConfirmed}</Text>
                </View>

                <View style={screenStyles.contentItemContainer}>
                    <View style={screenStyles.contentItemLeftContainer}>
                        <View
                            style={[
                                screenStyles.contentItemCircle,
                                {
                                    backgroundColor: section.isOrderShipped ? colors.subHeadingSecondaryColor : colors.subHeadingColor
                                }
                            ]}/>

                        <Divider
                            style={[
                                screenStyles.contentItemLine,
                                {
                                    backgroundColor: section.isOrderShipped ? colors.subHeadingSecondaryColor : colors.subHeadingColor
                                }
                            ]}/>
                    </View>
                    <Text style={screenStyles.contentItemLeftText}>{"Order Shipped"}</Text>
                    <Text style={screenStyles.contentItemRightText}>{section.orderShipped}</Text>
                </View>

                <View style={screenStyles.contentItemContainer}>
                    <View style={screenStyles.contentItemLeftContainer}>
                        <View
                            style={[
                                screenStyles.contentItemCircle,
                                {
                                    backgroundColor: section.isOrderOutOfDelivery ? colors.subHeadingSecondaryColor : colors.subHeadingColor
                                }
                            ]}/>

                        <Divider
                            style={[
                                screenStyles.contentItemLine,
                                {
                                    backgroundColor: section.isOrderOutOfDelivery ? colors.subHeadingSecondaryColor : colors.subHeadingColor
                                }
                            ]}/>
                    </View>
                    <Text
                        style={[screenStyles.contentItemLeftText, {color: section.isOrderOutOfDelivery ? colors.headingColor : colors.subHeadingColor}]}>{"Out of Delivery"}</Text>
                    <Text style={[screenStyles.contentItemRightText]}>{section.outOfDelivery}</Text>
                </View>

                <View style={screenStyles.contentItemContainer}>
                    <View style={screenStyles.contentItemLeftContainer}>
                        <View
                            style={[
                                screenStyles.contentItemCircle,
                                {
                                    backgroundColor: section.isOrderDelivered ? colors.subHeadingSecondaryColor : colors.subHeadingColor
                                }
                            ]}/>

                    </View>
                    <Text
                        style={[screenStyles.contentItemLeftText, {color: section.isOrderOutOfDelivery ? colors.headingColor : colors.subHeadingColor}]}>{"Order Delivered"}</Text>
                    <Text style={screenStyles.contentItemRightText}>{section.orderDelivered}</Text>
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
            applyBottomSafeArea
            childView={() => {
                return (
                    <ScrollView>

                        <Accordion
                            sections={Globals.ordersItems}
                            activeSections={activeSections}
                            renderHeader={renderOrdersHeader}
                            renderContent={renderOrdersContent}
                            expandMultiple={false}
                            sectionContainerStyle={ screenStyles.containerSpacing }
                            onChange={_updateSections}
                        />

                    </ScrollView>

                );
            }}

        />
    );

}
