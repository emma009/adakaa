import React from 'react';
import {FlatList, Image, View} from 'react-native';
import BaseView from "../BaseView"
import {Text} from "react-native-elements";
import Styles from "./Styles";
import assets from "../../../branding/carter/assets/Assets";
import Globals from "../../utils/Globals";


export const Transactions = (props) => {


    const renderTransactionItem = (item) => {

        let icon = assets.master_card_icon;

        if (item.type === "Visa") {
            icon = assets.visa_icon
        } else if (item.type === "Paypal") {
            icon = assets.paypal_coloured_icon
        }


        return (
            <View style={Styles.itemContainer}>

                <View style={Styles.leftIconContainerStyle}>
                    <Image source={icon} style={Styles.leftIcon}/>
                </View>

                <View style={Styles.textContainer}>
                    <View>
                        <Text style={Styles.titleText}>{item.type}</Text>
                        <Text style={Styles.subtitleText}>{item.date}</Text>
                    </View>

                    <Text style={Styles.priceText}>{item.price}</Text>

                </View>

            </View>
        );
    }

    return (

        <BaseView
            navigation={props.navigation}
            title={"Transactions"}
            childView={() => {
                return (

                    <View style={{flex: 1}}>

                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={Globals.transactionItems}
                            renderItem={({item}) => {
                                return renderTransactionItem(item)
                            }}
                        />

                    </View>


                );
            }}
        />

    );

}
