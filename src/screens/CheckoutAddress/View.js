import React, {Component} from 'react';
import {FlatList, ScrollView, Switch, View, ViewComponent} from 'react-native';
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
            saveAddress: true
        }

    }

    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Shipping Address"}
                childView={() => {
                    return (

                        <View style={{flex: 1}}>

                            <ShippingAddress
                                markSecondComplete
                            />

                            <KeyboardAwareScrollView
                                keyboardShouldPersistTaps={'never'}
                                style={{flex: 1}}
                                getTextInputRefs={() => {
                                    return [this.inputRef];
                                }}
                                showsVerticalScrollIndicator={false}>
                            <View>

                                <AppInput
                                    textInputRef={r => (this.inputRef = r)}
                                    leftIcon={assets.account_icon}
                                    leftIconColor={colors.iconColorGrey1}
                                    placeholder={"Name"}
                                    placeholderTextColor={colors.textColorGrey1}
                                    onChangeText={(value) => {}}
                                />

                                <AppInput
                                    textInputRef={r => (this.inputRef = r)}
                                    leftIcon={assets.envelop_icon}
                                    leftIconColor={colors.iconColorGrey1}
                                    placeholder={"Email Address"}
                                    placeholderTextColor={colors.textColorGrey1}
                                    onChangeText={(value) => {}}
                                />


                                <AppInput
                                    textInputRef={r => (this.inputRef = r)}
                                    leftIcon={assets.phone_icon}
                                    leftIconColor={colors.iconColorGrey1}
                                    placeholder={"Phone"}
                                    placeholderTextColor={colors.textColorGrey1}
                                    onChangeText={(value) => {}}
                                />


                                <AppInput
                                    textInputRef={r => (this.inputRef = r)}
                                    leftIcon={assets.map_marker_icon}
                                    leftIconColor={colors.iconColorGrey1}
                                    placeholder={"Address"}
                                    placeholderTextColor={colors.textColorGrey1}
                                    onChangeText={(value) => {}}
                                />

                                <AppInput
                                    textInputRef={r => (this.inputRef = r)}
                                    leftIcon={assets.mailbox_icon}
                                    leftIconColor={colors.iconColorGrey1}
                                    placeholder={"Zip Code"}
                                    placeholderTextColor={colors.textColorGrey1}
                                    onChangeText={(value) => {}}
                                />


                                <AppInput
                                    textInputRef={r => (this.inputRef = r)}
                                    leftIcon={assets.map_icon}
                                    leftIconColor={colors.iconColorGrey1}
                                    placeholder={"City"}
                                    placeholderTextColor={colors.textColorGrey1}
                                    onChangeText={(value) => {}}
                                />

                                <AppInput
                                    textInputRef={r => (this.inputRef = r)}
                                    leftIcon={assets.globe_icon}
                                    leftIconColor={colors.iconColorGrey1}
                                    placeholder={"Country"}
                                    placeholderTextColor={colors.textColorGrey1}
                                    onChangeText={(value) => {}}
                                />



                                <View style={{justifyContent: "flex-start", flexDirection: "row"}}>
                                    <Switch
                                        trackColor={{ false: colors.iconColorGrey1, true: colors.primaryGreenColor }}
                                        style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                                        thumbColor={this.state.saveAddress ? colors.primaryGreenColor : colors.iconColorGrey1}
                                        onValueChange={(value) => {
                                            this.setState({
                                                saveAddress: value
                                            })
                                        }}
                                        value={this.state.saveAddress}
                                    />

                                    <Text style={{alignSelf: "center",fontFamily: fonts.RUBIK_REGULAR,
                                        fontSize: Typography.P4,
                                        color: colors.textColorGrey1}}>{"Save this address"}</Text>
                                </View>




                            </View>
                            </KeyboardAwareScrollView>


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
