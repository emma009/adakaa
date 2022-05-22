import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../../branding/App_config";
import Globals from "../../../utils/Globals";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;


let Styles = {

    upperContainer: {
        width: "100%",
        height: hp("36"),
        backgroundColor: colors.primaryGreenColor,
        justifyContent: "center",
        alignItems: "center"
    },

    container: {
        width: "100%",
        height: hp("80"),
        backgroundColor: colors.textColorGrey2,
        alignItems: "center"
    },

    profileImageContainer: {

    },

    profileImage: {
        width: hp("14"),
        height: hp("14"),
        borderRadius: hp("7"),
        resizeMode: "cover"
    },

    profileImageAccessoryViewContainer: {
        width: hp("5"),
        height: hp("5"),
        backgroundColor: colors.white,
        borderRadius: hp("2.5"),
        shadowColor: colors.textColorGrey1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: hp(9.5),
        left: hp(9.5),
    },

    profileImageAccessoryViewImage: {
        width: hp("2.5"),
        height: hp("2.5"),
        resizeMode: "contain",
        tintColor: colors.primaryGreenColor,
    },

    infoContainer: {
        alignItems: "center",
        marginTop: hp("1")
    },

    nameText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P1,
        color: colors.white
    },

    emailText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P5,
        color: colors.textColorGrey2
    },

    overlayContainer: {
        width: "90%",
        height: hp(13),
        backgroundColor: colors.white,
        marginTop: -hp(6.5),
        alignSelf: "center",
        justifyContent: "center",
        paddingHorizontal: hp(1),
        borderRadius: hp(0.5),
    },

    ordersText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P3,
        color: colors.textColorBlack1,
        marginLeft: hp(1)
    },

    overlayNestedContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: hp(1),
    },

    nestedContainer: {
        width: "23%",
        height: hp(8),
        backgroundColor: colors.textColorGrey2,
        justifyContent: "center",
        alignItems: "center"
    },

    nestedContainerText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P6,
        color: colors.textColorGrey1,
        marginTop: hp(1)
    },

    nestedContainerImage: {

        width: hp(2),
        height: hp(2),
        resizeMode: "contain",
        tintColor: colors.primaryGreenColor

    },

    cardListContainer: {
        width: "100%",
        marginTop: hp(2)
    },

    cardListingItemContainer: {
        width: wp(27),
        height: hp("14"),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: hp(1),
        margin: hp(1),
    },

    cardListingItemIconContainer: {
        width: hp("6"),
        height: hp("6"),
        backgroundColor: colors.secondaryGreenColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp("3")
    },

    cardListingItemIcon: {
        width: hp(2),
        height: hp(2),
        tintColor: colors.primaryGreenColor,
        resizeMode: "contain"
    },

    cardListingItemText: {
        marginTop: hp("2"),
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P5,
        color: colors.textColorGrey1
    },

    listingContainer: {
        width: "100%",
        paddingHorizontal: wp(5),
        marginVertical: hp(4)
    },

    profileListingItemContainer: {
        flexDirection: "row",
        paddingVertical: hp(1)
    },

    profileListingItemLeftImage: {
        width: hp(2.2),
        height: hp(2.2),
        tintColor: colors.primaryGreenColor,
        marginRight: wp(5),
        resizeMode: "contain"
    },

    profileListingItemText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P3,
        color: colors.textColorGrey1
    },

    profileListingItemRightContainer: {
        flex: 1,
        alignItems: "flex-end"
    },



}

export default Styles;
