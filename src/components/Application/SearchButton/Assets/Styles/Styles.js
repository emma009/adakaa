import AppConfig from "../../../../../../branding/App_config";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import styles from "../../../../../../branding/carter/styles/Style";
import Typography from "../../../../../../branding/carter/styles/Typography";

const Fonts = AppConfig.fonts.default;
const colors = AppConfig.colors.default;

let Styles = {
    buttonContainer: {
        width: styles.gridWidth,
        height: hp(5.5),
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: hp("1.5"),
        borderRadius: hp(0.3)
    },
    leftIcon: {

    },
    Text: {
        marginLeft: hp("2"),
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        color: colors.textColorGrey1
    },
    rightIcon: {
        position: "absolute",
        right: "5%"
    }
}

export default Styles;
