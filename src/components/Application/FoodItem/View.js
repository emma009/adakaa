import React, {useEffect, useState} from 'react';
import { Image, TouchableOpacity, TouchableWithoutFeedback, useColorScheme, View } from "react-native";


import {Button, Text} from 'react-native-elements';
import PropTypes from 'prop-types';
import Routes from "../../../navigation/Routes";
import { Styles } from "./Styles";
import AppConfig from "../../../../branding/App_config";
import { useTheme } from "@react-navigation/native";

const assets = AppConfig.assets.default;


export const FoodItem = (props) => {

    //Theme based styling and colors
    const { colors } = useTheme();
    const scheme = useColorScheme();
    const itemStyles = Styles(scheme, colors);

    //Internal states
    const [cartCount, setCartCount] = useState(props.cartCount);
    const [favourite, setFavourite] = useState(props.isFavourite);

    useEffect(() => {
        props.favouriteChange(favourite)
    }, [favourite])

    useEffect(() => {
        props.cartCountChange(cartCount)
    }, [cartCount])

    const _favouriteChange = () => {

        setFavourite((favourite) => {
            return !favourite;
        })

    };

    const _cartCountChange = (behavior) => {
        if (behavior === "add") {

            setCartCount((cartCount) => {
                return cartCount + 1
            })

        } else if (behavior === "subtract" && !(cartCount === 0)) {
            setCartCount((cartCount) => {
                return cartCount - 1
            })
        }
    };

    const {
        title,
        image,
        price,
        weight,
        discount,
        navigation
    } = props;

    return (

        <View>
            <View style={itemStyles.container}>

                <View style={itemStyles.upperContainer}>
                    <View style={itemStyles.discountContainer}>
                        {discount && <View style={itemStyles.discountBanner}>
                            <Text style={itemStyles.discountText}>- {discount}</Text>
                        </View>}
                    </View>
                    <View style={itemStyles.favouriteContainer}>
                        <TouchableOpacity onPress={() => {
                            _favouriteChange()
                        }}>
                            <View>

                                {!favourite && <Image source={assets.heart_light_empty_icon} style={[
                                    itemStyles.favouriteIcon,
                                    {tintColor: colors.heartEmpty}
                                ]}/>}

                                {favourite && <Image source={assets.heart_filled_icon} style={[
                                    itemStyles.favouriteIcon,
                                    {tintColor: colors.heartFilled}
                                ]}/>}

                            </View>

                        </TouchableOpacity>

                    </View>
                </View>

                <TouchableWithoutFeedback
                    onPress={() => {
                        navigation.navigate(
                            Routes.PRODUCT_DETAIL, {
                                item: props
                            }
                        );
                    }}>
                    <View style={[itemStyles.mainContainer]}>
                        <Image
                            source={image}
                            style={itemStyles.foodItemImage}
                        />
                        <View style={itemStyles.infoContainer}>
                            <Text style={itemStyles.priceText}>{price}</Text>
                            <Text style={itemStyles.titleText}>{title}</Text>
                            <Text style={itemStyles.weightText}>{weight}</Text>
                        </View>
                        <View style={itemStyles.bottomContainer}>
                            {cartCount === 0 ?
                                <Button
                                    title={"Add to cart"}
                                    titleStyle={itemStyles.addCartText}
                                    type={"clear"}
                                    icon={
                                        <Image source={assets.cart_regular_icon} style={itemStyles.addCartIcon}/>
                                    }
                                    onPress={() => _cartCountChange("add")}
                                />
                                : <View style={itemStyles.cartUpdateContainer}>
                                    <TouchableOpacity style={[itemStyles.cartUpdateActionContainer, {borderRightWidth: 1}]} onPress={() => {
                                        _cartCountChange("subtract")
                                    }}>

                                        <Image source={assets.minus_icon} style={itemStyles.cartUpdateIcon}/>

                                    </TouchableOpacity>

                                    <Text style={itemStyles.cartNumberText}>{cartCount}</Text>

                                    <TouchableOpacity style={[itemStyles.cartUpdateActionContainer, {borderLeftWidth: 1}]} onPress={() => {
                                        _cartCountChange("add")
                                    }}>

                                        <Image source={assets.plus_icon} style={itemStyles.cartUpdateIcon}/>

                                    </TouchableOpacity>

                                </View>
                            }
                        </View>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        </View>

    );


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


