import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Globals from "../../utils/Globals";
import Typography from "../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const styles = AppConfig.styling.default;

let Styles = {


    mainContainer: {
        flex: 1,
        alignItems: "center"
    },

    primaryText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.H8,
        paddingVertical: hp("3"),
        color: colors.textColorBlack1
    },

    secondaryText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P3,
        textAlign: "center",
        color: colors.textColorGrey1,
        width: "80%"
    },

    ratingContainerStyle: {
        paddingVertical: hp("2")
    },


    bottomButton: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-end"
    },


}

export default Styles;
