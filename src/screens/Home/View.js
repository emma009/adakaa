import React, { Component } from 'react';
import {View, Text, FlatList, ScrollView, TouchableOpacity, StatusBar, Platform, Image} from 'react-native';

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Button, Icon} from 'react-native-elements';

import FoodItem from "../../components/Application/FoodItem/View";
import CategoryItem from "../../components/Application/CategoryItem/CategoryItem";
import SearchButton from "../../components/Application/SearchButton/SearchButton";



import Styles from "./Styles";
import Routes from "../../navigation/Routes";
import AppConfig from "../../../branding/App_config";
import Globals from "../../utils/Globals";
import styles from "../../../branding/carter/styles/Style";
import assets from "../../../branding/carter/assets/Assets";

const colors = AppConfig.colors.default;

export default class Home extends Component {
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
                    detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate is one of the healthiest fruits on earth. Pomegranate is one of the healthiest fruits on earth. Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books",
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
            ],
            categoryItems: [
                {
                    secondaryTitle: "fresh",
                    secondaryColor: "#FF4344",
                    primaryTitle: "Fruits",
                    primaryColor: "#DD2021",
                    iconURI: require('../../components/Application/CategoryItem/Assets/Images/fresh_fruits_icon.png'),
                    bgURI: require('../../components/Application/CategoryItem/Assets/Images/fresh_fruits.png')
                },
                {
                    secondaryTitle: "fresh",
                    secondaryColor: "#ffa200",
                    primaryTitle: "Dairy",
                    primaryColor: "#ee7b00",
                    iconURI: require('../../components/Application/CategoryItem/Assets/Images/fresh_dairy_icon.png'),
                    bgURI: require('../../components/Application/CategoryItem/Assets/Images/fresh_dairy.png')
                },
                {
                    secondaryTitle: "organic",
                    secondaryColor: "#7ad228",
                    primaryTitle: "Vegetables",
                    primaryColor: "#519610",
                    iconURI: require('../../components/Application/CategoryItem/Assets/Images/organic_vegetable_icon.png'),
                    bgURI: require('../../components/Application/CategoryItem/Assets/Images/organic_vegetable.png')
                },
                {
                    secondaryTitle: "original",
                    secondaryColor: "#1faaff",
                    primaryTitle: "Medicine",
                    primaryColor: "#0076be",
                    iconURI: require('../../components/Application/CategoryItem/Assets/Images/original_medicine_icon.png'),
                    bgURI: require('../../components/Application/CategoryItem/Assets/Images/original_medicine.png')
                },
                {
                    secondaryTitle: "quality",
                    secondaryColor: "#18e2d6",
                    primaryTitle: "Bakery",
                    primaryColor: "#09bcb1",
                    iconURI: require('../../components/Application/CategoryItem/Assets/Images/quality_bakery_icon.png'),
                    bgURI: require('../../components/Application/CategoryItem/Assets/Images/quality_bakery.png')
                }
            ],
            slider_data: [
                {
                    img: require("./Assets/Images/slider_img_1.png")
                },
                {
                    img: require("./Assets/Images/slider_img_2.png")
                },
                {
                    img: require("./Assets/Images/slider_img_1.png")
                },
                {
                    img: require("./Assets/Images/slider_img_2.png")
                },
            ],
            activeSlideIndex: 0
        };
    }

    renderPromotionSlider = () => {

        return (
            <View style={{width: "100%", height: hp("30%")}}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.slider_data}
                    renderItem={({item}) => <Image
                        source={item.img}
                        style={{width: "100%", height: hp("30%")}}
                        resizeMode={"cover"}
                    />}
                    sliderWidth={styles.gridWidth}
                    itemWidth={styles.gridWidth}
                    onSnapToItem={(index) => this.setState({ activeSlideIndex: index })}
                    autoplay
                    autoplayInterval={5000}
                    loop
                />
                <Pagination
                    dotsLength={this.state.slider_data.length}
                    activeDotIndex={this.state.activeSlideIndex}
                    dotColor={colors.paginationDotActiveColor}
                    dotStyle={{
                        width: hp(2), height: hp(0.8), marginRight: -hp(1)
                    }}
                    inactiveDotStyle={{
                        width: hp(0.8), height: hp(0.8)
                    }}
                    inactiveDotColor={"white"}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={1}
                    carouselRef={this._carousel}
                    containerStyle={{position: "absolute", bottom: 0,zIndex: 1}}
                />
            </View>
        );


    }

    render(){

        return(

            <View  style={[Styles.mainWrapper, {marginTop: Globals.SAFE_AREA_INSET.top}]}>

                <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content": "light-content"} />

                <SearchButton
                    onPress={() => this.props.navigation.navigate(Routes.SEARCH)}
                />

                <ScrollView showsVerticalScrollIndicator={false}>

                    {this.renderPromotionSlider()}

                    <View style={Styles.sectionContainer}>

                        <TouchableOpacity  onPress={() => {this.props.navigation.navigate(Routes.CATEGORY_LIST)}}>
                            <View style={Styles.sectionHeading}>
                                <Text style={Styles.sectionHeadingText}>Categories</Text>
                                <Image source={assets.arrow_right_icon} style={{width: hp(2), height: hp(2), tintColor: colors.textColorGrey1}} resizeMode={"contain"} />
                            </View>
                        </TouchableOpacity>

                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={this.state.categoryItems}
                            renderItem={({ item }) =>
                                <CategoryItem
                                    navigation={this.props.navigation}
                                    secondaryTitle={item.secondaryTitle}
                                    secondaryColor={item.secondaryColor}
                                    primaryTitle={item.primaryTitle}
                                    primaryColor={item.primaryColor}
                                    iconURI={item.iconURI}
                                    bgURI={item.bgURI}
                                />
                            }
                        />

                    </View>

                    <View style={Styles.sectionContainer}>

                        <TouchableOpacity onPress={() => {this.props.navigation.navigate(Routes.POPULAR_DEALS);}}>
                            <View style={Styles.sectionHeading}>
                                <Text style={Styles.sectionHeadingText}>Popular Deals</Text>
                                <Image source={assets.arrow_right_icon} style={{width: hp(2), height: hp(2), tintColor: colors.textColorGrey1}} resizeMode={"contain"} />

                            </View>
                        </TouchableOpacity>


                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.foodItems}
                            numColumns={2}
                            scrollEnabled={false}
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

                </ScrollView>

            </View>


        );
    }
}
