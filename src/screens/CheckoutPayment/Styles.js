import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";

const Typography = AppConfig.typography.default;
const Fonts = AppConfig.fonts.default;


export const Styles = function(scheme, colors) {

    return {

        container: {
            flex: 1
        },

        paymentMethodItemParentContainer: {
            height: hp("8"),
            backgroundColor: scheme === "dark" ? colors.secondaryBackground : colors.primaryBackground,
            paddingLeft: wp("5"),
            marginBottom: hp("1")
        },
        paymentMethodItemContainer: {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
        },
        icon: {
            width: hp(3),
            height: hp(3),
            tintColor: colors.activeColor,
            resizeMode: "contain"
        },
        nameContainer: {
            marginHorizontal: wp("3"),
            flexDirection: "row",
            flex: 1
        },
        rightIconContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
            paddingRight: wp("5")
        },
        nameTitle: {
            fontSize: Typography.P3,
            fontFamily: Fonts.RUBIK_MEDIUM,
            color: colors.headingColor
        },
    }

}
