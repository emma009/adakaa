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
    },

    headerImage: {
        width: wp('65%'),
        height: hp('45%'),
        resizeMode: "contain",
    },

    bottomContainer: {
        flex: 1,
        width: styles.gridWidth3,
        paddingTop: hp("3"),
        marginTop: hp(20)
    },

    titleText: {
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.H9,
        marginBottom: hp("0.5"),
        color: colors.textColorBlack1,
        textAlign: "center"
    },

    subtitleText: {
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        marginBottom: hp("2"),
        color: colors.textColorGrey1,
        textAlign: "center"
    },

    forgotPasswordContainer: {
        flexDirection:"row",
        marginBottom: hp(1)
    },

    accountBottomContainer: {
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center"
    },

    accountText: {
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P5,
        color: colors.textColorGrey1,
        alignSelf: "center",
        marginLeft: hp(1)
    },

    signupButton: {
        color: colors.textColorBlack1,
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.P4,

    },

    forgotPasswordButton: {
        color: colors.textColorBlue1,
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P6
    }

}

export default style;
