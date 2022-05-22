import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image, StatusBar, Platform
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './Routes';
import {SplashScreen} from '../screens/Splash/View';
import {Variant1Intro} from '../screens/Variant1/Intro/View';
import {Variant2Intro} from '../screens/Variant2/intro/View';
import {Variant3Intro} from '../screens/Variant3/intro2/View';

import {Variant1LoginScreen} from '../screens/Variant1/Login/View';
import {Variant1LoginFormScreen} from '../screens/Variant1/LoginForm/View';
import {Variant1SignupScreen} from '../screens/Variant1/Signup/View';
import {Variant1ForgotPassword} from '../screens/Variant1/ForgotPassword/View';

import {Variant2LoginScreen} from '../screens/Variant2/Login/View';
import {Variant2LoginFormScreen} from '../screens/Variant2/LoginForm/View';
import {Variant2SignupScreen} from '../screens/Variant2/Signup/View';
import {Variant2ForgotPassword} from '../screens/Variant2/ForgotPassword/View';

import {Variant3LoginScreen} from '../screens/Variant3/Login/View';
import {Variant3LoginFormScreen} from '../screens/Variant3/LoginForm/View';
import {Variant3SignupScreen} from '../screens/Variant3/Signup/View';
import {Variant3ForgotPassword} from '../screens/Variant3/ForgotPassword/View';

import {ProductDetail} from "../screens/ProductDetail/View";
import {ReviewList} from "../screens/ReviewList/View";
import {AddReview} from "../screens/AddReview/View";
import {CartList} from "../screens/CartList/View";
import {CheckoutDelivery} from "../screens/CheckoutDelivery/View";
import {CheckoutAddress} from "../screens/CheckoutAddress/View";
import {CheckoutPayment} from "../screens/CheckoutPayment/View";
import {OrderSuccess} from "../screens/OrderSuccess/View";
import {AboutMe} from "../screens/AboutMe/View";
import {MyOrders} from "../screens/MyOrders/View";
import {Variant1Profile} from "../screens/Variant1/Profile/View";
import {Variant2Profile} from "../screens/Variant2/Profile/View";
import {Variant3Profile} from "../screens/Variant3/Profile/View";
import AppConfig from "../../branding/App_config";
import {Variant1Home} from "../screens/Variant1/Home/View";
import {Variant2Home} from "../screens/Variant2/Home/View";
import {Variant3Home} from "../screens/Variant3/Home/View";
import {Favourites} from "../screens/Favourites/View";
import {PopularDeals} from "../screens/PopularDeals/View";
import {CategoryList} from "../screens/CategoryList/View";
import {CategoryItems} from "../screens/CategoryItems/View";
import {Search} from "../screens/Search/View";
import Globals from "../utils/Globals";
import colors from "../../branding/carter/styles/Colors";
import {AddAddress} from "../screens/AddAddress/View";
import {MyAddress} from "../screens/MyAddress/View";
import {MyCreditCards} from "../screens/MyCreditCards/View";
import {AddCreditCard} from "../screens/AddCreditCard/View";
import {Transactions} from "../screens/Transactions/View";
import {Notifications} from "../screens/Notifications/View";
import {ApplyFilters} from "../screens/ApplyFilters/View";
import {TrackOrder} from "../screens/TrackOrder/View";
import { TransitionPresets } from "@react-navigation/stack";
import assets from "../../branding/carter/assets/Assets";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {CheckoutSelectCard} from "../screens/CheckoutSelectCard/View";
import {CheckoutSelectAccount} from "../screens/CheckoutSelectAccount/View";
import {SelfPickup} from "../screens/SelfPickup/View";
import {CartSummary} from "../screens/CartSummary/View";
import Config from "../../branding/carter/configuration/Config";
import {Variant1BottomTabBar} from "../components/Application/Variant1BottomTabBar/View";
import {Variant2BottomTabBar} from "../components/Application/Variant2BottomTabBar/View";
import {Variant3BottomTabBar} from "../components/Application/Variant3BottomTabBar/View";

