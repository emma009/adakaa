import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image, StatusBar
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './Routes';
import SplashScreen from '../screens/Splash/View';
import IntroScreen from '../screens/Variant1/Intro/View';
import IntroScreen1 from '../screens/Variant2/intro1/View';
import IntroScreen2 from '../screens/Variant3/intro2/View';

import LoginScreen from '../screens/Variant1/Login/View';
import LoginFormScreen from '../screens/Variant1/LoginForm/View';
import SignupFormScreen from '../screens/Variant1/Signup/View';
import ForgotPasswordFormScreen from '../screens/Variant1/ForgotPassword/View';

import LoginScreen1 from '../screens/Variant2/Login/View';
import LoginFormScreen1 from '../screens/Variant2/LoginForm/View';
import SignupFormScreen1 from '../screens/Variant2/Signup/View';
import ForgotPasswordFormScreen1 from '../screens/Variant2/ForgotPassword/View';

import LoginScreen2 from '../screens/Variant3/Login/View';
import LoginFormScreen2 from '../screens/Variant3/LoginForm/View';
import SignupFormScreen2 from '../screens/Variant3/Signup/View';
import ForgotPasswordFormScreen2 from '../screens/Variant3/ForgotPassword/View';

import Testing from "../screens/Testing";
import ProductDetail from "../screens/ProductDetail/View";
import review from "../screens/ReviewList/View";
import AddReview from "../screens/AddReview/View";
import CartList from "../screens/CartList/View";
import CheckoutDelivery from "../screens/CheckoutDelivery/View";
import CheckoutAddress from "../screens/CheckoutAddress/View";
import CheckoutPayment from "../screens/CheckoutPayment/View";
import OrderSuccess from "../screens/OrderSuccess/View";
import AboutMe from "../screens/AboutMe/View";
import MyOrders from "../screens/MyOrders/View";
import Profile from "../screens/Profile/View";
import AppConfig from "../../branding/App_config";
import Home from "../screens/Home/View";
import Favourites from "../screens/Favourites/View";
import PopularDeals from "../screens/PopularDeals/View";
import CategoryList from "../screens/CategoryList/View";
import CategoryItems from "../screens/CategoryItems/View";
import Search from "../screens/Search/View";
import {SafeAreaProvider, SafeAreaConsumer} from "react-native-safe-area-context";
import Globals from "../utils/Globals";
import colors from "../../branding/carter/styles/Colors";
import Styles from "../screens/Home/Styles";
import AddAddress from "../screens/AddAddress/View";
import MyAddress from "../screens/MyAddress/View";
import MyCreditCards from "../screens/MyCreditCards/View";
import AddCreditCard from "../screens/AddCreditCard/View";
import Transactions from "../screens/Transactions/View";
import Notifications from "../screens/Notifications/View";
import ApplyFilters from "../screens/ApplyFilters/View";
import TrackOrder from "../screens/TrackOrder/View";
import { TransitionPresets } from "@react-navigation/stack";
import assets from "../../branding/carter/assets/Assets";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import CheckoutSelectCard from "../screens/CheckoutSelectCard/View";
import CheckoutSelectAccount from "../screens/CheckoutSelectAccount/View";
import SelfPickup from "../screens/SelfPickup/View";
import CartSummary from "../screens/CartSummary/View";

