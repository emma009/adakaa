import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './Routes';
import SplashScreen from '../screens/splash/SplashScreen';
import IntroScreen from '../screens/intro/IntroScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import LoginFormScreen from '../screens/LoginForm/LoginFormScreen';
import SignupFormScreen from '../screens/Signup/SignupFormScreen';
import ForgotPasswordFormScreen from '../screens/ForgotPassword/ForgotPasswordFormScreen';
import Testing from "../screens/Testing";
import SingleGroceryItem from "../screens/SingleGroceryItem/SingleGroceryItem";
import review from "../screens/Review/Review";
import AddReview from "../screens/Review/AddReview";
import ProfileMenu from "../screens/Profile/ProfileMenu";
import About from "../screens/Profile/About/About";
import {Avatar, Image} from "react-native-elements";
import AppConfig from "../../branding/App_config";
import Home from "../screens/Home/Home";
import PopularDeals from "../screens/PopularDeals/PopularDeals";
import Category from "../screens/Category/Category";
import Search from "../screens/Search/Search";

const images = AppConfig.assets.default;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export function RootStack() {
    return (

        <Stack.Navigator initialRouteName={Routes.SPLASH_SCREEN} headerMode={'none'}>
            <Stack.Screen name={Routes.ABOUT_ME} component={About} />
            <Stack.Screen name={Routes.PROFILE_MENU} component={ProfileMenu} />
            <Stack.Screen name={Routes.SUBMIT_REVIEW} component={AddReview} />
            <Stack.Screen name={Routes.REVIEW} component={review} />
            <Stack.Screen name={Routes.SINGLE_GROCERY_ITEM} component={SingleGroceryItem} />
            <Stack.Screen name={Routes.TESTING} component={Testing} />
            <Stack.Screen name={Routes.SPLASH_SCREEN} component={SplashScreen} />
            <Stack.Screen name={Routes.INTRO_SCREEN} component={IntroScreen} />
            <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
            <Stack.Screen name={Routes.LOGIN_FORM_SCREEN} component={LoginFormScreen} />
            <Stack.Screen name={Routes.SIGNUP_FORM_SCREEN} component={SignupFormScreen} />
            <Stack.Screen name={Routes.FORGOT_PASSWORD_FORM_SCREEN} component={ForgotPasswordFormScreen} />
            <Stack.Screen name={Routes.POPULAR_DEALS} component={PopularDeals} />
            <Stack.Screen name={Routes.CATEGORY} component={Category} />
            <Stack.Screen name={Routes.SEARCH} component={Search} />
            <Stack.Screen name={"bottomtabsss"} component={bottomTabs} />
        </Stack.Navigator>

    );
}

function bottomTabs() {
    return(
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>

            <Tab.Screen name={Routes.HOME} component={Home} />
            <Tab.Screen name={"test2"} component={Testing} />
            <Tab.Screen name={"test3"} component={Testing} />
            <Tab.Screen name={"test4"} component={Testing} />

        </Tab.Navigator>
    );

}

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                console.log("descriptors ===>", descriptors);
                console.log("index ===>", index);
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
                            style={{ flex: 1, height: 50 }}
                        >

                            <Avatar rounded source={images.login_header} size={"medium"} />


                        </TouchableOpacity>
                    );
                }
                else {
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityStates={isFocused ? ['selected'] : []}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, height: 50}}
                        >



                            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                                {index === 0 ? "Home" : index === 1 ? "Favourite" : index === 2 ? "Account" : "Cart"}
                            </Text>

                        </TouchableOpacity>
                    );
                }


            })}
        </View>
    );
}


