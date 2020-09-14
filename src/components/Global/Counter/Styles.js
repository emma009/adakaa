import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../../branding/App_config";
import Typography from "../../../../branding/carter/styles/Typography";
import colors from "../../../../branding/carter/styles/Colors";

const styles = AppConfig.styling.default;
const fonts = AppConfig.fonts.default;

let Styles = {
    buttonTitle: {
        color: colors.primaryGreenColor,
        fontWeight: "bold",
        fontSize: Typography.P1
    },
    counterText: {
        fontSize: Typography.P4
    },

}

export default Styles;
