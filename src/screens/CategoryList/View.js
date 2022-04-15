import React, {Component} from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import CategoryItem from "../../components/Application/CategoryItem/CategoryItem";
import BaseView from "../BaseView";
import Globals from "../../utils/Globals";


export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
                                data={Globals.categoryItems}
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
