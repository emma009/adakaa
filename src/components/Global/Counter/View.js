import React, {useState} from 'react';

import {Text} from 'react-native-elements';
import {Image, TouchableOpacity, View} from "react-native";
import Styles from "./Styles";

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import AppConfig from "../../../../branding/App_config";

const PropTypes = require('prop-types');

const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;


export const Counter = (props) => {

    const [cartCount, setCartCount] = useState(0);

    const _cartCountChange = (behavior) => {
        if (behavior === "add") {
            setCartCount((cartCount) => {
                return cartCount + 1
            })
        } else if (behavior === "subtract" && !(cartCount === 0)) {
            setCartCount((cartCount) => {
                return cartCount - 1
            })
        }
    };

    const getHorizontalCounter = () => {

        const {
            spacing,
            borderWidth,
            borderColor,
            outerBorder
        } = props;

        return (
            <View style={{flexDirection: "row", borderWidth: outerBorder ? borderWidth : 0, borderColor}}>

                <TouchableOpacity style={{
                    width: spacing,
                    height: spacing,
                    borderRightColor: borderColor,
                    borderRightWidth: borderWidth,
                    justifyContent: "center",
                    alignItems: "center"
                }} onPress={() => {
                    _cartCountChange("subtract")
                }}>

                    <Image source={assets.minus_icon}
                           style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}}
                           resizeMode={"contain"}/>

                </TouchableOpacity>
                <View style={{width: spacing, alignItems: "center", justifyContent: "center"}}>
                    <Text style={Styles.counterText}>{cartCount}</Text>
                </View>

                <TouchableOpacity style={{
                    width: spacing, height: spacing, borderLeftColor: borderColor, borderLeftWidth: borderWidth,
                    justifyContent: "center",
                    alignItems: "center",
                }} onPress={() => {
                    _cartCountChange("add")
                }}>

                    <Image source={assets.plus_icon}
                           style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}}
                           resizeMode={"contain"}/>

                </TouchableOpacity>
            </View>
        );

    }

    const getVerticalCounter = () => {

        const {
            spacing,
            borderWidth,
            borderColor,
        } = props;

        return (
            <View style={{flexDirection: "column", alignItems: "center"}}>

                <TouchableOpacity style={{
                    width: spacing,
                    height: spacing,
                    borderBottomColor: borderColor,
                    borderBottomWidth: borderWidth,
                    borderLeftColor: borderColor,
                    borderLeftWidth: borderWidth,
                    justifyContent: "center",
                    alignItems: "center",
                }} onPress={() => {
                    _cartCountChange("add")
                }}>

                    <Image source={assets.plus_icon}
                           style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}}
                           resizeMode={"contain"}/>

                </TouchableOpacity>
                <View style={{
                    width: spacing,
                    height: spacing,
                    justifyContent: "center",
                    alignItems: "center",
                    borderLeftColor: borderColor,
                    borderLeftWidth: borderWidth
                }}>
                    <Text style={Styles.counterText}>{cartCount}</Text>
                </View>

                <TouchableOpacity style={{
                    width: spacing,
                    height: spacing,
                    borderTopColor: borderColor,
                    borderTopWidth: borderWidth,
                    borderLeftColor: borderColor,
                    borderLeftWidth: borderWidth,
                    justifyContent: "center",
                    alignItems: "center",
                }} onPress={() => {
                    _cartCountChange("subtract")
                }}>

                    <Image source={assets.minus_icon}
                           style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}}
                           resizeMode={"contain"}/>

                </TouchableOpacity>
            </View>
        );

    }


    return (

        <View>
            {
                props.isVertical ? (
                        getVerticalCounter()
                    )
                    : (
                        getHorizontalCounter()
                    )
            }

        </View>


    )
}

Counter.propTypes = {

    spacing: PropTypes.number,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    outerBorder: PropTypes.bool,
    isVertical: PropTypes.bool

};

Counter.defaultProps = {
    spacing: wp("12"),
    borderWidth: 1,
    borderColor: colors.borderColorLight,
    outerBorder: false,
    isVertical: false,
};

