import React, {useState} from 'react';
import {FlatList, View} from 'react-native';

import BaseView from "../BaseView"
import Routes from "../../navigation/Routes";
import Globals from "../../utils/Globals";
import {AddressItem} from "../../components/Application/AddressItem/View";
import AppButton from "../../components/Application/AppButton/View";


export const CheckoutAddress = (props) => {

    const [addresses, setAddresses] = useState(Globals.addressItems);

    const onAddressItemPress = (index) => {

        setAddresses((addresses) => {

            addresses.map(address => address.isActive = false);

            addresses[index].isActive = !addresses[index].isActive
            return [...addresses];
        })

    }

    return (

        <BaseView
            navigation={props.navigation}
            title={"Select Address"}
            childView={() => {
                return (

                    <View style={{flex: 1}}>

                        <FlatList
                            showsVerticalScrollIndicator={false}
                            style={{flex: 1}}
                            data={addresses}
                            renderItem={({item, index}) => {
                                return <AddressItem
                                    showActiveIcon
                                    isActive={item.isActive}
                                    item={item}
                                    onPress={() => {
                                        onAddressItemPress(index)
                                    }}
                                />
                            }}/>

                        <AppButton
                            title={'Next'}
                            onPress={() => {
                                props.navigation.navigate(Routes.CHECKOUT_PAYMENT)
                            }}
                        />
                    </View>

                );
            }}
        />

    );
}
