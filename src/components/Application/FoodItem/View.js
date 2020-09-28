import React, {Component} from 'react';
import {
    View, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback
} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';


import { Text, Button, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import Routes from "../../../navigation/Routes";
import Styles from "./Assets/Styles/Styles";
import assets from "../../../../branding/carter/assets/Assets";
import colors from "../../../../branding/carter/styles/Colors";

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

            <TouchableWithoutFeedback onPress={() => {
                navigation.navigate(
                    Routes.PRODUCT_DETAIL, {
                           item: this.props,
                           itemState: this.state
                           }
                       );
            }}>
                <View style={Styles.foodItemContainer}>

                    <View style={Styles.topContainer}>
                        <View style={{width: "50%"}}>
                            {discount && <View style={{backgroundColor: colors.iconColorRed4, width: "60%", height: hp(3),
                                justifyContent: "center", alignItems: "center", borderTopRightRadius: hp(0.5), borderBottomRightRadius: hp(0.5)
                            }}>
                                <Text style={Styles.discountText}>- {discount}</Text>
                            </View>}
                        </View>
                        <View style={{width: "50%", height: hp(2), paddingTop: wp(2), paddingEnd: wp(2), justifyContent: "center", alignItems: "flex-end"}}>
                            <TouchableOpacity onPress={() => {
                                this._favouriteChange()
                            }}>
                                <View>

                                    { !this.state.favourite && <Image source={assets.heart_light_empty_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} /> }
                                    { this.state.favourite && <Image source={assets.heart_filled_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorRed1}} resizeMode={"contain"} /> }

                                </View>

                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={Styles.mainContainer}>
                        <Image
                            source={image}
                            style={Styles.foodItemImage}
                            resizeMode={"contain"}
                        />
                        <View style={{alignItems: "center", marginVertical: hp("2")}}>
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
                                       <Image source={assets.cart_light_icon} style={{width: hp(1.5), height: hp(1.5), tintColor: colors.primaryGreenColor, marginRight: wp(1)}} resizeMode={"contain"} />
                                    }
                                    onPress={() => this._cartCountChange("add") }
                                />
                                : <View style={{ height: "100%",flexDirection: "row" ,justifyContent:"space-between",
                                    alignItems: "center"}}>
                                    <TouchableOpacity style={{
                                        flex: 0.3,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRightColor: colors.borderColorLight,
                                        borderRightWidth: 1,
                                        height: "100%",
                                    }} onPress={() => {
                                        this._cartCountChange("subtract")
                                    }}>

                                        <Image source={assets.minus_icon} style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />

                                    </TouchableOpacity>

                                    {/*<Button*/}
                                    {/*    icon={*/}
                                    {/*        <Icon*/}
                                    {/*            name="minus"*/}
                                    {/*            type="font-awesome"*/}
                                    {/*            size={15}*/}
                                    {/*            color={Styles.AddSubtractText}*/}
                                    {/*        />*/}
                                    {/*    }*/}
                                    {/*    type={"clear"}*/}
                                    {/*    onPress={() => this._cartCountChange("subtract") }*/}
                                    {/*    containerStyle={Styles.AddButton}*/}
                                    {/*/>*/}
                                    <Text style={Styles.cartNumberText}>{this.state.cartCount}</Text>

                                    <TouchableOpacity style={{
                                        flex: 0.3,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderLeftColor: colors.borderColorLight,
                                        borderLeftWidth: 1,
                                        height: "100%",
                                    }} onPress={() => {
                                        this._cartCountChange("add")
                                    }}>

                                        <Image source={assets.plus_icon} style={{width: hp(2), height: hp(2), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />

                                    </TouchableOpacity>
                                    {/*<Button*/}
                                    {/*    icon={*/}
                                    {/*        <Icon*/}
                                    {/*            name="plus"*/}
                                    {/*            type="font-awesome"*/}
                                    {/*            size={15}*/}
                                    {/*            color={Styles.AddSubtractText}*/}
                                    {/*        />*/}
                                    {/*    }*/}
                                    {/*    type={"clear"}*/}
                                    {/*    onPress={() => this._cartCountChange("add") }*/}
                                    {/*    containerStyle={Styles.subtractButton}*/}
                                    {/*/>*/}
                                </View>
                            }
                        </View>
                    </View>

                </View>
            </TouchableWithoutFeedback>





            // <Button
            //     onPress={() => {
            //         navigation.navigate(Routes.PRODUCT_DETAIL, {
            //                item: this.props,
            //                itemState: this.state
            //                }
            //            );
            //     }}
            //     ViewComponent={() => {
            //
            //         return (
            //
            //         );
            //
            //     }}
            //     />

            // <TouchableOpacity style={Styles.FoodItemContainer}
            //     onPress={() => {
            //        navigation.navigate(Routes.SINGLE_GROCERY_ITEM, {
            //            item: this.props,
            //            itemState: this.state
            //            }
            //        );
            //     }}>
            //
            //         </TouchableOpacity>
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


