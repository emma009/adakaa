import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppConfig from "../../../../branding/App_config";

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function(styles, colors) {

    return {

        scrollViewContainer: {
            flex: 1,
            backgroundColor: colors.secondaryBackground
        },

        scrollViewContentContainer: {
            flexGrow: 1,
            backgroundColor: colors.secondaryBackground
        },

        container: {
            flex: 1,
            alignItems: "center",
            backgroundColor: colors.secondaryBackground
        },

        headerContainer: {
            flex: 1,
        },

        headerImage: {
            flex: 1,
            width: wp(100),
            height: "100%",
            resizeMode: "cover",
        },

        bottomContainer: {
            width: styles.gridWidth3,
            paddingVertical: hp("3"),
            justifyContent: "flex-end",
        },

        titleText: {
            fontFamily: fonts.RUBIK_MEDIUM,
            fontSize: Typography.H8,
            marginBottom: hp("0.5"),
            color: colors.headingColor
        },

        subtitleText: {
            fontFamily: fonts.RUBIK_REGULAR,
            fontSize: Typography.P4,
            marginBottom: hp("2"),
            color: colors.subHeadingColor
        },

        accountBottomContainer: {
            flexDirection:"row",
            alignItems: "center",
            justifyContent: "center"
        },

        accountText: {
            fontFamily: fonts.RUBIK_REGULAR,
            fontSize: Typography.P5,
            color: colors.subHeadingColor

        },

        passwordInputContainer: {
            marginBottom: hp(1)
        },

        loginButton: {
            color: colors.headingColor,
            fontFamily: fonts.RUBIK_MEDIUM,
            fontSize: Typography.P4,
        }
    }

}
