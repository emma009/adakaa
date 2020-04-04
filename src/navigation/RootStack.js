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

const Stack = createStackNavigator();

export function RootStack() {
    return (

        <Stack.Navigator initialRouteName={Routes.SPLASH_SCREEN} headerMode={'none'}>
            <Stack.Screen name={Routes.SPLASH_SCREEN} component={SplashScreen} />
            <Stack.Screen name={Routes.INTRO_SCREEN} component={IntroScreen} />
            <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
            <Stack.Screen name={Routes.LOGIN_FORM_SCREEN} component={LoginFormScreen} />
            <Stack.Screen name={Routes.SIGNUP_FORM_SCREEN} component={SignupFormScreen} />
            <Stack.Screen name={Routes.FORGOT_PASSWORD_FORM_SCREEN} component={ForgotPasswordFormScreen} />
        </Stack.Navigator>

    );
}
