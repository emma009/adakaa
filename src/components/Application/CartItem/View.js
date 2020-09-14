import React, {Component} from 'react';
import {
    View, StyleSheet, TouchableOpacity, Image
} from 'react-native';

import { Text, Button, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import Routes from "../../../navigation/Routes";

import Swipeable from 'react-native-gesture-handler/Swipeable';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Styles from "./Assets/Styles/Styles";
import Counter from "../../Global/Counter/View";

export default class CartItem extends Component {
    constructor(props) {
        super(props);

    }

    renderRightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-80, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });
        return (
            <Button
                onPress={() => {

                }}
                ViewComponent={() => {
                    return (
                        <View style={{width: wp("20"), height: "100%", backgroundColor: "red", justifyContent: "center"}}>
                            <Icon
                                name="google"
                                type='font-awesome'
                                size={15}
                                color={"white"}
                            />
                        </View>

                    );
                }}
                />
        );
    };

    render() {
        const {
            title,
            image,
            price,
            weight,
            navigation
        } = this.props;
        return(
            <Button
                onPress={() => {
                    // navigation.navigate(Routes.PRODUCT_DETAIL, {
                    //        item: this.props,
                    //        itemState: this.state
                    //        }
                    //    );
                }}
                ViewComponent={() => {

                    return (
                        <Swipeable

                            friction={2}
                            leftThreshold={80}
                            rightThreshold={40}
                            renderRightActions={this.renderRightActions}
                            containerStyle={{marginVertical: hp("0.5")}}>

                            <View style={Styles.foodItemContainer}>

                                <Image
                                    source={image}
                                    style={Styles.foodItemImage}
                                    resizeMode={"contain"}
                                />
                                <View style={{height: hp("7"), justifyContent: "space-between"}}>
                                    <Text style={Styles.priceText}>{price}</Text>
                                    <Text style={Styles.itemTitle}>{title}</Text>
                                    <Text style={Styles.weightText}>{weight}</Text>
                                </View>

                                <View style={{flex: 1, height: "100%", alignItems: "flex-end", }}>
                                    <Counter
                                        isVertical
                                        outerBorder
                                        spacing={hp("5")}
                                    />
                                </View>



                            </View>

                        </Swipeable>

                    );

                }}
                />
        );
    }
}

CartItem.propTypes = {
    title: PropTypes.string,
    image: PropTypes.func,
    price: PropTypes.string,
    weight: PropTypes.string,
    discount: PropTypes.string,
    cartCountChange: PropTypes.func,
    favouriteChange: PropTypes.func,
};

CartItem.defaultProps = {

};


