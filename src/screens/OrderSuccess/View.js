import React from 'react';
import {Image, View} from 'react-native';

import BaseView from "../BaseView"
import {Text} from "react-native-elements";
import Routes from "../../navigation/Routes";
import Styles from "./Styles";
import assets from "../../../branding/carter/assets/Assets";
import AppButton from "../../components/Application/AppButton/View";


export const OrderSuccess = (props) => {


    return (

        <BaseView
            navigation={props.navigation}
            title={"Order Success"}
            childView={() => {
                return (

                    <View style={{flex: 1}}>


                        <View style={Styles.mainContainer}>

                            <Image
                                source={assets.cart_regular_icon}
                                style={Styles.cartIcon}/>

                            <Text style={Styles.titleText}>Your Order was successful!</Text>

                            <Text style={Styles.subtitleText}>You'll get a response within a few minutes</Text>

                        </View>


                        <View style={{flex: 0.1, justifyContent: "flex-end"}}>
                            <AppButton
                                title={'Track Order'}
                                onPress={() => {
                                    props.navigation.navigate(Routes.TRACK_ORDERS)
                                }}
                            />
                        </View>

                    </View>

                );
            }}
        />

    );

}