const styles = AppConfig.styling.default;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export function RootStack() {
    return (

        <Stack.Navigator
            initialRouteName={Routes.INTRO_SCREEN2}
            headerMode={'none'}
            screenOptions={{ ...(Platform.OS === "android" && TransitionPresets.SlideFromRightIOS) }}
        >
            <Stack.Screen name={Routes.SPLASH_SCREEN} component={SplashScreen} />

            {/*Variant1*/}
            <Stack.Screen name={Routes.INTRO_SCREEN} component={IntroScreen} />

            <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
            <Stack.Screen name={Routes.LOGIN_FORM_SCREEN} component={LoginFormScreen} />
            <Stack.Screen name={Routes.SIGNUP_FORM_SCREEN} component={SignupFormScreen} />
            <Stack.Screen name={Routes.FORGOT_PASSWORD_FORM_SCREEN} component={ForgotPasswordFormScreen} />

            {/*Variant2*/}
            <Stack.Screen name={Routes.INTRO_SCREEN1} component={IntroScreen1} />

            <Stack.Screen name={Routes.LOGIN_SCREEN1} component={LoginScreen1} />
            <Stack.Screen name={Routes.LOGIN_FORM_SCREEN1} component={LoginFormScreen1} />
            <Stack.Screen name={Routes.SIGNUP_FORM_SCREEN1} component={SignupFormScreen1} />
            <Stack.Screen name={Routes.FORGOT_PASSWORD_FORM_SCREEN1} component={ForgotPasswordFormScreen1} />


            {/*Variant3*/}
            <Stack.Screen name={Routes.INTRO_SCREEN2} component={IntroScreen2} />

            <Stack.Screen name={Routes.LOGIN_SCREEN2} component={LoginScreen2} />
            <Stack.Screen name={Routes.LOGIN_FORM_SCREEN2} component={LoginFormScreen2} />
            <Stack.Screen name={Routes.SIGNUP_FORM_SCREEN2} component={SignupFormScreen2} />
            <Stack.Screen name={Routes.FORGOT_PASSWORD_FORM_SCREEN2} component={ForgotPasswordFormScreen2} />


            <Stack.Screen name={Routes.HOME} component={bottomTabs} />

            <Stack.Screen name={Routes.CATEGORY_LIST} component={CategoryList} />
            <Stack.Screen name={Routes.CATEGORY_ITEMS} component={CategoryItems} />
            <Stack.Screen name={Routes.POPULAR_DEALS} component={PopularDeals} />
            <Stack.Screen name={Routes.PRODUCT_DETAIL} component={ProductDetail} />


            <Stack.Screen name={Routes.REVIEW_LIST} component={review} />
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

            <Stack.Screen name={Routes.TESTING} component={Testing} />


        </Stack.Navigator>

    );
}

function bottomTabs() {
    return(
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>

            <Tab.Screen name={"Home"} component={Home} />
            <Tab.Screen name={"Favourite"} component={Favourites} />
            <Tab.Screen name={"Profile"} component={Profile} />
            <Tab.Screen name={"Cart"} component={CartList} />

        </Tab.Navigator>
    );

}

function MyTabBar({ state, descriptors, navigation }) {
    return (

            <View style={{ flexDirection: 'row', backgroundColor: "#fff",

                shadowColor: colors.primaryGreenColor,
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.4,
                shadowRadius: 2.22,

                elevation: 3,

            }}>

                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];


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

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    if (index === 3) {
                        return (
                            <TouchableOpacity
                                accessibilityRole="button"
                                accessibilityStates={isFocused ? ['selected'] : []}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={{ flex: 1, height: hp(6), backgroundColor: "white", justifyContent: "center", alignItems: "center", marginBottom: Globals.SAFE_AREA_INSET.bottom}}
                            >

                                <View style={[
                                    // styles.buttonShadow,
                                    {
                                    width: hp(8.5),
                                    height: hp(8.5),
                                    bottom: hp(1.5),
                                    borderWidth: hp(0.6),
                                    borderRadius: hp(4.3),
                                    borderColor: "white",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }]}>
                                    <View style={[styles.buttonShadow,{
                                        width: hp(7),
                                        height: hp(7),
                                        borderRadius: hp(3.5),
                                        backgroundColor: colors.buttonGreenColor,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }]}>
                                        <Image source={assets.cart_regular_icon} style={{width: hp(3.4), height: hp(3.4), tintColor: "white" }} resizeMode={"contain"} />

                                    </View>
                                </View>

                            </TouchableOpacity>
                        );
                    }
                    else {

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
                                accessibilityStates={isFocused ? ['selected'] : []}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                activeOpacity={0.8}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={{flex: 1, height: hp(6), backgroundColor: "white", justifyContent: "center", alignItems: "center", marginBottom: Globals.SAFE_AREA_INSET.bottom}}>


                                {/*isFocused is selected*/}

                                <Image source={icon} style={{width: hp(3.4), height: hp(3.4), tintColor: isFocused ? colors.textColorBlack1: colors.iconColorGrey1}} resizeMode={"contain"} />

                            </TouchableOpacity>
                        );
                    }


                })}
            </View>




    );
}

