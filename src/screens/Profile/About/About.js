import React, { Component } from 'react';
import { View } from 'react-native';

import { Text } from 'react-native-elements';

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import CustomInput from "../../../components/CustomInput";

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Jessica Simpson",
        };
    }

    render(){
        const { name } = this.state;
        return(
            <View style={{flex: 1, backgroundColor: "grey", alignItems: "center"}}>
                <View style={{width: wp("85%")}}>
                    <Text>About Me</Text>
                    <CustomInput
                        placeholder={"Enter Name"}
                        value={name}
                        onChangeText={(text) => { this.setState({name: text}) }}
                    />
                </View>
            </View>
        );
    }
}
