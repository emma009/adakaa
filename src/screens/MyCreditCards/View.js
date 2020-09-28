import React, {Component} from 'react';
import {Animated, FlatList, Image, ScrollView, Switch, View, ViewComponent} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Accordion from 'react-native-collapsible/Accordion';
import BaseView from "../BaseView"
import {Button, Divider, Icon, Text} from "react-native-elements";
import AppConfig from "../../../branding/App_config";
import Routes from "../../navigation/Routes";
import ShippingAddress from "../../components/Application/ShippingProgress/View"
import Styles from "./Styles";
import AppInput from "../../components/Application/AppInput/View";
import Counter from "../../components/Global/Counter/View";
import Swipeable from "react-native-gesture-handler/Swipeable";
import fonts from "../../../branding/carter/assets/Fonts";
import Typography from "../../../branding/carter/styles/Typography";
import assets from "../../../branding/carter/assets/Assets";
import TextInput from "../../components/Global/TextInput/View";
import Easing from "react-native/Libraries/Animated/src/Easing";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;


const creditCards = [
    {
        isDefault: true,
        type: 'Master Card',
        cardNo: "XXXX XXXX XXXX 3694",
        expiry: "01/25",
        CVV: "512",


        spinValue: new Animated.Value(0)
    },
    {
        isDefault: false,
        type: 'Visa Card',
        cardNo: "XXXX XXXX XXXX 3694",
        expiry: "01/25",
        CVV: "512",


        spinValue: new Animated.Value(0)
    },
    {
        isDefault: false,
        type: 'Master Card',
        cardNo: "XXXX XXXX XXXX 3694",
        expiry: "01/25",
        CVV: "512",


        spinValue: new Animated.Value(0)
    },
    {
        isDefault: false,
        type: 'Visa Card',
        cardNo: "XXXX XXXX XXXX 3694",
        expiry: "01/25",
        CVV: "512",


        spinValue: new Animated.Value(0)
    },
    {
        isDefault: false,
        type: 'Master Card',
        cardNo: "XXXX XXXX XXXX 3694",
        expiry: "01/25",
        CVV: "512",

        spinValue: new Animated.Value(0)
    },
    {
        isDefault: false,
        type: 'Visa Card',
        cardNo: "XXXX XXXX XXXX 3694",
        expiry: "01/25",
        CVV: "512",

        spinValue: new Animated.Value(0)
    }
];

