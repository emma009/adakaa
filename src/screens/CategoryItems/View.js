import React, {Component} from 'react';
import {FlatList} from 'react-native';
import FoodItem from "../../components/Application/FoodItem/View";
import BaseView from "../BaseView"
import Globals from "../../utils/Globals";

export default class CategoryItems extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={this.props.route.params.category}
                childView={() => {
                    return (
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={Globals.foodItems}
                            numColumns={2}
                            renderItem={({ item }) =>
                                <FoodItem
                                    title={item.title}
                                    image={item.image}
                                    bigImage={item.bigImage}
                                    price={item.price}
                                    weight={item.weight}
                                    discount={item.discount}
                                    cartCount={item.cartCount}
                                    isFavourite={item.isFavourite}
                                    detail={item.detail}
                                    ratingValue={item.ratingValue}
                                    cartCountChange={(count) => { console.log(count) }}
                                    favouriteChange = {(favourite) => console.log(favourite)}
                                    navigation={this.props.navigation}
                                />
                            }
                        />
                    );
                }}
            />



        );
    }
}
