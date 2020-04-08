import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { Image, Text } from 'react-native-elements';

export default class ProfileMenuItem extends  Component {
    render(){
        const { source, onPress } = this.props;
        return(
            <TouchableOpacity
                style={{width: wp("25 %"), height: 125, backgroundColor: "white",
                alignItems: "center", paddingTop: "5%", paddingBottom: "5%", borderRadius: 5}}
                onPress={onPress }
            >
                <Image
                    source={source}
                    style={{width: 50, height: 50}}
                    resizeMode={"contain"}
                />
                <Text h5 style={{marginTop: "20%"}}>About Me</Text>
            </TouchableOpacity>
        );
    }
}
