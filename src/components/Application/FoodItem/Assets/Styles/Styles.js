import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../../../../branding/App_config";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;

let Styles = {
    foodItemContainer: {
        width: wp("43%"),

        backgroundColor: "white",
        borderRadius: 5,
        flexDirection: "column",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

        marginRight: hp("1.5"),
        marginBottom: hp("1.5"),

    },
    topContainer: {
        flexDirection: "row",
        position: "absolute",
    },
    mainContainer: {
        flex: 1,
        alignItems: "center",
        paddingTop: hp("3"),
    },
    foodItemImage: {
        width: hp("13"),
        height: hp("13"),
    },
    discountText: {
        color: "#FF4344",
        fontFamily: Fonts.RUBIK_MEDIUM
    },
    priceText: {
        color: colors.primaryGreenColor
    },
    itemTitle: {
        fontSize: 15,
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: "#3B3B43",
        marginVertical: hp("0.5")
    },
    weightText: {
        color: "#697281",
        fontFamily: Fonts.RUBIK_REGULAR
    },
    itemBottomContainer: {
        borderTopColor: colors.borderColorLight,
        width: "100%",
        height: hp("5.5"),
        justifyContent: "center",
        borderTopWidth: 1,
    },
    addCartText: {
        color: "#697281",
        fontFamily: Fonts.RUBIK_REGULAR,
    },
    addCartIcon: {
        color: colors.primaryGreenColor,
        marginRight: "5%"
    },
    AddSubtractText: {
        color: colors.primaryGreenColor
    },
    AddButton: {
        flex: 0.3,
        height: "100%",
        justifyContent: "center",
        borderRightColor: colors.borderColorLight,
        borderRightWidth: 1
    },
    subtractButton: {
        flex: 0.3,
        borderLeftColor: colors.borderColorLight ,
        height: "100%",
        justifyContent: "center",
        borderLeftWidth: 1
    },
    cartNumberText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: "#3B3B43"
    }
}

export default Styles;