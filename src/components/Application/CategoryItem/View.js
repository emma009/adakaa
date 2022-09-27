import React from 'react';
import {ImageBackground, TouchableWithoutFeedback, View} from 'react-native';

import {Text} from 'react-native-elements';
import Styles from "./Styles";
import Routes from "../../../navigation/Routes";
import {SvgIcon} from "../SvgIcon/View";

export const CategoryItem = (props) => {

    //Props
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
                    </View>

                </ImageBackground>
            </View>

        </TouchableWithoutFeedback>

    );
}
