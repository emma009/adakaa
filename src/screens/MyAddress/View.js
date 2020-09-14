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
                    <Icon
                        name="google"
                        type='font-awesome'
                        size={hp("3")}
                        color={colors.buttonGreenColor}
                    />
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
                        leftIcon={'google'}
                        placeholder={section.name}
                        backgroundColor={"grey"}
                        placeholderTextColor={"white"}
                        onChangeText={(value) => {}}
                    />

                    <AppInput
                        leftIcon={'google'}
                        placeholder={section.address}
                        backgroundColor={"grey"}
                        placeholderTextColor={"white"}
                        onChangeText={(value) => {}}
                    />

                    <AppInput
                        leftIcon={'google'}
                        placeholder={section.city}
                        backgroundColor={"grey"}
                        placeholderTextColor={"white"}
                        onChangeText={(value) => {}}
                    />

                    <AppInput
                        leftIcon={'google'}
                        placeholder={section.postalCode}
                        backgroundColor={"grey"}
                        placeholderTextColor={"white"}
                        onChangeText={(value) => {}}
                    />


                    <AppInput
                        leftIcon={'google'}
                        placeholder={section.state}
                        backgroundColor={"grey"}
                        placeholderTextColor={"white"}
                        onChangeText={(value) => {}}
                    />

                    <AppInput
                        leftIcon={'google'}
                        placeholder={section.phone}
                        backgroundColor={"grey"}
                        placeholderTextColor={"white"}
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
                rightIcon={"google"}
                onRightIconPress={() => {
                    this.props.navigation.navigate(Routes.Add_Address)
                }}
                childView={() => {
                    return (


                        <View style={{flex: 1}}>
                            <ScrollView>

                                <Accordion
                                    sections={addresses}
                                    activeSections={this.state.activeSections}
                                    renderHeader={this.renderAdressesHeader}
                                    renderContent={this.renderAddressesContent}
                                    sectionContainerStyle={{marginBottom: hp("1")}}
                                    onChange={this._updateSections}
                                />


                            </ScrollView>

                            <Button
                                buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                title={'Save Settings'}
                                titleStyle={styles.buttonFontStyle}
                                onPress={() => {

                                }}/>
                        </View>



                    );
                }}
            />

        );
    }
}
