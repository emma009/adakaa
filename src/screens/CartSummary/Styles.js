import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;
const styles = AppConfig.styling.default;


let Styles = {

    container: {
        flex: 1,
        backgroundColor: colors.textColorGrey2
    },

    bottomContainer: {
        paddingVertical: hp(2),
        paddingHorizontal: wp(5),
        marginVertical: hp(1),
        backgroundColor: "white",
    },

    receiptItemContainer: {
        flexDirection: "row",
        width: "100%",
        marginBottom: hp("1")
    },

    receiptItemDivider: {
        width: "100%",
        height: 1,
        alignSelf: "center",
        marginBottom: hp("1"),
        backgroundColor: colors.borderColorLight
    },

    boldLabelText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P4,
        color: colors.textColorBlack1
    },

    boldLabelValueText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P4,
        flex: 1,
        textAlign: "right",
        color: colors.primaryGreenColor
    },

    normalLabelText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P6,
        color: colors.textColorGrey1
    },

    normalLabelValueText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P6,
        flex: 1,
        textAlign: "right",
        color: colors.textColorGrey1,
    },

    cartItemContainer: {
        height: hp("12"),
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: wp("5"),
    },

    cartItemLeftImage: {
        width: hp("6"),
        height: hp("6"),
        marginRight: wp("2"),
        resizeMode: "contain"
    },

    cartItemNameText: {
        fontSize: Typography.P3,
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: colors.textColorBlack1,
        marginBottom: hp(0.5)
    },

    cartItemWeightText: {
        color: colors.textColorGrey1,
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P5
    },

    cartItemPriceText: {
        flex: 1,
        textAlign: "right",
        fontSize: Typography.P5,
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: colors.primaryGreenColor,
        marginRight: wp(5)
    },



    flatListContainer: {
        height: "68%",
        paddingBottom: hp("1"),

    },

    totalContainer: {
        flexDirection: "row",
        width: "100%",
        marginBottom: hp("1")
    },
    subtotalLabelText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P6,
        color: colors.textColorGrey1

    },
    subtotalValueText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P6,
        flex: 1,
        textAlign: "right",
        color: colors.textColorGrey1,
    },
    totalLabelText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P4,
        color: colors.textColorBlack1
    },
    totalValueText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P4,
        flex: 1,
        textAlign: "right",
        color: colors.primaryGreenColor
    },

}

export default Styles;
