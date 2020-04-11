import AppConfig from "../../../../../branding/App_config";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;

let Styles = {
    addCartText: {
        color: "#697281",
        fontFamily: Fonts.RUBIK_REGULAR
    },
    addCartIcon: {
        color: colors.primaryGreenColor,
        marginRight: "5%"
    },
    AddSubtractText: {
        color: colors.primaryGreenColor
    },
    AddButton: {
        width: 40,
        borderRightColor: colors.borderColorLight,
        borderRightWidth: 1
    },
    subtractButton: {
        width: 40,
        borderLeftColor: colors.borderColorLight ,
        borderLeftWidth: 1
    },
    cartNumberText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: "#3B3B43"
    }
}

export default Styles;
