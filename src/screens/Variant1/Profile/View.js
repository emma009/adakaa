import React, {useState} from 'react';
import {FlatList, Image, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import Styles from "./Styles";
import AppConfig from "../../../../branding/App_config";
import Utilities from "../../../utils/UtilityMethods";
import Globals from "../../../utils/Globals";

const assets = AppConfig.assets.default;
const styles = AppConfig.styling.default;

export const Variant1Profile = (props) => {

    const [profileImage, setProfileImage] = useState("");


    const renderProfileCardItem = (item) => {
        return <TouchableWithoutFeedback

            onPress={() => {
                item.onPress()
            }}>

            <View style={Styles.cardListingItemContainer}>
                <View style={Styles.cardListingItemIconContainer}>

                    <Image
                        source={item.icon}
                        style={Styles.cardListingItemIcon}/>

                </View>

                <Text style={Styles.cardListingItemText}>{item.title}</Text>
            </View>

        </TouchableWithoutFeedback>
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

                <View style={{alignItems: "center"}}>

                    <FlatList
                        style={Styles.cardListContainer}
                        numColumns={3}
                        data={Globals.profileList(props.navigation)}
                        renderItem={({item, index}) => {
                            return renderProfileCardItem(item);
                        }}/>

                </View>

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
