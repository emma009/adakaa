import React from 'react';
import {Animated, Image, TouchableOpacity, View} from "react-native"
import {Text} from 'react-native-elements';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Styles from "./Style"
import AppConfig from "../../../../branding/App_config";
import Easing from "react-native/Libraries/Animated/src/Easing";
import Swipeable from "react-native-gesture-handler/Swipeable";

const PropTypes = require('prop-types');

const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;
const globalStyles = AppConfig.styling.default;


const activeAnimConfig = {
    toValue: 1,
    duration: 300,
    easing: Easing.linear,
    useNativeDriver: true
}

const deActiveAnimConfig = {
    toValue: 0,
    duration: 300,
    easing: Easing.linear,
    useNativeDriver: true
}

export const CardItem = (props) => {


    const {
        isTouchable,
        isActive,
        item,
        showActiveIcon,
        showAnimatedIcon,
        onPress
    } = props;


    const touchableComponent = (child) => {
        return <TouchableOpacity
            onPress={() => {
                onPress()
            }}
            style={[Styles.container, isActive && {
                borderWidth: 1,
                borderColor: colors.primaryGreenColor
            }]}>
            <View style={{ flex: 1}}>
                {child}
            </View>
        </TouchableOpacity>
    }


    const renderRightActions = (progress, dragX) => {
        return (

            <TouchableOpacity
                onPress={() => {

                }}
                style={{
                    width: wp("20"),
                    height: "100%",
                    backgroundColor: colors.iconColorRed2,
                    justifyContent: "center",
                    alignItems: "center"
                }}>

                <Image
                    source={assets.trash_icon}
                    style={{
                        width: hp(3),
                        height: hp(3),
                        tintColor: "white",
                        resizeMode: "contain"
                    }} />

            </TouchableOpacity>

        );
    };


    const nonTouchableComponent = (child) => {
        return <View
            style={[
                Styles.container,
                {marginBottom: 0},
                isActive && {borderBottomWidth: 1, borderBottomColor: colors.borderColorLight}
            ]}>
            <Swipeable
                key={item.key}
                friction={2}
                leftThreshold={80}
                rightThreshold={40}
                renderRightActions={renderRightActions}
                containerStyle={{width: "100%", justifyContent: 'center'}}>
                {child}
            </Swipeable>
        </View>
    }

    const child = () => {

        let icon = assets.master_card_icon;

        if (item.type === "Visa Card") {
            icon = assets.visa_icon;
        }
        else if (item.type === "Paypal") {
            icon = assets.paypal_coloured_icon;
        }


        const spin = item.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg']
        });

        if (isActive) {
            Animated.timing(
                item.spinValue,
                activeAnimConfig
            ).start()
        } else {
            Animated.timing(
                item.spinValue,
                deActiveAnimConfig
            ).start()
        }

        return <View style={{flexDirection: "row", height: "100%", backgroundColor: colors.white}}>
            {item.isDefault && <View style={Styles.defaultContainer}>
                <Text style={globalStyles.promotionalTextStyle}>{"DEFAULT"}</Text>
            </View>}

            <View style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
            }}>
                <View style={Styles.leftImageContainer}>
                    <Image
                        source={icon}
                        style={Styles.leftImage} resizeMode={"contain"}/>
                </View>

                <View style={{marginLeft: wp("3")}}>
                    <Text style={Styles.titleText}>{item.type === "Paypal" ? item.name : item.type}</Text>
                    <Text style={[Styles.subtitleText, {marginVertical: hp(0.5)}]}>{item.type === "Paypal" ? item.email : item.cardNo}</Text>

                    <View style={{flexDirection: "row", alignItems: "center"}}>


                        {
                            item.type !== "Paypal" &&
                            <>

                                <Text style={Styles.subtitleText}>{"Expiry: "}</Text>
                                <Text style={[
                                    Styles.subtitleText,
                                    {marginRight: wp(2)}
                                ]}>{item.expiry}</Text>
                                <Text style={Styles.subtitleText}>{"CVV: "}</Text>
                                <Text style={Styles.subtitleText}>{item.CVV}</Text>

                            </>
                        }

                        {
                            item.type === "Paypal" &&
                            <>
                            <Text style={Styles.subtitleText}>{"Added on: "}</Text>
                            <Text style={Styles.subtitleText}>{item.addedOn}</Text>
                            </>
                        }


                    </View>


                </View>
            </View>


            {
                (showActiveIcon && isActive) &&
                <View style={Styles.rightIconContainer}>
                    <Image
                        source={assets.check_circle_icon}
                        style={Styles.rightIcon}
                        resizeMode={"contain"}/>
                </View>
            }


            {
                showAnimatedIcon &&
                <View style={Styles.rightIconContainer}>
                    <Animated.Image source={assets.drop_down_icon} style={[
                        {transform: [{rotate: spin}]},
                        Styles.rightIcon
                    ]} resizeMode={"contain"}/>
                </View>
            }

        </View>
    }

    return (
        isTouchable ? touchableComponent(child()) : nonTouchableComponent(child())

    )

}

CardItem.propTypes = {

    isTouchable: PropTypes.bool,
    isActive: PropTypes.bool,
    item: PropTypes.any,
    onPress: PropTypes.func,
    showActiveIcon: PropTypes.bool,
    showAnimatedIcon: PropTypes.bool,

};

CardItem.defaultProps = {
    isTouchable: true,
    showActiveIcon: false,
    showAnimatedIcon: false
};

