import React from "react";
import { Image, TouchableOpacity, useColorScheme, View } from "react-native";
import AppConfig from "../../../../branding/App_config";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import { Styles } from "./Style"
import Globals from "../../../utils/Globals";
import { useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../../branding/carter/styles/light/Style";

const assets = AppConfig.assets.default;

export function Variant3BottomTabBar({state, descriptors, navigation}) {

    //Theme based styling and colors
    const scheme = useColorScheme();
    const { colors } = useTheme();
    const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);
    const screenStyles = Styles(globalStyles, scheme, colors);


    return (

        <View style={screenStyles.container}>

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

                    case 3:
                        icon = assets.cart_regular_icon;
                        break;


                }


                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        activeOpacity={0.8}
                        onPress={onPress}
                        style={[screenStyles.bottomTabContainer, {marginBottom: Globals.SAFE_AREA_INSET.bottom / 2}]}>


                        {/*isFocused is selected*/}

                        <View style={[{
                            width: isFocused ? hp(5) : 0,
                            height: isFocused ? hp(5) : 0,
                        }, screenStyles.bottomTabItemContainer
                        ]}>

                            <Image source={icon} style={[{
                                tintColor: isFocused ? colors.activeColor : colors.primaryBackground
                            }, screenStyles.bottomTabIcon]}/>

                        </View>

                    </TouchableOpacity>
                );


            })}
        </View>

    );

}
