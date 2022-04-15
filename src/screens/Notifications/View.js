import React, {Component} from 'react';
import {FlatList, Image, ScrollView, Switch, View, ViewComponent} from 'react-native';
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
import FoodItem from "../../components/Application/FoodItem/View";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;


export default class Notifications extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

    renderCreditCardsHeader = section => {

    };



    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Notifications"}
                childView={() => {
                    return (

                        <View style={{flex: 1}}>

                            <ScrollView>

                                <View style={[Styles.foodItemContainer, {marginBottom: hp(1)}]}>

                                    <View style={{width: "80%"}}>

                                        <Text style={Styles.nameTitle}>{"Allow Notifications"}</Text>
                                        <Text style={Styles.addressTitle}>{"Get notifications about what is coming up in the future on Carter"}</Text>

                                    </View>

                                    <View style={{width: "20%"}}>
                                        <Switch
                                            trackColor={{ false: colors.iconColorGrey1, true: colors.primaryGreenColor }}
                                            style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                                            thumbColor={this.state.isDefault ? colors.primaryGreenColor : colors.iconColorGrey1}
                                            onValueChange={(value) => {
                                                this.setState({
                                                    isDefault: value
                                                })
                                            }}
                                            value={this.state.isDefault}
                                        />
                                    </View>

                                </View>

                                <View style={[Styles.foodItemContainer, {
                                    borderBottomWidth: 1,
                                    borderBottomColor: colors.borderColorLight}]}>

                                    <View style={{width: "80%"}}>

                                        <Text style={Styles.nameTitle}>{"Email Notifications"}</Text>
                                        <Text style={Styles.addressTitle}>{"Get notifications via email about our latest deals and seasonal discounts"}</Text>

                                    </View>

                                    <View style={{width: "20%"}}>
                                        <Switch
                                            trackColor={{ false: colors.iconColorGrey1, true: colors.primaryGreenColor }}
                                            style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                                            thumbColor={this.state.isDefault1 ? colors.primaryGreenColor : colors.iconColorGrey1}
                                            onValueChange={(value) => {
                                                this.setState({
                                                    isDefault1: value
                                                })
                                            }}
                                            value={this.state.isDefault1}
                                        />
                                    </View>

                                </View>

                                <View style={[Styles.foodItemContainer, {
                                    borderBottomWidth: 1,
                                    borderBottomColor: colors.borderColorLight}]}>

                                    <View style={{width: "80%"}}>

                                        <Text style={Styles.nameTitle}>{"Order Notifications"}</Text>
                                        <Text style={Styles.addressTitle}>{"Get Timely notifications about your orders and there status on delivery"}</Text>

                                    </View>

                                    <View style={{width: "20%"}}>
                                        <Switch
                                            trackColor={{ false: colors.iconColorGrey1, true: colors.primaryGreenColor }}
                                            style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                                            thumbColor={this.state.isDefault2 ? colors.primaryGreenColor : colors.iconColorGrey1}
                                            onValueChange={(value) => {
                                                this.setState({
                                                    isDefault2: value
                                                })
                                            }}
                                            value={this.state.isDefault2}
                                        />
                                    </View>

                                </View>

                                <View style={[Styles.foodItemContainer]}>

                                    <View style={{width: "80%"}}>

                                        <Text style={Styles.nameTitle}>{"General Notifications"}</Text>
                                        <Text style={Styles.addressTitle}>{"Get notifications as soon as you perform something on the app i.e: add a product to favourites"}</Text>

                                    </View>


                                    <View style={{width: "20%"}}>
                                        <Switch
                                            trackColor={{ false: colors.iconColorGrey1, true: colors.primaryGreenColor }}
                                            style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                                            thumbColor={this.state.isDefault3 ? colors.primaryGreenColor : colors.iconColorGrey1}
                                            onValueChange={(value) => {
                                                this.setState({
                                                    isDefault3: value
                                                })
                                            }}
                                            value={this.state.isDefault3}
                                        />
                                    </View>
                                </View>

                            </ScrollView>

                            <View style={{flex: 1, justifyContent: "flex-end", marginBottom: hp("1")}}>

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
