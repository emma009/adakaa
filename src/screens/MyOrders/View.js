import React, {Component} from 'react';
import {FlatList, Image, ScrollView, View, ViewComponent} from 'react-native';
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
    },
];

export default class MyOrders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSections: [],
        };

    }

    renderOrdersHeader = section => {
        return (
            <View style={Styles.foodItemContainer}>

                <View style={Styles.profileItemCircle}>
                    <Icon
                        name="google"
                        type='font-awesome'
                        size={hp("3")}
                        color={colors.buttonGreenColor}
                    />
                </View>

                <View style={{marginLeft: wp("3")}}>
                    <Text style={Styles.orderNo}>{section.orderNo}</Text>
                    <Text style={Styles.dateTime}>{section.dateTime}</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={Styles.itemLabel}>{"Items: "}</Text>
                        <Text style={Styles.itemValue}>{section.items}</Text>
                        <Text style={Styles.itemLabel}>{"Total: "}</Text>
                        <Text style={Styles.itemValue}>{section.total}</Text>
                    </View>

                </View>

            </View>
        );
    };

    renderOrdersContent = section => {
        return (
            <View style={{flexDirection: "row", paddingHorizontal: wp ('3'), paddingVertical: hp("2"), backgroundColor: "white"}}>

                <View style={{flex: 1, alignItems: "center"}}>

                    <View style={{flexDirection: "row"}}>
                        <View style={{alignItems: "center", marginRight: wp("2")}}>
                            <View style={[Styles.orderProgressCircle, {backgroundColor: section.isOrderPlaced ? colors.buttonGreenColor : "#B3BCCA"}]} />

                            <Divider style={[Styles.orderProgressLine, {backgroundColor: section.isOrderPlaced ? colors.buttonGreenColor : "#B3BCCA"}]} />
                        </View>
                        <Text style={Styles.orderProgressTitle}>{"Orders Placed"}</Text>
                        <Text style={Styles.orderProgressSubTitle}>{section.orderPlaced}</Text>
                    </View>

                    <View style={{flexDirection: "row"}}>
                        <View style={{alignItems: "center", marginRight: wp("2")}}>
                            <View style={[Styles.orderProgressCircle, {backgroundColor: section.isOrderConfirmed ? colors.buttonGreenColor : "#B3BCCA"}]} />

                            <Divider style={[Styles.orderProgressLine, {backgroundColor: section.isOrderConfirmed ? colors.buttonGreenColor : "#B3BCCA"}]} />
                        </View>
                        <Text style={Styles.orderProgressTitle}>{"Order Confirmed"}</Text>
                        <Text style={Styles.orderProgressSubTitle}>{section.orderConfirmed}</Text>
                    </View>

                    <View style={{flexDirection: "row"}}>
                        <View style={{alignItems: "center", marginRight: wp("2")}}>
                            <View style={[Styles.orderProgressCircle, {backgroundColor: section.isOrderShipped ? colors.buttonGreenColor : "#B3BCCA"}]} />

                            <Divider style={[Styles.orderProgressLine, {backgroundColor: section.isOrderShipped ? colors.buttonGreenColor : "#B3BCCA"}]} />
                        </View>
                        <Text style={Styles.orderProgressTitle}>{"Order Shipped"}</Text>
                        <Text style={Styles.orderProgressSubTitle}>{section.orderShipped}</Text>
                    </View>

                    <View style={{flexDirection: "row"}}>
                        <View style={{alignItems: "center", marginRight: wp("2")}}>
                            <View style={[Styles.orderProgressCircle, {backgroundColor: section.isOrderOutOfDelivery ? colors.buttonGreenColor : "#B3BCCA"}]} />

                            <Divider style={[Styles.orderProgressLine, {backgroundColor: section.isOrderOutOfDelivery ? colors.buttonGreenColor : "#B3BCCA"}]} />
                        </View>
                        <Text style={Styles.orderProgressTitle}>{"Out of Delivery"}</Text>
                        <Text style={Styles.orderProgressSubTitle}>{section.outOfDelivery}</Text>
                    </View>

                    <View style={{flexDirection: "row"}}>
                        <View style={{alignItems: "center", marginRight: wp("2")}}>
                            <View style={[Styles.orderProgressCircle, {backgroundColor: section.isOrderDelivered ? colors.buttonGreenColor : "#B3BCCA"}]} />
                        </View>
                        <Text style={Styles.orderProgressTitle}>{"Order Delivered"}</Text>
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
