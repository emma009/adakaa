import React, {useState} from 'react';
import {FlatList, View} from 'react-native';

import BaseView from "../BaseView"
import Routes from "../../navigation/Routes";
import Globals from "../../utils/Globals";
import {CardItem} from "../../components/Application/CardItem/View";
import AppButton from "../../components/Application/AppButton/View";

export const CheckoutSelectCard = (props) => {

    const [cardsData, setCardsData] = useState(Globals.paymentMethodItems.cardItems);

    const onCardItemPress = (index) => {

        setCardsData((cardsData) => {

            cardsData.map(card => card.isActive = false);

            cardsData[index].isActive = !cardsData[index].isActive
            return [...cardsData];
        })


    }

    return (

        <BaseView
            navigation={props.navigation}
            title={"Select a Card"}
            childView={() => {
                return (

                    <View style={{flex: 1}}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={cardsData}
                            renderItem={({item, index}) => {


                                return (
                                    <CardItem
                                        showActiveIcon
                                        isActive={item.isActive}
                                        item={item}
                                        onPress={() => {
                                            onCardItemPress(index);
                                        }}/>
                                );
                            }}
                        />


                        <AppButton
                            title={'Next'}
                            onPress={() => {
                                props.navigation.navigate(Routes.CART_SUMMARY)
                            }}
                        />

                    </View>


                );
            }}
        />

    );

}
