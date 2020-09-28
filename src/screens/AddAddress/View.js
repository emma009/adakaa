import React, {Component} from 'react';
import {Switch, View} from 'react-native';
import {Button, Rating, Text} from 'react-native-elements';
import Routes from "../../navigation/Routes";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View"
import Styles from "./Styles";
import {StackActions} from "@react-navigation/native";
import AppConfig from "../../../branding/App_config";
import assets from "../../../branding/carter/assets/Assets";
import fonts from "../../../branding/carter/assets/Fonts";
import Typography from "../../../branding/carter/styles/Typography";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

export default class AddAddress extends  Component {
    inputRef = React.createRef();


    constructor(props) {
        super(props);


        this.state = {
            isDefault: true
        }
    }


    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Add Address"}
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
                                placeholder={"Zip code"}
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

                                    <View style={{flexDirection: "row"}}>
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

                                        <Text style={{alignSelf: "center",fontFamily: fonts.RUBIK_REGULAR,
                                            fontSize: Typography.P4,
                                            color: colors.textColorGrey1}}>{"Make Default"}</Text>
                                    </View>
                                </View>



                            </KeyboardAwareScrollView>




                            <View style={{flex: 1, justifyContent: "flex-end", marginBottom: hp("1")}}>

                                <Button
                                    buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                    title={'Add Address'}
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
