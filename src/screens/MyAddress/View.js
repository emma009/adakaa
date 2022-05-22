import React, {useRef, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Accordion from 'react-native-collapsible/Accordion';
import BaseView from "../BaseView"
import {Text} from "react-native-elements";
import AppConfig from "../../../branding/App_config";
import Routes from "../../navigation/Routes";
import AppInput from "../../components/Application/AppInput/View";
import {CustomSwitch} from "../../components/Global/CustomSwitch/View";
import assets from "../../../branding/carter/assets/Assets";
import Globals from "../../utils/Globals";
import {AddressItem} from "../../components/Application/AddressItem/View";
import AppButton from "../../components/Application/AppButton/View";
import Styles from "./Styles";

const styles = AppConfig.styling.default;


export const MyAddress = (props) => {

    const [activeSections, setActiveSections] = useState([]);

    let inputRef = useRef();

    const renderAddressesHeader = (section, index, isActive) => {

        return <AddressItem
            isTouchable={false}
            isActive={isActive}
            showAnimatedIcon
            item={section}
        />

    };

    const renderAddressesContent = section => {
        return (
            <View style={Styles.contentContainer}>


                    <AppInput
                        textInputRef= {r => (inputRef = r)}
                        {...styles.secondaryInputStyle}
                        leftIcon={assets.account_icon}
                        placeholder={"Name"}
                        onChangeText={(value) => {
                        }}
                    />

                    <AppInput
                        textInputRef= {r => (inputRef = r)}
                        {...styles.secondaryInputStyle}
                        leftIcon={assets.map_marker_icon}
                        placeholder={"Address"}
                        onChangeText={(value) => {
                        }}
                    />

                    <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between"}}>


                        <AppInput
                            textInputRef= {r => (inputRef = r)}
                            {...styles.secondaryInputStyle}
                            leftIcon={assets.map_marker_icon}
                            placeholder={"City"}
                            containerStyle={{
                                flex: 0.48
                            }}
                            onChangeText={(value) => {
                            }}
                        />


                        <AppInput
                            textInputRef= {r => (inputRef = r)}
                            {...styles.secondaryInputStyle}
                            leftIcon={assets.mailbox_icon}
                            placeholder={"Zip Code"}
                            containerStyle={{
                                flex: 0.48
                            }}
                            onChangeText={(value) => {
                            }}
                        />

                    </View>


                    <AppInput
                        textInputRef= {r => (inputRef = r)}
                        {...styles.secondaryInputStyle}
                        leftIcon={assets.globe_icon}
                        placeholder={"Country"}
                        onChangeText={(value) => {
                        }}
                    />

                    <AppInput
                        textInputRef= {r => (inputRef = r)}
                        {...styles.secondaryInputStyle}
                        leftIcon={assets.phone_icon}
                        placeholder={"Phone"}
                        onChangeText={(value) => {
                        }}
                    />

                    <View style={{flexDirection: "row", marginTop: hp(1)}}>

                        <CustomSwitch
                            initialValue={false}
                            onValueChange={(value) => {
                            }}
                        />

                        <Text style={Styles.defaultText}>{"Make Default"}</Text>
                    </View>



            </View>
        );
    };

    const _updateSections = allActiveSections => {
        setActiveSections(allActiveSections)
    };


    return (

        <BaseView
            navigation={props.navigation}
            title={"My Address"}
            rightIcon={assets.plus_circle_icon}
            onRightIconPress={() => {
                props.navigation.navigate(Routes.Add_Address)
            }}
            childView={() => {
                return (


                    <View style={{flex: 1}}>
                        <ScrollView style={{flex: 0.9}}>

                            <Accordion
                                sections={Globals.addressItems}
                                activeSections={activeSections}
                                renderHeader={renderAddressesHeader}
                                renderContent={renderAddressesContent}
                                expandMultiple={false}
                                sectionContainerStyle={{marginBottom: hp("1")}}
                                onChange={_updateSections}
                            />


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
