import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View"
import AppButton from "../../components/Application/AppButton/View"
import assets from "../../../branding/carter/assets/Assets";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import {CustomSwitch} from "../../components/Global/CustomSwitch/View";
import screenStyles from "./Styles"

export const AddAddress = (props) => {

    let inputRef = React.createRef();

    return(

        <BaseView
            navigation={props.navigation}
            title={"Add Address"}
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

                                <AppInput
                                    textInputRef={r => (inputRef = r)}
                                    leftIcon={assets.account_icon}
                                    placeholder={"Name"}
                                    onChangeText={(value) => {}}
                                />

                                <AppInput
                                    textInputRef={r => (inputRef = r)}
                                    leftIcon={assets.envelop_icon}
                                    placeholder={"Email Address"}
                                    onChangeText={(value) => {}}
                                />

                                <AppInput
                                    textInputRef={r => (inputRef = r)}
                                    leftIcon={assets.phone_icon}
                                    placeholder={"Phone"}
                                    onChangeText={(value) => {}}
                                />

                                <AppInput
                                    textInputRef={r => (inputRef = r)}
                                    leftIcon={assets.map_marker_icon}
                                    placeholder={"Address"}
                                    onChangeText={(value) => {}}
                                />

                                <AppInput
                                    textInputRef={r => (inputRef = r)}
                                    leftIcon={assets.mailbox_icon}
                                    placeholder={"Zip code"}
                                    onChangeText={(value) => {}}
                                />

                                <AppInput
                                    textInputRef={r => (inputRef = r)}
                                    leftIcon={assets.map_icon}
                                    placeholder={"City"}
                                    onChangeText={(value) => {}}
                                />

                                <AppInput
                                    textInputRef={r => (inputRef = r)}
                                    leftIcon={assets.globe_icon}
                                    placeholder={"Country"}
                                    onChangeText={(value) => {}}
                                />

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
                                title={'Add Address'}
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
