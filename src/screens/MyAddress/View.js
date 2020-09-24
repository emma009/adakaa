import React, {Component} from 'react';
import {FlatList, Image, ScrollView, View, ViewComponent} from 'react-native';
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

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;


const addresses = [
    {
        name: 'William Crown',
        address: "2811 Crescent Day, LA Port California, United States, 77511",
        phone: "+1 122 541 1234",

        city: "California",
        state: "United States",
        postalCode: "77547",

    },
    {
        name: 'John Doe',
        address: "2811 Crescent Day, LA Port California, United States, 77511",
        phone: "+1 122 541 1234",

        city: "California",
        state: "United States",
        postalCode: "77547",

    },
    {
        name: 'William Crown',
        address: "2811 Crescent Day, LA Port California, United States, 77511",
        phone: "+1 122 541 1234",

        city: "California",
        state: "United States",
        postalCode: "77547",

    },
    {
        name: 'John Doe',
        address: "2811 Crescent Day, LA Port California, United States, 77511",
        phone: "+1 122 541 1234",

        city: "California",
        state: "United States",
        postalCode: "77547",

    },
    {
        name: 'William Crown',
        address: "2811 Crescent Day, LA Port California, United States, 77511",
        phone: "+1 122 541 1234",

        city: "California",
        state: "United States",
        postalCode: "77547",

    },
    {
        name: 'John Doe',
        address: "2811 Crescent Day, LA Port California, United States, 77511",
        phone: "+1 122 541 1234",

        city: "California",
        state: "United States",
        postalCode: "77547",

    }
];

export default class MyAddress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSections: [],
        };

    }

    renderAdressesHeader = section => {
        return (
            <View style={Styles.foodItemContainer}>

                <View style={Styles.profileItemCircle}>
                    <Image source={assets.map_marker_icon} style={{width: hp(3.5), height: hp(3.5), tintColor: colors.primaryGreenColor}} resizeMode={"contain"} />

                </View>

                <View style={{marginLeft: wp("3")}}>
                    <Text style={Styles.nameTitle}>{section.name}</Text>
                    <Text style={Styles.addressTitle} numberOfLines={2}>{section.address}</Text>
                    <Text style={Styles.phoneTitle}>{section.phone}</Text>

                </View>

            </View>
        );
    };

    renderAddressesContent = section => {
        return (
            <View style={{flexDirection: "row", paddingHorizontal: wp ('3'), paddingVertical: hp("2"), backgroundColor: "white"}}>

                <View style={{flex: 1, alignItems: "center"}}>

                    <AppInput
                        backgroundColor={colors.textColorGrey2}
                        placeholderTextColor={colors.textColorGrey1}
                        leftIcon={assets.account_icon}
                        leftIconColor={colors.iconColorGrey1}
                        placeholder={"Name"}
                        onChangeText={(value) => {}}
                    />

                    <AppInput
                        backgroundColor={colors.textColorGrey2}
                        placeholderTextColor={colors.textColorGrey1}
                        leftIcon={assets.map_marker_icon}
                        leftIconColor={colors.iconColorGrey1}
                        placeholder={"Address"}
                        onChangeText={(value) => {}}
                    />

                    <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between"}}>

                        <TextInput
                            placeholder={"City"}
                            placeholderTextColor={colors.textColorGrey1}
                            leftIcon={
                                <Image source={assets.map_marker_icon}
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
                            placeholder={"Zip Code"}
                            placeholderTextColor={colors.textColorGrey1}
                            leftIcon={
                                <Image source={assets.mailbox_icon}
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


                    <AppInput
                        backgroundColor={colors.textColorGrey2}
                        placeholderTextColor={colors.textColorGrey1}
                        leftIcon={assets.globe_icon}
                        leftIconColor={colors.iconColorGrey1}
                        placeholder={"Country"}
                        onChangeText={(value) => {}}
                    />

                    <AppInput
                        backgroundColor={colors.textColorGrey2}
                        placeholderTextColor={colors.textColorGrey1}
                        leftIcon={assets.phone_icon}
                        leftIconColor={colors.iconColorGrey1}
                        placeholder={"Phone"}
                        onChangeText={(value) => {}}
                    />



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
                title={"My Address"}
                rightIcon={assets.plus_circle_icon}
                onRightIconPress={() => {
                    this.props.navigation.navigate(Routes.Add_Address)
                }}
                childView={() => {
                    return (


                        <View style={{flex: 1}}>
                            <ScrollView style={{flex: 0.9}}>

                                <Accordion
                                    sections={addresses}
                                    activeSections={this.state.activeSections}
                                    renderHeader={this.renderAdressesHeader}
                                    renderContent={this.renderAddressesContent}
                                    sectionContainerStyle={{marginBottom: hp("1")}}
                                    onChange={this._updateSections}
                                />


                            </ScrollView>

                            <View style={{flex: 0.1, justifyContent: "flex-end", marginBottom: hp("1")}}>

                            <Button
                                buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                title={'Save Settings'}
                                titleStyle={styles.buttonFontStyle}
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
