import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Globals from "../../utils/Globals";
import Typography from "../../../branding/carter/styles/Typography";
import colors from "../../../branding/carter/styles/Colors";

const styles = AppConfig.styling.default;
const fonts = AppConfig.fonts.default;

let Styles = {
    mainWrapper: {
        flex: 1,
        alignSelf: "center",
        width: styles.gridWidth,
        backgroundColor: colors.textColorGrey2,
        paddingBottom: hp("3"),
    },

    sectionHeading: {
        width: styles.gridWidth,
        flexDirection: "row",
        alignItem: "center",
        justifyContent: "space-between",
        paddingVertical: hp("1"),
        marginTop: hp("1"),
    },

    sectionHeadingText: {
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.P2,
        color: colors.textColorBlack1
    },

    sectionHeadingIcon: {
        alignSelf: "center"
    },

    sectionContainer: {
        alignItems: "center"
    }
}

export default Styles;
