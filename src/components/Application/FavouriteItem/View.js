import React, {createRef} from 'react';
import {Animated, Image, TouchableOpacity, View} from 'react-native';

import {Text} from 'react-native-elements';
import PropTypes from 'prop-types';
import AppConfig from "../../../../branding/App_config";
import Styles from "./Style"
import Easing from "react-native/Libraries/Animated/src/Easing";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import Swipeable from "react-native-gesture-handler/Swipeable";

const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;

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


export const FavouriteItem = (props) => {

    const {
        isActive,
        item,
        onDeletePress
    } = props;

    const renderRightActions = (progress, dragX) => {
        return (

            <TouchableOpacity
                onPress={() => {
                    onDeletePress()
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


    const child = () => {


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

        return <Swipeable
            key={item.key}
            friction={2}
            leftThreshold={80}
            rightThreshold={40}
            renderRightActions={renderRightActions}
            containerStyle={{width: "100%", justifyContent: 'center'}}>

        <View style={{flexDirection: "row", height: "100%", backgroundColor: colors.white}}>

            <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>

                <View style={[Styles.leftImageContainer, {backgroundColor: item.color}]}>
                    <Image
                        source={assets.cart_regular_icon}
                        style={Styles.leftImage} resizeMode={"contain"}/>

                </View>

                <View style={{}}>
                    <Text style={Styles.titleText}>{item.name}</Text>
                    <View style={{flexDirection: "row"}}>
                        <Text style={Styles.subtitleText}>{"Total Items: "}</Text>
                        <Text style={Styles.subtitleText}>{item.totalItems}</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={Styles.subtitleText}>{"Added on: "}</Text>
                        <Text style={Styles.subtitleText}>{item.addedOn}</Text>
                    </View>

                </View>


            </View>

            <View style={Styles.rightIconContainer}>
                <Animated.Image source={assets.drop_down_icon} style={[
                    {transform: [{rotate: spin}]},
                    Styles.rightIcon
                ]} resizeMode={"contain"}/>
            </View>

        </View>

        </Swipeable>
    }

    return (
        <View
            style={
                [
                    Styles.container,
                    {marginBottom: 0},
                    isActive && {borderBottomWidth: 1, borderBottomColor: colors.borderColorLight}
                ]
            }>
            {child()}
        </View>
    );

}

FavouriteItem.propTypes = {
    isActive: PropTypes.bool,
    item: PropTypes.any,
};

FavouriteItem.defaultProps = {};


