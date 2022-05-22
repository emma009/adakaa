import React, {useRef} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styles from "./Styles";
import Globals from "../../utils/Globals";
import {TextInput} from "../../components/Global/TextInput/View";
import Routes from "../../navigation/Routes";
import assets from "../../../branding/carter/assets/Assets";

import AppConfig from "../../../branding/App_config";

const styles = AppConfig.styling.default;
const colors = AppConfig.colors.default;

export const Search = (props) => {

    let inputRef = useRef();


    const renderCategoryTitle = (title, rightBtnText) => {
        return <TouchableOpacity onPress={() => {
        }}>
            <View style={Styles.categoryTitleContainer}>
                <Text style={Styles.categoryTitleText}>{title}</Text>
                <Text style={Styles.categoryBtnText}>{rightBtnText}</Text>
            </View>
        </TouchableOpacity>
    }

    const renderHistoryItems = () => {
        return <View style={Styles.historyItemContainer}>
            {
                Globals.searchHistoryItems.map(item => {
                    return (
                        <View
                            style={Styles.historyItemTextContainer}>
                            <Text
                                ellipsizeMode={'tail'}
                                style={Styles.historyItemText}>
                                {item}
                            </Text>
                        </View>
                    );
                })
            }
        </View>
    }

    return (

        <View style={Styles.container}>
            <StatusBar backgroundColor={"white"} barStyle="dark-content"/>

            <View style={Styles.searchContainer}>

                <TouchableWithoutFeedback
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                >
                    <View style={Styles.searchLeftIconContainer}>
                        <Image source={assets.arrow_left_icon}
                               style={Styles.headerLeftIcon}/>
                    </View>
                </TouchableWithoutFeedback>

                <TextInput
                    textInputRef={r => (inputRef = r)}
                    placeholder={"Search"}
                    placeholderTextColor={colors.textColorBlack1}
                    rightIconSource={
                        assets.filter_icon
                    }
                    rightIconPress={() => {
                        props.navigation.navigate(Routes.APPLY_FILTERS)
                    }}
                    rightIconTintColor={colors.iconColorGrey1}
                    leftIcon={
                        <Image source={assets.search_icon}
                               style={Styles.searchInputLeftIcon}/>
                    }
                    containerStyle={Styles.searchInputContainer}
                    leftIconContainerStyle={Styles.searchInputLeftIconContainer}
                    onChangeText={(value) => {

                    }}
                />


            </View>


            <View style={Styles.contentContainerStyle}>
                {
                    renderCategoryTitle("Search History", "Clear")
                }

                {renderHistoryItems()}

                <View style={{flexDirection: 'row', width: styles.gridWidth, flexShrink: 1, flexWrap: 'wrap'}}>

                </View>

                {
                    renderCategoryTitle("Discover More", "Refresh")
                }

                {renderHistoryItems()}

            </View>

            <View style={Styles.bottomButtonsContainer}>

                <TouchableOpacity style={{
                    flex: 0.5,
                    marginRight: hp(1)
                }} onPress={() => {

                }}>

                    <View style={Styles.buttonContainer}>

                        <Image source={assets.camera_regular_icon} style={Styles.buttonIcon}/>

                        <Text style={Styles.buttonText}>{"Image Search"}</Text>

                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={{
                    flex: 0.5
                }} onPress={() => {

                }}>

                    <View style={Styles.buttonContainer}>

                        <Image source={assets.microphone_regular_icon} style={Styles.buttonIcon}/>

                        <Text style={Styles.buttonText}>{"Voice Search"}</Text>


                    </View>
                </TouchableOpacity>

            </View>

        </View>

    );

}
