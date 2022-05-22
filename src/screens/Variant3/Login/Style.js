import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppConfig from "../../../../branding/App_config";

const colors = AppConfig.colors.default;
const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;
const styles = AppConfig.styling.default;

let style = {

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.textColorGrey2
    },

    headerImage: {
        width: wp('65%'),
        height: hp('65%'),
        resizeMode: "contain",
    },

    bottomContainer: {
        flex: 1,
        width: styles.gridWidth3,
        paddingTop: hp("3"),
    },

    titleText: {
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.H9,
        marginBottom: hp("0.5"),
        color: colors.textColorBlack1
    },

    subtitleText: {
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        marginBottom: hp("4"),
        color: colors.textColorGrey1
    },

    accountBottomContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    accountText: {
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P5,
        color: colors.textColorGrey1

    },

    loginButton: {
        color: colors.textColorBlack1,
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.P4,
    }

}

export default style;
