import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import fonts from "../../../../branding/carter/assets/Fonts";
import Typography from "../../../../branding/carter/styles/Typography";
import AppConfig from "../../../../branding/App_config";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

let style = {

    headerImage: {
        width: wp('100%'),
        height: hp('55%')
    },

    bottomContainer: {
        flex: 1,
        width: styles.gridWidth3,
        marginTop: hp("20"),
    },

    welcomeHeader: {
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.H8,
        marginBottom: hp("0.5"),
        color: colors.textColorBlack1,
        textAlign: "center"
    },

    welcomeDescription: {
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        marginBottom: hp("2"),
        color: colors.textColorGrey1,
        textAlign: "center"
    },

    signUpButton: {
        backgroundColor: "#6cc51d"
    },

    forgotPasswordContainer: {
        flexDirection:"row",
        justifyContent: "flex-end"
    },

    accountBottomContainer: {
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center"
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
    },

    signupButton: {
        marginVertical: hp('0.5')
    }

}

export default style;