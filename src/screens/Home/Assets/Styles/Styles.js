import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../../../branding/App_config";

const styles = AppConfig.styling.default;
const Fonts = AppConfig.fonts.default;

let Styles = {
    mainWrapper: {
        width: wp("100%"),
        alignItems: "center"
    },
    mainContainer: {
        width: styles.actualWidth,
    },
    sectionHeading: {
        width: styles.actualWidth,
        flexDirection: "row",
        alignItem: "center",
        justifyContent: "space-between"
    },
    sectionHeadingText: {
        fontFamily: Fonts.RUBIK_MEDIUM,

    },
    sectionHeadingIcon: {
    },
    sectionContainer: {
        alignItems: "center"
    }
}

export default Styles;
