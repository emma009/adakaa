import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { Avatar } from 'react-native-elements';
import ProfileMenuItem from "./ProfileMenuItem";
import Routes from "../../navigation/Routes";

export default class ProfileMenu extends  Component {
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{alignItems: "center", paddingTop: hp("10%")}}>
                    <Avatar
                        rounded
                        size={"large"}
                    />
                </View>
                <View style={{width: wp("100%"), height: "100%", backgroundColor: "grey", alignItems: "center"}}>
                    <View style={{width: wp("85%"), height: "100%", paddingTop: hp("5%")}}>
                        <ProfileMenuItem
                            source={require("./Assets/Images/icon.png")}
                            onPress={() => { this.props.navigation.navigate(Routes.ABOUT_ME) }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
