import React, {Component} from 'react';
import {FlatList, ScrollView, View, ViewComponent} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView"
import {Button, Divider, Text} from "react-native-elements";
import AppConfig from "../../../branding/App_config";
import Routes from "../../navigation/Routes";
import ShippingAddress from "../../components/Application/ShippingProgress/View"
import Styles from "./Styles";
import AppInput from "../../components/Application/AppInput/View";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;


export default class CheckoutDelivery extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Shipping Address"}
                childView={() => {
                    return (

                        <View style={{flex: 1}}>

                            <ShippingAddress
                                markSecondComplete
                            />

                            <ScrollView>

                                <AppInput
                                    leftIcon={'google'}
                                    placeholder={"Name"}
                                    onChangeText={(value) => {}}
                                />

                                <AppInput
                                    leftIcon={'google'}
                                    placeholder={"Email Address"}
                                    onChangeText={(value) => {}}
                                />


                                <AppInput
                                    leftIcon={'google'}
                                    placeholder={"Phone"}
                                    onChangeText={(value) => {}}
                                />


                                <AppInput
                                    leftIcon={'google'}
                                    placeholder={"Address"}
                                    onChangeText={(value) => {}}
                                />

                                <AppInput
                                    leftIcon={'google'}
                                    placeholder={"Zip Code"}
                                    onChangeText={(value) => {}}
                                />


                                <AppInput
                                    leftIcon={'google'}
                                    placeholder={"City"}
                                    onChangeText={(value) => {}}
                                />

                                <AppInput
                                    leftIcon={'google'}
                                    placeholder={"Country"}
                                    onChangeText={(value) => {}}
                                />

                            </ScrollView>

                            <View style={{flex: 1, justifyContent: "flex-end", marginBottom: hp("1")}}>

                                <Button
                                    buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                    title={'Next'}
                                    titleStyle={styles.buttonFontStyle}
                                    onPress={() => {
                                        this.props.navigation.navigate(Routes.CHECKOUT_PAYMENT)
                                    }}/>

                            </View>

                        </View>

                    );
                }}
            />

        );
    }
}
