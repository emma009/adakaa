import React, {useState} from 'react';
import {
    FlatList,
    Image,
    StatusBar,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from "react-native";
import {Icon} from 'react-native-elements';
import { Styles } from "./Styles";
import AppConfig from "../../../../branding/App_config";
import Utilities from "../../../utils/UtilityMethods";
import Globals from "../../../utils/Globals";
import { useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../../branding/carter/styles/light/Style";

const assets = AppConfig.assets.default;

export const Variant3Profile = (props) => {


    //Theme based styling and colors
    const scheme = useColorScheme();
    const { colors } = useTheme();
    const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);
    const screenStyles = Styles(globalStyles, scheme, colors);


    //Internal States
    const [profileImage, setProfileImage] = useState("");

    const renderProfileListItem = (item, index) => {
        return <TouchableOpacity
            onPress={() => item.onPress()}
            style={screenStyles.profileListingItemContainer}>

            <Image source={item.icon} style={screenStyles.profileListingItemLeftImage}/>

            <Text style={screenStyles.profileListingItemText}>{item.title}</Text>

            <View style={screenStyles.profileListingItemRightContainer}>
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
        <View style={screenStyles.mainContainer}>
            <StatusBar backgroundColor={colors.primaryBackground} barStyle={"dark-content"} />

            <View style={screenStyles.upperContainer} >

                <View
                    style={screenStyles.profileImageContainer}>

                    <Image
                        source={profileImage ? {uri: profileImage.uri} : assets.profile_image}
                        style={screenStyles.profileImage}
                    />

                    <TouchableOpacity
                        onPress={() => {
                            Utilities.selectImage((response) => {
                                setProfileImage(response);
                            })
                        }}
                        activeOpacity={0.8} style={
                        [
                            globalStyles.buttonShadow,
                            screenStyles.profileImageAccessoryViewContainer
                        ]
                    }>

                        <Image
                            source={assets.camera_regular_icon}
                            style={screenStyles.profileImageAccessoryViewImage}
                        />

                    </TouchableOpacity>


                </View>

                <View style={screenStyles.infoContainer}>
                    <Text style={screenStyles.nameText}>{"Jessica Simpson"}</Text>
                    <Text style={screenStyles.emailText}>{"gfx.partner@gmail.com"}</Text>
                </View>


            </View>

            <View style={[screenStyles.overlayContainer]}>

                <Text style={screenStyles.ordersText}>{"Orders"}</Text>

                <View style={screenStyles.overlayNestedContainer}>

                    <View style={screenStyles.nestedContainer}>

                        <Image
                            source={assets.wallet_icon}
                            style={screenStyles.nestedContainerImage}
                        />

                        <Text style={screenStyles.nestedContainerText}>{"Unpaid"}</Text>

                    </View>

                    <View style={screenStyles.nestedContainer}>

                        <Image
                            source={assets.order_icon}
                            style={screenStyles.nestedContainerImage}
                        />


                        <Text style={screenStyles.nestedContainerText}>{"Pending"}</Text>

                    </View>

                    <View style={screenStyles.nestedContainer}>


                        <Image
                            source={assets.shipping_icon}
                            style={screenStyles.nestedContainerImage}
                        />


                        <Text style={screenStyles.nestedContainerText}>{"Shipped"}</Text>

                    </View>

                    <View style={screenStyles.nestedContainer}>


                        <Image
                            source={assets.star_icon}
                            style={screenStyles.nestedContainerImage}
                        />

                        <Text style={screenStyles.nestedContainerText}>{"Reviews"}</Text>

                    </View>

                </View>

            </View>


            <View style={screenStyles.container}>

                <FlatList
                    style={screenStyles.listingContainer}
                    data={Globals.profileList(props.navigation)}
                    renderItem={({item, index}) => {
                        return renderProfileListItem(item, index)
                    }}/>

            </View>



        </View>
    );


}
