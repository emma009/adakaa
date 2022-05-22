import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppConfig from "../../../../branding/App_config";

const Typography = AppConfig.typography.default;
const colors = AppConfig.colors.default;
const fonts = AppConfig.fonts.default;

let style = {

    container: {

        height: hp("14"),

        backgroundColor: "white",

        flexDirection: "row",
        marginBottom: hp(1)


    },

    defaultContainer: {
        position: "absolute",
        backgroundColor: colors.secondaryGreenColor,
        width: "18%",
        height: hp(2.5),
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: hp(0.5),
        borderBottomRightRadius: hp(0.5)
    },

    leftImageContainer: {
        width: hp("8"),
        height: hp("8"),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp("4"),
        marginLeft: wp("5"),
        backgroundColor: colors.textColorGrey2
    },

    leftImage: {
        width: hp(3),
        height: hp(3)
    },

    titleText: {
        fontSize: Typography.P3,
        fontFamily: fonts.RUBIK_MEDIUM,
        color: colors.textColorBlack1
    },

    subtitleText: {
        fontSize: Typography.P7,
        fontFamily: fonts.RUBIK_REGULAR,
        color: colors.textColorGrey1
    },


    rightIconContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: wp("5")
    },

    rightIcon: {
        width: hp(2.5),
        height: hp(2.5),
        tintColor: colors.primaryGreenColor
    },

}

export default style;
