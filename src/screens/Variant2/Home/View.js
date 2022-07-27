import React, {useRef, useState} from 'react';
import { FlatList, Image, ScrollView, StatusBar, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Carousel, {Pagination} from 'react-native-snap-carousel';

import {FoodItem} from "../../../components/Application/FoodItem/View";
import {SearchButton} from "../../../components/Application/SearchButton/View";

import { Styles } from "./Styles";
import Routes from "../../../navigation/Routes";
import AppConfig from "../../../../branding/App_config";
import Globals from "../../../utils/Globals";
import RBSheet from "react-native-raw-bottom-sheet";
import {FavouritesBottomSheet}
    from "../../../components/Application/FavouritesBottomSheet/View";
import { useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../../branding/carter/styles/light/Style";
import IconNames from "../../../../branding/carter/assets/IconNames";
import { SvgIcon } from "../../../components/Application/SvgIcon/View";


const assets = AppConfig.assets.default;

//Constants
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

export const Variant2Home = (props) => {


  //Theme based styling and colors
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);
  const screenStyles = Styles(globalStyles, scheme, colors);


  //Internal States
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);


  //References
    const _carousel = useRef();
    let _favouriteSheet = useRef();


    const renderPromotionSlider = () => {

        return (
            <View style={screenStyles.promotionSliderContainer}>
                <Carousel
                    ref={_carousel}
                    data={slider_data}
                    renderItem={({item}) => <Image
                        source={item.img}
                        style={screenStyles.promotionSliderContainer}
                        resizeMode={"cover"}
                    />}
                    sliderWidth={globalStyles.gridWidth}
                    itemWidth={globalStyles.gridWidth}
                    onSnapToItem={(index) => setActiveSlideIndex(index)}
                    autoplay
                    autoplayInterval={5000}
                    loop
                />
                <Pagination
                    dotsLength={slider_data.length}
                    activeDotIndex={activeSlideIndex}
                    dotColor={colors.paginationDotActiveColor}
                    dotStyle={screenStyles.promotionSliderActiveDot}
                    inactiveDotStyle={screenStyles.promotionSliderInActiveDot}
                    inactiveDotColor={colors.primaryBackground}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={1}
                    carouselRef={_carousel}
                    containerStyle={screenStyles.promotionPaginationContainer}
                />
            </View>
        );


    }

    return (

        <View style={[screenStyles.mainWrapper, {paddingTop: Globals.SAFE_AREA_INSET.top}]}>

            <StatusBar barStyle={scheme === "dark" ? "light-content" : "dark-content"}/>


          <View style={screenStyles.searchContainer}>
              <SearchButton
                  onPress={() => props.navigation.navigate(Routes.SEARCH)}
              />
          </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                {renderPromotionSlider()}

                <View style={screenStyles.secondarySliderContainer}>

                    <Image
                        source={require("./Assets/Images/banner1.png")}
                        style={screenStyles.secondaryBannerContainer}
                    />

                    <Image
                        source={require("./Assets/Images/banner2.png")}
                        style={screenStyles.secondaryBannerContainer}
                    />


                </View>

              <View style={screenStyles.sectionContainer}>
                  <Image
                      source={require("./Assets/Images/banner3.png")}
                      style={screenStyles.tertiaryBannerContainer}
                  />

              </View>

                <View style={screenStyles.sectionContainer}>

                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate(Routes.POPULAR_DEALS);
                    }}>
                        <View style={screenStyles.sectionHeading}>
                            <Text style={screenStyles.sectionHeadingText}>Popular Deals</Text>
                          <SvgIcon type={IconNames.ArrowRight} width={20} height={20} color={colors.subHeadingColor} />

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

                <FavouritesBottomSheet
                    onItemSelect={() => {
                        _favouriteSheet.close()
                    }}
                />

            </RBSheet>


        </View>

    );


}
