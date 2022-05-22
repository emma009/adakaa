import React from 'react';
import {Image, View} from 'react-native';
import {Divider, Text} from "react-native-elements";
import Styles from "./Styles";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import AppConfig from "../../../../branding/App_config";

const PropTypes = require('prop-types');

const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;


export const ShippingProgress = (props) => {

    let {
        markSecondComplete,
        markThirdComplete
    } = props;

    return (
        <View style={{flexDirection: "row", justifyContent: "center", marginVertical: hp("2")}}>

            <View>
                <View style={{flexDirection: "row", marginBottom: hp(0.5)}}>

                    <View style={[Styles.numberCircle, {
                        backgroundColor: colors.buttonGreenColor,
                        borderWidth: hp(0.2),
                        borderColor: colors.buttonGreenColor
                    }]}>
                        {!markSecondComplete && <Text style={[Styles.numberText, {color: "white"}]}>1</Text>}
                        {markSecondComplete &&
                            <Image source={assets.tick_icon} style={{width: hp(3), height: hp(3), tintColor: "white"}}
                                   resizeMode={"contain"}/>}
                    </View>

                    <Divider style={{
                        width: wp("18"),
                        height: hp(0.2),
                        backgroundColor: colors.buttonGreenColor,
                        alignSelf: "center"
                    }}/>

                </View>

                <Text style={[Styles.bottomText]}>DELIVERY</Text>

            </View>

            <View>
                <View style={{flexDirection: "row", marginBottom: hp(0.5)}}>
                    <View style={[Styles.numberCircle, {
                        backgroundColor: markSecondComplete ? colors.buttonGreenColor : "white",
                        borderWidth: hp(0.2),
                        borderColor: markSecondComplete ? colors.buttonGreenColor : colors.iconColorGrey2
                    }]}>
                        {!markThirdComplete && <Text
                            style={[Styles.numberText, {color: markSecondComplete ? "white" : colors.iconColorGrey2}]}>2</Text>}
                        {markThirdComplete &&
                            <Image source={assets.tick_icon} style={{width: hp(3), height: hp(3), tintColor: "white"}}
                                   resizeMode={"contain"}/>}
                    </View>

                    <Divider style={{
                        width: wp("18"),
                        height: hp(0.2),
                        backgroundColor: markSecondComplete ? colors.buttonGreenColor : colors.iconColorGrey2,
                        alignSelf: "center"
                    }}/>

                </View>
                <Text
                    style={[Styles.bottomText, {color: markSecondComplete ? colors.textColorBlack1 : colors.textColorGrey1}]}>ADDRESS</Text>

            </View>

            <View style={{}}>
                <View style={[Styles.numberCircle, {
                    marginBottom: hp(0.5),
                    backgroundColor: markThirdComplete ? colors.buttonGreenColor : "white",
                    borderWidth: hp(0.2),
                    borderColor: markThirdComplete ? colors.buttonGreenColor : colors.iconColorGrey2
                }]}>
                    <Text
                        style={[Styles.numberText, {color: markThirdComplete ? "white" : colors.iconColorGrey2}]}>3</Text>
                </View>
                <Text
                    style={[Styles.bottomText, {color: markThirdComplete ? colors.textColorBlack1 : colors.textColorGrey1}]}>PAYMENT</Text>

            </View>

        </View>
    );


}


ShippingProgress.propTypes = {


    markSecondComplete: PropTypes.bool,
    markThirdComplete: PropTypes.bool,

};

ShippingProgress.defaultProps = {

    markSecondComplete: false,
    markThirdComplete: false

};

