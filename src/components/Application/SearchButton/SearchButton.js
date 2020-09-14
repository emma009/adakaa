import React, { Component } from 'react';

import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import Styles from "./Assets/Styles/Styles";

export default class SearchButton extends Component {
    render(){
        return(
            <Button
                onPress={() => console.log("Clicked")}
                ViewComponent={() => {
                    return(
                        <View style={Styles.buttonContainer}>
                            <Icon
                                name='search'
                                type='font-awesome'
                                color='#b3bcca'
                                size={15}
                                containerStyle={Styles.leftIcon}
                            />
                            <Text style={Styles.Text}>Search keywords...</Text>
                            <Icon
                                name='google'
                                type='font-awesome'
                                color='#b3bcca'
                                size={15}
                                containerStyle={Styles.rightIcon}
                            />
                        </View>
                    );
                }}
            />
        );
    }
}