const styles = AppConfig.styling.default;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export function RootStack() {
    return (

        <Stack.Navigator
            initialRouteName={Config.SELECTED_VARIANT}
            headerMode={'none'}
            screenOptions={{ ...(Platform.OS === "android" && TransitionPresets.SlideFromRightIOS) }}
        >
            <Stack.Screen name={Routes.SPLASH_SCREEN} component={SplashScreen} />

            {/*Variant1*/}
            <Stack.Screen name={Routes.INTRO_SCREEN1} component={Variant1Intro} />

            <Stack.Screen name={Routes.LOGIN_SCREEN1} component={Variant1LoginScreen} />
            <Stack.Screen name={Routes.LOGIN_FORM_SCREEN1} component={Variant1LoginFormScreen} />
            <Stack.Screen name={Routes.SIGNUP_FORM_SCREEN1} component={Variant1SignupScreen} />
            <Stack.Screen name={Routes.FORGOT_PASSWORD_FORM_SCREEN1} component={Variant1ForgotPassword} />

            {/*Variant2*/}
            <Stack.Screen name={Routes.INTRO_SCREEN2} component={Variant2Intro} />

            <Stack.Screen name={Routes.LOGIN_SCREEN2} component={Variant2LoginScreen} />
            <Stack.Screen name={Routes.LOGIN_FORM_SCREEN2} component={Variant2LoginFormScreen} />
            <Stack.Screen name={Routes.SIGNUP_FORM_SCREEN2} component={Variant2SignupScreen} />
            <Stack.Screen name={Routes.FORGOT_PASSWORD_FORM_SCREEN2} component={Variant2ForgotPassword} />


            {/*Variant3*/}
            <Stack.Screen name={Routes.INTRO_SCREEN3} component={Variant3Intro} />

            <Stack.Screen name={Routes.LOGIN_SCREEN3} component={Variant3LoginScreen} />
            <Stack.Screen name={Routes.LOGIN_FORM_SCREEN3} component={Variant3LoginFormScreen} />
            <Stack.Screen name={Routes.SIGNUP_FORM_SCREEN3} component={Variant3SignupScreen} />
            <Stack.Screen name={Routes.FORGOT_PASSWORD_FORM_SCREEN3} component={Variant3ForgotPassword} />


            <Stack.Screen name={Routes.HOME_VARIANT1} component={bottomTabsVariant1} />
            <Stack.Screen name={Routes.HOME_VARIANT2} component={bottomTabsVariant2} />
            <Stack.Screen name={Routes.HOME_VARIANT3} component={bottomTabsVariant3} />

            <Stack.Screen name={Routes.CATEGORY_LIST} component={CategoryList} />
            <Stack.Screen name={Routes.CATEGORY_ITEMS} component={CategoryItems} />
            <Stack.Screen name={Routes.POPULAR_DEALS} component={PopularDeals} />
            <Stack.Screen name={Routes.PRODUCT_DETAIL} component={ProductDetail} />


            <Stack.Screen name={Routes.REVIEW_LIST} component={ReviewList} />
            <Stack.Screen name={Routes.ADD_REVIEW} component={AddReview} />


            <Stack.Screen name={Routes.CHECKOUT_DELIVERY} component={CheckoutDelivery} />
            <Stack.Screen name={Routes.CHECKOUT_ADDRESS} component={CheckoutAddress} />
            <Stack.Screen name={Routes.CHECKOUT_PAYMENT} component={CheckoutPayment} />
            <Stack.Screen name={Routes.CHECKOUT_SELECT_CARD} component={CheckoutSelectCard} />
            <Stack.Screen name={Routes.CHECKOUT_SELECT_ACCOUNT} component={CheckoutSelectAccount} />
            <Stack.Screen name={Routes.SELF_PICKUP} component={SelfPickup} />
            <Stack.Screen name={Routes.CART_SUMMARY} component={CartSummary} />
            <Stack.Screen name={Routes.TRACK_ORDERS} component={TrackOrder} />


            <Stack.Screen name={Routes.ORDER_SUCCESS} component={OrderSuccess} />


            <Stack.Screen name={Routes.ABOUT_ME} component={AboutMe} />
            <Stack.Screen name={Routes.MY_ORDERS} component={MyOrders} />
            <Stack.Screen name={Routes.My_Address} component={MyAddress} />
            <Stack.Screen name={Routes.Add_Address} component={AddAddress} />
            <Stack.Screen name={Routes.My_CREDIT_CARDS} component={MyCreditCards} />
            <Stack.Screen name={Routes.ADD_CREDIT_CARD} component={AddCreditCard} />

            <Stack.Screen name={Routes.TRANSACTIONS} component={Transactions} />
            <Stack.Screen name={Routes.NOTIFICATIONS} component={Notifications} />
            <Stack.Screen name={Routes.SEARCH} component={Search} />
            <Stack.Screen name={Routes.APPLY_FILTERS} component={ApplyFilters} />

        </Stack.Navigator>

    );
}

function bottomTabsVariant1() {
    return(
        <Tab.Navigator tabBar={props => <Variant1BottomTabBar {...props} />}>

            <Tab.Screen name={Routes.HOME_VARIANT1} component={Variant1Home} />
            <Tab.Screen name={Routes.FAVOURITE} component={Favourites} />
            <Tab.Screen name={Routes.PROFILE1} component={Variant1Profile} />
            <Tab.Screen name={Routes.CART} component={CartList} />

        </Tab.Navigator>
    );

}


