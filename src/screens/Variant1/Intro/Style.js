import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import fonts from "../../../../branding/carter/assets/Fonts";
import Typography from "../../../../branding/carter/styles/Typography";
import AppConfig from "../../../../branding/App_config";
const colors = AppConfig.colors.default;

let style = {

    introUpperContainer: {
        flex: 0.9
    },

    introLowerContainer: {
        flex: 0.1,
        justifyContent:  'center',
        alignItems: 'center',
    },

    headerImage: {
        width: hp("40"),
        height: hp("40")
    },

    introUpperText: {
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.H7,
        width: wp("75"),
        textAlign: "center",
        marginTop: hp("5"),
        color: colors.textColorBlack1
    },

    introLowerText: {
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        width: wp("75"),
        textAlign: "center",
        marginTop: hp("2"),
        lineHeight: hp(4),
        color: colors.textColorGrey1
    }


}

export default style;
