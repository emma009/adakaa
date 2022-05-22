import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import AppConfig from "../../../../branding/App_config";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import Styles from "./Style"

const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;


export function Variant3BottomTabBar({state, descriptors, navigation}) {

    return (

        <View style={Styles.container}>

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
                        style={Styles.bottomTabContainer}>


                        {/*isFocused is selected*/}

                        <View style={[{
                            width: isFocused ? hp(5) : 0,
                            height: isFocused ? hp(5) : 0,
                        }, Styles.bottomTabItemContainer
                        ]}>

                            <Image source={icon} style={[{
                                tintColor: isFocused ? colors.primaryGreenColor : colors.white
                            }, Styles.bottomTabIcon]}/>

                        </View>

                    </TouchableOpacity>
                );


            })}
        </View>

    );

}
