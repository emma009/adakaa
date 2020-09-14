import AppConfig from "../../../../branding/App_config";
import Typography from "../../../../branding/carter/styles/Typography";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;

let Styles = {

    numberText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P4
    },

    numberCircle: {
        width: hp("5"),
        height: hp("5"),
        borderRadius: hp("5")/2,
        justifyContent: "center",
        alignItems: "center"
    },

    bottomText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P6,
        marginTop: hp("0.2")
    }



}

export default Styles;