export default class MyCreditCards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSections: [0],
        };

    }

    renderCreditCardsHeader = (section, index, isActive) => {


        const spin = section.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg']
        });

        if (isActive) {
            Animated.timing(
                section.spinValue,
                {
                    toValue: 1,
                    duration: 300,
                    easing: Easing.linear,
                    useNativeDriver: true  // To make use of native driver for performance
                }
            ).start()
        }
        else {
            Animated.timing(
                section.spinValue,
                {
                    toValue: 0,
                    duration: 300,
                    easing: Easing.linear,
                    useNativeDriver: true  // To make use of native driver for performance
                }
            ).start()
        }


        return (
            <View style={Styles.foodItemContainer}>

                {section.isDefault && <View style={{position: "absolute", backgroundColor: colors.secondaryGreenColor, width: "18%", height: hp(2.5),
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
                        <Image source={section.type === "Master Card" ? assets.master_card_icon : assets.visa_icon} style={{width: hp(3), height: hp(3)}} resizeMode={"contain"} />
                    </View>

                    <View style={{marginLeft: wp("3")}}>
                        <Text style={Styles.nameTitle}>{section.type}</Text>
                        <Text style={Styles.addressTitle}>{section.cardNo}</Text>

                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={{
                                fontSize: Typography.P5,
                                fontFamily: fonts.RUBIK_LIGHT,
                                color: colors.textColorGrey1
                            }}>{"Expiry: "}</Text>
                            <Text style={{
                                fontSize: Typography.P4,
                                fontFamily: fonts.RUBIK_REGULAR,
                                color: colors.textColorBlack1,
                                marginRight: wp(2)
                            }}>{section.expiry}</Text>
                            <Text style={{
                                fontSize: Typography.P5,
                                fontFamily: fonts.RUBIK_LIGHT,
                                color: colors.textColorGrey1
                            }}>{"CVV: "}</Text>
                            <Text style={{
                                fontSize: Typography.P4,
                                fontFamily: fonts.RUBIK_REGULAR,
                                color: colors.textColorBlack1
                            }}>{section.CVV}</Text>
                        </View>


                    </View>
                </View>

                <View style={{flex: 1, justifyContent: "center", alignItems: "flex-end", paddingRight: wp("5"),}}>
                    <Animated.Image source={assets.drop_down_icon} style={{transform: [{rotate: spin}], width: hp(3), height: hp(3), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />
                </View>

            </View>
        );
    };

    renderCreditCardsContent = section => {
        return (
            <View style={{flexDirection: "row", paddingHorizontal: wp ('3'), paddingVertical: hp("2"), backgroundColor: "white"}}>

                <View style={{flex: 1, alignItems: "center"}}>

                    <AppInput
                        backgroundColor={colors.textColorGrey2}
                        placeholderTextColor={colors.textColorGrey1}
                        leftIcon={assets.account_icon}
                        leftIconColor={colors.iconColorGrey1}
                        placeholder={"Cardholder Name"}
                        onChangeText={(value) => {}}
                    />

                    <AppInput
                        backgroundColor={colors.textColorGrey2}
                        placeholderTextColor={colors.textColorGrey1}
                        leftIcon={assets.credit_card_icon}
                        leftIconColor={colors.iconColorGrey1}
                        placeholder={"Card Number"}
                        onChangeText={(value) => {}}
                    />

                    <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between"}}>

                        <TextInput
                            placeholder={"Expiry"}
                            placeholderTextColor={colors.textColorGrey1}
                            leftIcon={
                                <Image source={assets.calendar_icon}
                                       resizeMode={"contain"}
                                       style={{width: hp(2), height: hp (2), tintColor: colors.iconColorGrey1}} />
                            }
                            containerStyle={[
                                {
                                    backgroundColor: colors.textColorGrey2,
                                    width: "49%",
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
                            placeholder={"CVV"}
                            placeholderTextColor={colors.textColorGrey1}
                            leftIcon={
                                <Image source={assets.lock_icon}
                                       resizeMode={"contain"}
                                       style={{width: hp(2), height: hp (2), tintColor: colors.iconColorGrey1}} />
                            }
                            containerStyle={[
                                {
                                    backgroundColor: colors.textColorGrey2,
                                    width: "49%",
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
                    <View style={{flexDirection: "row", alignSelf: "flex-start"}}>
                        <Switch
                            trackColor={{ false: colors.iconColorGrey1, true: colors.primaryGreenColor }}
                            style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                            thumbColor={section.isDefault ? colors.primaryGreenColor : colors.iconColorGrey1}
                            onValueChange={(value) => {
                                this.setState({
                                    isDefault: value
                                })
                            }}
                            value={section.isDefault}
                        />

                        <Text style={{alignSelf: "center",fontFamily: fonts.RUBIK_REGULAR,
                            fontSize: Typography.P4,
                            color: colors.textColorGrey1}}>{"Make Default"}</Text>
                    </View>


                </View>

            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Credit Cards"}
                rightIcon={assets.plus_circle_icon}
                onRightIconPress={() => {
                    this.props.navigation.navigate(Routes.ADD_CREDIT_CARD)
                }}
                childView={() => {
                    return (

                        <View style={{flex: 1}}>

                            <ScrollView style={{flex: 0.9}}>

                                <Accordion
                                    sections={creditCards}
                                    activeSections={this.state.activeSections}
                                    renderHeader={this.renderCreditCardsHeader}
                                    renderContent={this.renderCreditCardsContent}
                                    expandMultiple={false}
                                    sectionContainerStyle={{marginBottom: hp("1")}}
                                    onChange={this._updateSections}
                                />


                            </ScrollView>

                            <View style={{flex: 0.1, justifyContent: "flex-end", marginBottom: hp("1")}}>

                            <Button
                                    buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                    title={'Save Settings'}
                                    titleStyle={styles.buttonStyle}
                                    onPress={() => {

                                    }}/>

                            </View>

                        </View>




                    );
                }}
            />

        );
    }
}
