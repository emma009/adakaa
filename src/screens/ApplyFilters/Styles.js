import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";

const Typography = AppConfig.typography.default;
const Fonts = AppConfig.fonts.default;

export const Styles = function(scheme, colors) {


    return {
        mainContainer: {
            flex: 1
        },

        cardContainerStyle: {
            width: "100%",
            backgroundColor: scheme === "dark" ? colors.secondaryBackground : colors.primaryBackground,
            paddingHorizontal: wp(4),
            paddingTop: hp(2),
            paddingBottom: hp(2),
            borderBottomWidth: 1,
            borderBottomColor: colors.borderColorLight
        },

        priceContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
        },

        titleStyle: {
            fontSize: Typography.P3,
            fontFamily: Fonts.RUBIK_MEDIUM,
            marginBottom: hp(1),
            color: colors.headingColor
        },

        inputContainerStyle: {
            width: wp(40),
            backgroundColor: colors.inputSecondaryBackground,
            justifyContent: "center"
        },

        ratingContainerStyle: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.inputSecondaryBackground,
            height: hp(5.5),
            paddingHorizontal: wp(2)
        },

        ratingTextStyle: {
            fontSize: Typography.P5,
            fontFamily: Fonts.RUBIK_REGULAR,
            color: colors.headingColor,
            flex: 1,
            textAlign: "right"
        },

        othersItemContainerStyle: {
            backgroundColor: scheme === "dark" ? colors.secondaryBackground : colors.primaryBackground,
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: hp("1.5"),
            borderBottomColor: colors.borderColorLight
        }
    }


}

export default Styles;
