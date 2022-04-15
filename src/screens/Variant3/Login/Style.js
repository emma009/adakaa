import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import fonts from "../../../../branding/carter/assets/Fonts";
import Typography from "../../../../branding/carter/styles/Typography";
import AppConfig from "../../../../branding/App_config";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

let style = {

    headerImage: {
        width: wp('100%'),
        height: hp('65%')
    },

    bottomContainer: {
        flex: 1,
        width: styles.gridWidth3,
        paddingTop: hp("3"),
    },

    welcomeHeader: {
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.H9,
        marginBottom: hp("2"),
        color: colors.textColorBlack1
    },

    welcomeDescription: {
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        lineHeight: hp(2.5),
        marginBottom: hp("3"),
        color: colors.textColorGrey1
    },

    signUpButton: {
        backgroundColor: colors.buttonGreenColor
    },

    signUpButtonText: {
        color: "#ffffff"
    },

    googleSignInButton: {
        backgroundColor: "#ffffff",
    },

    accountBottomContainer: {
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
    },

    accountText: {
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P5 ,
        color: colors.textColorGrey1

    },

    loginButton: {
        color: colors.textColorBlack1,
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.P4,
    }

}

export default style;
