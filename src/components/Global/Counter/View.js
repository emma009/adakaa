import React, {Component} from 'react';

import {Button, Text} from 'react-native-elements';
import {Image, TouchableOpacity, View} from "react-native";
import Styles from "./Styles";

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import colors from "../../../../branding/carter/styles/Colors";
import assets from "../../../../branding/carter/assets/Assets";

const PropTypes = require('prop-types');


class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cartCount: 0
        }

    }

    _cartCountChange = (behavior) => {
        if (behavior === "add") {
            this.setState({cartCount: this.state.cartCount + 1})
        } else if (behavior === "subtract" && !(this.state.cartCount === 0)) {
            this.setState({cartCount: this.state.cartCount - 1} )
        }
    };

    getHorizontalCounter = () => {

        const {
            spacing,
            borderWidth,
            borderColor,
            outerBorder,
            height
        } = this.props;

        return (
            <View style={{flexDirection: "row", borderWidth: outerBorder ? borderWidth : 0, borderColor}}>

                <TouchableOpacity style={{
                    width: spacing, height: spacing,borderRightColor: borderColor, borderRightWidth: borderWidth,
                    justifyContent: "center",
                    alignItems: "center",
                }} onPress={() => {
                    this._cartCountChange("subtract")
                }}>

                    <Image source={assets.minus_icon} style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />

                </TouchableOpacity>
                <View style={{width: spacing, alignItems: "center", justifyContent: "center"}}>
                    <Text style={Styles.counterText}>{this.state.cartCount}</Text>
                </View>

                <TouchableOpacity style={{
                    width: spacing, height: spacing,borderLeftColor: borderColor, borderLeftWidth: borderWidth,
                    justifyContent: "center",
                    alignItems: "center",
                }} onPress={() => {
                    this._cartCountChange("add")
                }}>

                    <Image source={assets.plus_icon} style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />

                </TouchableOpacity>
            </View>
        );

    }

    getVerticalCounter = () => {

        const {
            spacing,
            borderWidth,
            borderColor,
            outerBorder
        } = this.props;

        return (
            <View style={{flexDirection: "column", alignItems: "center"}}>

                <TouchableOpacity style={{
                    width: spacing, height: spacing,borderBottomColor: borderColor, borderBottomWidth: borderWidth, borderLeftColor: borderColor, borderLeftWidth: borderWidth,
                    justifyContent: "center",
                    alignItems: "center",
                }} onPress={() => {
                    this._cartCountChange("add")
                }}>

                    <Image source={assets.plus_icon} style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />

                </TouchableOpacity>
                <View style={{width: spacing, height: spacing, justifyContent: "center", alignItems: "center",  borderLeftColor: borderColor, borderLeftWidth: borderWidth}}>
                    <Text style={Styles.counterText}>{this.state.cartCount}</Text>
                </View>

                <TouchableOpacity style={{
                    width: spacing, height: spacing,borderTopColor: borderColor, borderTopWidth: borderWidth, borderLeftColor: borderColor, borderLeftWidth: borderWidth,
                    justifyContent: "center",
                    alignItems: "center",
                }} onPress={() => {
                    this._cartCountChange("subtract")
                }}>

                    <Image source={assets.minus_icon} style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />

                </TouchableOpacity>
            </View>
        );

    }

    render() {



        const {
            isVertical
        } = this.props;

        return (

            <View>
                {
                    isVertical ? (
                            this.getVerticalCounter()
                        )
                        : (
                            this.getHorizontalCounter()
                        )
                }

            </View>



        )
    }


}

Counter.propTypes = {

    spacing: PropTypes.number,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    outerBorder: PropTypes.bool,
    isVertical: PropTypes.bool

};

Counter.defaultProps = {
    spacing: wp("10"),
    borderWidth: 1,
    borderColor: colors.borderColorLight,
    outerBorder: false,
    isVertical: false,
};

module.exports = Counter;

