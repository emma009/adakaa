import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Typography from "../../../../../../branding/carter/styles/Typography";

import AppConfig from "../../../../../../branding/App_config";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;

let Styles = {
    foodItemContainer: {
        width: wp("44%"),

        backgroundColor: "white",
        borderRadius: 5,
        flexDirection: "column",

        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.22,
        // shadowRadius: 2.22,
        // elevation: 3,

        marginRight: hp("1.5"),
        marginBottom: hp("1.5"),

    },
    topContainer: {
        flexDirection: "row",
    },
    mainContainer: {
        flex: 1,
        alignItems: "center",
    },
    foodItemImage: {
        width: hp("13"),
        height: hp("13"),
    },
    discountText: {
        color: colors.iconColorRed3,
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P7
    },
    priceText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: colors.primaryGreenColor,
        fontSize: Typography.P6
    },
    itemTitle: {
        fontSize: Typography.P3,
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: colors.textColorBlack1,
        marginVertical: hp("0.5")
    },
    weightText: {
        fontSize: Typography.P6,
        color: colors.textColorGrey1,
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
        color: colors.textColorGrey1,
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,

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
        color: colors.textColorBlack1
    }
}

export default Styles;
