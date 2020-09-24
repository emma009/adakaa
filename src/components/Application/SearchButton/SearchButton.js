import React, { Component } from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Styles from "./Assets/Styles/Styles";
import AppConfig from "../../../../branding/App_config";

const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;


export default class SearchButton extends Component {
    render(){
        return(

                        <TouchableOpacity onPress={this.props.onPress} style={Styles.buttonContainer}>
                            <Image source={assets.search_icon}
                                   style={{width: hp(2),
                                       height: hp(2), tintColor: colors.iconColorGrey1, marginLeft: wp(5)}}
                                   resizeMode={"contain"} />
                            <Text style={Styles.Text}>Search keywords...</Text>
                            <Image source={assets.filter_icon}
                                   style={{width: hp(2),
                                       height: hp(2), tintColor: colors.iconColorGrey1, position: "absolute", right: wp(5)}}
                                   resizeMode={"contain"} />
                        </TouchableOpacity>

        );
    }
}
