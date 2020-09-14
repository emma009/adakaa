import React, {Component} from 'react';
import {FlatList, ScrollView, View, ViewComponent} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView"
import {Button, Divider, Icon, Text} from "react-native-elements";
import AppConfig from "../../../branding/App_config";
import Routes from "../../navigation/Routes";
import ShippingAddress from "../../components/Application/ShippingProgress/View"
import Styles from "./Styles";
import AppInput from "../../components/Application/AppInput/View";
import fonts from "../../../branding/carter/assets/Fonts";
import Typography from "../../../branding/carter/styles/Typography";

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
                title={"Order Success"}
                childView={() => {
                    return (

                        <View style={{flex: 1}}>


                            <View style={{flex: 0.9, width: wp ("60"), alignSelf: "center", justifyContent: "center"}}>
                                <Icon
                                    name="google"
                                    type='font-awesome'
                                    size={50}
                                    color={colors.buttonGreenColor}
                                />

                                <Text style={{fontFamily: fonts.RUBIK_MEDIUM, fontSize: Typography.P1, textAlign: "center", marginTop: hp("3")}}>Your Order was successful!</Text>

                            </View>



                            <View style={{flex: 0.1, justifyContent: "flex-end", marginBottom: hp("0.5")}}>

                                <Button
                                    buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                    title={'Track Order'}
                                    titleStyle={styles.buttonFontStyle}
                                    onPress={() => {
                                        // this.props.navigation.navigate(Routes.CHECKOUT_PAYMENT)
                                    }}/>

                            </View>


                        </View>

                    );
                }}
            />

        );
    }
}
