import React, { Component } from 'react';
import { View } from 'react-native';

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { Input, Button, Text, Icon } from 'react-native-elements';

export default class AddReview extends  Component {
    render(){
        return(
            <View style={{flex: 1, alignItems: "center"}}>
                <View style={{width: wp("85%"), backgroundColor: "#F3F5F8", alignItems: "center",
                paddingTop: hp("10%")}}>
                    <Text h3>What do you think?</Text>
                    <Text h6 style={{textAlign: "center"}}>Please give your rating by clicking on the stars below.</Text>
                    <Input
                        placeholder={"Tell us about your experience"}
                        inputContainerStyle={{ backgroundColor: "white", marginTop: hp("10%")}}
                        underlineColorAndroid="transparent"
                        textAlignVertical={'top'}
                        multiline
                        numberOfLines={5}

                    />
                    <Button
                        title={"SUBMIT"}
                        containerStyle={{width: "100%", marginTop: hp("5%")}}
                        buttonStyle={{backgroundColor: "#6CC51D"}}
                    />
                </View>
            </View>
        );
    }
}
