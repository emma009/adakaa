import React, {Component} from 'react';
import {FlatList, ScrollView, TouchableWithoutFeedback, View, ViewComponent} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView"
import {Button, Divider, Icon, Text} from "react-native-elements";
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

        this.state = {
            isPayPalSelected: false,
            isCreditCardSelected: true,
            isApplePaySelected: false,
        }
    }

    render(){

        let {
            isPayPalSelected,
            isCreditCardSelected,
            isApplePaySelected
        } = this.state;


        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Payment Method"}
                childView={() => {
                    return (

                        <View style={{flex: 1}}>

                            <ShippingAddress
                                markSecondComplete
                                markThirdComplete
                            />


                            <View style={Styles.paymentMethodMainContainer}>

                                <TouchableWithoutFeedback onPress={() => {
                                    this.setState({
                                        isPayPalSelected: true,
                                        isCreditCardSelected: false,
                                        isApplePaySelected: false
                                    })
                                }}>

                                    <View style={[Styles.paymentMethodInnerContainer, {backgroundColor: "white"}, isPayPalSelected && {borderWidth: 1, borderColor: colors.buttonGreenColor}]}>
                                        <Icon
                                            name="google"
                                            type='font-awesome'
                                            size={15}
                                            color={isPayPalSelected ? colors.buttonGreenColor: "#dadada"}
                                        />
                                        <Text style={{marginTop: hp("1")}}>{"Paypal"}</Text>
                                    </View>

                                </TouchableWithoutFeedback>

                                <TouchableWithoutFeedback onPress={() => {
                                    this.setState({
                                        isPayPalSelected: false,
                                        isCreditCardSelected: true,
                                        isApplePaySelected: false
                                    })
                                }}>

                                    <View style={[Styles.paymentMethodInnerContainer, {backgroundColor: "white"}, isCreditCardSelected && {borderWidth: 1, borderColor: colors.buttonGreenColor}]}>
                                        <Icon
                                            name="google"
                                            type='font-awesome'
                                            size={15}
                                            color={isCreditCardSelected ? colors.buttonGreenColor: "#dadada"}
                                        />
                                        <Text style={{marginTop: hp("1")}}>{"Credit Card"}</Text>
                                    </View>

                                </TouchableWithoutFeedback>

                                <TouchableWithoutFeedback onPress={() => {
                                    this.setState({
                                        isPayPalSelected: false,
                                        isCreditCardSelected: false,
                                        isApplePaySelected: true
                                    })
                                }}>

                                    <View style={[Styles.paymentMethodInnerContainer, {backgroundColor: "white"}, isApplePaySelected && {borderWidth: 1, borderColor: colors.buttonGreenColor}]}>
                                        <Icon
                                            name="google"
                                            type='font-awesome'
                                            size={15}
                                            color={isApplePaySelected ? colors.buttonGreenColor: "#dadada"}
                                        />
                                        <Text style={{marginTop: hp("1")}}>{"Apple Pay"}</Text>
                                    </View>

                                </TouchableWithoutFeedback>

                                {/*<Button*/}
                                {/*    onPress={() => {*/}
                                {/*       */}

                                {/*    }}*/}

                                {/*    ViewComponent={() => {*/}
                                {/*        return (*/}
                                {/*            */}
                                {/*        );*/}
                                {/*    }}*/}
                                {/*    containerStyle={[Styles.paymentMethodOuterContainer, {backgroundColor: "white"}, isPayPalSelected && {borderWidth: 1, borderColor: colors.buttonGreenColor}]}*/}
                                {/*/>*/}

                                {/*<Button*/}
                                {/*    onPress={() => {*/}
                                {/*        this.setState({*/}
                                {/*            isPayPalSelected: false,*/}
                                {/*            isCreditCardSelected: true,*/}
                                {/*            isApplePaySelected: false*/}
                                {/*        })*/}
                                {/*    }}*/}

                                {/*    ViewComponent={() => {*/}
                                {/*        return (*/}
                                {/*            <View style={Styles.paymentMethodInnerContainer}>*/}
                                {/*                <Icon*/}
                                {/*                    name="google"*/}
                                {/*                    type='font-awesome'*/}
                                {/*                    size={15}*/}
                                {/*                    color={isCreditCardSelected ? colors.buttonGreenColor : "#dadada"}*/}
                                {/*                />*/}
                                {/*                <Text style={{marginTop: hp("1")}}>{"Credit Card"}</Text>*/}
                                {/*            </View>*/}
                                {/*        );*/}
                                {/*    }}*/}
                                {/*    containerStyle={[Styles.paymentMethodOuterContainer, {backgroundColor: "white"}, isCreditCardSelected && {borderWidth: 1, borderColor: colors.buttonGreenColor}]}*/}
                                {/*/>*/}

                                {/*<Button*/}
                                {/*    onPress={() => {*/}
                                {/*        this.setState({*/}
                                {/*            isPayPalSelected: false,*/}
                                {/*            isCreditCardSelected: false,*/}
                                {/*            isApplePaySelected: true*/}
                                {/*        })*/}
                                {/*    }}*/}

                                {/*    ViewComponent={() => {*/}
                                {/*        return (*/}
                                {/*            <View style={Styles.paymentMethodInnerContainer}>*/}
                                {/*                <Icon*/}
                                {/*                    name="google"*/}
                                {/*                    type='font-awesome'*/}
                                {/*                    size={15}*/}
                                {/*                    color={isApplePaySelected ? colors.buttonGreenColor : "#dadada"}*/}
                                {/*                />*/}
                                {/*                <Text style={{marginTop: hp("1")}}>{"Apple Pay"}</Text>*/}
                                {/*            </View>*/}
                                {/*        );*/}
                                {/*    }}*/}
                                {/*    containerStyle={[Styles.paymentMethodOuterContainer, {backgroundColor: "white"}, isApplePaySelected && {borderWidth: 1, borderColor: colors.buttonGreenColor}]}*/}
                                {/*/>*/}


                            </View>


                            <View style={{flex: 1, justifyContent: "flex-end", marginBottom: hp("1")}}>

                                <Button
                                    buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                    title={'Make Payment'}
                                    titleStyle={styles.buttonFontStyle}
                                    onPress={() => {
                                        this.props.navigation.navigate(Routes.ORDER_SUCCESS)
                                    }}/>

                            </View>


                        </View>

                    );
                }}
            />

        );
    }
}
