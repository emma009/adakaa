import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Globals from "../../utils/Globals";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;
const styles = AppConfig.styling.default;

let Styles = {

    container: {
        flex: 1,
        backgroundColor: colors.textColorGrey2,
        paddingBottom: Globals.SAFE_AREA_INSET.bottom
    },

    imageContainer: {
        width: wp("100%"),
        height: hp("55%"),
        backgroundColor: "#fff",
        paddingTop: Globals.SAFE_AREA_INSET.top
    },

    mainImage: {
        width: "70%",
        height: "100%",
        alignSelf: "center",
        resizeMode: "contain"
    },

    bottomContainer: {
        flex: 1,
        width: styles.gridWidth,
        alignSelf: "center",
        paddingTop: hp("2"),
    },

    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    favouriteContainer: {
        width: "50%",
        height: hp(2),
        justifyContent: "center",
        alignItems: "flex-end"
    },

    favouriteIcon: {
        width: hp(2),
        height: hp(2),
        resizeMode: "contain"
    },


    priceText: {
        color: colors.primaryGreenColor,
        fontSize: Typography.H8,
        fontFamily: Fonts.RUBIK_MEDIUM,
        width: "50%"
    },

    nameText: {
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

    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: hp("1")
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
    },

    detailText: {
        fontFamily: Fonts.RUBIK_LIGHT,
        fontSize: Typography.P4,
        lineHeight: hp("3%"),
        color: colors.textColorGrey1,
    },

    seeMoreStyle: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P4,
        color: colors.textColorBlack1,
    },

    cartCounterContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        backgroundColor: "white",
        marginVertical: hp("1")
    },

    cartCounterText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        color: colors.textColorGrey1,
        marginLeft: "5%"
    },


}

export default Styles;
