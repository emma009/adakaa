import React, {Component} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {Button, Icon, Rating, Text} from 'react-native-elements';
import Routes from "../../navigation/Routes";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View"
import Styles from "./Styles";
import {StackActions} from "@react-navigation/native";
import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";
import Fonts from "../../../branding/carter/assets/Fonts";
import TextInput from "../../components/Global/TextInput/View";
import assets from "../../../branding/carter/assets/Assets";
import StarRating from "react-native-star-rating";
import Globals from "../../utils/Globals";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

export default class ApplyFilters extends  Component {




    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"ApplyFilters"}
                rightIcon={"google"}
                onRightIconPress={() => {

                }}
                childView={() => {

                    return (

                        <View style={{flex: 1}}>

                            <ScrollView>

                                <View style={{width: "100%", backgroundColor: "white", paddingHorizontal: wp(4), paddingVertical: hp(1), borderBottomWidth: 1,
                                    borderBottomColor: colors.borderColorLight}}>

                                    <Text style={{
                                        fontSize: Typography.P3,
                                        fontFamily: Fonts.RUBIK_MEDIUM,
                                        marginVertical: hp(1),
                                        color: colors.textColorBlack1
                                    }}>{"Price Range"}</Text>

                                    <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: hp(2)}}>
                                        <TextInput
                                            placeholder={"Min"}
                                            placeholderTextColor={colors.textColorGrey1}
                                            containerStyle={[
                                                {
                                                    backgroundColor: "#F3F5F8",
                                                    width: "49%"
                                                },

                                            ]}
                                            onChangeText={(value) => {

                                            }}
                                        />

                                        <TextInput
                                            placeholder={"Max"}
                                            placeholderTextColor={colors.textColorGrey1}
                                            containerStyle={[
                                                {
                                                    backgroundColor: "#F3F5F8",
                                                    width: "49%"
                                                },

                                            ]}
                                            onChangeText={(value) => {

                                            }}
                                        />
                                    </View>

                                </View>

                                <View style={{width: "100%", backgroundColor: "white", paddingHorizontal: wp(4), paddingVertical: hp(1), borderBottomWidth: 1,
                                    borderBottomColor: colors.borderColorLight}}>

                                    <Text style={{
                                        fontSize: Typography.P3,
                                        fontFamily: Fonts.RUBIK_MEDIUM,
                                        marginVertical: hp(1),
                                        color: colors.textColorBlack1
                                    }}>{"Star Rating"}</Text>


                                    <View style={{flexDirection: "row", alignItems: "center", backgroundColor: colors.textColorGrey2, marginBottom: hp(2), paddingVertical: hp(1.5), paddingHorizontal: wp(2)}}>

                                        <StarRating
                                            disabled={false}
                                            maxStars={5}
                                            rating={2}
                                            starSize={hp(3)}
                                            fullStarColor={colors.iconColorOrange1}
                                            emptyStarColor={colors.borderColorLight}
                                            selectedStar={(rating) => {}}
                                        />

                                        <Text style={{
                                            fontSize: Typography.P5,
                                            fontFamily: Fonts.RUBIK_REGULAR,
                                            color: colors.textColorGrey1,
                                            flex: 1,
                                            textAlign: "right"
                                        }}>{"3 Stars"}</Text>

                                    </View>



                                </View>

                                <View style={{width: "100%", backgroundColor: "white", paddingHorizontal: wp(4), paddingVertical: hp(1), marginBottom: hp(2)}}>

                                    <Text style={{
                                        fontSize: Typography.P3,
                                        fontFamily: Fonts.RUBIK_MEDIUM,
                                        marginVertical: hp(1),
                                        color: colors.textColorBlack1
                                    }}>{"Others"}</Text>

                                    <TouchableOpacity onPress={() => {}} style={{
                                        backgroundColor: "white",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingVertical: hp("1.5"),
                                        borderBottomWidth: 1,
                                        borderBottomColor: colors.borderColorLight
                                    }}>

                                        <Image source={assets.discount_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />

                                        <Text style={{
                                            marginHorizontal: wp(3),
                                            fontFamily: Fonts.RUBIK_REGULAR,
                                            fontSize: Typography.P4,
                                            color: colors.textColorBlack1
                                        }}>Discount</Text>

                                        <Image source={assets.check_circle_icon} style={{position: "absolute",
                                            right: "5%", width: hp(2), height: hp(2), tintColor: colors.borderColorLight}} resizeMode={"contain"} />

                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => {}} style={{
                                        backgroundColor: "white",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingVertical: hp("1.5"),
                                        borderBottomWidth: 1,
                                        borderBottomColor: colors.borderColorLight
                                    }}>
                                        <Image source={assets.shipping_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />

                                        <Text style={{
                                            marginHorizontal: wp(3),
                                            fontFamily: Fonts.RUBIK_REGULAR,
                                            fontSize: Typography.P4,
                                            color: colors.textColorBlack1
                                        }}>Free Shipping</Text>

                                        <Image source={assets.check_circle_icon} style={{position: "absolute",
                                            right: "5%", width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />

                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => {}} style={{
                                        backgroundColor: "white",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingVertical: hp("1.5"),
                                    }}>
                                        <Image source={assets.same_day_delivery_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />

                                        <Text style={{
                                            marginHorizontal: wp(3),
                                            fontFamily: Fonts.RUBIK_REGULAR,
                                            fontSize: Typography.P4,
                                            color: colors.textColorBlack1
                                        }}>Same Day Delivery</Text>

                                        <Image source={assets.check_circle_icon} style={{position: "absolute",
                                            right: "5%", width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />

                                    </TouchableOpacity>


                                </View>

                                <View style={{width: "100%", backgroundColor: "white", paddingHorizontal: wp(4), paddingVertical: hp(1), marginBottom: hp(3)}}>

                                    <Text style={{
                                        fontSize: Typography.P3,
                                        fontFamily: Fonts.RUBIK_MEDIUM,
                                        marginVertical: hp(1),
                                        color: colors.textColorBlack1
                                    }}>{"Categories"}</Text>

                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingVertical: hp(1),
                                        borderBottomWidth: 1,
                                        borderBottomColor: colors.borderColorLight
                                    }}>


                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            flex: 0.55

                                        }}>
                                            <Image source={assets.fruits_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />

                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: colors.textColorBlack1
                                            }}>Fresh Fruits</Text>

                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            flex: 0.45
                                        }}>
                                            <Image source={assets.chicken_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />

                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: colors.textColorBlack1
                                            }}>Fresh Chicken</Text>
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingVertical: hp(1),
                                        borderBottomWidth: 1,
                                        borderBottomColor: colors.borderColorLight
                                    }}>


                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            flex: 0.55
                                        }}>
                                            <Image source={assets.dairy_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />

                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: colors.textColorBlack1
                                            }}>Fresh Dairy</Text>

                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            flex: 0.45
                                        }}>
                                            <Image source={assets.fishes_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />

                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: colors.textColorBlack1
                                            }}>Fresh Fishes</Text>
                                        </TouchableOpacity>

                                    </View>


                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingVertical: hp(1),
                                        borderBottomWidth: 1,
                                        borderBottomColor: colors.borderColorLight
                                    }}>


                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            flex: 0.55
                                        }}>
                                            <Image source={assets.vegetables_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />

                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: colors.textColorBlack1
                                            }}>Fresh Vegetables</Text>

                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            flex: 0.45
                                        }}>
                                            <Image source={assets.salad_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />

                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: colors.textColorBlack1
                                            }}>Organic Salads</Text>
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingVertical: hp(1),
                                        borderBottomWidth: 1,
                                        borderBottomColor: colors.borderColorLight
                                    }}>


                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            flex: 0.55
                                        }}>
                                            <Image source={assets.salad_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />

                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: colors.textColorBlack1
                                            }}>Original Medicine</Text>

                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            flex: 0.45
                                        }}>
                                            <Image source={assets.pets_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />

                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: colors.textColorBlack1
                                            }}>Pet Foods</Text>
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingVertical: hp(1),
                                        borderBottomWidth: 1,
                                        borderBottomColor: colors.borderColorLight
                                    }}>


                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            flex: 0.55
                                        }}>
                                            <Image source={assets.bakery_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />

                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: colors.textColorBlack1
                                            }}>Quality Bakery</Text>

                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            flex: 0.45
                                        }}>
                                            <Image source={assets.pizza_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />

                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: colors.textColorBlack1
                                            }}>Quality Pizzas</Text>
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingVertical: hp(1),
                                    }}>


                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            flex: 0.55
                                        }}>
                                            <Image source={assets.baby_products_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />

                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: colors.textColorBlack1
                                            }}>Baby Products</Text>

                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            flex: 0.45
                                        }}>
                                            <Image source={assets.sports_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} />

                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: colors.textColorBlack1
                                            }}>Sport Goods</Text>
                                        </TouchableOpacity>

                                    </View>

                                </View>



                            </ScrollView>



                            <Button
                                containerStyle={{marginBottom: Globals.SAFE_AREA_INSET.bottom + hp(1)}}
                                buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                title={'Apply Filters'}
                                titleStyle={styles.buttonStyle}
                                onPress={() => {

                                }}/>


                        </View>


                    );



                }}

            />


        );
    }
}
