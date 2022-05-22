import React from 'react';
import {FlatList} from 'react-native';
import {FoodItem} from "../../components/Application/FoodItem/View";
import BaseView from "../BaseView"
import Globals from "../../utils/Globals";


export const CategoryItems = (props) => {
    return(

        <BaseView
            navigation={props.navigation}
            title={props.route.params.category}
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
                                navigation={props.navigation}
                            />
                        }
                    />
                );
            }}
        />



    );
}
