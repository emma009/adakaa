import React, { useRef, useState } from "react";
import { FlatList, Image, ScrollView, TouchableOpacity, useColorScheme, View } from "react-native";
import {Text} from 'react-native-elements';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView";
import AppConfig from "../../../branding/App_config";
import StarRating from "react-native-star-rating";
import { Styles } from "./Styles"
import AppInput from "../../components/Application/AppInput/View";
import AppButton from "../../components/Application/AppButton/View";
import Globals from "../../utils/Globals";
import { useTheme } from "@react-navigation/native";

const Typography = AppConfig.typography.default;
const Fonts = AppConfig.fonts.default;
const assets = AppConfig.assets.default;


export const ApplyFilters = (props) => {

    //Input reference
    let inputRef = useRef();

    //Theme based styling and colors
    const scheme = useColorScheme();
    const { colors } = useTheme();
    const screenStyles = Styles(scheme, colors);

    //Internal states
    const [rating, setRating] = useState(4.5);
    const [otherItems, setOtherItems] = useState(Globals.otherFilters);
    const [categories, setCategories] = useState(Globals.filterCategories);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    //Flatlist renderItem for Others type
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
                tintColor: item.checked ? colors.activeColor : colors.inactiveColor
            }} resizeMode={"contain"}/>

            <Text style={{
                marginHorizontal: wp(3),
                fontFamily: Fonts.RUBIK_REGULAR,
                fontSize: Typography.P4,
                color: colors.headingColor
            }}>{item.title}</Text>

            <Image source={assets.check_circle_icon} style={{
                position: "absolute",
                right: "5%",
                width: hp(2),
                height: hp(2),
                tintColor: item.checked ? colors.activeColor : colors.inactiveColor
            }} resizeMode={"contain"}/>

        </TouchableOpacity>
    }

    //Flatlist renderItem for Categories
    const renderCategoryItem = (item, index, showBottomBorder) => {
        return <TouchableOpacity onPress={() => {

            setCategories((categories) => {
                categories[index].checked = !categories[index].checked
                return [...categories];
            })

        }} style={[{
            backgroundColor: scheme === "dark" ? colors.secondaryBackground : colors.primaryBackground,
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
                tintColor: item.checked ? colors.activeColor : colors.inactiveColor
            }} resizeMode={"contain"}/>

            <Text style={{
                marginHorizontal: wp(3),
                fontFamily: Fonts.RUBIK_REGULAR,
                fontSize: Typography.P4,
                color: colors.headingColor
            }}>{item.title}</Text>

        </TouchableOpacity>

    }

    return (

        <BaseView
            navigation={props.navigation}
            title={"Apply Filters"}
            headerWithBack
            applyBottomSafeArea
            childView={() => {

                return (

                    <View style={screenStyles.mainContainer}>

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{marginBottom: hp(1)}}
                        >

                            <View style={screenStyles.cardContainerStyle}>

                                <Text style={screenStyles.titleStyle}>{"Price Range"}</Text>

                                <View style={screenStyles.priceContainer}>

                                    <AppInput
                                      textInputRef={r => (inputRef = r)}
                                      showLeftIcon={false}
                                        placeholder={"Min"}
                                        containerStyle={screenStyles.inputContainerStyle}
                                        inputStyle={{
                                            backgroundColor: colors.inputSecondaryBackground,
                                        }}
                                        value={minPrice}
                                        onChangeText={(minPrice) => {
                                            setMinPrice(minPrice)
                                        }}
                                      keyboardType={"number-pad"}
                                    />

                                    <AppInput
                                      textInputRef={r => (inputRef = r)}
                                      showLeftIcon={false}
                                        placeholder={"Max"}
                                        containerStyle={screenStyles.inputContainerStyle}
                                        inputStyle={{
                                            backgroundColor: colors.inputSecondaryBackground,
                                        }}
                                      value={maxPrice}
                                        onChangeText={(maxPrice) => {
                                            setMaxPrice(maxPrice)
                                        }}
                                      keyboardType={"number-pad"}
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
                                        fullStarColor={colors.ratingActiveColor}
                                        emptyStarColor={colors.ratingInActiveColor}
                                        selectedStar={(rating) => {
                                            setRating(rating)
                                        }}
                                    />

                                    <Text style={screenStyles.ratingTextStyle}>{rating + " Stars"}</Text>

                                </View>


                            </View>

                            <View style={screenStyles.cardContainerStyle}>

                                <Text style={screenStyles.titleStyle}>{"Others"}</Text>

                                <FlatList
                                  data={otherItems}
                                  keyExtractor={(item, index) => item.id}
                                  renderItem={({item, index}) => {
                                    return renderOthersItem(item, index);
                                }}
                                />

                            </View>

                            <View style={[screenStyles.cardContainerStyle, {borderBottomWidth: 0}]}>

                                <Text style={screenStyles.titleStyle}>{"Categories"}</Text>

                                <FlatList
                                    data={categories}
                                    numColumns={2}
                                    keyExtractor={(item, index) => item.id}
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
