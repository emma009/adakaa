import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";

const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;


export const Styles = function(scheme, colors) {

    return {
        container: {
            flex: 1,
        },

        listContainer: {
        },

        bottomContainer: {
            // flex: 0.3,
            paddingVertical: hp(2),
            justifyContent: "center",
            paddingHorizontal: wp(5),
            marginVertical: hp(1),
            backgroundColor: colors.primaryBackground
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
            color: colors.headingColor
        },

        boldLabelValueText: {
            fontFamily: Fonts.RUBIK_MEDIUM,
            fontSize: Typography.P4,
            flex: 1,
            textAlign: "right",
            color: colors.subHeadingSecondaryColor
        },

        normalLabelText: {
            fontFamily: Fonts.RUBIK_REGULAR,
            fontSize: Typography.P6,
            color: colors.subHeadingColor
        },

        normalLabelValueText: {
            fontFamily: Fonts.RUBIK_REGULAR,
            fontSize: Typography.P6,
            flex: 1,
            textAlign: "right",
            color: colors.subHeadingColor,
        },

        cartItemContainer: {
            height: hp("12"),
            backgroundColor: scheme === "dark" ? colors.secondaryBackground : colors.primaryBackground,
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
            color: colors.headingColor,
            marginBottom: hp(0.5)
        },

        cartItemWeightText: {
            color: colors.subHeadingColor,
            fontFamily: Fonts.RUBIK_REGULAR,
            fontSize: Typography.P5
        },

        cartItemPriceText: {
            flex: 1,
            textAlign: "right",
            fontSize: Typography.P5,
            fontFamily: Fonts.RUBIK_MEDIUM,
            color: colors.activeColor,
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
            color: colors.subHeadingColor

        },
        subtotalValueText: {
            fontFamily: Fonts.RUBIK_REGULAR,
            fontSize: Typography.P6,
            flex: 1,
            textAlign: "right",
            color: colors.subHeadingColor,
        },
        totalLabelText: {
            fontFamily: Fonts.RUBIK_MEDIUM,
            fontSize: Typography.P4,
            color: colors.headingColor
        },
        totalValueText: {
            fontFamily: Fonts.RUBIK_MEDIUM,
            fontSize: Typography.P4,
            flex: 1,
            textAlign: "right",
            color: colors.subHeadingSecondaryColor
        }
    }

}

export default Styles;
