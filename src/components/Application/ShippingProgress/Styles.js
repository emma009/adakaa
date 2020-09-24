import AppConfig from "../../../../branding/App_config";
import Typography from "../../../../branding/carter/styles/Typography";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;

let Styles = {

    numberText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P3,
    },

    numberCircle: {
        width: hp("7"),
        height: hp("7"),
        borderRadius: hp("3.5"),
        justifyContent: "center",
        alignItems: "center"
    },

    bottomText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P6,
        marginTop: hp("0.5"),
        color: colors.textColorBlack1
    }



}

export default Styles;
