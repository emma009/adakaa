import AppConfig from "../../../../branding/App_config";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function(styles, scheme, colors) {

    return {
        buttonContainer: {
            width: styles.gridWidth,
            height: hp(5.5),
            backgroundColor: scheme === "dark" ? colors.secondaryBackground : colors.primaryBackground,
            flexDirection: "row",
            alignItems: "center",
            marginVertical: hp("1.5"),
            borderRadius: hp(0.3)
        },

        leftIcon: {
            width: hp(2),
            height: hp(2),
            tintColor: colors.inputColor,
            marginLeft: wp(5)
        },

        Text: {
            marginLeft: hp("2"),
            fontFamily: Fonts.RUBIK_REGULAR,
            fontSize: Typography.P4,
            color: colors.subHeadingColor
        },
        rightIcon: {
            width: hp(2),
            height: hp(2),
            tintColor: colors.inputColor,
            position: "absolute",
            right: wp(5)
        }
    }

}
