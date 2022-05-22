import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../../branding/App_config";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

let Styles = {

    container: {
        paddingHorizontal: wp(5),
        paddingVertical: hp(1.5),
        backgroundColor: "white",
        marginVertical: hp("0.5")
    },

    upperContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: hp(1.5)
    },

    nameText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P4,
        color: colors.textColorBlack1
    },

    timeText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P6,
        color: colors.textColorGrey1
    },

    lowerContainer: {
        borderTopWidth: 1,
        borderTopColor: colors.borderColorLight,
        paddingTop: hp(1.5),
    },

    ratingContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    ratingText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        color: colors.textColorBlack1,
        marginRight: wp(1)
    },

    commentText: {
        fontFamily: Fonts.RUBIK_LIGHT,
        fontSize: Typography.P5,
        paddingTop: hp(1),
        lineHeight: hp(2.5),
        color: colors.textColorGrey1
    }

}

export default Styles;
