import React, {Component} from 'react';
import {Animated, FlatList, Image, ScrollView, Switch, TouchableOpacity, View, ViewComponent} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView"
import {Button, Divider, Text} from "react-native-elements";
import AppConfig from "../../../branding/App_config";
import Routes from "../../navigation/Routes";
import ShippingAddress from "../../components/Application/ShippingProgress/View"
import Styles from "./Styles";
import AppInput from "../../components/Application/AppInput/View";
import assets from "../../../branding/carter/assets/Assets";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import fonts from "../../../branding/carter/assets/Fonts";
import Typography from "../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;




export default class CheckoutDelivery extends Component {

    inputRef = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            saveAddress: true,

            addresses: [
                {
                    isDefault: true,
                    name: 'William Crown',
                    address: "2811 Crescent Day, LA Port California, United States, 77511",
                    phone: "+1 122 541 1234",

                    city: "California",
                    state: "United States",
                    postalCode: "77547",

                    isActive: true,

                    spinValue: new Animated.Value(0)
                },
                {
                    isDefault: false,
                    name: 'John Doe',
                    address: "2811 Crescent Day, LA Port California, United States, 77511",
                    phone: "+1 122 541 1234",

                    city: "California",
                    state: "United States",
                    postalCode: "77547",

                    isActive: false,

                    spinValue: new Animated.Value(0)

                },
                {
                    isDefault: false,
                    name: 'William Crown',
                    address: "2811 Crescent Day, LA Port California, United States, 77511",
                    phone: "+1 122 541 1234",

                    city: "California",
                    state: "United States",
                    postalCode: "77547",

                    isActive: false,

                    spinValue: new Animated.Value(0)

                },
                {
                    isDefault: false,
                    name: 'John Doe',
                    address: "2811 Crescent Day, LA Port California, United States, 77511",
                    phone: "+1 122 541 1234",

                    isActive: false,

                    city: "California",
                    state: "United States",
                    postalCode: "77547",

                    spinValue: new Animated.Value(0)
                },
                {
                    isDefault: false,
                    name: 'William Crown',
                    address: "2811 Crescent Day, LA Port California, United States, 77511",
                    phone: "+1 122 541 1234",

                    isActive: false,

                    city: "California",
                    state: "United States",
                    postalCode: "77547",

                    spinValue: new Animated.Value(0)
                },
                {
                    isDefault: false,
                    name: 'John Doe',
                    address: "2811 Crescent Day, LA Port California, United States, 77511",
                    phone: "+1 122 541 1234",

                    isActive: false,

                    city: "California",
                    state: "United States",
                    postalCode: "77547",

                    spinValue: new Animated.Value(0)
                }
            ]
        }

    }

    renderAddressItem = (item, index) => {
        return (
            <TouchableOpacity
                onPress={() => {

                    let addresses = [...this.state.addresses];

                    addresses.map((address, addressIndex) => {
                        if (addressIndex === index) {
                            address.isActive = true;
                        }
                        else {
                            address.isActive = false;
                        }
                    })

                    this.setState({addresses});

                }}
                style={[{height: hp("15"), backgroundColor: "white", flexDirection: "row", marginBottom: hp(1)}, item.isActive && {borderWidth: 1, borderColor: colors.primaryGreenColor}]}>

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
                    <View style={{width: hp("8"),
                        height: hp("8"),
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: hp("4"),
                        marginLeft: wp("5"),
                        backgroundColor: colors.secondaryGreenColor}}>
                        <Image source={assets.map_marker_icon} style={{width: hp(3.5), height: hp(3.5), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />

                    </View>

                    <View style={{marginLeft: wp("3")}}>
                        <Text style={{fontSize: Typography.P3,
                            fontFamily: fonts.RUBIK_MEDIUM,
                            color: colors.textColorBlack1}}>{item.name}</Text>
                        <Text style={{
                            fontSize: Typography.P6,
                            fontFamily: fonts.RUBIK_REGULAR,
                            marginVertical: hp("0.5"),
                            lineHeight: hp(2.5),
                            width: "50%",
                            color: colors.textColorGrey1
                        }} numberOfLines={2}>{item.address}</Text>
                        <Text style={{
                            fontSize: Typography.P5,
                            fontFamily: fonts.RUBIK_MEDIUM,
                            marginRight: wp("5"),
                            color: colors.textColorBlack1
                        }}>{item.phone}</Text>

                    </View>



                </View>

                {
                    item.isActive &&
                    <View style={{flex: 1, justifyContent: "center", alignItems: "flex-end", paddingRight: wp("5")}}>
                        <Image source={assets.check_circle_icon} style={{width: hp(2.5), height: hp(2.5), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />
                    </View>
                }


            </TouchableOpacity>
        );
    }

    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Select Address"}
                childView={() => {
                    return (

                        <View style={{flex: 1}}>

                            {/*<ShippingAddress*/}
                            {/*    markSecondComplete*/}
                            {/*/>*/}

                            <FlatList
                                showsVerticalScrollIndicator={false}
                                style={{flex: 1}}
                                data={this.state.addresses}
                                renderItem={({ item, index }) => {
                                    return this.renderAddressItem(item, index)
                                }} />

                            <View style={{justifyContent: "flex-end", marginBottom: hp("1")}}>

                                <Button
                                    buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                    title={'Next'}
                                    titleStyle={styles.buttonStyle}
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
