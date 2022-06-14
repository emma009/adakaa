import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";

const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;


export const Styles = function(scheme, colors) {

    return {
        container: {
            flex: 1
        },

        notificationContainer: {
            backgroundColor: scheme === "dark" ? colors.secondaryBackground : colors.primaryBackground,

            flexDirection: "row",

            alignItems: "center",

            paddingLeft: wp("5"),

            paddingVertical: hp("2"),
        },

        notificationBottomBorder: {
            borderBottomWidth: 1,
            borderBottomColor: colors.borderColorLight
        },

        switchContainer: {
            width: "20%",
            alignItems: "center"
        },

        titleText: {
            fontSize: Typography.P3,
            fontFamily: Fonts.RUBIK_MEDIUM,
            color: colors.headingColor,
            marginBottom: hp(1)
        },

        subtitleText: {
            fontSize: Typography.P6,
            fontFamily: Fonts.RUBIK_REGULAR,
            lineHeight: hp(2.5),
            marginVertical: hp("0.5"),
            color: colors.subHeadingColor
        },
    }

}
