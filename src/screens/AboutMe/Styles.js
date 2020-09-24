import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const styles = AppConfig.styling.default;


let Styles = {

    typeHeader: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.H9,
        color: colors.textColorBlack1,
        marginVertical: hp("2")
    }

}

export default Styles;
