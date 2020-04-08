import React, {Component} from 'react';
import {
    View, StyleSheet, ImageBackground
} from 'react-native';

import { Text, Button, Image } from 'react-native-elements';
import PropTypes from 'prop-types';
import Styles from "./Assets/Styles/Styles";

export default class CategoryItem extends Component {

    render() {
        const { primaryTitle, primaryColor, secondaryTitle, secondaryColor, iconURI, bgURI } = this.props;
        return(
            <Button
                type={"clear"}
                ViewComponent={() => {
                    return(
                        <View style={Styles.categoryItemContainer}>
                        <ImageBackground source={bgURI} style={Styles.imageWrapper} resizeMode={"cover"}>
                            <View style={Styles.textContainer}>
                                <Text style={[Styles.secondaryTitle ,{color: secondaryColor}]}>{secondaryTitle}</Text>
                                <Text style={[Styles.primaryTitle ,{color: primaryColor}]}>{primaryTitle}</Text>
                            </View>
                            <Image
                                source={iconURI}
                                style={Styles.icon}
                                resizeMode={"contain"}
                            />
                        </ImageBackground>
                        </View>
                    );
                }}
            />
        );
    }
}

CategoryItem.propTypes = {
    primaryTitle: PropTypes.string,
    secondaryTitle: PropTypes.string,
    iconURI: PropTypes.func,
    bgURI: PropTypes.func
};
