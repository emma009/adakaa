import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";

const Fonts = AppConfig.fonts.default;
const Colors = AppConfig.colors.default;

let Styles = {

    mainContainer: {
        flex: 1
    },

    bottomButton: {
        flex: 1,
        justifyContent: "flex-end"
    },

    defaultText: {
        marginLeft: hp(1),
        alignSelf: "center",
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        color: Colors.textColorGrey1
    }

}

export default Styles;
