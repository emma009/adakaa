import React from 'react';
import {View} from 'react-native';

import BaseView from "../BaseView"
import {Text} from "react-native-elements";
import Styles from "./Styles";
import screenStyles from "./Styles";
import AppInput from "../../components/Application/AppInput/View";
import assets from "../../../branding/carter/assets/Assets";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import AppButton from "../../components/Application/AppButton/View";

export const AboutMe = (props) => {

    let inputRef = React.createRef();


    return (

        <BaseView
            navigation={props.navigation}
            title={"About Me"}
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

                                <Text style={Styles.typeHeader}>{"Personal Details"}</Text>

                                <AppInput
                                    textInputRef={r => (inputRef = r)}
                                    leftIcon={assets.account_icon}
                                    placeholder={"Name"}
                                    onChangeText={(value) => {
                                    }}
                                />

                                <AppInput
                                    textInputRef={r => (inputRef = r)}
                                    leftIcon={assets.envelop_icon}
                                    placeholder={"Email Address"}
                                    onChangeText={(value) => {
                                    }}
                                />

                                <AppInput
                                    textInputRef={r => (inputRef = r)}
                                    leftIcon={assets.phone_icon}
                                    placeholder={"Phone"}
                                    onChangeText={(value) => {
                                    }}
                                />

                                <Text style={Styles.typeHeader}>{"Change Password"}</Text>

                                <AppInput
                                    textInputRef={r => (inputRef = r)}
                                    leftIcon={assets.lock_icon}
                                    placeholder={"Current Password"}
                                    isPasswordField
                                    onChangeText={(value) => {
                                    }}
                                />

                                <AppInput
                                    textInputRef={r => (inputRef = r)}
                                    leftIcon={assets.lock_icon}
                                    placeholder={"Password"}
                                    isPasswordField
                                    onChangeText={(value) => {
                                    }}
                                />

                                <AppInput
                                    textInputRef={r => (inputRef = r)}
                                    leftIcon={assets.lock_icon}
                                    placeholder={"Confirm Password"}
                                    isPasswordField
                                    onChangeText={(value) => {
                                    }}
                                />


                            </View>

                        </KeyboardAwareScrollView>

                        <View style={screenStyles.bottomButton}>

                            <AppButton
                                title={'Save Changes'}
                                onPress={() => {

                                }}
                            />

                        </View>


                    </View>


                );
            }}
        />

    );

}
