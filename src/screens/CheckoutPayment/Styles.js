import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const styles = AppConfig.styling.default;


let Styles = {


    paymentMethodMainContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    paymentMethodOuterContainer: {
        flex: 0.3,
        height: hp("10"),


    },

    paymentMethodInnerContainer: {
        flex: 0.32,
        height: hp("12"),
        justifyContent: "center",
        alignItems: "center"

    },



}

export default Styles;
