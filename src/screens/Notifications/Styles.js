import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;


let Styles = {

    notificationContainer: {
        backgroundColor: "white",

        flexDirection: "row",

        alignItems: "center",

        paddingLeft: wp("5"),

        paddingVertical: hp("2"),
    },

    titleText: {
        fontSize: Typography.P3,
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: colors.textColorBlack1,
        marginBottom: hp(1)
    },

    subtitleText: {
        fontSize: Typography.P6,
        fontFamily: Fonts.RUBIK_REGULAR,
        lineHeight: hp(2.5),
        marginVertical: hp("0.5"),
        color: colors.textColorGrey1
    },

}

export default Styles;
