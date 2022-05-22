import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import AppConfig from "../../../../branding/App_config";
import Styles from "../Variant2BottomTabBar/Style";

const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;


export function Variant1BottomTabBar({ state, descriptors, navigation }) {

    return (

        <View style={[Styles.container]}>

            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];


                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                if (index === 3) {
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            style={Styles.bottomTabContainer}
                        >

                            <View style={[Styles.bottomTabCartOuterContainer]}>
                                <View style={[styles.buttonShadow, Styles.bottomTabCartInnerContainer]}>
                                    <Image source={assets.cart_regular_icon}
                                           style={[Styles.bottomTabIcon, {tintColor: colors.white}]}/>


                                </View>
                            </View>

                        </TouchableOpacity>
                    );
                } else {

                    let icon = assets.cart_regular_icon;

                    switch (index) {

                        case 0:
                            icon = assets.home_icon;
                            break;

                        case 1:
                            icon = assets.heart_regular_icon;
                            break;

                        case 2:
                            icon = assets.account_icon;
                            break;

                    }


                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            activeOpacity={0.8}
                            onPress={onPress}
                            style={Styles.bottomTabContainer} >


                            {/*isFocused is selected*/}

                            <Image source={icon} style={[
                                Styles.bottomTabIcon, {
                                    tintColor: isFocused ? colors.textColorBlack1 : colors.iconColorGrey1
                                }]}/>

                        </TouchableOpacity>
                    );
                }


            })}
        </View>

    );

}
