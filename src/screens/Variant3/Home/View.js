import React, {useRef, useState} from 'react';
import {FlatList, Image, ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

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
import {CategoryItem} from "../../../components/Application/CategoryItem/CategoryItem";


const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;
const colors = AppConfig.colors.default;
const assets = AppConfig.assets.default;
const styles = AppConfig.styling.default;

export const Variant3Home = (props) => {

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
    const [categorySliderList, setCategorySliderList] = useState(Globals.categoryItems);

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



                    <FlatList
                        horizontal
                        pagingEnabled
                        style={{marginVertical: hp(2)}}
                        showsHorizontalScrollIndicator={false}
                        data={categorySliderList}
                        renderItem={({item, index}) =>
                            <TouchableOpacity
                                onPress={() => {

                                    setCategorySliderList(categorySliderList => {

                                        categorySliderList.map(categoryItem => {
                                            categoryItem.selected = categoryItem.primaryTitle === item.primaryTitle;
                                        })

                                        return [...categorySliderList]
                                    })

                                }}
                                style={{justifyContent: "flex-end"}}>
                                {
                                    item.selected ?

                                    <Text style={[Styles.categorySliderActiveText, index === 0 && {marginLeft: 0}]}>{item.primaryTitle}</Text>
                                        :
                                        <Text style={Styles.categorySliderInActiveText}>{item.primaryTitle}</Text>

                                }

                                </TouchableOpacity>

                        }
                    />

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={Globals.foodItems.slice(0, 4)}
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


                <View style={Styles.sectionContainer}>

                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate(Routes.CATEGORY_LIST)
                    }}>
                        <View style={Styles.sectionHeading}>
                            <Text style={Styles.sectionHeadingText}>Categories</Text>
                            <Image source={assets.arrow_right_icon} style={Styles.sectionRightIcon}/>
                        </View>
                    </TouchableOpacity>

                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={Globals.categoryItems}
                        renderItem={({item}) =>
                            <CategoryItem
                                navigation={props.navigation}
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
