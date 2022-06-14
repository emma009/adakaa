import AppConfig from "../../../../branding/App_config";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const Typography = AppConfig.typography.default;
const Fonts = AppConfig.fonts.default;

export const Styles = function(scheme, styles, colors) {

    return {
        buttonContainer: {
            width: styles.gridWidth,
            height: hp(5.8),
            backgroundColor: scheme === "dark" ? colors.inputBackground : colors.inputSecondaryBackground,
            flexDirection: "row",
            alignItems: "center",
            marginVertical: hp("0.8"),
            borderRadius: hp(0.3)
        },
        leftIcon: {
            width: hp(2),
            height: hp(2),
            tintColor: colors.inputColor,
            marginLeft: wp(5),
            resizeMode: "contain"
        },
        Text: {
            marginLeft: hp("2"),
            fontFamily: Fonts.RUBIK_REGULAR,
            fontSize: Typography.P4,
            color: colors.inputColor
        },
        rightIcon: {
            position: "absolute",
            right: "5%"
        }
    }

}
