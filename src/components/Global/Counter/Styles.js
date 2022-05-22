import AppConfig from "../../../../branding/App_config";

const Typography = AppConfig.typography.default;
const colors = AppConfig.colors.default;
const fonts = AppConfig.fonts.default;

let Styles = {
    buttonTitle: {
        color: colors.primaryGreenColor,
        fontWeight: "bold",
        fontSize: Typography.P1
    },
    counterText: {
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.P1,
        color: colors.textColorBlack1
    },

}

export default Styles;
