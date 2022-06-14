import React from 'react';
import { Image, TouchableOpacity, TouchableWithoutFeedback, useColorScheme, View } from "react-native";
import AppConfig from "../../../../branding/App_config";
import { Styles } from "./Style"
import Globals from "../../../utils/Globals";
import { useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../../branding/carter/styles/light/Style";

const assets = AppConfig.assets.default;

export function Variant2BottomTabBar({ state, descriptors, navigation }) {


    //Theme based styling and colors
    const scheme = useColorScheme();
    const { colors } = useTheme();
    const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);
    const screenStyles = Styles(globalStyles, scheme, colors);


    return (

        <View style={[screenStyles.container]}>

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

                if (index === 2) {
                    return (
                        <TouchableWithoutFeedback
                            accessibilityRole="button"
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            style={[screenStyles.bottomTabContainer, {marginBottom: Globals.SAFE_AREA_INSET.bottom / 2}]}
                        >

                            <View style={[screenStyles.bottomTabCartOuterContainer]}>
                                <View style={[globalStyles.buttonShadow, screenStyles.bottomTabCartInnerContainer]}>
                                    <Image source={assets.cart_regular_icon}
                                           style={[screenStyles.bottomTabIcon, {tintColor: colors.white}]}/>

                                </View>
                            </View>

                        </TouchableWithoutFeedback>
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

                        case 3:
                            icon = assets.order_placed_icon;
                            break;

                        case 4:
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
                            style={screenStyles.bottomTabContainer} >


                            {/*isFocused is selected*/}

                            <Image source={icon} style={[
                                screenStyles.bottomTabIcon, {
                                    tintColor: isFocused ? colors.headingColor : colors.subHeadingColor
                            }]}/>

                        </TouchableOpacity>
                    );
                }


            })}
        </View>

    );

}
