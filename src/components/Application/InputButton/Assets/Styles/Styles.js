import AppConfig from "../../../../../../branding/App_config";
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Typography = AppConfig.typography.default;
const Fonts = AppConfig.fonts.default;
const styles = AppConfig.styling.default;
const colors = AppConfig.colors.default;

let Styles = {
    buttonContainer: {
        width: styles.gridWidth,
        height: hp(5.5),
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: hp("0.8"),
        borderRadius: hp(0.3)
    },
    leftIcon: {},
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
