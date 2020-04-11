import React, { Component } from 'react';
import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';

import Styles from "./Assets/Styles";
import Routes from "../../navigation/Routes";
import {Icon} from "react-native-elements";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import FoodItem from "../../components/FoodItem/FoodItem";



export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryItems: [
                {
                    secondaryTitle: "fresh",
                    secondaryColor: "#FF4344",
                    primaryTitle: "fruits",
                    primaryColor: "#DD2021",
                    iconURI: require('../../components/CategoryItem/Assets/Images/fresh_fruits_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/fresh_fruits.png')
                },
                {
                    secondaryTitle: "fresh",
                    secondaryColor: "#ffa200",
                    primaryTitle: "dairy",
                    primaryColor: "#ee7b00",
                    iconURI: require('../../components/CategoryItem/Assets/Images/fresh_dairy_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/fresh_dairy.png')
                },
                {
                    secondaryTitle: "organic",
                    secondaryColor: "#7ad228",
                    primaryTitle: "vegetables",
                    primaryColor: "#519610",
                    iconURI: require('../../components/CategoryItem/Assets/Images/organic_vegetable_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/organic_vegetable.png')
                },
                {
                    secondaryTitle: "original",
                    secondaryColor: "#1faaff",
                    primaryTitle: "medicine",
                    primaryColor: "#0076be",
                    iconURI: require('../../components/CategoryItem/Assets/Images/original_medicine_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/original_medicine.png')
                },
                {
                    secondaryTitle: "quality",
                    secondaryColor: "#18e2d6",
                    primaryTitle: "bakery",
                    primaryColor: "#09bcb1",
                    iconURI: require('../../components/CategoryItem/Assets/Images/quality_bakery_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/quality_bakery.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/CategoryItem/Assets/Images/baby_products.png')
                }
            ]
        };
    }

    render(){
        return(
            <View style={Styles.mainWrapper}>
                <ScrollView styles={Styles.mainContainer} showsVerticalScrollIndicator={false}>
                    <View style={Styles.sectionContainer}>
                        <FlatList
                            data={this.state.categoryItems}
                            numColumns={3}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <CategoryItem
                                secondaryTitle={item.secondaryTitle}
                                secondaryColor={item.secondaryColor}
                                primaryTitle={item.primaryTitle}
                                primaryColor={item.primaryColor}
                                iconURI={item.iconURI}
                                bgURI={item.bgURI}
                            />}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
