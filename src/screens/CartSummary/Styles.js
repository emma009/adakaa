import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const styles = AppConfig.styling.default;


let Styles = {
    flatListContainer: {
        height: "70%",
        paddingBottom: hp("1"),

    },
    bottomContainer: {
        padding: hp(2),
        backgroundColor: "white",
    },
    totalContainer: {
        flexDirection: "row",
        width: "100%",
        marginBottom: hp("1")
    },
    subtotalLabelText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P6,
        color: colors.textColorGrey1

    },
    subtotalValueText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P6,
        flex: 1,
        textAlign: "right",
        color: colors.textColorGrey1,
    },
    totalLabelText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P4,
        color: colors.textColorBlack1
    },
    totalValueText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P4,
        flex: 1,
        textAlign: "right",
        color: colors.primaryGreenColor
    },

}

export default Styles;
