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
        height: hp("13"),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: hp(1)

    },
    profileItemCircle: {
        width: hp("6"),
        height: hp("6"),
        backgroundColor: colors.secondaryGreenColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp("3")
    }



}

export default Styles;
