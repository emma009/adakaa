import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import FoodItem from "../../components/Application/FoodItem/View";
import Styles from "./Styles";
import styles from "../../../branding/carter/styles/Style";
import Globals from "../../utils/Globals";

export default class Favouites extends Component {
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
                    isFavourite: true,
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
                    isFavourite: true,
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
                    isFavourite: true,
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
                    isFavourite: true,
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
                    isFavourite: true,
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
                    isFavourite: true,
                    detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books",
                    ratingValue: 1
                }
            ]
        };
    }

    render(){
        return(

            <View  style={[Styles.mainWrapper, {paddingTop: Globals.SAFE_AREA_INSET.top + hp("2")}]}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.foodItems}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <FoodItem
                            title={item.title}
                            image={item.image}
                            bigImage={item.bigImage}
                            price={item.price}
                            weight={item.weight}
                            discount={item.discount}
                            cartCount={item.cartCount}
                            isFavourite={item.isFavourite}
                            detail={item.detail}
                            ratingValue={item.ratingValue}
                            cartCountChange={(count) => { console.log(count) }}
                            favouriteChange = {(favourite) => console.log(favourite)}
                            navigation={this.props.navigation}
                        />
                    }
                />

            </View>

        );
    }
}