import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";

const styles = AppConfig.styling.default;
const fonts = AppConfig.fonts.default;
const colors = AppConfig.colors.default;

let Styles = {

    contentItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: hp(1),
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColorLight
    },

    contentItemLeftIconContainer: {
        width: hp("8"),
        height: hp("8"),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp("4"),
        marginLeft: wp("5"),
        marginRight: wp("4"),
    },

    contentItemLeftIcon: {
        width: hp(6),
        height: hp(6),
        resizeMethod: "contain"
    },

    titleText: {
        fontSize: Typography.P3,
        fontFamily: fonts.RUBIK_MEDIUM,
        color: colors.textColorBlack1
    },

    weightText: {
        fontSize: Typography.P7,
        fontFamily: fonts.RUBIK_REGULAR,
        color: colors.textColorGrey1,
        marginRight: wp(2),
    },

    priceText: {
        fontSize: Typography.P7,
        fontFamily: fonts.RUBIK_REGULAR,
        color: colors.tertiaryGreenColor,
        paddingLeft: wp(2),
    },

}

export default Styles;
