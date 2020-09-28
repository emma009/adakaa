import AppConfig from "../../../../branding/App_config";
import Typography from "../../../../branding/carter/styles/Typography";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;

let Styles = {

    numberText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P2,
    },

    numberCircle: {
        width: hp("5"),
        height: hp("5"),
        borderRadius: hp("2.5"),
        justifyContent: "center",
        alignItems: "center"
    },

    bottomText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P8,
        marginTop: hp("0.5"),
        color: colors.textColorBlack1
    }



}

export default Styles;
