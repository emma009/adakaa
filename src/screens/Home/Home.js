import React, { Component } from 'react';
import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Button, Icon, Image} from 'react-native-elements';

import FoodItem from "../../components/FoodItem/FoodItem";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import SearchButton from "../../components/SearchButton/SearchButton";

import Styles from "./Assets/Styles/Styles";
import Routes from "../../navigation/Routes";
import AppConfig from "../../../branding/App_config";

const colors = AppConfig.colors.default;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodItems: [
                {
                    title: "Organic lemons",
                    image: require("../../components/FoodItem/Assets/Images/OrganicLemons.png"),
                    bigImage: require("../../components/FoodItem/Assets/Images/BigImage.png"),
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
                    image: require("../../components/FoodItem/Assets/Images/apricot.png"),
                    bigImage: require("../../components/FoodItem/Assets/Images/BigImage.png"),
                    price: "$2.35",
                    weight: "dozen",
                    cartCount: 0,
                    isFavourite: false,
                    detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books",
                    ratingValue: 1
                },
                {
                    title: "Pomegranate",
                    image: require("../../components/FoodItem/Assets/Images/pomegranate.png"),
                    bigImage: require("../../components/FoodItem/Assets/Images/BigImage.png"),
                    price: "$1.22",
                    weight: "each",
                    cartCount: 0,
                    isFavourite: false,
                    detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books",
                    ratingValue: 1
                },
                {
                    title: "Broccoli flower",
                    image: require("../../components/FoodItem/Assets/Images/broccoli_flower.png"),
                    bigImage: require("../../components/FoodItem/Assets/Images/BigImage.png"),
                    price: "$4.99",
                    weight: "1.50 lbs",
                    cartCount: 0,
                    isFavourite: false,
                    detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books",
                    ratingValue: 1
                },
                {
                    title: "Chocolate chip",
                    image: require("../../components/FoodItem/Assets/Images/chocolate_chip.png"),
                    bigImage: require("../../components/FoodItem/Assets/Images/BigImage.png"),
                    price: "$1.22",
                    weight: "10 cookies",
                    cartCount: 0,
                    isFavourite: false,
                    detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books",
                    ratingValue: 1
                },
                {
                    title: "Red grapes",
                    image: require("../../components/FoodItem/Assets/Images/red_grapes.png"),
                    bigImage: require("../../components/FoodItem/Assets/Images/BigImage.png"),
                    price: "$8.99",
                    weight: "5.0 lbs",
                    cartCount: 0,
                    isFavourite: false,
                    detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books",
                    ratingValue: 1
                }
            ],
            categoryItems: [
                {
                    secondaryTitle: "fresh",
                    secondaryColor: "#FF4344",
                    primaryTitle: "fruits",
                    primaryColor: "#DD2021",
                    iconURI: require('../../components/CategoryItem/Assets/Images/fresh_fruits_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/fresh_fruits.png')
                },
                {
                    secondaryTitle: "fresh",
                    secondaryColor: "#ffa200",
                    primaryTitle: "dairy",
                    primaryColor: "#ee7b00",
                    iconURI: require('../../components/CategoryItem/Assets/Images/fresh_dairy_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/fresh_dairy.png')
                },
                {
                    secondaryTitle: "organic",
                    secondaryColor: "#7ad228",
                    primaryTitle: "vegetables",
                    primaryColor: "#519610",
                    iconURI: require('../../components/CategoryItem/Assets/Images/organic_vegetable_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/organic_vegetable.png')
                },
                {
                    secondaryTitle: "original",
                    secondaryColor: "#1faaff",
                    primaryTitle: "medicine",
                    primaryColor: "#0076be",
                    iconURI: require('../../components/CategoryItem/Assets/Images/original_medicine_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/original_medicine.png')
                },
                {
                    secondaryTitle: "quality",
                    secondaryColor: "#18e2d6",
                    primaryTitle: "bakery",
                    primaryColor: "#09bcb1",
                    iconURI: require('../../components/CategoryItem/Assets/Images/quality_bakery_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/quality_bakery.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/baby_products.png')
                }
            ],
            slider_data: [
                {
                    img: require("./Assets/Images/slider_img_1.png")
                },
                {
                    img: require("./Assets/Images/slider_img_2.png")
                }
            ],
            activeSlideIndex: 0
        };
    }

    render(){
        return(
            <View style={Styles.mainWrapper}>
                <ScrollView styles={Styles.mainContainer} showsVerticalScrollIndicator={false}>
                    <View>
                       <SearchButton
                           _onPress={() => this.props.navigation.navigate(Routes.SEARCH)}
                       />
                    </View>
                    <View style={{width: wp("100%"), position: "relative"}}>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.slider_data}
                            renderItem={({item}) => <Image
                                source={item.img}
                                style={{width: wp("100%"), height: hp("40%")}}
                                resizeMode={"contain"}
                            />}
                            sliderWidth={wp("100%")}
                            itemWidth={wp("100%")}
                            onSnapToItem={(index) => this.setState({ activeSlideIndex: index })}
                        />
                        <Pagination
                            dotsLength={this.state.slider_data.length}
                            activeDotIndex={this.state.activeSlideIndex}
                            dotColor={colors.paginationDotActiveColor}
                            inactiveDotColor={colors.paginationDotInActiveColor}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.4}
                            carouselRef={this._carousel}
                            containerStyle={{position: "absolute", bottom: 10,zIndex: 2}}
                        />
                    </View>
                    <View style={Styles.sectionContainer}>
                        <View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate(Routes.CATEGORY)}
                                style={Styles.sectionHeading}
                            >
                                <Text style={Styles.sectionHeadingText}>Category</Text>
                                <Icon
                                    name="arrow-right"
                                    type="font-awesome"
                                    size={20}
                                    containerStyle={Styles.sectionHeadingIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={this.state.categoryItems}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => <CategoryItem
                                secondaryTitle={item.secondaryTitle}
                                secondaryColor={item.secondaryColor}
                                primaryTitle={item.primaryTitle}
                                primaryColor={item.primaryColor}
                                iconURI={item.iconURI}
                                bgURI={item.bgURI}
                            />}
                        />
                    </View>
                    <View style={Styles.sectionContainer}>
                        <View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate(Routes.POPULAR_DEALS)}
                                style={Styles.sectionHeading}
                            >
                                <Text style={Styles.sectionHeadingText}>Popular Deals</Text>
                                <Icon
                                    name="arrow-right"
                                    type="font-awesome"
                                    size={20}
                                    containerStyle={Styles.sectionHeadingIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={this.state.foodItems}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <FoodItem
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
                            />}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
