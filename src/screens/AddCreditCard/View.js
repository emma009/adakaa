import React from 'react';
import {Image, View} from 'react-native';
import {Text} from 'react-native-elements';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View"
import assets from "../../../branding/carter/assets/Assets";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import {CustomSwitch} from "../../components/Global/CustomSwitch/View";
import screenStyles from "./Styles"
import AppButton from "../../components/Application/AppButton/View";

export const AddCreditCard = (props) => {

    let inputRef = React.createRef();

    return (

        <BaseView
            navigation={props.navigation}
            title={"Add Credit Card"}
            childView={() => {

                return (

                    <View style={screenStyles.mainContainer}>

                        <KeyboardAwareScrollView
                            keyboardShouldPersistTaps={'never'}
                            getTextInputRefs={() => {
                                return [inputRef];
                            }}
                            showsVerticalScrollIndicator={false}>

                            <View style={screenStyles.mainContainer}>

                                <Image
                                    source={require("./assets/credit_card.png")}
                                    style={screenStyles.creditCardImageStyle}
                                    resizeMode={"contain"}
                                />


                                <AppInput
                                    textInputRef={r => (inputRef = r)}
                                    leftIcon={assets.account_icon}
                                    placeholder={"CardHolder Name"}
                                    onChangeText={(value) => {
                                    }}
                                />

                                <AppInput
                                    textInputRef={r => (inputRef = r)}
                                    leftIcon={assets.credit_card_icon}
                                    placeholder={"Card Number"}
                                    onChangeText={(value) => {
                                    }}
                                />

                                <View style={{flexDirection: "row", justifyContent: "space-between"}}>

                                    <AppInput
                                        textInputRef={r => (inputRef = r)}
                                        leftIcon={assets.calendar_icon}
                                        placeholder={"Expiry"}
                                        containerStyle={{
                                            flex: 0.48
                                        }}
                                        onChangeText={(value) => {
                                        }}
                                    />

                                    <AppInput
                                        textInputRef={r => (inputRef = r)}
                                        leftIcon={assets.lock_icon}
                                        placeholder={"CVV"}
                                        containerStyle={{
                                            flex: 0.48
                                        }}
                                        onChangeText={(value) => {
                                        }}
                                    />

                                </View>

                                <View style={{flexDirection: "row", marginTop: hp(1)}}>

                                    <CustomSwitch
                                        initialValue={false}
                                        onValueChange={(value) => {

                                        }}
                                    />

                                    <Text style={screenStyles.defaultText}>{"Make Default"}</Text>
                                </View>

                            </View>


                        </KeyboardAwareScrollView>

                        <View style={screenStyles.bottomButton}>

                            <AppButton
                                title={'Add Credit Card'}
                                onPress={() => {
                                    props.navigation.goBack();
                                }}
                            />

                        </View>


                    </View>

                );

            }}

        />

    );

}
