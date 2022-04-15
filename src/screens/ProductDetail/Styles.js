import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Globals from "../../utils/Globals";
import Typography from "../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const styles = AppConfig.styling.default;

let Styles = {
    mainContainer: {
        flex: 1,
        backgroundColor: colors.textColorGrey2
    },
    upperImageContainer: {
        width: wp("100%"),
        height: hp("55%"),
        backgroundColor: "#fff",
    },
    upperImage: {
        width: "70%",
        height: "70%",
    },
    bottomContainer: {
        flex: 1,
        width: styles.gridWidth,
        alignSelf: "center",
        paddingTop: hp("2"),
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    favouriteIcon: {
        alignSelf: "flex-end",
    },
    priceText: {
        color: colors.primaryGreenColor,
        fontSize: Typography.H8,
        fontFamily: Fonts.RUBIK_MEDIUM,
        width: "50%"
    },
    title: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.H8,
        color: colors.textColorBlack1,
        marginBottom: hp("0.5")
    },
    weightText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        color: colors.textColorGrey3,
        marginBottom: hp("0.5")
    },
    detailText: {
        fontFamily: Fonts.RUBIK_LIGHT,
        fontSize: Typography.P4,
        lineHeight: hp("3%"),
        color: colors.textColorGrey1
    },
    cartCounter: {
        width: "100%",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        backgroundColor: "white",
        marginVertical: hp("1.5")
    },
    cartCounterText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: colors.textColorGrey1,
        marginLeft: "5%"
    },
    ratingText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P3,
        colors: colors.textColorBlack1
    },
    reviewText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        color: colors.textColorGrey1
    }
}

export default Styles;
