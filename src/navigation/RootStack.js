import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './Routes';
import SplashScreen from '../screens/Splash/View';
import IntroScreen from '../screens/Intro/View';
import IntroScreen1 from '../screens/intro1/View';
import IntroScreen2 from '../screens/intro2/View';
import LoginScreen from '../screens/Login/View';
import LoginFormScreen from '../screens/LoginForm/View';
import SignupFormScreen from '../screens/Signup/View';
import ForgotPasswordFormScreen from '../screens/ForgotPassword/View';
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
import assets from "../../branding/carter/assets/Assets";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const images = AppConfig.assets.default;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export function RootStack() {
    return (

        <Stack.Navigator initialRouteName={Routes.INTRO_SCREEN} headerMode={'none'}>
            <Stack.Screen name={Routes.SPLASH_SCREEN} component={SplashScreen} />
            <Stack.Screen name={Routes.INTRO_SCREEN} component={IntroScreen} />
            <Stack.Screen name={Routes.INTRO_SCREEN1} component={IntroScreen1} />
            <Stack.Screen name={Routes.INTRO_SCREEN2} component={IntroScreen2} />
            <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
            <Stack.Screen name={Routes.LOGIN_FORM_SCREEN} component={LoginFormScreen} />
            <Stack.Screen name={Routes.SIGNUP_FORM_SCREEN} component={SignupFormScreen} />
            <Stack.Screen name={Routes.FORGOT_PASSWORD_FORM_SCREEN} component={ForgotPasswordFormScreen} />

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

            <View style={{ flexDirection: 'row', backgroundColor: "#fff" }}>
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
                                style={{ flex: 1, height: 40, backgroundColor: "white", justifyContent: "center", alignItems: "center", marginBottom: Globals.SAFE_AREA_INSET.bottom}}
                            >

                                <View style={{width: hp(7), height: hp(7),
                                    bottom: 10,
                                    borderWidth: 5,
                                    borderRadius: hp(3.5),
                                    borderColor: "white",
                                    backgroundColor: colors.buttonGreenColor,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Image source={assets.cart_regular_icon} style={{width: hp(3), height: hp(3), tintColor: "white" }} resizeMode={"contain"} />
                                </View>

                                {/*<Avatar*/}
                                {/*    rounded*/}
                                {/*    size={"medium"}*/}
                                {/*    ImageComponent={() => {*/}
                                {/*        return(*/}
                                {/*            */}
                                {/*        );*/}
                                {/*    }}*/}
                                {/*    containerStyle= {{*/}
                                {/*        bottom: 10,*/}
                                {/*        borderWidth: 5,*/}
                                {/*        borderColor: "white"*/}
                                {/*    }}*/}
                                {/*    avatarStyle={{*/}
                                {/*        backgroundColor: colors.buttonGreenColor*/}
                                {/*    }}*/}
                                {/*/>*/}


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
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={{flex: 1, height: 40, backgroundColor: "white", justifyContent: "center", alignItems: "center", marginBottom: Globals.SAFE_AREA_INSET.bottom}}>


                                {/*isFocused is selected*/}

                                <Image source={icon} style={{width: hp(3), height: hp(3), tintColor: isFocused ? colors.textColorBlack1: colors.iconColorGrey1}} resizeMode={"contain"} />

                            </TouchableOpacity>
                        );
                    }


                })}
            </View>




    );
}

