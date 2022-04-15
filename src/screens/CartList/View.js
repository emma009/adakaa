import React, {Component} from 'react';
import {FlatList, StatusBar, View} from 'react-native';
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

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const styles = AppConfig.styling.default;

export default class Review extends Component {

    constructor(props) {
        super(props);

        this.state = {
            foodItems: [
                {
                    title: "Organic lemons",
                    image: require("../../components/Application/FoodItem/Assets/Images/OrganicLemons.png"),
                    bigImage: require("../../components/Application/FoodItem/Assets/Images/BigImage.png"),
                    price: "$1.22",
                    weight: "1.50 lbs",
                    discount:"15%",
                    cartCount: 0,
                    isFavourite: false,
                    detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books",
                    ratingValue: 1
                },
                {
                    title: "Fresh apricots",
                    image: require("../../components/Application/FoodItem/Assets/Images/apricot.png"),
                    bigImage: require("../../components/Application/FoodItem/Assets/Images/BigImage.png"),
                    price: "$2.35",
                    weight: "dozen",
                    cartCount: 0,
                    isFavourite: false,
                    detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books",
                    ratingValue: 1
                },
                {
                    title: "Pomegranate",
                    image: require("../../components/Application/FoodItem/Assets/Images/pomegranate.png"),
                    bigImage: require("../../components/Application/FoodItem/Assets/Images/BigImage.png"),
                    price: "$1.22",
                    weight: "each",
                    cartCount: 0,
                    isFavourite: false,
                    detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books",
                    ratingValue: 1
                },
                {
                    title: "Broccoli flower",
                    image: require("../../components/Application/FoodItem/Assets/Images/broccoli_flower.png"),
                    bigImage: require("../../components/Application/FoodItem/Assets/Images/BigImage.png"),
                    price: "$4.99",
                    weight: "1.50 lbs",
                    cartCount: 0,
                    isFavourite: false,
                    detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books",
                    ratingValue: 1
                },
                {
                    title: "Chocolate chip",
                    image: require("../../components/Application/FoodItem/Assets/Images/chocolate_chip.png"),
                    bigImage: require("../../components/Application/FoodItem/Assets/Images/BigImage.png"),
                    price: "$1.22",
                    weight: "10 cookies",
                    cartCount: 0,
                    isFavourite: false,
                    detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books",
                    ratingValue: 1
                },
                {
                    title: "Red grapes",
                    image: require("../../components/Application/FoodItem/Assets/Images/red_grapes.png"),
                    bigImage: require("../../components/Application/FoodItem/Assets/Images/BigImage.png"),
                    price: "$8.99",
                    weight: "5.0 lbs",
                    cartCount: 0,
                    isFavourite: false,
                    detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books",
                    ratingValue: 1
                }
            ]
        };

    }


    render () {

        return (

            <View style={{flex: 1, backgroundColor: colors.textColorGrey2}}>

                <StatusBar backgroundColor={colors.textColorGrey2} barStyle="dark-content" />
                <View style={Styles.flatListContainer}>
                    <BaseView
                        showAppHeader={false}
                        applyBottomSafeArea={false}
                        navigation={this.props.navigation}
                        title={"Shopping Cart"}
                        childView={() => {

                            return (

                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={this.state.foodItems}

                                    renderItem={({ item }) =>
                                        <CartItem
                                            title={item.title}
                                            image={item.image}
                                            bigImage={item.bigImage}
                                            price={item.price}
                                            weight={item.weight}
                                            discount={item.discount}
                                            cartCount={item.cartCount}
                                            cartCountChange={(count) => { console.log(count) }}
                                            navigation={this.props.navigation}
                                        />
                                    }
                                />

                            );

                        }}

                    />
                </View>
                <View style={Styles.bottomContainer}>

                    <View style={Styles.totalContainer}>
                        <Text style={Styles.subtotalLabelText}>SubTotal</Text>
                        <Text style={Styles.subtotalValueText}>$16.99</Text>
                    </View>

                    <View style={Styles.totalContainer}>
                        <Text style={Styles.subtotalLabelText}>Shipping</Text>
                        <Text style={Styles.subtotalValueText}>$16.99</Text>
                    </View>

                    <Divider style={{width: styles.gridWidth, height: 1, alignSelf: "center", marginBottom: hp("1"), backgroundColor: colors.borderColorLight}} />

                    <View style={Styles.totalContainer}>
                        <Text style={Styles.totalLabelText}>Total</Text>
                        <Text style={Styles.totalValueText}>$16.99</Text>
                    </View>

                    <Button
                        buttonStyle={[{width: styles.gridWidth, alignSelf: "center", backgroundColor: colors.buttonGreenColor, marginTop: hp("1")}, styles.buttonShadow]}
                        title={'Checkout'}
                        titleStyle={styles.buttonStyle}
                        onPress={() => {
                            this.props.navigation.navigate(Routes.CHECKOUT_DELIVERY)
                        }}/>

                </View>
            </View>

        )

    }

}
