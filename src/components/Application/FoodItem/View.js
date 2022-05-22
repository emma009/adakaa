import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';


import {Button, Text} from 'react-native-elements';
import PropTypes from 'prop-types';
import Routes from "../../../navigation/Routes";
import Styles from "./Assets/Styles/Styles";
import AppConfig from "../../../../branding/App_config";

const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;


export const FoodItem = (props) => {

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
        cartCountChange,
        navigation
    } = props;

    return (

        <View>
            <View style={Styles.container}>

                <View style={{flexDirection: "row"}}>
                    <View style={{width: "50%"}}>
                        {discount && <View style={Styles.discountBanner}>
                            <Text style={Styles.discountText}>- {discount}</Text>
                        </View>}
                    </View>
                    <View style={Styles.favouriteContainer}>
                        <TouchableOpacity onPress={() => {
                            _favouriteChange()
                        }}>
                            <View>

                                {!favourite && <Image source={assets.heart_light_empty_icon} style={[
                                    Styles.favouriteIcon,
                                    {tintColor: colors.iconColorGrey1}
                                ]}/>}

                                {favourite && <Image source={assets.heart_filled_icon} style={[
                                    Styles.favouriteIcon,
                                    {tintColor: colors.iconColorRed1}
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
                    <View style={[Styles.mainContainer]}>
                        <Image
                            source={image}
                            style={Styles.foodItemImage}
                        />
                        <View style={Styles.infoContainer}>
                            <Text style={Styles.priceText}>{price}</Text>
                            <Text style={Styles.titleText}>{title}</Text>
                            <Text style={Styles.weightText}>{weight}</Text>
                        </View>
                        <View style={Styles.bottomContainer}>
                            {cartCount === 0 ?
                                <Button
                                    title={"Add to cart"}
                                    titleStyle={Styles.addCartText}
                                    type={"clear"}
                                    icon={
                                        <Image source={assets.cart_regular_icon} style={Styles.addCartIcon}/>
                                    }
                                    onPress={() => _cartCountChange("add")}
                                />
                                : <View style={Styles.cartUpdateContainer}>
                                    <TouchableOpacity style={[Styles.cartUpdateActionContainer, {borderRightWidth: 1}]} onPress={() => {
                                        _cartCountChange("subtract")
                                    }}>

                                        <Image source={assets.minus_icon} style={Styles.cartUpdateIcon}/>

                                    </TouchableOpacity>

                                    <Text style={Styles.cartNumberText}>{cartCount}</Text>

                                    <TouchableOpacity style={[Styles.cartUpdateActionContainer, {borderLeftWidth: 1,}]} onPress={() => {
                                        _cartCountChange("add")
                                    }}>

                                        <Image source={assets.plus_icon} style={Styles.cartUpdateIcon}/>

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


