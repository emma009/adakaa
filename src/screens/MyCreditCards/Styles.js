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
    nameTitle: {
        fontSize: Typography.P1,
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: colors.textColorBlack1
    },
    addressTitle: {
        fontSize: Typography.P4,
        fontFamily: Fonts.RUBIK_REGULAR,
        marginVertical: hp("0.5"),
        color: colors.textColorGrey1
    },
    itemLabel: {
        fontSize: Typography.P4,
        fontFamily: Fonts.RUBIK_LIGHT,
    },
    phoneTitle: {
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
        width: hp("8"),
        height: hp("8"),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp("4"),
        backgroundColor: colors.textColorGrey2
    },

    orderProgressCircle: {
        width: hp("2"),
        height: hp("2"),
        borderRadius: hp("2") / 2,
    },

    orderProgressLine: {
        width: 2,
        height: hp("3")
    },

    orderProgressTitleContainer: {
        flexDirection: "row",
        marginTop: hp("2.7")
    },

    orderProgressTitle: {
        flex: 0.5,
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.P4
    },

    orderProgressSubTitle: {
        flex: 0.5,
        textAlign: "right",
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P5
    }

}

export default Styles;
