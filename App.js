import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation/RootStack';
import {SafeAreaProvider, SafeAreaConsumer} from "react-native-safe-area-context";
import Globals from "./src/utils/Globals";

export const App = (props) => {


    return (

        <NavigationContainer>
            <SafeAreaProvider>
                <SafeAreaConsumer>

                    {
                        insets => {

                            Globals.SAFE_AREA_INSET = insets;

                            return (

                                <RootStack/>



                            );
                        }
                    }
                </SafeAreaConsumer>
            </SafeAreaProvider>
        </NavigationContainer>
    );


}
