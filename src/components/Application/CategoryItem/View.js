import React from 'react';
import {Image, ImageBackground, TouchableWithoutFeedback, View} from 'react-native';

import {Text} from 'react-native-elements';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import Routes from "../../../navigation/Routes";
import { SvgIcon } from "../SvgIcon/View";

export const CategoryItem = (props) => {

    const {
        primaryTitle,
        primaryColor,
        secondaryTitle,
        secondaryColor,
        iconBgColor,
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
                    style={Styles.backgroundContainer}
                    imageStyle={Styles.backgroundImageStyle}
                    resizeMode={"cover"}>
                    <View style={Styles.mainContainer}>

                        <Text style={[Styles.secondaryTitle, {color: secondaryColor}]}>{secondaryTitle}</Text>
                        <Text style={[Styles.primaryTitle, {color: primaryColor}]}>{primaryTitle}</Text>

                        <View style={[Styles.icon, {backgroundColor: iconBgColor}]}>

                            <SvgIcon type={iconURI} width={30} height={30} color={"white"} />

                        </View>
                        {/*<Image*/}
                        {/*    source={iconURI}*/}
                        {/*    style={Styles.icon}*/}
                        {/*    resizeMode={"contain"}*/}
                        {/*/>*/}
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
