import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import Routes from "../../navigation/Routes";

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View"
import AppConfig from "../../../branding/App_config";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import {InputButton} from "../../components/Application/InputButton/InputButton";
import moment from "moment";
import AppButton from "../../components/Application/AppButton/View";

const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;

export const SelfPickup = (props) => {

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [date, setDate] = useState("");
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [time, setTime] = useState("");


    let inputRef = useRef();



    return (

        <BaseView
            navigation={props.navigation}
            title={"Self Pickup"}
            childView={() => {

                return (

                    <View style={{flex: 1}}>

                        <AppInput
                            textInputRef={r => (inputRef = r)}
                            leftIcon={assets.globe_icon}
                            placeholder={"Outlet"}
                            onChangeText={(value) => {
                            }}
                        />

                        <InputButton
                            leftIcon={assets.calendar_icon2}
                            text={date ? moment(date).format("YYYY-MM-DD") : "Date"}
                            onPress={() => {
                                setShowDatePicker(true)
                            }}

                        />

                        <InputButton
                            leftIcon={assets.clock_icon}
                            text={time ? moment(time).format("hh:mm A") : "Time"}
                            onPress={() => {
                                setShowTimePicker(true)
                            }}

                        />


                        <View style={{flex: 1, justifyContent: "flex-end"}}>

                            <AppButton
                                title={'Next'}
                                onPress={() => {
                                    props.navigation.navigate(Routes.CART_SUMMARY)
                                }}
                            />

                        </View>


                        <DateTimePickerModal
                            isVisible={showTimePicker}
                            mode="time"
                            date={time || new Date()}
                            onConfirm={(value) => {
                                const currentTime = value || new Date();
                                setTime(currentTime)
                                setShowTimePicker(false)

                            }}
                            onCancel={() => setShowTimePicker(false)}
                        />

                        <DateTimePickerModal
                            isVisible={showDatePicker}
                            mode="date"
                            date={date || new Date()}
                            onConfirm={(value) => {
                                const currentDate = value || new Date();
                                setDate(currentDate);
                                setShowDatePicker(false)
                            }}
                            onCancel={() => setShowDatePicker(false)}
                        />


                    </View>


                );


            }}

        />


    );

}

