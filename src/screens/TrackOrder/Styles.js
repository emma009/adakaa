import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;



export const Styles = function(scheme, colors) {

    return {

        container: {
            flex: 1,
        },

        headerContainer: {
            height: hp("13"),
            backgroundColor: scheme === "dark" ? colors.secondaryBackground : colors.primaryBackground,
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: wp("5"),
            borderBottomWidth: 1,
            borderBottomColor: colors.borderColorLight
        },


        headerLeftIconContainer: {
            width: hp("6"),
            height: hp("6"),
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.tertiaryBackground,
            borderRadius: hp("3"),
            marginRight: wp(3)
        },

        headerLeftIcon: {
            width: hp(2.5),
            height: hp(2.5),
            tintColor: colors.activeColor,
            resizeMode: "contain"
        },

        headerTitleText: {
            fontSize: Typography.P2,
            fontFamily: fonts.RUBIK_MEDIUM,
            color: colors.headingColor
        },

        subtitleText: {
            fontSize: Typography.P6,
            fontFamily: fonts.RUBIK_REGULAR,
            marginVertical: hp("0.5"),
            color: colors.subHeadingColor
        },

        subtitleValueText: {
            fontSize: Typography.P4,
            fontFamily: fonts.RUBIK_MEDIUM,
            color: colors.headingColor,
            marginRight: wp(2)
        },

        itemsHorizontalContainer: {
            flexDirection: "row",
            alignItems: "center"
        },

        contentContainer: {
            alignItems: "center",
            paddingHorizontal: wp ('5'),
            paddingVertical: hp("2"),
            marginTop: hp(0.5),
            backgroundColor: scheme === "dark" ? colors.secondaryBackground : colors.primaryBackground,
        },

        orderStatusItemContainer: {
            width: "100%",
            flexDirection: "row"
        },

        orderStatusLeftContainer: {
            alignItems: "center",
            marginRight: wp("3")
        },

        orderStatusLeftIconContainer: {
            width: hp("6"),
            height: hp("6"),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: hp("3"),
        },

        orderStatusLeftIcon: {
            width: hp(2.5),
            height: hp(2.5),
            resizeMode: "contain"
        },

        orderStatusLine: {
            width: 2,
            height: hp("4")
        },

        orderStatusTitle: {
            fontFamily: fonts.RUBIK_MEDIUM,
            fontSize: Typography.P3,
            color: colors.headingColor
        },

        orderStatusSubtitle: {
            fontFamily: fonts.RUBIK_LIGHT,
            fontSize: Typography.P5,
            color: colors.subHeadingColor
        },

        bottomContainer: {
            flex: 1,
            justifyContent: "flex-end"
        }


    }

}
