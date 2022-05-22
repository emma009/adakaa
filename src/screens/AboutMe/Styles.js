import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;


let Styles = {


    mainContainer: {
        flex: 1,
    },

    bottomButton: {
        flex: 1,
        justifyContent: "flex-end",
    },

    typeHeader: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P1,
        color: colors.textColorBlack1,
        marginVertical: hp("2")
    }

}

export default Styles;
