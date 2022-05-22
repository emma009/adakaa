import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import {Button, Text} from 'react-native-elements';
import PropTypes from 'prop-types';
import Routes from "../../../navigation/Routes";

import Swipeable from 'react-native-gesture-handler/Swipeable';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Counter} from "../../Global/Counter/View";
import Styles from "./Style"
import AppConfig from "../../../../branding/App_config";

const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;

export const CartItem = (props) => {

    const renderRightActions = (progress, dragX) => {
        return (

            <TouchableOpacity
                onPress={() => {}}
                style={{
                    width: wp("20"),
                    height: "100%",
                    backgroundColor: colors.iconColorRed2,
                    justifyContent: "center",
                    alignItems: "center"
            }}>

                <Image
                    source={assets.trash_icon}
                    style={{
                        width: hp(3),
                        height: hp(3),
                        tintColor: "white",
                        resizeMode: "contain"
                }} />

            </TouchableOpacity>

        );
    };

    return(
        <Button
            onPress={() => {
                props.navigation.navigate(Routes.PRODUCT_DETAIL, {
                       item: props,
                       }
                   );
            }}
            ViewComponent={() => {

                return (
                    <Swipeable
                        friction={2}
                        leftThreshold={80}
                        rightThreshold={40}
                        renderRightActions={renderRightActions}
                        containerStyle={{marginVertical: hp("0.5")}}>

                        <View style={Styles.foodItemContainer}>

                            <Image
                                source={props.image}
                                style={Styles.foodItemImage}
                                resizeMode={"contain"}
                            />
                            <View>
                                <Text style={Styles.priceText}>{props.price}</Text>
                                <Text style={Styles.itemTitle}>{props.title}</Text>
                                <Text style={Styles.weightText}>{props.weight}</Text>
                            </View>

                            <View style={{flex: 1, alignItems: "flex-end"}}>
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


