import React from 'react';
import { Image, TouchableOpacity, TouchableWithoutFeedback, useColorScheme, View } from "react-native";
import AppConfig from "../../../../branding/App_config";
import { Styles } from "./Style"
import Globals from "../../../utils/Globals";
import { useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../../branding/carter/styles/light/Style";
import { SvgIcon } from "../SvgIcon/View";
import IconNames from "../../../../branding/carter/assets/IconNames";

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
                                    <SvgIcon type={IconNames.BagShopping} width={30} height={30} color={colors.white} />

                                </View>
                            </View>

                        </TouchableWithoutFeedback>
                    );
                } else {

                    let icon = IconNames.HomeAlt;

                    switch (index) {

                        case 0:
                            icon = IconNames.HomeAlt;
                            break;

                        case 1:
                            icon = IconNames.Heart;
                            break;

                        case 3:
                            icon = IconNames.BoxOpen;
                            break;

                        case 4:
                            icon = IconNames.CircleUser;
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

                            <SvgIcon type={icon} width={25} height={25} color={isFocused ? colors.headingColor : colors.subHeadingColor} />

                        </TouchableOpacity>
                    );
                }


            })}
        </View>

    );

}
