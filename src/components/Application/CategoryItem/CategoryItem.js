import React, {Component} from 'react';
import {
    View, StyleSheet, ImageBackground, TouchableOpacity, Image, TouchableWithoutFeedback
} from 'react-native';

import { Text, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import Styles from "./Assets/Styles/Styles";
import Routes from "../../../navigation/Routes";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

export default class CategoryItem extends Component {

    render() {
        const { primaryTitle, primaryColor, secondaryTitle, secondaryColor, iconURI, bgURI } = this.props;
        return(

            <TouchableWithoutFeedback onPress={() => {
                this.props.navigation.navigate(Routes.CATEGORY_ITEMS, {
                        category: primaryTitle
                    });
            }}>

                <View style={Styles.categoryItemContainer}>
                    <ImageBackground
                        source={bgURI}
                        style={{flex: 1, justifyContent:"center"}}
                        imageStyle={{borderRadius: wp("2")}}
                        resizeMode={"cover"}>
                        <View style={Styles.mainContainer}>

                            <Text style={[Styles.secondaryTitle ,{color: secondaryColor}]}>{secondaryTitle}</Text>
                            <Text style={[Styles.primaryTitle ,{color: primaryColor}]}>{primaryTitle}</Text>

                            <Image
                                source={iconURI}
                                style={Styles.icon}
                                resizeMode={"contain"}
                            />
                        </View>

                    </ImageBackground>
                </View>

            </TouchableWithoutFeedback>

            // <Button
            //
            //     onPress={() => {
            //         this.props.navigation.navigate(Routes.CATEGORY_ITEMS, {
            //             category: primaryTitle
            //         });
            //     }}
            //
            //     ViewComponent={() => {
            //
            //         return (
            //
            //         );
            //
            //     }}
            //
            // />
        );
    }
}

CategoryItem.propTypes = {
    navigation: PropTypes.any,
    primaryTitle: PropTypes.string,
    secondaryTitle: PropTypes.string,
    iconURI: PropTypes.func,
    bgURI: PropTypes.func
};
