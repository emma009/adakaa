import React from 'react';
import {Image, ImageBackground, TouchableWithoutFeedback, View} from 'react-native';

import {Text} from 'react-native-elements';
import PropTypes from 'prop-types';
import Styles from "./Assets/Styles/Styles";
import Routes from "../../../navigation/Routes";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

export const CategoryItem = (props) => {

    const {
        primaryTitle,
        primaryColor,
        secondaryTitle,
        secondaryColor,
        iconURI,
        bgURI
    } = props;

    return (

        <TouchableWithoutFeedback onPress={() => {
            props.navigation.navigate(Routes.CATEGORY_ITEMS, {
                category: primaryTitle
            });
        }}>

            <View style={Styles.categoryItemContainer}>
                <ImageBackground
                    source={bgURI}
                    style={{
                        flex: 1,
                        justifyContent: "center"
                    }}
                    imageStyle={{borderRadius: wp("2")}}
                    resizeMode={"cover"}>
                    <View style={Styles.mainContainer}>

                        <Text style={[Styles.secondaryTitle, {color: secondaryColor}]}>{secondaryTitle}</Text>
                        <Text style={[Styles.primaryTitle, {color: primaryColor}]}>{primaryTitle}</Text>
                        <Image
                            source={iconURI}
                            style={Styles.icon}
                            resizeMode={"contain"}
                        />
                    </View>

                </ImageBackground>
            </View>

        </TouchableWithoutFeedback>

    );
}


CategoryItem.propTypes = {
    navigation: PropTypes.any,
    primaryTitle: PropTypes.string,
    secondaryTitle: PropTypes.string,
    iconURI: PropTypes.func,
    bgURI: PropTypes.func
};
