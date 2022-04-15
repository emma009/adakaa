import React, {Component} from 'react';
import {FlatList, Image, ScrollView, View, ViewComponent} from 'react-native';
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
import assets from "../../../branding/carter/assets/Assets";

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


                            <View style={{flex: 0.9, width: wp ("55"), alignSelf: "center", alignItems: "center", justifyContent: "center"}}>

                                <Image source={assets.cart_regular_icon} style={{width: hp(8), height: hp(8), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />

                                <Text style={{fontFamily: fonts.RUBIK_MEDIUM, color: colors.textColorBlack1, fontSize: Typography.H8, textAlign: "center", marginTop: hp("3")}}>Your Order was successful!</Text>

                                <Text style={{fontFamily: fonts.RUBIK_LIGHT, color: colors.textColorGrey1, fontSize: Typography.P4, lineHeight: hp(3), textAlign: "center", marginTop: hp("3")}}>You'll get a response within a few minutes</Text>

                            </View>



                            <View style={{flex: 0.1, justifyContent: "flex-end", marginBottom: hp("1")}}>

                                <Button
                                    buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                    title={'Track Order'}
                                    titleStyle={styles.buttonStyle}
                                    onPress={() => {
                                        this.props.navigation.navigate(Routes.TRACK_ORDERS)
                                    }}/>

                            </View>


                        </View>

                    );
                }}
            />

        );
    }
}
