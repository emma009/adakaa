import React, {Component} from 'react';
import {FlatList} from 'react-native';
import CategoryItem from "../../components/Application/CategoryItem/CategoryItem";
import BaseView from "../BaseView";
import Globals from "../../utils/Globals";


export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryItems: [
                {
                    secondaryTitle: "fresh",
                    secondaryColor: "#FF4344",
                    primaryTitle: "fruits",
                    primaryColor: "#DD2021",
                    iconURI: require('../../components/Application/CategoryItem/Assets/Images/fresh_fruits_icon.png'),
                    bgURI: require('../../components/Application/CategoryItem/Assets/Images/fresh_fruits.png')
                },
                {
                    secondaryTitle: "fresh",
                    secondaryColor: "#ffa200",
                    primaryTitle: "dairy",
                    primaryColor: "#ee7b00",
                    iconURI: require('../../components/Application/CategoryItem/Assets/Images/fresh_dairy_icon.png'),
                    bgURI: require('../../components/Application/CategoryItem/Assets/Images/fresh_dairy.png')
                },
                {
                    secondaryTitle: "organic",
                    secondaryColor: "#7ad228",
                    primaryTitle: "vegetables",
                    primaryColor: "#519610",
                    iconURI: require('../../components/Application/CategoryItem/Assets/Images/organic_vegetable_icon.png'),
                    bgURI: require('../../components/Application/CategoryItem/Assets/Images/organic_vegetable.png')
                },
                {
                    secondaryTitle: "original",
                    secondaryColor: "#1faaff",
                    primaryTitle: "medicine",
                    primaryColor: "#0076be",
                    iconURI: require('../../components/Application/CategoryItem/Assets/Images/original_medicine_icon.png'),
                    bgURI: require('../../components/Application/CategoryItem/Assets/Images/original_medicine.png')
                },
                {
                    secondaryTitle: "quality",
                    secondaryColor: "#18e2d6",
                    primaryTitle: "bakery",
                    primaryColor: "#09bcb1",
                    iconURI: require('../../components/Application/CategoryItem/Assets/Images/quality_bakery_icon.png'),
                    bgURI: require('../../components/Application/CategoryItem/Assets/Images/quality_bakery.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/Application/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/Application/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/Application/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/Application/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/Application/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/Application/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/Application/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/Application/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/Application/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/Application/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/Application/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/Application/CategoryItem/Assets/Images/baby_products.png')
                },
                {
                    secondaryTitle: "baby",
                    secondaryColor: "#d250e9",
                    primaryTitle: "products",
                    primaryColor: "#a627bc",
                    iconURI: require('../../components/Application/CategoryItem/Assets/Images/baby_products_icon.png'),
                    bgURI: require('../../components/Application/CategoryItem/Assets/Images/baby_products.png')
                }
            ]
        };
    }

    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Categories"}
                childView={() => {
                    return (
                        <FlatList
                            data={this.state.categoryItems}
                            numColumns={3}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <CategoryItem
                                    navigation={this.props.navigation}
                                    secondaryTitle={item.secondaryTitle}
                                    secondaryColor={item.secondaryColor}
                                    primaryTitle={item.primaryTitle}
                                    primaryColor={item.primaryColor}
                                    iconURI={item.iconURI}
                                    bgURI={item.bgURI}
                                />
                            }
                        />
                    );
                }}
            />


        );
    }
}
