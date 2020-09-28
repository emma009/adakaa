import React, {Component} from 'react';
import {FlatList, TouchableWithoutFeedback, View, ViewComponent} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView"
import {Button, Divider, Text} from "react-native-elements";
import AppConfig from "../../../branding/App_config";
import Routes from "../../navigation/Routes";
import ShippingAddress from "../../components/Application/ShippingProgress/View"
import Styles from "./Styles";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;


export default class CheckoutDelivery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDeliveryIndex: 1,
        }

    }

    renderDeliveryContainer = (title, description, price, index) => {

        return (

            <TouchableWithoutFeedback onPress={() => {
                if (this.state.selectedDeliveryIndex === index) {
                    index = 0;
                }

                this.setState({
                    selectedDeliveryIndex: index
                })
            }}>
                <View style={[Styles.deliveryContainer, this.state.selectedDeliveryIndex === index && {borderWidth: 1, borderColor: colors.primaryGreenColor}]}>

                    <View style={{flex: 0.8, height: "80%", paddingLeft: wp("5")}}>
                        <Text style={Styles.deliveryHeader}>{title}</Text>
                        <Text style={Styles.deliveryDescription}>{description}</Text>

                    </View>

                    <Text style={Styles.deliveryPrice}>{price}</Text>

                </View>

            </TouchableWithoutFeedback>


        );

    }

    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Shipping Method"}
                childView={() => {
                    return (

                        <View style={{flex: 1}}>

                           <ShippingAddress
                           />

                            {this.renderDeliveryContainer(
                                "Standard Delivery",
                                "Order will be delivered between 3 - 5 business days straight to your doorstep.",
                                "$15",
                                1
                            )}

                            {this.renderDeliveryContainer(
                                "Next Day Delivery",
                                "Place your order before 6PM and your items will be delivered the next day.",
                                "$5",
                                2
                            )}

                            {this.renderDeliveryContainer(
                                "Nominated Delivery",
                                "Pick a particular date from the calendar and order will be delivered on selected data.",
                                "$2",
                                3
                            )}

                            <View style={{flex: 1, justifyContent: "flex-end", marginBottom: hp("1")}}>


                            <Button
                                buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                title={'Next'}
                                titleStyle={styles.buttonStyle}
                                onPress={() => {
                                    this.props.navigation.navigate(Routes.CHECKOUT_ADDRESS)
                                }}/>

                            </View>
                        </View>

                    );
                }}
            />



        );
    }
}
