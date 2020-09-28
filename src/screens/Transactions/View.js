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
import assets from "../../../branding/carter/assets/Assets";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;


const transactions = [
    {
        isDefault: true,
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",


    },
    {
        isDefault: false,
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",


    },
    {
        isDefault: false,
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",


    },
    {
        isDefault: false,
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",


    },
    {
        isDefault: false,
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",


    },
    {
        isDefault: false,
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        isDefault: false,
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        isDefault: false,
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        isDefault: false,
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        isDefault: false,
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        isDefault: false,
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        isDefault: false,
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        isDefault: false,
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        isDefault: false,
        type: 'Master Card',
        date: "Dec 10, 2020 at 10:00 PM",
        price: "$16.99",

    },
    {
        isDefault: false,
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

                                            {item.isDefault && <View style={{position: "absolute", backgroundColor: colors.secondaryGreenColor, width: "18%", height: hp(2.5),
                                                justifyContent: "center", alignItems: "center", borderTopRightRadius: hp(0.5), borderBottomRightRadius: hp(0.5)
                                            }}>
                                                <Text style={{
                                                    color: colors.primaryGreenColor,
                                                    fontFamily: fonts.RUBIK_MEDIUM,
                                                    fontSize: Typography.P8

                                                }}>{"DEFAULT"}</Text>
                                            </View>}

                                            <View style={{flex: 1,flexDirection: "row",
                                                alignItems: "center",}}>
                                                <View style={Styles.profileItemCircle}>
                                                    <Image source={item.type === "Master Card" ? assets.master_card_icon : assets.visa_icon} style={{width: hp(3), height: hp(3)}} resizeMode={"contain"} />

                                                </View>

                                                <View style={{marginHorizontal: wp("3"), flexDirection: "row", flex: 1}}>
                                                    <View>
                                                        <Text style={Styles.nameTitle}>{item.type}</Text>
                                                        <Text style={Styles.addressTitle}>{item.date}</Text>
                                                    </View>

                                                    <Text style={Styles.priceTitle}>{item.price}</Text>

                                                </View>
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
