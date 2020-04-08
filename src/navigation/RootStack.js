import * as React from 'react';
import {
    View,
    Text
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './Routes';
import SplashScreen from '../screens/SplashScreen';
import IntroScreen from '../screens/IntroScreen';
import LoginScreen from '../screens/LoginScreen';
import LoginFormScreen from '../screens/LoginFormScreen';
import SignupFormScreen from '../screens/SignupFormScreen';
import ForgotPasswordFormScreen from '../screens/ForgotPasswordFormScreen';
import Testing from "../screens/Testing";
import SingleGroceryItem from "../screens/SingleGroceryItem/SingleGroceryItem";
import review from "../screens/Review/Review";
import AddReview from "../screens/Review/AddReview";
import ProfileMenu from "../screens/Profile/ProfileMenu";
import About from "../screens/Profile/About/About";

const Stack = createStackNavigator();

export function RootStack() {
    return (

        <Stack.Navigator initialRouteName={Routes.TESTING} headerMode={'none'}>
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
        </Stack.Navigator>

    );
}
