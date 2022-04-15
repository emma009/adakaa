import React, {Component} from 'react';
import {
    Animated,
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




export default class CheckoutSelectCard extends Component {

    inputRef = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            isPayPalSelected: false,
            isCreditCardSelected: true,
            isApplePaySelected: false,


            saveCard: true,

            cards : [
                {
                    isDefault: true,
                    type: 'Master Card',
                    cardNo: "XXXX XXXX XXXX 3694",
                    expiry: "01/25",
                    CVV: "512",

                    isActive: true,
                },
                {
                    isDefault: false,
                    type: 'Visa Card',
                    cardNo: "XXXX XXXX XXXX 3694",
                    expiry: "01/25",
                    CVV: "512",
                    isActive: false,
                },
                {
                    isDefault: false,
                    type: 'Master Card',
                    cardNo: "XXXX XXXX XXXX 3694",
                    expiry: "01/25",
                    CVV: "512",

                    isActive: false,
                },
                {
                    isDefault: false,
                    type: 'Visa Card',
                    cardNo: "XXXX XXXX XXXX 3694",
                    expiry: "01/25",
                    CVV: "512",

                    isActive: false,
                },
                {
                    isDefault: false,
                    type: 'Master Card',
                    cardNo: "XXXX XXXX XXXX 3694",
                    expiry: "01/25",
                    CVV: "512",

                    isActive: false,
                },
                {
                    isDefault: false,
                    type: 'Visa Card',
                    cardNo: "XXXX XXXX XXXX 3694",
                    expiry: "01/25",
                    CVV: "512",

                    isActive: false,
                }
            ]
        }
    }

    render(){

        let {
        } = this.state;


        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Select a Card"}
                childView={() => {
                    return (

                        <View style={{flex: 1}}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.cards}
                                renderItem={({ item, index }) => {


                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                let cards = [...this.state.cards];

                                                cards.map((card, cardIndex) => {
                                                    if (cardIndex === index) {

                                                        card.isActive = true;
                                                    }
                                                    else {
                                                        card.isActive = false;
                                                    }
                                                })

                                                this.setState({cards});

                                            }}
                                            style={[Styles.foodItemContainer, item.isActive && {borderWidth: 1, borderColor: colors.primaryGreenColor}]}>

                                            {item.isDefault && <View style={{position: "absolute", backgroundColor: colors.secondaryGreenColor, width: "18%", height: hp(2.5),
                                                justifyContent: "center", alignItems: "center", borderTopRightRadius: hp(0.5), borderBottomRightRadius: hp(0.5)
                                            }}>
                                                <Text style={{
                                                    color: colors.primaryGreenColor,
                                                    fontFamily: fonts.RUBIK_MEDIUM,
                                                    fontSize: Typography.P8

                                                }}>{"DEFAULT"}</Text>
                                            </View>}

                                            <View style={{
                                                flex: 1,
                                                flexDirection: "row",
                                                alignItems: "center",
                                            }}>
                                                <View style={Styles.profileItemCircle}>
                                                    <Image source={item.type === "Master Card" ? assets.master_card_icon : assets.visa_icon} style={{width: hp(3), height: hp(3)}} resizeMode={"contain"} />
                                                </View>

                                                <View style={{marginLeft: wp("3")}}>
                                                    <Text style={Styles.nameTitle}>{item.type}</Text>
                                                    <Text style={Styles.addressTitle}>{item.cardNo}</Text>

                                                    <View style={{flexDirection: "row", alignItems: "center"}}>
                                                        <Text style={{
                                                            fontSize: Typography.P7,
                                                            fontFamily: fonts.RUBIK_REGULAR,
                                                            color: colors.textColorGrey1
                                                        }}>{"Expiry: "}</Text>
                                                        <Text style={{
                                                            fontSize: Typography.P7,
                                                            fontFamily: fonts.RUBIK_REGULAR,
                                                            color: colors.textColorGrey1,
                                                            marginRight: wp(2)
                                                        }}>{item.expiry}</Text>
                                                        <Text style={{
                                                            fontSize: Typography.P7,
                                                            fontFamily: fonts.RUBIK_REGULAR,
                                                            color: colors.textColorGrey1
                                                        }}>{"CVV: "}</Text>
                                                        <Text style={{
                                                            fontSize: Typography.P7,
                                                            fontFamily: fonts.RUBIK_REGULAR,
                                                            color: colors.textColorGrey1
                                                        }}>{item.CVV}</Text>
                                                    </View>


                                                </View>
                                            </View>

                                            {
                                                item.isActive &&
                                                <View style={{flex: 1, justifyContent: "center", alignItems: "flex-end", paddingRight: wp("5"),}}>
                                                    <Image source={assets.check_circle_icon} style={{width: hp(2.5), height: hp(2.5), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />
                                                </View>
                                            }


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
                                        this.props.navigation.navigate(Routes.CART_SUMMARY)
                                    }}/>

                            </View>
                        </View>




                    );
                }}
            />

        );
    }
}
