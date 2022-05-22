import React, {useState} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';

import BaseView from "../BaseView"
import {Text} from "react-native-elements";
import AppConfig from "../../../branding/App_config";
import Routes from "../../navigation/Routes";
import Styles from "./Styles";
import AppButton from "../../components/Application/AppButton/View";

const colors = AppConfig.colors.default;

export const CheckoutDelivery = (props) => {

    const [selectedDeliveryIndex, setSelectedDeliveryIndex] = useState(1);

    const renderDeliveryContainer = (title, description, price, index) => {

        return (

            <TouchableWithoutFeedback onPress={() => {

                setSelectedDeliveryIndex(selectedDeliveryIndex => {
                    if (selectedDeliveryIndex === index)
                        return 0
                    else return index;
                })

            }}>
                <View style={[Styles.deliveryContainer, selectedDeliveryIndex === index && {
                    borderWidth: 1,
                    borderColor: colors.primaryGreenColor
                }]}>

                    <View style={{width: "90%"}}>
                        <Text style={Styles.deliveryHeader}>{title}</Text>
                        <Text style={Styles.deliveryDescription}>{description}</Text>

                    </View>

                    <Text style={Styles.deliveryPrice}>{price}</Text>

                </View>

            </TouchableWithoutFeedback>


        );

    }

    return (

        <BaseView
            navigation={props.navigation}
            title={"Shipping Method"}
            childView={() => {
                return (

                    <View style={{flex: 1}}>

                        {renderDeliveryContainer(
                            "Standard Delivery",
                            "Order will be delivered between 3 - 5 business days straight to your doorstep.",
                            "$15",
                            1
                        )}

                        {renderDeliveryContainer(
                            "Next Day Delivery",
                            "Place your order before 6PM and your items will be delivered the next day.",
                            "$5",
                            2
                        )}

                        {renderDeliveryContainer(
                            "Nominated Delivery",
                            "Pick a particular date from the calendar and order will be delivered on selected data.",
                            "$2",
                            3
                        )}

                        <View style={{flex: 1, justifyContent: "flex-end"}}>

                            <AppButton
                                title={'Next'}
                                onPress={() => {
                                    props.navigation.navigate(Routes.CHECKOUT_ADDRESS)
                                }}
                            />
                        </View>
                    </View>

                );
            }}
        />


    );

}
