import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../../../../branding/App_config";
import Typography from "../../../../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;

let topContainerHeight = "15%";

let Styles = {
    foodItemContainer: {

        height: hp("15"),

        backgroundColor: "white",

        flexDirection: "row",

        alignItems: "center",

        paddingLeft: wp("5")

    },
    foodItemImage: {
        width: hp("10"),
        height: hp("10"),
        marginRight: wp("2")
    },
    priceText: {
        fontSize: Typography.P5,
        fontFamily: Fonts.RUBIK_REGULAR,
        color: colors.primaryGreenColor
    },
    itemTitle: {
        fontSize: Typography.P3,
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: "#3B3B43"
    },
    weightText: {
        color: "#697281",
        fontFamily: Fonts.RUBIK_LIGHT,
        fontSize: Typography.P5,
    },

}

export default Styles;
