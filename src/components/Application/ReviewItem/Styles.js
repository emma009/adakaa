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
        fontSize: Typography.P4
    },


    time: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P6
    },

    lowerContainer: {
        borderTopWidth: 1,
        borderTopColor: "#dadada",
        paddingTop: "5%"
    },

    ratingText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P2
    },

    commentText: {
        fontFamily: Fonts.RUBIK_LIGHT,
        fontSize: Typography.P4,
        marginTop: "2%"
    }

}

export default Styles;
