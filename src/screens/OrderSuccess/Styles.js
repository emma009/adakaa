import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const fonts = AppConfig.fonts.default;


let Styles = {

    mainContainer: {
        flex: 0.9,
        width: wp("55"),
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },

    cartIcon: {
        width: hp(8),
        height: hp(8),
        tintColor: colors.primaryGreenColor,
        resizeMode: "contain"
    },

    titleText: {
        fontFamily: fonts.RUBIK_MEDIUM,
        color: colors.textColorBlack1,
        fontSize: Typography.H8,
        textAlign: "center",
        marginTop: hp("3")
    },

    subtitleText: {
        fontFamily: fonts.RUBIK_LIGHT,
        color: colors.textColorGrey1,
        fontSize: Typography.P4,
        lineHeight: hp(3),
        textAlign: "center",
        marginTop: hp("3")
    },


}

export default Styles;
