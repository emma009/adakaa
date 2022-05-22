import React, {useState} from 'react';
import {FlatList, Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView";
import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";
import Fonts from "../../../branding/carter/assets/Fonts";
import assets from "../../../branding/carter/assets/Assets";
import StarRating from "react-native-star-rating";
import screenStyles from "./Styles"
import AppInput from "../../components/Application/AppInput/View";
import AppButton from "../../components/Application/AppButton/View";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;


export const ApplyFilters = (props) => {

    const [rating, setRating] = useState(4.5);
    const [otherItems, setOtherItems] = useState([
        {
            leftIcon: assets.discount_icon,
            title: "Discount",
            checked: false
        },
        {
            leftIcon: assets.shipping_icon,
            title: "Free Shipping",
            checked: false
        },
        {
            leftIcon: assets.same_day_delivery_icon,
            title: "Same Day Delivery",
            checked: false
        }
    ]);
    const [categories, setCategories] = useState([
        {
            leftIcon: assets.fruits_icon,
            title: "Fresh Fruits",
            checked: false
        },
        {
            leftIcon: assets.chicken_icon,
            title: "Fresh Chicken",
            checked: false
        },
        {
            leftIcon: assets.dairy_icon,
            title: "Fresh Dairy",
            checked: false
        },
        {
            leftIcon: assets.fishes_icon,
            title: "Fresh Fishes",
            checked: false
        },
        {
            leftIcon: assets.vegetables_icon,
            title: "Fresh Vegetables",
            checked: false
        },
        {
            leftIcon: assets.salad_icon,
            title: "Organic Salads",
            checked: false
        },
        {
            leftIcon: assets.medicine_icon,
            title: "Original Medicine",
            checked: false
        },
        {
            leftIcon: assets.pets_icon,
            title: "Pet Foods",
            checked: false
        },
        {
            leftIcon: assets.bakery_icon,
            title: "Quality Bakery",
            checked: false
        },
        {
            leftIcon: assets.pizza_icon,
            title: "Quality Pizza",
            checked: false
        },
        {
            leftIcon: assets.baby_products_icon,
            title: "Baby Products",
            checked: false
        },
        {
            leftIcon: assets.sports_icon,
            title: "Sports Goods",
            checked: false
        }
    ]);

    const renderOthersItem = (item, index) => {
        return <TouchableOpacity onPress={() => {


            setOtherItems((otherItems) => {
                otherItems[index].checked = !otherItems[index].checked
                return [...otherItems];
            })

        }} style={[
            screenStyles.othersItemContainerStyle,
            {
                borderBottomWidth: index === otherItems.length - 1 ? 0 : 1,
            }]}>

            <Image source={item.leftIcon} style={{
                width: hp(2),
                height: hp(2),
                tintColor: item.checked ? colors.primaryGreenColor : colors.borderColorLight
            }} resizeMode={"contain"}/>

            <Text style={{
                marginHorizontal: wp(3),
                fontFamily: Fonts.RUBIK_REGULAR,
                fontSize: Typography.P4,
                color: colors.textColorBlack1
            }}>{item.title}</Text>

            <Image source={assets.check_circle_icon} style={{
                position: "absolute",
                right: "5%",
                width: hp(2),
                height: hp(2),
                tintColor: item.checked ? colors.primaryGreenColor : colors.borderColorLight
            }} resizeMode={"contain"}/>

        </TouchableOpacity>
    }

    const renderCategoryItem = (item, index, showBottomBorder) => {
        return <TouchableOpacity onPress={() => {

            setCategories((categories) => {
                categories[index].checked = !categories[index].checked
                return [...categories];
            })

        }} style={[{
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            flex: 0.55,
            paddingVertical: hp("1.5"),
        },
            showBottomBorder && {
                borderBottomWidth: 1,
                borderBottomColor: colors.borderColorLight
            }
        ]}>
            <Image source={item.leftIcon} style={{
                width: hp(2),
                height: hp(2),
                tintColor: item.checked ? colors.primaryGreenColor : colors.iconColorGrey1
            }} resizeMode={"contain"}/>

            <Text style={{
                marginHorizontal: wp(3),
                fontFamily: Fonts.RUBIK_REGULAR,
                fontSize: Typography.P4,
                color: colors.textColorBlack1
            }}>{item.title}</Text>

        </TouchableOpacity>

    }

    return (

        <BaseView
            navigation={props.navigation}
            title={"Apply Filters"}
            childView={() => {

                return (

                    <View style={screenStyles.mainContainer}>

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{marginBottom: hp(1)}}
                        >

                            <View style={screenStyles.cardContainerStyle}>

                                <Text style={screenStyles.titleStyle}>{"Price Range"}</Text>

                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}>

                                    <AppInput
                                        showLeftIcon={false}
                                        placeholder={"Min"}
                                        containerStyle={screenStyles.inputContainerStyle}
                                        inputStyle={{
                                            backgroundColor: colors.textColorGrey2,
                                        }}
                                        onChangeText={(value) => {
                                        }}
                                    />

                                    <AppInput
                                        showLeftIcon={false}
                                        placeholder={"Max"}
                                        containerStyle={screenStyles.inputContainerStyle}
                                        inputStyle={{
                                            backgroundColor: colors.textColorGrey2,
                                        }}
                                        onChangeText={(value) => {
                                        }}
                                    />

                                </View>

                            </View>

                            <View style={screenStyles.cardContainerStyle}>

                                <Text style={screenStyles.titleStyle}>{"Star Rating"}</Text>


                                <View style={screenStyles.ratingContainerStyle}>

                                    <StarRating
                                        maxStars={5}
                                        rating={rating}
                                        starSize={hp(3)}
                                        fullStarColor={styles.ratingStyle.fullStarColor}
                                        emptyStarColor={styles.ratingStyle.emptyStarColor}
                                        selectedStar={(rating) => {
                                            setRating(rating)
                                        }}
                                    />

                                    <Text style={screenStyles.ratingTextStyle}>{rating + " Stars"}</Text>

                                </View>


                            </View>

                            <View style={screenStyles.cardContainerStyle}>

                                <Text style={screenStyles.titleStyle}>{"Others"}</Text>

                                <FlatList data={otherItems} renderItem={({item, index}) => {
                                    return renderOthersItem(item, index);
                                }}
                                />

                            </View>

                            <View style={[screenStyles.cardContainerStyle, {borderBottomWidth: 0}]}>

                                <Text style={screenStyles.titleStyle}>{"Categories"}</Text>


                                <FlatList
                                    data={categories}
                                    numColumns={2}
                                    renderItem={({item, index}) => {
                                        return renderCategoryItem(
                                            item, index, (!(index === categories.length - 2 || index === categories.length - 1))
                                        )
                                    }}
                                />

                            </View>


                        </ScrollView>

                        <AppButton
                            title={'Apply Filters'}
                            onPress={() => {
                                props.navigation.goBack()
                            }}
                        />

                    </View>


                );


            }}

        />


    );


}
