import React, { Component } from 'react';
import { View } from 'react-native';

import { Input, Icon } from 'react-native-elements';

export default class CustomInput extends Component {
    render(){
        const { placeholder, iconName, value, onChangeText } = this.props;
        return(
            <View>
                <Input
                    value={value}
                    onChangeText={(text) => onChangeText(text)}
                    placeholder={placeholder}
                    leftIcon={
                        <Icon
                            name={iconName}
                            size={24}
                            color='black'
                        />
                    }
                    inputContainerStyle={{backgroundColor: "white"}}
                />
            </View>
        );
    }
}
