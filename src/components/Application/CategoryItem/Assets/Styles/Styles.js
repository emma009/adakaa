import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../../../../branding/App_config";
import Typography from "../../../../../../branding/carter/styles/Typography";

const Fonts = AppConfig.fonts.default;

let Styles = {
    categoryItemContainer: {
        width: wp("29%"),
        height: hp("16"),
        marginRight: wp("2"),
        marginBottom: wp("2"),
    },
    mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textContainer: {
        alignItems: "center",

    },
    primaryTitle: {
        textTransform: "uppercase",
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P5,
    },
    secondaryTitle: {
        textTransform: "uppercase",
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P6
    },
    icon: {
        width: 70,
        height: 70,
    }
}

export default Styles;
