import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import fonts from "../../../branding/carter/assets/Fonts";
import Typography from "../../../branding/carter/styles/Typography";
import AppConfig from "../../../branding/App_config";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

let style = {

    headerImage: {
        width: wp('100%'),
        height: hp('60%')
    },

    bottomContainer: {
        flex: 1,
        width: styles.gridWidth,
        paddingVertical: hp("2")
    },

    welcomeHeader: {
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.H8,
        marginBottom: hp("2")
    },

    welcomeDescription: {
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P3,
        marginBottom: hp("4")
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
        justifyContent: "center"
    },

    accountText: {
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P4
    },

    loginButton: {
        color: "#000000"
    }

}

export default style;