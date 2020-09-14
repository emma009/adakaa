import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Globals from "../../utils/Globals";
import Typography from "../../../branding/carter/styles/Typography";

const styles = AppConfig.styling.default;
const fonts = AppConfig.fonts.default;

let Styles = {
    mainWrapper: {
        flex: 1,
        alignSelf: "center",
        paddingBottom: hp("3"),
    },

    sectionHeading: {
        width: styles.gridWidth,
        flexDirection: "row",
        alignItem: "center",
        justifyContent: "space-between",
        paddingVertical: hp("2"),
        marginTop: hp("1"),
    },

    sectionHeadingText: {
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.P3
    },

    sectionHeadingIcon: {
        alignSelf: "center"
    },

    sectionContainer: {
        alignItems: "center"
    }
}

export default Styles;
