import React, {Component} from 'react';
import {Animated, FlatList, Image, ScrollView, View, ViewComponent} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Accordion from 'react-native-collapsible/Accordion';
import BaseView from "../BaseView"
import {Button, Divider, Icon, Text} from "react-native-elements";
import AppConfig from "../../../branding/App_config";
import Routes from "../../navigation/Routes";
import ShippingAddress from "../../components/Application/ShippingProgress/View"
import Styles from "./Styles";
import AppInput from "../../components/Application/AppInput/View";
import Counter from "../../components/Global/Counter/View";
import Swipeable from "react-native-gesture-handler/Swipeable";
import fonts from "../../../branding/carter/assets/Fonts";
import Typography from "../../../branding/carter/styles/Typography";
import assets from "../../../branding/carter/assets/Assets";
import Easing from "react-native/Libraries/Animated/src/Easing";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;


const orders = [
    {
        title: 'First',
        orderNo: "Order # 44 698",
        dateTime: "Placed on December 15, 2020",
        items: '10',
        total: '$16.99',

        isOrderPlaced: true,
        orderPlaced: "Dec 10, 2020",
        isOrderConfirmed: true,
        orderConfirmed: "Dec 10, 2020",
        isOrderShipped: true,
        orderShipped: "Dec 10, 2020",
        isOrderOutOfDelivery: false,
        outOfDelivery: "Pending",
        isOrderDelivered: false,
        orderDelivered: "Pending",

        spinValue: new Animated.Value(0)
    },
    {
        title: 'First',
        orderNo: "Order # 44 698",
        dateTime: "Placed on December 15, 2020",
        items: '10',
        total: '$16.99',

        isOrderPlaced: true,
        orderPlaced: "Dec 10, 2020",
        isOrderConfirmed: true,
        orderConfirmed: "Dec 10, 2020",
        isOrderShipped: true,
        orderShipped: "Dec 10, 2020",
        isOrderOutOfDelivery: false,
        outOfDelivery: "Pending",
        isOrderDelivered: false,
        orderDelivered: "Pending",

        spinValue: new Animated.Value(0)

    },
    {
        title: 'First',
        orderNo: "Order # 44 698",
        dateTime: "Placed on December 15, 2020",
        items: '10',
        total: '$16.99',

        isOrderPlaced: true,
        orderPlaced: "Dec 10, 2020",
        isOrderConfirmed: true,
        orderConfirmed: "Dec 10, 2020",
        isOrderShipped: true,
        orderShipped: "Dec 10, 2020",
        isOrderOutOfDelivery: false,
        outOfDelivery: "Pending",
        isOrderDelivered: false,
        orderDelivered: "Pending",

        spinValue: new Animated.Value(0)

    },
    {
        title: 'First',
        orderNo: "Order # 44 698",
        dateTime: "Placed on December 15, 2020",
        items: '10',
        total: '$16.99',

        isOrderPlaced: true,
        orderPlaced: "Dec 10, 2020",
        isOrderConfirmed: true,
        orderConfirmed: "Dec 10, 2020",
        isOrderShipped: true,
        orderShipped: "Dec 10, 2020",
        isOrderOutOfDelivery: false,
        outOfDelivery: "Pending",
        isOrderDelivered: false,
        orderDelivered: "Pending",

        spinValue: new Animated.Value(0)

    },
    {
        title: 'First',
        orderNo: "Order # 44 698",
        dateTime: "Placed on December 15, 2020",
        items: '10',
        total: '$16.99',

        isOrderPlaced: true,
        orderPlaced: "Dec 10, 2020",
        isOrderConfirmed: true,
        orderConfirmed: "Dec 10, 2020",
        isOrderShipped: true,
        orderShipped: "Dec 10, 2020",
        isOrderOutOfDelivery: false,
        outOfDelivery: "Pending",
        isOrderDelivered: false,
        orderDelivered: "Pending",

        spinValue: new Animated.Value(0)

    },
    {
        title: 'First',
        orderNo: "Order # 44 698",
        dateTime: "Placed on December 15, 2020",
        items: '10',
        total: '$16.99',

        isOrderPlaced: true,
        orderPlaced: "Dec 10, 2020",
        isOrderConfirmed: true,
        orderConfirmed: "Dec 10, 2020",
        isOrderShipped: true,
        orderShipped: "Dec 10, 2020",
        isOrderOutOfDelivery: false,
        outOfDelivery: "Pending",
        isOrderDelivered: false,
        orderDelivered: "Pending",

        spinValue: new Animated.Value(0)

    },
    {
        title: 'First',
        orderNo: "Order # 44 698",
        dateTime: "Placed on December 15, 2020",
        items: '10',
        total: '$16.99',

        isOrderPlaced: true,
        orderPlaced: "Dec 10, 2020",
        isOrderConfirmed: true,
        orderConfirmed: "Dec 10, 2020",
        isOrderShipped: true,
        orderShipped: "Dec 10, 2020",
        isOrderOutOfDelivery: true,
        outOfDelivery: "Dec 10, 2020",
        isOrderDelivered: true,
        orderDelivered: "Dec 10, 2020",

        spinValue: new Animated.Value(0)

    },
    {
        title: 'First',
        orderNo: "Order # 44 698",
        dateTime: "Placed on December 15, 2020",
        items: '10',
        total: '$16.99',

        isOrderPlaced: true,
        orderPlaced: "Dec 10, 2020",
        isOrderConfirmed: true,
        orderConfirmed: "Dec 10, 2020",
        isOrderShipped: true,
        orderShipped: "Dec 10, 2020",
        isOrderOutOfDelivery: true,
        outOfDelivery: "Dec 10, 2020",
        isOrderDelivered: true,
        orderDelivered: "Dec 10, 2020",

        spinValue: new Animated.Value(0)

    },
    {
        title: 'First',
        orderNo: "Order # 44 698",
        dateTime: "Placed on December 15, 2020",
        items: '10',
        total: '$16.99',


        isOrderPlaced: true,
        orderPlaced: "Dec 10, 2020",
        isOrderConfirmed: true,
        orderConfirmed: "Dec 10, 2020",
        isOrderShipped: true,
        orderShipped: "Dec 10, 2020",
        isOrderOutOfDelivery: true,
        outOfDelivery: "Dec 10, 2020",
        isOrderDelivered: true,
        orderDelivered: "Dec 10, 2020",


        spinValue: new Animated.Value(0)

    },
];


