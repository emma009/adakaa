import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppConfig from "../../../../branding/App_config";

const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;


export const Styles = function(styles, scheme, colors) {

    return {

        mainContainer: {
            flex: 1,
            backgroundColor: scheme === "dark" ? colors.primaryBackground : colors.secondaryBackground
        },

        upperContainer: {
            width: "100%",
            height: hp("36"),
            backgroundColor: colors.activeColor,
            justifyContent: "center",
            alignItems: "center"
        },

        container: {
            width: "100%",
            height: hp("80"),
            backgroundColor: scheme === "dark" ? colors.primaryBackground : colors.secondaryBackground,
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
            backgroundColor: scheme === "dark" ? colors.secondaryBackground : colors.primaryBackground,
            borderRadius: hp("2.5"),
            shadowColor: colors.inactiveColor,
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
            tintColor: colors.activeColor,
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
            color: colors.subHeadingTertiaryColor
        },

        overlayContainer: {
            width: "90%",
            height: hp(13),
            backgroundColor: scheme === "dark" ? colors.secondaryBackground : colors.primaryBackground,
            marginTop: -hp(6.5),
            alignSelf: "center",
            justifyContent: "center",
            paddingHorizontal: hp(1),
            borderRadius: hp(0.5),
        },

        ordersText: {
            fontFamily: Fonts.RUBIK_MEDIUM,
            fontSize: Typography.P3,
            color: colors.headingColor,
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
            backgroundColor: scheme === "dark" ? colors.primaryBackground : colors.secondaryBackground,
            justifyContent: "center",
            alignItems: "center"
        },

        nestedContainerText: {
            fontFamily: Fonts.RUBIK_REGULAR,
            fontSize: Typography.P6,
            color: colors.subHeadingColor,
            marginTop: hp(1)
        },

        nestedContainerImage: {

            width: hp(2),
            height: hp(2),
            resizeMode: "contain",
            tintColor: colors.activeColor

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
            backgroundColor: scheme === "dark" ? colors.secondaryBackground : colors.primaryBackground,
            borderRadius: hp(1),
            margin: hp(1),
        },

        cardListingItemIconContainer: {
            width: hp("6"),
            height: hp("6"),
            backgroundColor: colors.tertiaryBackground,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: hp("3")
        },

        cardListingItemIcon: {
            width: hp(2),
            height: hp(2),
            tintColor: colors.activeColor,
            resizeMode: "contain"
        },

        cardListingItemText: {
            marginTop: hp("2"),
            fontFamily: Fonts.RUBIK_REGULAR,
            fontSize: Typography.P5,
            color: colors.subHeadingColor
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
            tintColor: colors.activeColor,
            marginRight: wp(5),
            resizeMode: "contain"
        },

        profileListingItemText: {
            fontFamily: Fonts.RUBIK_REGULAR,
            fontSize: Typography.P3,
            color: colors.subHeadingColor
        },

        profileListingItemRightContainer: {
            flex: 1,
            alignItems: "flex-end"
        }

    }

}

