import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Globals from "../../utils/Globals";
import Typography from "../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const styles = AppConfig.styling.default;

let Styles = {

    mainContainer: {
        flex: 1
    },

    creditCardImageStyle: {
        width: "100%",
        height: hp("30")
    },

    defaultText: {
        marginLeft: hp(1),
        alignSelf: "center",
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        color: colors.textColorGrey1
    },


    bottomButton: {
        flex: 1,
        justifyContent: "flex-end"
    },


    primaryText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.H8,
        paddingVertical: hp("3")
    },

    secondaryText: {
        fontFamily: Fonts.RUBIK_LIGHT,
        fontSize: Typography.P2,
        textAlign: "center",
    },

    rating: {
        paddingVertical: hp("2")
    }

}

export default Styles;
