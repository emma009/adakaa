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
import RBSheet from "react-native-raw-bottom-sheet";
import Typography from "../../../branding/carter/styles/Typography";
import fonts from "../../../branding/carter/assets/Fonts";
import AppInput from "../../components/Application/AppInput/View";
import FavouritesBottomSheetComponent
    from "../../components/Application/FavouritesBottomSheetComponent/FavouritesBottomSheetComponent";

const colors = AppConfig.colors.default;

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
                    sliderWidth={styles.gridWidth2}
                    itemWidth={styles.gridWidth2}
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

            <View style={{flex: 1}}>
            <View  style={[Styles.mainWrapper, {marginTop: Globals.SAFE_AREA_INSET.top}]}>

                <StatusBar backgroundColor={colors.textColorGrey2} barStyle="dark-content" />


                <SearchButton
                    onPress={() => this.props.navigation.navigate(Routes.SEARCH)}
                />

                <ScrollView style={{}} showsVerticalScrollIndicator={false}>

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
                            data={Globals.categoryItems}
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
                            data={Globals.foodItems}
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
                                    favouriteChange = {(favourite) => {
                                        if (favourite) {
                                            this.RBSheet.open()
                                        }
                                    }}
                                    navigation={this.props.navigation}
                                />
                            }
                        />


                    </View>

                </ScrollView>


            </View>

                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    height={hp(42)}
                >

                    <FavouritesBottomSheetComponent />

                </RBSheet>
            </View>

        );
    }
}
