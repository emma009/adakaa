import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";
import fonts from "../../../branding/carter/assets/Fonts";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const styles = AppConfig.styling.default;


let Styles = {

    foodItemContainer: {

        height: hp("13"),

        backgroundColor: "white",

        flexDirection: "row",

        alignItems: "center",

        paddingLeft: wp("5"),

        borderBottomWidth: 1,
        borderBottomColor: "#dadada"

    },
    foodItemImage: {
        width: hp("10"),
        height: hp("10"),
        marginRight: wp("2")
    },
    orderNo: {
        fontSize: Typography.P2,
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: colors.textColorBlack1
    },
    dateTime: {
        fontSize: Typography.P6,
        fontFamily: Fonts.RUBIK_REGULAR,
        marginVertical: hp("0.5"),
        color: colors.textColorGrey1
    },
    itemLabel: {
        fontSize: Typography.P4,
        fontFamily: Fonts.RUBIK_LIGHT,
    },
    itemValue: {
        fontSize: Typography.P3,
        fontFamily: Fonts.RUBIK_REGULAR,
        marginRight: wp("5")
    },
    weightText: {
        color: "#697281",
        fontFamily: Fonts.RUBIK_LIGHT,
        fontSize: Typography.P5,
    },
    profileItemCircle: {
        width: hp("6"),
        height: hp("6"),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp("6") / 2
    },

    orderProgressCircle: {
        width: hp("6"),
        height: hp("6"),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp("3"),
    },

    orderProgressLine: {
        width: 2,
        height: hp("4")
    },

    orderProgressTitleContainer: {
        flexDirection: "row",
        marginTop: hp("2.7")
    },

    orderProgressTitle: {
        // flex: 0.6,
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.P3,
        color: colors.textColorBlack1
        // borderWidth: 1,
        // marginTop: hp(1.5)
    },

    orderProgressSubTitle: {
        // flex: 0.5,
        // textAlign: "right",
        fontFamily: fonts.RUBIK_LIGHT,
        fontSize: Typography.P5,
        color: colors.textColorGrey1
    }

}

export default Styles;
