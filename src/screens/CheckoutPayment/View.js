import React, {Component} from 'react';
import {FlatList, Image, ScrollView, Switch, TouchableWithoutFeedback, View, ViewComponent} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView"
import {Button, Divider, Icon, Text} from "react-native-elements";
import AppConfig from "../../../branding/App_config";
import Routes from "../../navigation/Routes";
import ShippingAddress from "../../components/Application/ShippingProgress/View"
import Styles from "./Styles";
import AppInput from "../../components/Application/AppInput/View";
import assets from "../../../branding/carter/assets/Assets";
import fonts from "../../../branding/carter/assets/Fonts";
import Typography from "../../../branding/carter/styles/Typography";
import TextInput from "../../components/Global/TextInput/View";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;


export default class CheckoutDelivery extends Component {

    inputRef = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            isPayPalSelected: false,
            isCreditCardSelected: true,
            isApplePaySelected: false,


            saveCard: true
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
                            <KeyboardAwareScrollView
                            keyboardShouldPersistTaps={'never'}
                            // style={{flex: 1}}
                            getTextInputRefs={() => {
                                return [this.inputRef];
                            }}
                            showsVerticalScrollIndicator={false}>
                            <View style={{flex: 1}}>

                                {/*<ScrollView>*/}


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
                                            <Image source={assets.paypal_icon} style={{width: hp(3), height: hp(3), tintColor: isPayPalSelected ? colors.primaryGreenColor : colors.iconColorGrey1}} resizeMode={"contain"} />
                                            <Text style={{fontFamily: fonts.RUBIK_REGULAR, fontSize: Typography.P5, color: isPayPalSelected ? colors.textColorBlack1 : colors.textColorGrey1, marginTop: hp("1")}}>{"Paypal"}</Text>
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
                                            <Image source={assets.credit_card_icon} style={{width: hp(3), height: hp(3), tintColor: isCreditCardSelected ? colors.primaryGreenColor : colors.iconColorGrey1}} resizeMode={"contain"} />
                                            <Text style={{fontFamily: fonts.RUBIK_REGULAR, fontSize: Typography.P5, color: isCreditCardSelected ? colors.textColorBlack1 : colors.textColorGrey1, marginTop: hp("1")}}>{"Credit Card"}</Text>
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
                                            <Image source={assets.apple_pay_icon} style={{width: hp(4), height: hp(3), tintColor: isApplePaySelected ? colors.primaryGreenColor : colors.iconColorGrey1}} resizeMode={"contain"} />
                                            <Text style={{fontFamily: fonts.RUBIK_REGULAR, fontSize: Typography.P5, color: isApplePaySelected ? colors.textColorBlack1 : colors.textColorGrey1, marginTop: hp("1")}}>{"Apple Pay"}</Text>
                                        </View>

                                    </TouchableWithoutFeedback>


                                </View>

                                <Image source={require("../AddCreditCard/assets/credit_card.png")} style={{width: "100%", height: hp("30")}} resizeMode={"contain"} />


                                <AppInput
                                    textInputRef={r => (this.inputRef = r)}
                                    leftIcon={assets.account_icon}
                                    leftIconColor={colors.iconColorGrey1}
                                    placeholder={"CardHolder Name"}
                                    placeholderTextColor={colors.textColorGrey1}
                                    onChangeText={(value) => {}}
                                />

                                <AppInput
                                    textInputRef={r => (this.inputRef = r)}
                                    leftIcon={assets.credit_card_icon}
                                    leftIconColor={colors.iconColorGrey1}
                                    placeholder={"Card Number"}
                                    placeholderTextColor={colors.textColorGrey1}
                                    onChangeText={(value) => {}}
                                />

                                <View style={{flexDirection: "row", justifyContent: "space-between"}}>

                                    <TextInput
                                        textInputRef={r => (this.inputRef = r)}
                                        placeholder={"Expiry"}
                                        placeholderTextColor={colors.textColorGrey1}
                                        leftIcon={
                                            <Image source={assets.calendar_icon}
                                                   resizeMode={"contain"}
                                                   style={{width: hp(2), height: hp (2), tintColor: colors.iconColorGrey1}} />
                                        }
                                        containerStyle={[
                                            {
                                                backgroundColor: "white",
                                                width: wp(44),
                                                marginVertical: hp("0.5"),
                                            },

                                        ]}
                                        leftIconContainerStyle={{
                                            paddingRight: wp('3')
                                        }}
                                        onChangeText={(value) => {

                                        }}
                                    />

                                    <TextInput
                                        textInputRef={r => (this.inputRef = r)}
                                        placeholder={"CVV"}
                                        placeholderTextColor={colors.textColorGrey1}
                                        leftIcon={
                                            <Image source={assets.lock_icon}
                                                   resizeMode={"contain"}
                                                   style={{width: hp(2), height: hp (2), tintColor: colors.iconColorGrey1}} />
                                        }
                                        containerStyle={[
                                            {
                                                backgroundColor: "white",
                                                width: wp(44),
                                                marginVertical: hp("0.5"),
                                            },

                                        ]}
                                        leftIconContainerStyle={{
                                            paddingRight: wp('3')
                                        }}
                                        onChangeText={(value) => {

                                        }}
                                    />



                                </View>

                                <View style={{justifyContent: "flex-start", flexDirection: "row"}}>
                                    <Switch
                                        trackColor={{ false: colors.iconColorGrey1, true: colors.primaryGreenColor }}
                                        style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                                        thumbColor={this.state.saveCard ? colors.primaryGreenColor : colors.iconColorGrey1}
                                        onValueChange={(value) => {
                                            this.setState({
                                                saveCard: value
                                            })
                                        }}
                                        value={this.state.saveCard}
                                    />

                                    <Text style={{alignSelf: "center",fontFamily: fonts.RUBIK_REGULAR,
                                        fontSize: Typography.P4,
                                        color: colors.textColorGrey1}}>{"Save this address"}</Text>
                                </View>

                                {/*</ScrollView>*/}



                            </View>

                        </KeyboardAwareScrollView>
                            <View style={{flex: 1, justifyContent: "flex-end", marginBottom: hp("1")}}>
                                <Button
                                    buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                    title={'Make Payment'}
                                    titleStyle={styles.buttonStyle}
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
