import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../../../branding/App_config";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const styles = AppConfig.styling.default;

let Styles = {
    mainContainer: {
        flex: 1
    },
    firstHalf: {
        flex: .5
    },
    secondHalf: {
        flex: .5,
        backgroundColor: colors.borderColorLight,
        alignItems: "center",
        paddingTop: hp("2.5%"),
        paddingBottom: hp("2.5%")
    },
    secondaryContainer: {
        width: styles.actualWidth,
        height: "95%",
        justifyContent: "space-between"
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    priceText: {
        color: colors.primaryGreenColor,
        fontSize: 18,
        fontFamily: Fonts.RUBIK_MEDIUM,
        width: "50%"
    },
    title: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: wp('8.5%'),
        color: "#3B3B43",
        marginTop: -16
    },
    weightText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        color: "#8B97A9"
    },
    detailText: {
        fontFamily: Fonts.RUBIK_LIGHT,
        lineHeight: hp("3%"),
    },
    cartCounter: {
        width: "100%",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        backgroundColor: "white",
    },
    cartCounterText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: "#697281",
        marginLeft: "5%"
    },
    ratingText: {
        fontFamily: Fonts.RUBIK_REGULAR,
    },
    reviewText: {
        fontFamily: Fonts.RUBIK_REGULAR,
    }
}

export default Styles;
