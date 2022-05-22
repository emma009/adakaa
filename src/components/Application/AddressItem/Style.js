import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppConfig from "../../../../branding/App_config";


const colors = AppConfig.colors.default;
const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;



let Style = {

    container: {
        height: hp("15"),
        backgroundColor: "white",
        flexDirection: "row",
        marginBottom: hp(1)
    },

    activeContainer: {
        borderWidth: 1,
        borderColor: colors.primaryGreenColor
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
        marginRight: wp(4),
        backgroundColor: colors.secondaryGreenColor
    },

    leftImage: {
        width: hp(3.5),
        height: hp(3.5),
        tintColor: colors.primaryGreenColor
    },

    titleText: {
        fontSize: Typography.P3,
        fontFamily: fonts.RUBIK_MEDIUM,
        color: colors.textColorBlack1
    },

    addressText: {
        fontSize: Typography.P6,
        fontFamily: fonts.RUBIK_REGULAR,
        marginVertical: hp("0.5"),
        lineHeight: hp(2.5),
        width: "55%",
        color: colors.textColorGrey1
    },

    contactText: {
        fontSize: Typography.P5,
        fontFamily: fonts.RUBIK_MEDIUM,
        marginRight: wp("5"),
        color: colors.textColorBlack1
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
    }

}

export default Style;
