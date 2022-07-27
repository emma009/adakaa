import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import { Platform } from "react-native";

const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;


export const Styles = function(scheme, styles, colors) {

    return {
        container: {
            flex: 1,
            alignItems: "center"
        },

        baseViewChildContainerStyle: {
            flex: 1,
        },

        listContainer: {
            flex: 0.55,
            width: styles.gridWidth,
        },

        cardContainer: {
            marginTop: hp(3)
        },

        bottomContainer: {
            flex: 0.45,
            // paddingVertical: hp(2.5),
            justifyContent: "center",
            paddingHorizontal: wp(5),
            marginTop: hp(1),
            width: "100%",
            backgroundColor: colors.primaryBackground
        },

        bottomTotalContainer: {
            flex: 0.7,
            // marginBottom: hp(2),
            justifyContent: "center",
            // backgroundColor: "red"
        },

        bottomButtonContainer: {
            // justifyContent: "center",
            flex: 0.3,
            // backgroundColor: "green"
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
            borderRadius: hp(0.75),
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
