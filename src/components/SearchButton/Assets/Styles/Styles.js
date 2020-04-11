import AppConfig from "../../../../../branding/App_config";

const Fonts = AppConfig.fonts.default;

let Styles = {
    buttonContainer: {
        width: "100%",
        height: 50,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "5%",
        paddingRight: "5%"
    },
    leftIcon: {

    },
    Text: {
        marginLeft: "5%",
        fontFamily: Fonts.RUBIK_REGULAR,
        color: "#697281"
    },
    rightIcon: {
        position: "absolute",
        right: "5%"
    }
}

export default Styles;
