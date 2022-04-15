import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../../branding/App_config";
import Globals from "../../../utils/Globals";
import Typography from "../../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const styles = AppConfig.styling.default;

let Styles = {

    upperContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: "5%"
    },

    name: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P4,
        color: colors.textColorBlack1
    },


    time: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P6,
        color: colors.textColorGrey1
    },

    lowerContainer: {
        borderTopWidth: 1,
        borderTopColor: colors.borderColorLight,
        paddingTop: "5%"
    },

    ratingText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        color: colors.textColorBlack1,
        marginRight: wp(1)
    },

    commentText: {
        fontFamily: Fonts.RUBIK_LIGHT,
        fontSize: Typography.P5,
        paddingTop: hp(1),
        lineHeight: hp(2.5),
        color: colors.textColorGrey1
    }

}

export default Styles;
