import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppConfig from "../../../../branding/App_config";


const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;


let Style = {
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
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: colors.primaryGreenColor
    },
    itemTitle: {
        fontSize: Typography.P3,
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: colors.textColorBlack1,
        marginVertical: hp(0.5),
    },
    weightText: {
        color: colors.textColorGrey1,
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P5,
    },

}

export default Style;
