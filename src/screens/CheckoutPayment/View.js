import React, {Component} from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    Switch,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    ViewComponent
} from 'react-native';
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

            selectedType: "credit card",

            payment_methods : [
                {
                    isActive: true,
                    type: 'Credit Card',
                },
                {
                    isActive: false,
                    type: 'Paypal',
                },
                {
                    isActive: false,
                    type: 'Apple Pay',
                },
                {
                    isActive: false,
                    type: 'Cash on Delivery',
                },
                {
                    isActive: false,
                    type: 'Self Pickup',
                },
            ]
        }
    }

    render(){

        let {
        } = this.state;


        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Payment Method"}
                childView={() => {
                    return (

                        <View style={{flex: 1}}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.payment_methods}
                                renderItem={({ item, index }) => {

                                    let itemIcon = assets.credit_card_icon;

                                    if (item.type.toLowerCase() === "credit card") {
                                        itemIcon = assets.credit_card_icon;
                                    }
                                    else if (item.type.toLowerCase() === "paypal") {
                                        itemIcon = assets.paypal_icon;
                                    }
                                    else if (item.type.toLowerCase() === "apple pay") {
                                        itemIcon = assets.apple_icon;
                                    }
                                    else if (item.type.toLowerCase() === "cash on delivery") {
                                        itemIcon = assets.transaction_icon;
                                    }
                                    else {
                                        itemIcon = assets.cart_regular_icon;
                                    }

                                    return (
                                        <TouchableOpacity
                                            onPress={() => {

                                                let payment_methods = [...this.state.payment_methods];

                                                payment_methods.map((paymentMethod, paymentMethodIndex) => {
                                                    if (paymentMethodIndex === index) {
                                                        this.setState({
                                                            selectedType: paymentMethod.type
                                                        })
                                                        paymentMethod.isActive = true;
                                                    }
                                                    else {
                                                        paymentMethod.isActive = false;
                                                    }
                                                })

                                                this.setState({payment_methods});

                                            }}
                                            style={[Styles.foodItemContainer, item.isActive && {borderWidth: 1, borderColor: colors.primaryGreenColor}]}>


                                            <View style={{flex: 1,flexDirection: "row",
                                                alignItems: "center",}}>

                                                    <Image source={itemIcon} style={{width: hp(3), height: hp(3), tintColor: item.isActive ? colors.primaryGreenColor : colors.iconColorGrey1}} resizeMode={"contain"} />



                                                <View style={{marginHorizontal: wp("3"), flexDirection: "row", flex: 1}}>
                                                    <View>
                                                        <Text style={Styles.nameTitle}>{item.type}</Text>
                                                    </View>


                                                    {
                                                        item.isActive &&
                                                        <View style={{flex: 1, justifyContent: "center", alignItems: "flex-end", paddingRight: wp("5")}}>
                                                            <Image source={assets.check_circle_icon} style={{width: hp(2.5), height: hp(2.5), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />
                                                        </View>
                                                    }

                                                </View>
                                            </View>



                                        </TouchableOpacity>
                                    );
                                }}
                            />

                            <View style={{justifyContent: "flex-end", marginBottom: hp("1")}}>

                                <Button
                                    buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                    title={'Next'}
                                    titleStyle={styles.buttonStyle}
                                    onPress={() => {

                                        const {selectedType} = this.state;

                                        if (selectedType.toLowerCase() === "credit card" || selectedType.toLowerCase() === "apple pay") {
                                            this.props.navigation.navigate(Routes.CHECKOUT_SELECT_CARD)
                                        }
                                        else if (selectedType.toLowerCase() === "paypal") {
                                            this.props.navigation.navigate(Routes.CHECKOUT_SELECT_ACCOUNT)
                                        }
                                        else if (selectedType.toLowerCase() === "self pickup") {
                                            this.props.navigation.navigate(Routes.SELF_PICKUP)
                                        }
                                        else {
                                            this.props.navigation.navigate(Routes.CART_SUMMARY)
                                        }

                                    }}/>

                            </View>
                        </View>




                    );
                }}
            />

        );
    }
}
