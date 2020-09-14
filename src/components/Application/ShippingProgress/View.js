import React, { Component } from 'react';
import { View } from 'react-native';
import {Button, Divider, Icon, Text} from "react-native-elements";
import Styles from "./Styles";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import AppConfig from "../../../../branding/App_config";

const PropTypes = require('prop-types');
const colors = AppConfig.colors.default;

class ShippingProgress extends Component {


    render(){

        let {
            markSecondComplete,
            markThirdComplete
        } = this.props;

        return(
            <View style={{flexDirection: "row", justifyContent: "center", marginVertical: hp("2")}}>

                <View>
                    <View style={{flexDirection: "row"}}>

                        <View style={[Styles.numberCircle, {backgroundColor: colors.buttonGreenColor}]}>
                            <Text style={[Styles.numberText, {color: "white"}]}>1</Text>
                        </View>

                        <Divider style={{width: wp("18"), height: 2, backgroundColor: colors.buttonGreenColor, alignSelf: "center"}} />

                    </View>

                    <Text style={[Styles.bottomText, {color: "#000000"}]}>DELIVERY</Text>

                </View>

                <View>
                    <View style={{flexDirection: "row"}}>
                        <View style={[Styles.numberCircle, {backgroundColor: markSecondComplete ? colors.buttonGreenColor: "white"}]}>
                            <Text style={[Styles.numberText, {color: markSecondComplete ? "white": "#dadada"}]}>2</Text>
                        </View>

                        <Divider style={{width: wp("18"), height: 2, backgroundColor: markSecondComplete ? colors.buttonGreenColor : "#dadada", alignSelf: "center"}} />

                    </View>
                    <Text style={[Styles.bottomText, {color: markSecondComplete ? "#000000" : "#aaaaaa"}]}>ADDRESS</Text>

                </View>

                <View style={{}}>
                    <View style={[Styles.numberCircle, {backgroundColor: markThirdComplete ? colors.buttonGreenColor : "white"}]}>
                        <Text style={[Styles.numberText, {color: markThirdComplete ? "white": "#dadada"}]}>3</Text>
                    </View>
                    <Text style={[Styles.bottomText, {color: markThirdComplete ? "#000000" : "#aaaaaa"}]}>PAYMENT</Text>

                </View>

            </View>
        );
    }
}

ShippingProgress.propTypes = {


    markSecondComplete: PropTypes.bool,
    markThirdComplete: PropTypes.bool,

};

ShippingProgress.defaultProps = {

    markSecondComplete: false,
    markThirdComplete: false

};

module.exports = ShippingProgress;
