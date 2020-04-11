import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../../branding/App_config";

const styles = AppConfig.styling.default;

let Styles = {
    mainWrapper: {
        width: wp("100%"),
        alignItems: "center"
    },
    mainContainer: {
        width: styles.actualWidth,
    },
    sectionContainer: {
        width: wp("95%"),
        alignItems: "center"
    }
}

export default Styles;
