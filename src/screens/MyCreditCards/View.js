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


const creditCards = [
    {
        type: 'Master Card',
        cardNo: "XXXX XXXX XXXX 3694",
        expiry: "01/25",
        CVV: "512",


    },
    {
        type: 'Visa Card',
        cardNo: "XXXX XXXX XXXX 3694",
        expiry: "01/25",
        CVV: "512",


    },
    {
        type: 'Master Card',
        cardNo: "XXXX XXXX XXXX 3694",
        expiry: "01/25",
        CVV: "512",


    },
    {
        type: 'Visa Card',
        cardNo: "XXXX XXXX XXXX 3694",
        expiry: "01/25",
        CVV: "512",


    },
    {
        type: 'Master Card',
        cardNo: "XXXX XXXX XXXX 3694",
        expiry: "01/25",
        CVV: "512",


    },
    {
        type: 'Visa Card',
        cardNo: "XXXX XXXX XXXX 3694",
        expiry: "01/25",
        CVV: "512",

    }
];

export default class MyCreditCards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSections: [],
        };

    }

    renderCreditCardsHeader = section => {
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
                    <Text style={Styles.nameTitle}>{section.type}</Text>
                    <Text style={Styles.addressTitle}>{section.cardNo}</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={Styles.itemLabel}>{"Expiry: "}</Text>
                        <Text style={Styles.itemValue}>{section.expiry}</Text>
                        <Text style={Styles.itemLabel}>{"CVV: "}</Text>
                        <Text style={Styles.itemValue}>{section.CVV}</Text>
                    </View>

                </View>

            </View>
        );
    };

    renderCreditCardsContent = section => {
        return (
            <View style={{flexDirection: "row", paddingHorizontal: wp ('3'), paddingVertical: hp("2"), backgroundColor: "white"}}>

                <View style={{flex: 1, alignItems: "center"}}>

                    <AppInput
                        leftIcon={'google'}
                        placeholder={section.cardNo}
                        backgroundColor={"grey"}
                        placeholderTextColor={"white"}
                        onChangeText={(value) => {}}
                    />

                    <AppInput
                        leftIcon={'google'}
                        placeholder={section.expiry}
                        backgroundColor={"grey"}
                        placeholderTextColor={"white"}
                        onChangeText={(value) => {}}
                    />

                    <AppInput
                        leftIcon={'google'}
                        placeholder={section.CVV}
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
                rightIcon={"google"}
                onRightIconPress={() => {
                    this.props.navigation.navigate(Routes.ADD_CREDIT_CARD)
                }}
                childView={() => {
                    return (

                        <View style={{flex: 1}}>

                            <ScrollView>

                                <Accordion
                                    sections={creditCards}
                                    activeSections={this.state.activeSections}
                                    renderHeader={this.renderCreditCardsHeader}
                                    renderContent={this.renderCreditCardsContent}
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
