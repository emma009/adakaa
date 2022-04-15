import React, {Component} from 'react';
import {FlatList, Image, ScrollView, StatusBar, TouchableOpacity, View} from 'react-native';
import ReviewItem from "../../components/Application/ReviewItem/View";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView"
import Routes from "../../navigation/Routes";
import CartItem from "../../components/Application/CartItem/View";
import FoodItem from "../../components/Application/FoodItem/View";
import {StackActions} from "@react-navigation/native";
import {Button, Divider, Text} from "react-native-elements";
import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";
import Styles from "./Styles";
import fonts from "../../../branding/carter/assets/Fonts";
import assets from "../../../branding/carter/assets/Assets";
import Counter from "../../components/Global/Counter/View";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const styles = AppConfig.styling.default;

export default class CartSummary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            foodItems: [
                {
                    title: "Organic lemons",
                    image: require("../../components/Application/FoodItem/Assets/Images/OrganicLemons.png"),
                    price: "$1.22 x 5",
                    weight: "1.50 lbs",
                },
                {
                    title: "Fresh apricots",
                    image: require("../../components/Application/FoodItem/Assets/Images/apricot.png"),
                    price: "$1.22 x 5",
                    weight: "dozen",
                },
                {
                    title: "Pomegranate",
                    image: require("../../components/Application/FoodItem/Assets/Images/pomegranate.png"),
                    price: "$1.22 x 5",
                    weight: "each",
                },
                {
                    title: "Broccoli flower",
                    image: require("../../components/Application/FoodItem/Assets/Images/broccoli_flower.png"),
                    price: "$1.22 x 5",
                    weight: "1.50 lbs",
                },
                {
                    title: "Chocolate chip",
                    image: require("../../components/Application/FoodItem/Assets/Images/chocolate_chip.png"),
                    price: "$1.22 x 5",
                    weight: "10 cookies",
                },
                {
                    title: "Red grapes",
                    image: require("../../components/Application/FoodItem/Assets/Images/red_grapes.png"),
                    price: "$1.22 x 5",
                    weight: "5.0 lbs",
                }
            ]
        };

    }

    renderPaymentMethod = () => {
        return (
            <View
                style={{
                    height: hp("12"),

                    backgroundColor: "white",

                    flexDirection: "row",
                    marginBottom: hp(1)
                }}>


                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <View style={{
                        width: hp("8"),
                        height: hp("8"),
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: hp("4"),
                        marginLeft: wp("5"),
                        backgroundColor: colors.textColorGrey2
                    }}>
                        <Image source={assets.master_card_icon} style={{width: hp(3), height: hp(3)}} resizeMode={"contain"} />
                    </View>

                    <View style={{marginLeft: wp("3")}}>
                        <Text style={{
                            fontSize: Typography.P3,
                            fontFamily: Fonts.RUBIK_MEDIUM,
                            color: colors.textColorBlack1
                        }}>{"William Mark"}</Text>
                        <Text style={{
                            fontSize: Typography.P7,
                            fontFamily: Fonts.RUBIK_REGULAR,
                            marginVertical: hp("0.5"),
                            color: colors.textColorGrey1
                        }}>{"XXXX XXXX XXXX 3694"}</Text>

                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={{
                                fontSize: Typography.P7,
                                fontFamily: fonts.RUBIK_REGULAR,
                                color: colors.textColorGrey1
                            }}>{"Expiry: "}</Text>
                            <Text style={{
                                fontSize: Typography.P7,
                                fontFamily: fonts.RUBIK_REGULAR,
                                color: colors.textColorGrey1,
                                marginRight: wp(2)
                            }}>{"01/22"}</Text>
                            <Text style={{
                                fontSize: Typography.P7,
                                fontFamily: fonts.RUBIK_REGULAR,
                                color: colors.textColorGrey1
                            }}>{"CVV: "}</Text>
                            <Text style={{
                                fontSize: Typography.P7,
                                fontFamily: fonts.RUBIK_REGULAR,
                                color: colors.textColorGrey1
                            }}>{"658"}</Text>
                        </View>


                    </View>
                </View>



            </View>
        );
    }

    renderAddress = () => {
        return (
            <View
                style={[{height: hp("14"), backgroundColor: "white", flexDirection: "row", marginBottom: hp(1)}]}>

                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <View style={{width: hp("8"),
                        height: hp("8"),
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: hp("4"),
                        marginLeft: wp("5"),
                        backgroundColor: colors.secondaryGreenColor}}>
                        <Image source={assets.map_marker_icon} style={{width: hp(3.5), height: hp(3.5), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />

                    </View>

                    <View style={{marginLeft: wp("3")}}>
                        <Text style={{fontSize: Typography.P3,
                            fontFamily: fonts.RUBIK_MEDIUM,
                            color: colors.textColorBlack1}}>{"Jessica Simpson"}</Text>
                        <Text style={{
                            fontSize: Typography.P6,
                            fontFamily: fonts.RUBIK_REGULAR,
                            marginVertical: hp("0.5"),
                            lineHeight: hp(2.5),
                            width: "60%",
                            color: colors.textColorGrey1
                        }} numberOfLines={2}>{"211 Crescent Day, LA Port California, United States, 77571"}</Text>
                        <Text style={{
                            fontSize: Typography.P5,
                            fontFamily: fonts.RUBIK_MEDIUM,
                            marginRight: wp("5"),
                            color: colors.textColorBlack1
                        }}>{"+1 202 555 0142"}</Text>

                    </View>



                </View>


            </View>
        );
    }

    renderCartItems = (item) => {
        return (
            <View style={{
                height: hp("12"),

                backgroundColor: "white",

                flexDirection: "row",

                alignItems: "center",

                paddingLeft: wp("5"),
                borderBottomWidth: 1,
                borderBottomColor: colors.borderColorLight
            }}>

                <Image
                    source={item.image}
                    style={{
                        width: hp("6"),
                        height: hp("6"),
                        marginRight: wp("2")
                    }}
                    resizeMode={"contain"}
                />
                <View style={{flex: 1}}>

                    <Text style={{
                        fontSize: Typography.P3,
                        fontFamily: Fonts.RUBIK_MEDIUM,
                        color: colors.textColorBlack1,
                        marginBottom: hp(0.5)
                    }}>{item.title}</Text>
                    <Text style={{
                        color: colors.textColorGrey1,
                        fontFamily: Fonts.RUBIK_REGULAR,
                        fontSize: Typography.P5,
                    }}>{item.weight}</Text>
                </View>

                <Text style={{
                    fontSize: Typography.P5,
                    fontFamily: Fonts.RUBIK_MEDIUM,
                    color: colors.primaryGreenColor,
                    marginRight: wp(5)
                }}>{item.price}</Text>


            </View>
        );
    }

    render () {

        return (

            <BaseView
                navigation={this.props.navigation}
                title={"Cart Summary"}
                childView={() => {

                    return (

                        <View style={{flex: 1, backgroundColor: colors.textColorGrey2}}>
                            <StatusBar backgroundColor={colors.textColorGrey2} barStyle="dark-content" />

                            <View style={Styles.flatListContainer}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    {this.renderPaymentMethod()}

                                    {this.renderAddress()}

                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        data={this.state.foodItems}

                                        renderItem={({ item }) => {
                                            return this.renderCartItems(item)
                                        }}
                                    />

                                </ScrollView>
                            </View>
                            <View style={Styles.bottomContainer}>

                                <View style={Styles.totalContainer}>
                                    <Text style={Styles.totalLabelText}>Subtotal (6) Items:</Text>
                                    <Text style={Styles.totalValueText}>$36.45</Text>
                                </View>

                                <View style={{height: 1, backgroundColor: colors.borderColorLight, marginHorizontal: wp(5), marginBottom: hp(1)}} />

                                <View style={Styles.totalContainer}>
                                    <Text style={Styles.subtotalLabelText}>Promotional Discounts:</Text>
                                    <Text style={Styles.subtotalValueText}>-$9.50</Text>
                                </View>

                                <View style={Styles.totalContainer}>
                                    <Text style={Styles.subtotalLabelText}>Delivery Charges:</Text>
                                    <Text style={Styles.subtotalValueText}>$5.00</Text>
                                </View>

                                <View style={Styles.totalContainer}>
                                    <Text style={Styles.subtotalLabelText}>Add Coupon:</Text>
                                    <Text style={{
                                        fontFamily: Fonts.RUBIK_MEDIUM,
                                        fontSize: Typography.P5,
                                        color: colors.textColorBlack1,
                                        flex: 1,
                                        textAlign: "right",
                                    }}>Enter Code Here</Text>
                                </View>

                                <Divider style={{width: styles.gridWidth, height: 1, alignSelf: "center", marginBottom: hp("1"), backgroundColor: colors.borderColorLight}} />

                                <View style={Styles.totalContainer}>
                                    <Text style={Styles.totalLabelText}>Total</Text>
                                    <Text style={Styles.totalValueText}>$16.99</Text>
                                </View>



                            </View>

                            <View style={{}}>
                                <Button
                                    buttonStyle={[{width: styles.gridWidth, alignSelf: "center", backgroundColor: colors.buttonGreenColor, marginTop: hp("1")}, styles.buttonShadow]}
                                    title={'Place Order'}
                                    titleStyle={styles.buttonStyle}
                                    onPress={() => {
                                        this.props.navigation.navigate(Routes.ORDER_SUCCESS)
                                    }}/>
                            </View>
                        </View>


                        );

                }}

            />



        )

    }

}