function bottomTabsVariant2() {
    return(
        <Tab.Navigator tabBar={props => <Variant2BottomTabBar {...props} />}>

            <Tab.Screen name={Routes.HOME_VARIANT2} component={Variant2Home} />
            <Tab.Screen name={Routes.FAVOURITE} component={Favourites} />
            <Tab.Screen name={Routes.CART} component={CartList} />
            <Tab.Screen name={Routes.MY_ORDERS} component={ props => <MyOrders hideBack={true} />} />
            <Tab.Screen name={Routes.PROFILE2} component={Variant2Profile} />


        </Tab.Navigator>
    );

}

function bottomTabsVariant3() {
    return(
        <Tab.Navigator tabBar={props => <Variant3BottomTabBar {...props} />}>

            <Tab.Screen name={Routes.HOME_VARIANT3} component={Variant3Home} />
            <Tab.Screen name={Routes.FAVOURITE} component={Favourites} />
            <Tab.Screen name={Routes.PROFILE3} component={Variant3Profile} />
            <Tab.Screen name={Routes.CART} component={CartList} />

        </Tab.Navigator>
    );

}


// function MyTabBar({ state, descriptors, navigation }) {
//     return (
//
//             <View style={{ flexDirection: 'row', backgroundColor: "#fff",
//
//                 shadowColor: colors.primaryGreenColor,
//                 shadowOffset: {
//                     width: 0,
//                     height: 10,
//                 },
//                 shadowOpacity: 1,
//                 shadowRadius: 2.22,
//
//                 elevation: 3,
//
//             }}>
//
//                 {state.routes.map((route, index) => {
//                     const { options } = descriptors[route.key];
//
//
//                     const isFocused = state.index === index;
//
//                     const onPress = () => {
//                         const event = navigation.emit({
//                             type: 'tabPress',
//                             target: route.key,
//                             canPreventDefault: true,
//                         });
//
//                         if (!isFocused && !event.defaultPrevented) {
//                             navigation.navigate(route.name);
//                         }
//                     };
//
//                     const onLongPress = () => {
//                         navigation.emit({
//                             type: 'tabLongPress',
//                             target: route.key,
//                         });
//                     };
//
//                     if (index === 3) {
//                         return (
//                             <TouchableOpacity
//                                 accessibilityRole="button"
//                                 accessibilityStates={isFocused ? ['selected'] : []}
//                                 accessibilityLabel={options.tabBarAccessibilityLabel}
//                                 testID={options.tabBarTestID}
//                                 onPress={onPress}
//                                 onLongPress={onLongPress}
//                                 style={{ flex: 1, height: hp(6), backgroundColor: "white", justifyContent: "center", alignItems: "center", marginBottom: Globals.SAFE_AREA_INSET.bottom}}
//                             >
//
//                                 <View style={[
//                                     // styles.buttonShadow,
//                                     {
//                                     width: hp(8.5),
//                                     height: hp(8.5),
//                                     bottom: hp(1.5),
//                                     borderWidth: hp(4.5),
//                                     borderRadius: hp(4.3),
//                                     borderColor: "white",
//                                     justifyContent: "center",
//                                     alignItems: "center",
//                                 }]}>
//                                     <View style={[styles.buttonShadow,{
//                                         width: hp(7),
//                                         height: hp(7),
//                                         borderRadius: hp(3.5),
//                                         backgroundColor: colors.buttonGreenColor,
//                                         justifyContent: "center",
//                                         alignItems: "center",
//                                     }]}>
//                                         <Image source={assets.cart_regular_icon} style={{width: hp(3), height: hp(3), tintColor: "white" }} resizeMode={"contain"} />
//
//                                     </View>
//                                 </View>
//
//                             </TouchableOpacity>
//                         );
//                     }
//                     else {
//
//                         let icon = assets.cart_regular_icon;
//
//                         switch (index) {
//
//                             case 0:
//                                 icon = assets.home_icon;
//                                 break;
//
//                             case 1:
//                                 icon = assets.heart_regular_icon;
//                                 break;
//
//                             case 2:
//                                 icon = assets.account_icon;
//                                 break;
//
//                         }
//
//
//                         return (
//                             <TouchableOpacity
//                                 accessibilityRole="button"
//                                 accessibilityStates={isFocused ? ['selected'] : []}
//                                 accessibilityLabel={options.tabBarAccessibilityLabel}
//                                 testID={options.tabBarTestID}
//                                 activeOpacity={0.8}
//                                 onPress={onPress}
//                                 onLongPress={onLongPress}
//                                 style={{flex: 1, height: hp(6.5), backgroundColor: "white", justifyContent: "center", alignItems: "center", marginBottom: Globals.SAFE_AREA_INSET.bottom}}>
//
//
//                                 {/*isFocused is selected*/}
//
//                                 <Image source={icon} style={{width: hp(3), height: hp(3), tintColor: isFocused ? colors.textColorBlack1: colors.iconColorGrey1}} resizeMode={"contain"} />
//
//                             </TouchableOpacity>
//                         );
//                     }
//
//
//                 })}
//             </View>
//
//
//
//
//     );
// }

