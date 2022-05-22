import React from 'react';
import {ScrollView, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BaseView from "../BaseView"
import {Text} from "react-native-elements";
import AppConfig from "../../../branding/App_config";
import Styles from "./Styles";
import {CustomSwitch} from "../../components/Global/CustomSwitch/View";
import AppButton from "../../components/Application/AppButton/View";

const colors = AppConfig.colors.default;

export const Notifications = (props) => {

    const renderNotificationRow = (bottomMargin, bottomBorder, title, subtitle) => {
        return <View style={[
            Styles.notificationContainer,
            bottomMargin && {marginBottom: hp(1)},
            bottomBorder && {
                borderBottomWidth: 1,
                borderBottomColor: colors.borderColorLight
            }
        ]}>

            <View style={{width: "80%"}}>

                <Text style={Styles.titleText}>{title}</Text>
                <Text style={Styles.subtitleText}>{subtitle}</Text>

            </View>

            <View style={{width: "20%", alignItems: "center"}}>

                <CustomSwitch
                    initialValue={false}
                    onValueChange={(value) => {
                    }}
                />
            </View>

        </View>
    }


    return (

        <BaseView
            navigation={props.navigation}
            title={"Notifications"}
            childView={() => {
                return (

                    <View style={{flex: 1}}>

                        <ScrollView>

                            {renderNotificationRow(
                                true,
                                false,
                                "Allow Notifications",
                                "Get notifications about what is coming up in the future on Carter"
                            )}

                            {renderNotificationRow(
                                false,
                                true,
                                "Email Notifications",
                                "Get notifications via email about our latest deals and seasonal discounts"
                            )}

                            {renderNotificationRow(
                                false,
                                true,
                                "Order Notifications",
                                "Get Timely notifications about your orders and there status on delivery"
                            )}

                            {renderNotificationRow(
                                false,
                                false,
                                "General Notifications",
                                "Get notifications as soon as you perform something on the app i.e: add a product to favourites"
                            )}


                        </ScrollView>


                        <AppButton
                            title={'Save Settings'}
                            onPress={() => {
                                props.navigation.goBack()
                            }}
                        />

                    </View>


                );
            }}
        />

    );

}
