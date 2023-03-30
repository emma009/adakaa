import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

const AppLoader = () => {
    return (
        <View style={ [StyleSheet.absoluteFillObject, styles.container]}>

            <LottieView source={require('../../branding/carter/assets/99109-loading.json')}
                autoPlay loop />

        </View>
    )
}


export default AppLoader

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
       // backgroundColor: 'rbga',
       zIndex: 1
    }
});

