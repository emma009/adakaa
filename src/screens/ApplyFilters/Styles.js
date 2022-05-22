import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;

let Styles = {

    mainContainer: {
        flex: 1
    },

    cardContainerStyle: {
        width: "100%",
        backgroundColor: "white",
        paddingHorizontal: wp(4),
        paddingTop: hp(2),
        paddingBottom: hp(2),
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColorLight
    },

    titleStyle: {
        fontSize: Typography.P3,
        fontFamily: Fonts.RUBIK_MEDIUM,
        marginBottom: hp(1),
        color: colors.textColorBlack1
    },

    inputContainerStyle: {
        width: wp(40),
        backgroundColor: colors.textColorGrey2,
        justifyContent: "center"
    },

    ratingContainerStyle: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.textColorGrey2,
        height: hp(5.5),
        paddingHorizontal: wp(2)
    },

    ratingTextStyle: {
        fontSize: Typography.P5,
        fontFamily: Fonts.RUBIK_REGULAR,
        color: colors.textColorGrey1,
        flex: 1,
        textAlign: "right"
    },

    othersItemContainerStyle: {
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: hp("1.5"),
        borderBottomColor: colors.borderColorLight
    },

}

export default Styles;
