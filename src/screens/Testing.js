import React, {Component} from 'react';
import {
    View, StyleSheet,
} from 'react-native';

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import FoodItem from "../components/FoodItem/FoodItem";
import CategoryItem from "../components/CategoryItem/CategoryItem";
import CartCounter from "../components/CartCounter/CartCounter";

export default class Testing extends Component {

    render() {
        return(
            <View  style={{flex: 1, backgroundColor: "white", alignItems: "center"}}>
                <View style={{width: wp("85%"), justifyContent: "space-between"}}>
                    <FoodItem
                        title={"Organic Lemons"}
                        image={require("../components/FoodItem/Assets/Images/OrganicLemons.png")}
                        bigImage={require("../components/FoodItem/Assets/Images/BigImage.png")}
                        price={"$1.22"}
                        weight={"1.50 lbs"}
                        discount={"15%"}
                        cartCount={0}
                        isFavourite
                        cartCountChange={(count) => { console.log(count) }}
                        favouriteChange = {(favourite) => console.log(favourite)}
                        detail="Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books"
                        navigation={this.props.navigation}
                        ratingValue={1}
                    />
                    {/*<CategoryItem*/}
                    {/*    secondaryTitle={"fresh"}*/}
                    {/*    secondaryColor={"#FF4344"}*/}
                    {/*    primaryTitle={"fruits"}*/}
                    {/*    primaryColor={"#DD2021"}*/}
                    {/*    iconURI={require('../components/CategoryItem/Assets/Images/Icon.png')}*/}
                    {/*    bgURI={require('../components/CategoryItem/Assets/Images/Background.png')}*/}
                    {/*/>*/}
                    <CartCounter
                        cartCount={10}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
