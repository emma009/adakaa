import React, {useRef, useState} from 'react';
import {FlatList, Image, ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Carousel, {Pagination} from 'react-native-snap-carousel';

import {FoodItem} from "../../../components/Application/FoodItem/View";
import {SearchButton} from "../../../components/Application/SearchButton/SearchButton";

import Styles from "./Styles";
import Routes from "../../../navigation/Routes";
import AppConfig from "../../../../branding/App_config";
import Globals from "../../../utils/Globals";
import RBSheet from "react-native-raw-bottom-sheet";
import {FavouritesBottomSheetComponent}
    from "../../../components/Application/FavouritesBottomSheetComponent/FavouritesBottomSheetComponent";


const colors = AppConfig.colors.default;
const assets = AppConfig.assets.default;
const styles = AppConfig.styling.default;

export const Variant2Home = (props) => {

    const slider_data = [
        {
            img: require("./Assets/Images/slider_img_1.png")
        },
        {
            img: require("./Assets/Images/slider_img_1.png")
        },
        {
            img: require("./Assets/Images/slider_img_1.png")
        },
        {
            img: require("./Assets/Images/slider_img_1.png")
        },
    ];

    const _carousel = useRef();
    let _favouriteSheet;

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const renderPromotionSlider = () => {

        return (
            <View style={Styles.promotionSliderContainer}>
                <Carousel
                    ref={_carousel}
                    data={slider_data}
                    renderItem={({item}) => <Image
                        source={item.img}
                        style={Styles.promotionSliderContainer}
                        resizeMode={"cover"}
                    />}
                    sliderWidth={styles.gridWidth}
                    itemWidth={styles.gridWidth}
                    onSnapToItem={(index) => setActiveSlideIndex(index)}
                    autoplay
                    autoplayInterval={5000}
                    loop
                />
                <Pagination
                    dotsLength={slider_data.length}
                    activeDotIndex={activeSlideIndex}
                    dotColor={colors.paginationDotActiveColor}
                    dotStyle={Styles.promotionSliderActiveDot}
                    inactiveDotStyle={Styles.promotionSliderInActiveDot}
                    inactiveDotColor={"white"}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={1}
                    carouselRef={_carousel}
                    containerStyle={Styles.promotionPaginationContainer}
                />
            </View>
        );


    }

    return (

        <View style={[Styles.mainWrapper, {marginTop: Globals.SAFE_AREA_INSET.top}]}>

            <StatusBar backgroundColor={colors.textColorGrey2} barStyle="dark-content"/>


            <SearchButton
                onPress={() => props.navigation.navigate(Routes.SEARCH)}
            />

            <ScrollView style={{}} showsVerticalScrollIndicator={false}>

                {renderPromotionSlider()}

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    marginVertical: hp("1")
                }}>

                    <Image
                        source={require("./Assets/Images/banner1.png")}
                        style={Styles.secondaryBannerContainer}
                    />

                    <Image
                        source={require("./Assets/Images/banner2.png")}
                        style={Styles.secondaryBannerContainer}
                    />


                </View>

                <Image
                    source={require("./Assets/Images/banner3.png")}
                    style={Styles.tertiaryBannerContainer}
                />

                <View style={Styles.sectionContainer}>

                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate(Routes.POPULAR_DEALS);
                    }}>
                        <View style={Styles.sectionHeading}>
                            <Text style={Styles.sectionHeadingText}>Popular Deals</Text>
                            <Image source={assets.arrow_right_icon} style={Styles.sectionRightIcon}/>

                        </View>
                    </TouchableOpacity>


                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={Globals.foodItems}
                        numColumns={2}
                        scrollEnabled={false}
                        renderItem={({item}) =>
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
                                cartCountChange={(count) => {
                                }}
                                favouriteChange={(favourite) => {
                                    if (favourite) {
                                        _favouriteSheet.open()
                                    }
                                }}
                                navigation={props.navigation}
                            />
                        }
                    />


                </View>

            </ScrollView>


            <RBSheet
                ref={ref => {
                    _favouriteSheet = ref;
                }}
                height={hp(42)}
            >

                <FavouritesBottomSheetComponent
                    onItemSelect={() => {
                        _favouriteSheet.close()
                    }}
                />

            </RBSheet>


        </View>

    );


}
