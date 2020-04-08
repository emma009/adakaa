import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Fonts from "../../../../../branding/carter/assets/Fonts";
import colors from "../../../../../branding/carter/styles/Colors";

let Styles = {
    FoodItemContainer: {
        width: wp("40%"),
        height: 270,
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
    },
    mainContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: "10%"
    },
    FoodItemImage: {
        width: 120,
        height: 120,
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: "15%",
        position: "absolute",
        zIndex: 2,
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
        color: "#3B3B43"
    },
    weightText: {
        color: "#697281",
        fontFamily: Fonts.RUBIK_REGULAR
    },
    itemBottomContainer: {
        borderTopColor: colors.borderColorLight,
        width: "100%",
        borderTopWidth: 1
    },
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