export default class MyOrders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSections: [0],
        };

    }

    renderOrdersHeader = (section, index, isActive) => {

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
                    useNativeDriver: true  // To make use of native driver for performance
                }
            ).start()
        }
        else {
            Animated.timing(
                section.spinValue,
                {
                    toValue: 0,
                    duration: 300,
                    easing: Easing.linear,
                    useNativeDriver: true  // To make use of native driver for performance
                }
            ).start()
        }



        return (
            <View>
                <View style={[Styles.foodItemContainer, isActive && {borderBottomWidth: 1, borderBottomColor: colors.borderColorLight}]}>

                    <View style={[Styles.profileItemCircle, section.isOrderDelivered && {backgroundColor: colors.textColorGrey2}]}>
                        <Image source={assets.box_open_icon} style={{width: hp(3.5), height: hp(3.5), tintColor: section.isOrderDelivered ? colors.textColorGrey1 : colors.primaryGreenColor}} resizeMode={"contain"} />
                    </View>

                    <View style={{marginLeft: wp("3")}}>
                        <Text style={[Styles.orderNo, section.isOrderDelivered && {color: colors.textColorGrey1}]}>{section.orderNo}</Text>
                        <Text style={[Styles.dateTime, section.isOrderDelivered && {color: colors.textColorGrey1}]}>{section.dateTime}</Text>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={{
                                fontSize: Typography.P6,
                                fontFamily: fonts.RUBIK_LIGHT,
                                color: colors.textColorGrey1
                            }}>{"Items: "}</Text>
                            <Text style={{
                                fontSize: Typography.P4,
                                fontFamily: fonts.RUBIK_MEDIUM,
                                color: section.isOrderDelivered ? colors.textColorGrey1 : colors.textColorBlack1,
                                marginRight: wp(2)
                            }}>{"10"}</Text>
                            <Text style={{
                                fontSize: Typography.P6,
                                fontFamily: fonts.RUBIK_LIGHT,
                                color: colors.textColorGrey1
                            }}>{"Total: "}</Text>
                            <Text style={{
                                fontSize: Typography.P4,
                                fontFamily: fonts.RUBIK_MEDIUM,
                                color: section.isOrderDelivered ? colors.textColorGrey1 : colors.textColorBlack1
                            }}>{"$ 16.99"}</Text>


                        </View>


                    </View>

                    <View style={{flex: 1, alignItems: "flex-end", paddingRight: wp("5"),}}>
                        <Animated.Image source={assets.drop_down_icon} style={{transform: [{rotate: spin}], width: hp(2.5), height: hp(2.5), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />
                    </View>

                </View>

                {
                    section.isOrderDelivered && !isActive &&
                    <View style={{flexDirection: "row", height: hp(5), paddingLeft: wp("5"), alignItems: "center" , backgroundColor: "white"}}>

                        <View style={[{backgroundColor: colors.iconColorGrey1,
                            width: hp("1.2"),
                            height: hp("1.2"),
                            borderRadius: hp("0.6"),
                            marginRight: wp("2")
                        }]} />

                        <Text style={{
                            fontFamily: fonts.RUBIK_REGULAR,
                            fontSize: Typography.P5,
                            color: colors.textColorGrey1
                        }}>{"Order Delivered"}</Text>

                        <Text style={{
                            flex: 1,
                            fontFamily: fonts.RUBIK_REGULAR,
                            fontSize: Typography.P5,
                            color: colors.textColorGrey1,
                            textAlign: "right", paddingRight: wp("5")
                        }}>{"Dec 10, 2020"}</Text>

                    </View>
                }

            </View>

        );
    };

    renderOrdersContent = section => {
        return (
            <View style={{flexDirection: "row", paddingHorizontal: wp ('3'), paddingVertical: hp("2"), backgroundColor: "white"}}>

                <View style={{flex: 1, alignItems: "center"}}>

                    <View style={{flexDirection: "row"}}>
                        <View style={{alignItems: "center", marginRight: wp("2")}}>
                            <View style={[Styles.orderProgressCircle, {backgroundColor: section.isOrderPlaced ? colors.buttonGreenColor : colors.iconColorGrey1}]} />

                            <Divider style={[Styles.orderProgressLine, {backgroundColor: section.isOrderPlaced ? colors.buttonGreenColor : colors.iconColorGrey1}]} />
                        </View>
                        <Text style={Styles.orderProgressTitle}>{"Orders Placed"}</Text>
                        <Text style={Styles.orderProgressSubTitle}>{section.orderPlaced}</Text>
                    </View>

                    <View style={{flexDirection: "row"}}>
                        <View style={{alignItems: "center", marginRight: wp("2")}}>
                            <View style={[Styles.orderProgressCircle, {backgroundColor: section.isOrderConfirmed ? colors.buttonGreenColor : colors.iconColorGrey1}]} />

                            <Divider style={[Styles.orderProgressLine, {backgroundColor: section.isOrderConfirmed ? colors.buttonGreenColor : colors.iconColorGrey1}]} />
                        </View>
                        <Text style={Styles.orderProgressTitle}>{"Order Confirmed"}</Text>
                        <Text style={Styles.orderProgressSubTitle}>{section.orderConfirmed}</Text>
                    </View>

                    <View style={{flexDirection: "row"}}>
                        <View style={{alignItems: "center", marginRight: wp("2")}}>
                            <View style={[Styles.orderProgressCircle, {backgroundColor: section.isOrderShipped ? colors.buttonGreenColor : colors.iconColorGrey1}]} />

                            <Divider style={[Styles.orderProgressLine, {backgroundColor: section.isOrderShipped ? colors.buttonGreenColor : colors.iconColorGrey1}]} />
                        </View>
                        <Text style={Styles.orderProgressTitle}>{"Order Shipped"}</Text>
                        <Text style={Styles.orderProgressSubTitle}>{section.orderShipped}</Text>
                    </View>

                    <View style={{flexDirection: "row"}}>
                        <View style={{alignItems: "center", marginRight: wp("2")}}>
                            <View style={[Styles.orderProgressCircle, {backgroundColor: section.isOrderOutOfDelivery ? colors.buttonGreenColor : colors.iconColorGrey1}]} />

                            <Divider style={[Styles.orderProgressLine, {backgroundColor: section.isOrderOutOfDelivery ? colors.buttonGreenColor : colors.iconColorGrey1}]} />
                        </View>
                        <Text style={[Styles.orderProgressTitle,{color: section.isOrderOutOfDelivery ? colors.textColorBlack1: colors.textColorGrey1}]}>{"Out of Delivery"}</Text>
                        <Text style={[Styles.orderProgressSubTitle]}>{section.outOfDelivery}</Text>
                    </View>

                    <View style={{flexDirection: "row"}}>
                        <View style={{alignItems: "center", marginRight: wp("2")}}>
                            <View style={[Styles.orderProgressCircle, {backgroundColor: section.isOrderDelivered ? colors.buttonGreenColor : colors.iconColorGrey1}]} />
                        </View>
                        <Text style={[Styles.orderProgressTitle,{color: section.isOrderOutOfDelivery ? colors.textColorBlack1: colors.textColorGrey1}]}>{"Order Delivered"}</Text>
                        <Text style={Styles.orderProgressSubTitle}>{section.orderDelivered}</Text>
                    </View>

                </View>

            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"My Orders"}
                childView={() => {
                    return (

                        <ScrollView>

                            <Accordion
                                sections={orders}
                                activeSections={this.state.activeSections}
                                renderHeader={this.renderOrdersHeader}
                                renderContent={this.renderOrdersContent}
                                expandMultiple={false}
                                sectionContainerStyle={{marginBottom: hp("1")}}
                                onChange={this._updateSections}
                            />


                        </ScrollView>

                    );
                }}
            />

        );
    }
}
