import React, {useState} from 'react';

import {Text} from 'react-native-elements';
import {Image, TouchableOpacity, View} from "react-native";
import { Styles } from "./Styles";

import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import AppConfig from "../../../../branding/App_config";
import { useTheme } from "@react-navigation/native";

const PropTypes = require('prop-types');

const assets = AppConfig.assets.default;


export const Counter = (props) => {


    //Theme based styling and colors
    const { colors } = useTheme();
    const itemStyles = Styles(colors);

    //Default Props
    const spacing = props.spacing || wp("12");
    const borderWidth = props.borderWidth || 1;
    const outerBorder = props.outerBorder || false;
    const isVertical = props.isVertical || false;

    //Constants
    const borderColor = colors.borderColorLight;

    //Internal states
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

        return (
            <View style={[itemStyles.horizontalContainer, {
                borderWidth: outerBorder ? borderWidth : 0, borderColor
            }]}>

                <TouchableOpacity style={[
                  itemStyles.actionContainer, {
                    width: spacing,
                    height: spacing,
                    borderRightColor: borderColor,
                    borderRightWidth: borderWidth,
                }]} onPress={() => {
                    _cartCountChange("subtract")
                }}>

                    <Image source={assets.minus_icon}
                           style={itemStyles.icon}
                           resizeMode={"contain"}/>

                </TouchableOpacity>
                <View style={[
                  itemStyles.actionContainer, {
                    width: spacing,
                }]}>
                    <Text style={itemStyles.counterText}>{cartCount}</Text>
                </View>

                <TouchableOpacity style={[
                  itemStyles.actionContainer, {
                    width: spacing,
                    height: spacing,
                    borderLeftColor: borderColor, borderLeftWidth: borderWidth,
                }]} onPress={() => {
                    _cartCountChange("add")
                }}>

                    <Image source={assets.plus_icon}
                           style={itemStyles.icon}
                           resizeMode={"contain"}/>

                </TouchableOpacity>
            </View>
        );

    }

    const getVerticalCounter = () => {

        return (
            <View style={itemStyles.verticalContainer}>

                <TouchableOpacity style={[
                  itemStyles.actionContainer, {
                    width: spacing,
                    height: spacing,
                    borderBottomColor: borderColor,
                    borderBottomWidth: borderWidth,
                    borderLeftColor: borderColor,
                    borderLeftWidth: borderWidth,
                }]} onPress={() => {
                    _cartCountChange("add")
                }}>

                    <Image source={assets.plus_icon}
                           style={itemStyles.icon}
                           resizeMode={"contain"}/>

                </TouchableOpacity>
                <View style={[
                  itemStyles.actionContainer, {
                    width: spacing,
                    height: spacing,
                    borderLeftColor: borderColor,
                    borderLeftWidth: borderWidth
                }]}>
                    <Text style={itemStyles.counterText}>{cartCount}</Text>
                </View>

                <TouchableOpacity style={[
                  itemStyles.actionContainer, {
                    width: spacing,
                    height: spacing,
                    borderTopColor: borderColor,
                    borderTopWidth: borderWidth,
                    borderLeftColor: borderColor,
                    borderLeftWidth: borderWidth,
                }]} onPress={() => {
                    _cartCountChange("subtract")
                }}>

                    <Image source={assets.minus_icon}
                           style={itemStyles.icon}
                           resizeMode={"contain"}/>

                </TouchableOpacity>
            </View>
        );

    }


    return (

        <View>
            {
                isVertical ? (
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
    outerBorder: PropTypes.bool,
    isVertical: PropTypes.bool

};

