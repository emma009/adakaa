import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import Routes from '../navigation/Routes';
import { StackActions } from '@react-navigation/native';


export default class SplashScreen extends Component {

    componentDidMount(){

        setTimeout(() => {
            this.props.navigation.dispatch(
                StackActions.replace(Routes.INTRO_SCREEN)
            );
        }, 2000)


    }


    render () {

        return (
            <View style={{flex: 1, backgroundColor: 'green'}}>

            </View>
        )

    }

}
