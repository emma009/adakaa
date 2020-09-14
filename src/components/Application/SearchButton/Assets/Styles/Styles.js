import AppConfig from "../../../../../../branding/App_config";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import styles from "../../../../../../branding/carter/styles/Style";
import Typography from "../../../../../../branding/carter/styles/Typography";

const Fonts = AppConfig.fonts.default;

let Styles = {
    buttonContainer: {
        width: styles.gridWidth,
        height: 40,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "5%",
        paddingRight: "5%",
        marginVertical: hp("1")
    },
    leftIcon: {

    },
    Text: {
        marginLeft: hp("2"),
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        color: "#697281"
    },
    rightIcon: {
        position: "absolute",
        right: "5%"
    }
}

export default Styles;
