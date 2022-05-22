import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;


let Styles = {

    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: hp("12"),
        backgroundColor: "white",
        paddingLeft: wp("5"),
        marginBottom: hp("1")
    },

    leftIconContainerStyle: {
        width: hp("6"),
        height: hp("6"),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp("3"),
        backgroundColor: colors.textColorGrey2
    },

    leftIcon: {
        width: hp(3),
        height: hp(3),
        resizeMode: "contain"
    },

    textContainer: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: wp("3")
    },

    titleText: {
        fontSize: Typography.P3,
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: colors.textColorBlack1
    },

    subtitleText: {
        fontSize: Typography.P5,
        fontFamily: Fonts.RUBIK_REGULAR,
        marginVertical: hp("0.5"),
        color: colors.textColorGrey1
    },

    priceText: {
        flex: 1,
        fontSize: Typography.P3,
        fontFamily: Fonts.RUBIK_REGULAR,
        textAlign: "right",
        alignSelf: "center",
        color: colors.primaryGreenColor
    },

}

export default Styles;
