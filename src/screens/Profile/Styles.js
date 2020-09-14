import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const styles = AppConfig.styling.default;


let Styles = {


    paymentMethodMainContainer: {
        width: styles.gridWidth,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: hp(2)
    },

    paymentMethodOuterContainer: {
        flex: 0.3,
        height: hp("12"),
    },

    paymentMethodInnerContainer: {
        flex: 0.3,
        height: hp("12"),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"

    },
    profileItemCircle: {
        width: hp("4"),
        height: hp("4"),
        backgroundColor: "#edf8e4",
        justifyContent: "center",
        borderRadius: hp("4") / 2
    }



}

export default Styles;
