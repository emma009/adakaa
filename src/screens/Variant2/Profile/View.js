import React, {useState} from 'react';
import {FlatList, Image, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Styles from "./Styles";
import AppConfig from "../../../../branding/App_config";
import Utilities from "../../../utils/UtilityMethods";
import Globals from "../../../utils/Globals";

const colors = AppConfig.colors.default;
const assets = AppConfig.assets.default;
const styles = AppConfig.styling.default;

export const Variant2Profile = (props) => {

    const [profileImage, setProfileImage] = useState("");

    const renderProfileListItem = (item, index) => {
        return <TouchableOpacity
            onPress={() => item.onPress()}
            style={Styles.profileListingItemContainer}>

            <Image source={item.icon} style={Styles.profileListingItemLeftImage}/>

            <Text style={Styles.profileListingItemText}>{item.title}</Text>

            <View style={Styles.profileListingItemRightContainer}>
                <Icon
                    name={"angle-right"}
                    type={"font-awesome"}
                    iconStyle={{
                        color: colors.textColorGrey3
                    }}/>
            </View>
        </TouchableOpacity>
    }

    return (
        <View style={{flex: 1}}>
            <StatusBar backgroundColor={"white"} barStyle="dark-content"/>

            <View style={Styles.upperWhiteContainer}/>

            <View style={Styles.container}>

                <View style={Styles.infoContainer}>
                    <Text style={Styles.nameText}>{"Jessica Simpson"}</Text>
                    <Text style={Styles.emailText}>{"gfx.partner@gmail.com"}</Text>
                </View>

                <FlatList
                    style={Styles.listingContainer}
                    data={Globals.profileList(props.navigation)}
                    renderItem={({item, index}) => {
                        return renderProfileListItem(item, index)
                    }}/>

            </View>

            <View
                style={Styles.profileImageContainer}>

                <Image
                    source={profileImage ? {uri: profileImage.uri} : assets.profile_image}
                    style={Styles.profileImage}
                />

                <TouchableOpacity
                    onPress={() => {
                        Utilities.selectImage((response) => {
                            setProfileImage(response);
                        })
                    }}
                    activeOpacity={0.8} style={
                    [
                        styles.buttonShadow,
                        Styles.profileImageAccessoryViewContainer
                    ]
                }>

                    <Image
                        source={assets.camera_regular_icon}
                        style={Styles.profileImageAccessoryViewImage}
                    />

                </TouchableOpacity>


            </View>

        </View>
    );


}
