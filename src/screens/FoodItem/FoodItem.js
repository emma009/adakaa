import React, {Component} from 'react';
import {
    View, StyleSheet, TouchableOpacity
} from 'react-native';

import { Text, Image, Button, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import Routes from "../../navigation/Routes";
import Styles from "./Assets/Styles/Styles";

export default class FoodItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCount: this.props.cartCount,
            favourite: this.props.isFavourite,
        }
    }


    _favouriteChange= () => {
        this.setState({favourite: !this.state.favourite},
            () => { this.props.favouriteChange(this.state.favourite) })
    };

    _cartCountChange = (behavior) => {
        if (behavior === "add") {
            this.setState({cartCount: this.state.cartCount + 1},
            () => {
                this.props.cartCountChange(this.state.cartCount);
            })
        } else if (behavior === "subtract" && !(this.state.cartCount === 0)) {
            this.setState({cartCount: this.state.cartCount - 1},
                () => {
                    this.props.cartCountChange(this.state.cartCount);
                })
        }
    };

    render() {
        const {
            title,
            image,
            price,
            weight,
            discount,
            cartCountChange,
            navigation
        } = this.props;
        return(
            <TouchableOpacity style={Styles.FoodItemContainer}
                onPress={() => {
                   navigation.navigate(Routes.SINGLE_GROCERY_ITEM, {
                       item: this.props,
                       itemState: this.state
                       }
                   );
                }}
            >
                        <View style={Styles.topContainer}>
                            <View style={{width: "50%"}}>
                                {discount && <View style={{backgroundColor: "#FFE6E6", width: 50, height: 30,
                                    justifyContent: "center", alignItems: "center"
                                }}>
                                    <Text style={Styles.discountText}>- {discount}</Text>
                                </View>}
                            </View>
                            <View style={{width: "50%"}}>
                                <Button
                                    type={"clear"}
                                    icon={
                                        <Icon
                                            name="heart"
                                            type='font-awesome'
                                            size={15}
                                            color={this.state.favourite ? "#FF595A" :"#B3BCCA"}
                                        />
                                    }
                                    buttonStyle={{alignSelf: "flex-end", width: 30, height: 30}}
                                    onPress={() => this._favouriteChange()}
                                />
                            </View>
                        </View>
                        <View style={Styles.mainContainer}>
                            <Image
                                source={image}
                                style={Styles.FoodItemImage}
                                resizeMode={"contain"}
                            />
                            <View style={{height: 50, justifyContent: "space-between", alignItems: "center"}}>
                                <Text style={Styles.priceText}>{price}</Text>
                                <Text style={Styles.itemTitle}>{title}</Text>
                                <Text style={Styles.weightText}>{weight}</Text>
                            </View>
                            <View style={Styles.itemBottomContainer}>
                                {this.state.cartCount === 0 ?
                                    <Button
                                        title={"Add to cart"}
                                        titleStyle={Styles.addCartText}
                                        type={"clear"}
                                        icon={
                                            <Icon
                                                name="shopping-bag"
                                                type='font-awesome'
                                                size={15}
                                                color={Styles.addCartIcon.color}
                                                containerStyle={Styles.addCartIcon}
                                            />
                                        }
                                        onPress={() => this._cartCountChange("add") }
                                    />
                                    : <View style={{flexDirection: "row", width: "100%", justifyContent:"space-between",
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
                                        <Text style={Styles.cartNumberText}>{this.state.cartCount}</Text>
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
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
        );
    }
}

FoodItem.propTypes = {
    title: PropTypes.string,
    image: PropTypes.func,
    price: PropTypes.string,
    weight: PropTypes.string,
    discount: PropTypes.string,
    cartCountChange: PropTypes.func,
    isFavourite: PropTypes.bool,
    favouriteChange: PropTypes.func,
};

FoodItem.defaultProps = {
    isFavourite: false
};


