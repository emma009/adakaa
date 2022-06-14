import React from 'react';
import {FlatList} from 'react-native';
import {CategoryItem} from "../../components/Application/CategoryItem/View";
import BaseView from "../BaseView";
import Globals from "../../utils/Globals";

export const CategoryList = (props) => {
    return(

        <BaseView
            navigation={props.navigation}
            title={"Categories"}
            headerWithBack
            applyBottomSafeArea
            childView={() => {
                return (

                    <FlatList
                        data={Globals.categoryItems}
                        numColumns={3}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) =>
                            <CategoryItem
                                navigation={props.navigation}
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

