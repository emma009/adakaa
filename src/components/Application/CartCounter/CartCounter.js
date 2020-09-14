import React, { Component } from 'react';
import { View } from 'react-native';
import {Button, Icon, Text} from "react-native-elements";
import Styles from "./Assets/Styles/Styles";

export default  class CartCounter extends Component {

    render(){
        const { cartCount } = this.props;
        return(
            <View style={{flexDirection: "column", width: "100%", justifyContent:"space-between",
                alignItems: "center"}}>
                <Button
                    icon={
                        <Icon
                            name="minus"
                            type="font-awesome"
                            size={15}
                            color={Styles.AddSubtractText.color}
                        />
                    }
                    type={"clear"}
                    onPress={() => this._cartCountChange("subtract") }
                    containerStyle={Styles.AddButton}
                />
                <Text style={Styles.cartNumberText}>{cartCount}</Text>
                <Button
                    icon={
                        <Icon
                            name="plus"
                            type="font-awesome"
                            size={15}
                            color={Styles.AddSubtractText.color}
                        />
                    }
                    type={"clear"}
                    onPress={() => this._cartCountChange("add") }
                    containerStyle={Styles.subtractButton}
                />
            </View>
        );
    }
}
