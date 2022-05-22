import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../../../../branding/App_config";

const Typography = AppConfig.typography.default;
const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;

let Styles = {

    container: {
        width: wp("44%"),
        backgroundColor: "white",
        borderRadius: 5,
        flexDirection: "column",
        marginRight: hp("1.5"),
        marginBottom: hp("1.5"),
    },

    discountBanner: {
        backgroundColor: colors.iconColorRed4,
        width: "60%",
        height: hp(3),
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: hp(0.5),
        borderBottomRightRadius: hp(0.5)
    },

    discountText: {
        color: colors.iconColorRed3,
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
        resizeMode: "contain"
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
        color: colors.primaryGreenColor,
        fontSize: Typography.P6
    },

    titleText: {
        fontSize: Typography.P3,
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: colors.textColorBlack1,
        marginVertical: hp("0.5")
    },

    weightText: {
        fontSize: Typography.P6,
        color: colors.textColorGrey1,
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
        color: colors.textColorGrey1,
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P3,
    },

    addCartIcon: {
        width: hp(2),
        height: hp(1.6),
        tintColor: colors.primaryGreenColor,
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
        height: "100%",
    },

    cartUpdateIcon: {
        width: hp(2),
        height: hp(2),
        tintColor: colors.primaryGreenColor,
        resizeMode: "contain"
    },

    cartNumberText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: colors.textColorBlack1
    }

}

export default Styles;
