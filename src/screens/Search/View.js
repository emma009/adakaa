import React, {useRef} from 'react';
import { Image, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, useColorScheme, View } from "react-native";
import { Styles } from "./Styles";
import Globals from "../../utils/Globals";
import {TextInput} from "../../components/Global/TextInput/View";
import Routes from "../../navigation/Routes";

import AppConfig from "../../../branding/App_config";
import { useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../branding/carter/styles/light/Style";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const assets = AppConfig.assets.default;

export const Search = (props) => {

    //Theme based styling and colors
    const scheme = useColorScheme();
    const { colors } = useTheme();
    const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);
    const screenStyles = Styles(scheme, globalStyles, colors);


    //References
    let inputRef = useRef();


    const renderCategoryTitle = (title, rightBtnText) => {
        return <TouchableOpacity onPress={() => {
        }}>
            <View style={screenStyles.categoryTitleContainer}>
                <Text style={screenStyles.categoryTitleText}>{title}</Text>
                <Text style={screenStyles.categoryBtnText}>{rightBtnText}</Text>
            </View>
        </TouchableOpacity>
    }

    const renderHistoryItems = () => {
        return <View style={screenStyles.historyItemContainer}>
            {
                Globals.searchHistoryItems.map(item => {
                    return (
                        <View
                            style={screenStyles.historyItemTextContainer}>
                            <Text
                                ellipsizeMode={'tail'}
                                style={screenStyles.historyItemText}>
                                {item}
                            </Text>
                        </View>
                    );
                })
            }
        </View>
    }

    return (

        <View style={screenStyles.container}>
            <StatusBar barStyle={scheme === "dark" ? "light-content" : "dark-content"} />

            <View style={[screenStyles.searchContainer, {paddingTop: Globals.SAFE_AREA_INSET.top + hp(1)}]}>

                <TouchableWithoutFeedback
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                >
                    <View style={screenStyles.searchLeftIconContainer}>
                        <Image source={assets.arrow_left_icon}
                               style={screenStyles.headerLeftIcon}/>
                    </View>
                </TouchableWithoutFeedback>

                <TextInput
                    textInputRef={r => (inputRef = r)}
                    placeholder={"Search"}
                    placeholderTextColor={colors.headingColor}
                    rightIconSource={
                        assets.filter_icon
                    }
                    rightIconPress={() => {
                        props.navigation.navigate(Routes.APPLY_FILTERS)
                    }}
                    rightIconTintColor={colors.inactiveColor}
                    leftIcon={
                        <Image source={assets.search_icon}
                               style={screenStyles.searchInputLeftIcon}/>
                    }
                    containerStyle={screenStyles.searchInputContainer}
                    leftIconContainerStyle={screenStyles.searchInputLeftIconContainer}
                    onChangeText={(value) => {

                    }}
                />

            </View>

            <View style={screenStyles.contentContainerStyle}>
                {
                    renderCategoryTitle("Search History", "Clear")
                }

                {renderHistoryItems()}

                {
                    renderCategoryTitle("Discover More", "Refresh")
                }

                {renderHistoryItems()}

            </View>

            <View style={screenStyles.bottomButtonsContainer}>

                <TouchableOpacity style={screenStyles.imageSearchButton} onPress={() => {

                }}>

                    <View style={screenStyles.buttonContainer}>

                        <Image source={assets.camera_regular_icon} style={screenStyles.buttonIcon}/>

                        <Text style={screenStyles.buttonText}>{"Image Search"}</Text>

                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={screenStyles.voiceSearchButton} onPress={() => {}}>

                    <View style={screenStyles.buttonContainer}>

                        <Image source={assets.microphone_regular_icon} style={screenStyles.buttonIcon}/>

                        <Text style={screenStyles.buttonText}>{"Voice Search"}</Text>

                    </View>
                </TouchableOpacity>

            </View>

        </View>

    );

}
