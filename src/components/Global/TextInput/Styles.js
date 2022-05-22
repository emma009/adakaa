import AppConfig from "../../../../branding/App_config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

const Typography = AppConfig.typography.default;
const fonts = AppConfig.fonts.default;

let Styles = {

    defaultInputStyles: {
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P4
    },

    rightIcon: {
        width: wp(5),
        height: wp(5),
        resizeMode: "contain"
    }


}

export default Styles;
