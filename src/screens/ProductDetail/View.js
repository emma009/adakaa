import React, {createRef, useState} from 'react';
import {Image, ScrollView, StatusBar, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Text} from 'react-native-elements';
import Routes from "../../navigation/Routes";
import Styles from "./Styles";
import AppHeader from "../../components/Application/AppHeader/View";
import {Counter} from "../../components/Global/Counter/View"
import AppConfig from "../../../branding/App_config";
import StarRating from "react-native-star-rating";
import {FavouritesBottomSheetComponent}
    from "../../components/Application/FavouritesBottomSheetComponent/FavouritesBottomSheetComponent";
import RBSheet from "react-native-raw-bottom-sheet";
import ReadMore from "@fawazahmed/react-native-read-more";
import AppButton from "../../components/Application/AppButton/View";

const colors = AppConfig.colors.default;
const assets = AppConfig.assets.default;
const styles = AppConfig.styling.default;

export const ProductDetail = (props) => {

    let sheetRef = createRef();

    const [isFavourite, setIsFavourite] = useState(props.route.params.item.isFavourite);


    const {
        item
    } = props.route.params

    return (
        <View style={Styles.container}>
            <StatusBar backgroundColor={"white"} barStyle="dark-content"/>

            <View style={Styles.imageContainer}>

                <Image
                    source={item.bigImage}
                    resizeMode={"contain"}
                    style={Styles.mainImage}
                />


                <AppHeader
                    navigation={props.navigation}
                    transparentHeader
                    headerWithBack
                    blackIcons
                    title={""}
                />
            </View>

            <View style={Styles.bottomContainer}>


                <View style={{flex: 0.65}}>

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={Styles.infoContainer}>
                            <Text style={Styles.priceText}>{item.price}</Text>
                            <View style={Styles.favouriteContainer}>

                                <TouchableOpacity onPress={() => {
                                    setIsFavourite((isFavourite) => {
                                        return !isFavourite
                                    });

                                    if (isFavourite) {
                                        sheetRef.open()
                                    }

                                }}>


                                    <Image
                                        source={isFavourite ? assets.heart_filled_icon : assets.heart_light_empty_icon}
                                        style={[
                                            {
                                                tintColor: isFavourite ? colors.iconColorRed1 : colors.iconColorGrey1
                                            },
                                            Styles.favouriteIcon
                                        ]} resizeMode={"contain"}/>

                                </TouchableOpacity>

                            </View>
                        </View>


                        <Text style={Styles.nameText}>{item.title}</Text>
                        <Text style={Styles.weightText}>{item.weight}</Text>


                        <TouchableWithoutFeedback onPress={() => {
                            props.navigation.navigate(Routes.REVIEW_LIST)
                        }}>

                            <View style={Styles.ratingContainer}>
                                <Text style={Styles.ratingText}>{item.ratingValue}</Text>


                                <StarRating
                                    disabled={true}
                                    maxStars={5}
                                    rating={item.ratingValue}
                                    starSize={hp(2)}
                                    fullStarColor={styles.ratingStyle.fullStarColor}
                                    emptyStarColor={styles.ratingStyle.emptyStarColor}
                                    selectedStar={(rating) => {
                                    }}
                                    containerStyle={{
                                        marginHorizontal: wp("1")
                                    }}
                                />
                                <View style={{flexDirection: "row"}}>
                                    <Text style={Styles.reviewText}>[</Text>
                                    <Text style={Styles.reviewText}>{"93 reviews"}</Text>
                                    <Text style={Styles.reviewText}>]</Text>
                                </View>

                            </View>

                        </TouchableWithoutFeedback>


                        {/*<Text style={Styles.detailText} numberOfLines={3}>{item.detail}</Text>*/}

                        <ReadMore
                            seeMoreText={"more"}
                            seeLessText={"less"}
                            seeMoreStyle={Styles.seeMoreStyle}
                            seeLessStyle={Styles.seeMoreStyle}
                            numberOfLines={3}
                            style={Styles.detailText}>
                            {item.detail + item.detail}
                        </ReadMore>


                    </ScrollView>


                </View>

                <View style={{flex: 0.35}}>
                    <View style={Styles.cartCounterContainer}>
                        <Text style={Styles.cartCounterText}>QUANTITY</Text>
                        <Counter
                        />

                    </View>

                    <AppButton
                        title={'Add to Cart'}
                        onPress={() => {

                        }}
                    />

                </View>

            </View>

            <RBSheet
                ref={ref => {
                    sheetRef = ref;
                }}
                height={hp(42)}
            >

                <FavouritesBottomSheetComponent
                    onItemSelect={() => {
                        sheetRef.close()
                    }}
                />

            </RBSheet>


        </View>
    );


}
