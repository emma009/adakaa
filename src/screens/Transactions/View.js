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
import FoodItem from "../../components/Application/FoodItem/View";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;


const transactions = [
    {
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",


    },
    {
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",


    },
    {
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",


    },
    {
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",


    },
    {
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",


    },
    {
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    }
];

export default class Transactions extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

    renderCreditCardsHeader = section => {

    };



    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Transactions"}
                childView={() => {
                    return (

                        <View style={{flex: 1}}>

                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={transactions}
                                renderItem={({ item }) => {
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

                                            <View style={{marginHorizontal: wp("3"), flexDirection: "row", flex: 1}}>
                                                <View>
                                                    <Text style={Styles.nameTitle}>{item.type}</Text>
                                                    <Text style={Styles.addressTitle}>{item.date}</Text>
                                                </View>

                                                <Text style={Styles.priceTitle}>{item.price}</Text>

                                            </View>

                                        </View>
                                    );
                                }}
                            />

                        </View>




                    );
                }}
            />

        );
    }
}
