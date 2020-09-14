import React, {Component} from 'react';

import {Button, Text} from 'react-native-elements';
import {View} from "react-native";
import Styles from "./Styles";

import {widthPercentageToDP as wp} from "react-native-responsive-screen";

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
            outerBorder
        } = this.props;

        return (
            <View style={{alignSelf: "baseline",flexDirection: "row", alignItems: "center", borderWidth: outerBorder ? borderWidth : 0, borderColor}}>
                <Button
                    title={"-"}
                    titleStyle={Styles.buttonTitle}
                    type={"clear"}
                    onPress={() => this._cartCountChange("subtract") }
                    containerStyle={{width: spacing,borderRightColor: borderColor, borderRightWidth: borderWidth}}
                />
                <View style={{width: spacing, alignItems: "center", justifyContent: "center"}}>
                    <Text style={Styles.counterText}>{this.state.cartCount}</Text>
                </View>
                <Button
                    title={"+"}
                    titleStyle={Styles.buttonTitle}
                    type={"clear"}
                    onPress={() => this._cartCountChange("add") }
                    containerStyle={{width: spacing, borderLeftColor: borderColor, borderLeftWidth: borderWidth}}
                />
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
            <View style={{alignSelf: "baseline",flexDirection: "column", alignItems: "center"}}>
                <Button
                    title={"+"}
                    titleStyle={Styles.buttonTitle}
                    type={"clear"}
                    onPress={() => this._cartCountChange("add") }
                    containerStyle={{width: spacing, height: spacing,borderBottomColor: borderColor, borderBottomWidth: borderWidth, borderLeftColor: borderColor, borderLeftWidth: borderWidth}}
                />
                <View style={{width: spacing, height: spacing, justifyContent: "center", alignItems: "center",  borderLeftColor: borderColor, borderLeftWidth: borderWidth}}>
                    <Text style={Styles.counterText}>{this.state.cartCount}</Text>
                </View>

                <Button
                    title={"-"}
                    titleStyle={Styles.buttonTitle}
                    type={"clear"}
                    onPress={() => this._cartCountChange("subtract") }
                    containerStyle={{width: spacing, height: spacing,borderTopColor: borderColor, borderTopWidth: borderWidth, borderLeftColor: borderColor, borderLeftWidth: borderWidth}}
                />
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
    borderColor: "#dadada",
    outerBorder: false,
    isVertical: false,
};

module.exports = Counter;

