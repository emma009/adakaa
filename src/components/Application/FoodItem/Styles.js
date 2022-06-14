import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../../branding/App_config";

const Typography = AppConfig.typography.default;
const Fonts = AppConfig.fonts.default;

export const Styles = function(scheme, colors) {

    return {
        container: {
            width: wp("44%"),
            backgroundColor: scheme === "dark" ? colors.secondaryBackground : colors.primaryBackground,
            borderRadius: 5,
            flexDirection: "column",
            marginRight: hp("1"),
            marginBottom: hp("1"),
        },

        upperContainer: {
            flexDirection: "row"
        },

        discountContainer: {
            width: "50%"
        },

        discountBanner: {
            backgroundColor: colors.quaternaryBackground,
            width: "60%",
            height: hp(3),
            justifyContent: "center",
            alignItems: "center",
            borderTopRightRadius: hp(0.5),
            borderBottomRightRadius: hp(0.5)
        },

        discountText: {
            color: colors.headingSecondaryColor,
            fontFamily: Fonts.RUBIK_MEDIUM,
            fontSize: Typography.P7
        },

        favouriteContainer: {
            width: "50%",
            paddingTop: wp(2),
            paddingEnd: wp(2),
            justifyContent: "center",
            alignItems: "flex-end"
        },

        favouriteIcon: {
            width: hp(2),
            height: hp(2),
            resizeMode: "contain",
        },

        mainContainer: {
            flex: 1,
            alignItems: "center",
        },

        foodItemImage: {
            width: hp("13"),
            height: hp("13"),
            resizeMode: "contain"
        },

        infoContainer: {
            alignItems: "center",
            marginVertical: hp("2")
        },

        priceText: {
            fontFamily: Fonts.RUBIK_MEDIUM,
            color: colors.subHeadingSecondaryColor,
            fontSize: Typography.P6
        },

        titleText: {
            fontSize: Typography.P3,
            fontFamily: Fonts.RUBIK_MEDIUM,
            color: colors.headingColor,
            marginVertical: hp("0.5")
        },

        weightText: {
            fontSize: Typography.P6,
            color: colors.subHeadingColor,
            fontFamily: Fonts.RUBIK_REGULAR
        },

        bottomContainer: {
            borderTopColor: colors.borderColorLight,
            width: "100%",
            height: hp("5.5"),
            justifyContent: "center",
            borderTopWidth: 1,
        },


        addCartText: {
            color: colors.subHeadingColor,
            fontFamily: Fonts.RUBIK_REGULAR,
            fontSize: Typography.P3,
        },

        addCartIcon: {
            width: hp(2),
            height: hp(1.6),
            tintColor: colors.activeColor,
            marginRight: wp(1),
            resizeMode: "contain"
        },

        cartUpdateContainer: {
            height: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },

        cartUpdateActionContainer: {
            flex: 0.3,
            justifyContent: "center",
            alignItems: "center",
            borderColor: colors.borderColorLight,
            height: "100%"
        },

        cartUpdateIcon: {
            width: hp(2),
            height: hp(2),
            tintColor: colors.activeColor,
            resizeMode: "contain"
        },

        cartNumberText: {
            fontFamily: Fonts.RUBIK_MEDIUM,
            color: colors.headingColor
        }

    }

}
