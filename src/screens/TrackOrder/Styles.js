import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";

const colors = AppConfig.colors.default;
const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;



let Styles = {

    headerContainer: {
        height: hp("13"),
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: wp("5"),
        borderBottomWidth: 1,
        borderBottomColor: "#dadada"
    },


    headerLeftIconContainer: {
        width: hp("6"),
        height: hp("6"),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.secondaryGreenColor,
        borderRadius: hp("3"),
        marginRight: wp(3)
    },

    headerLeftIcon: {
        width: hp(2.5),
        height: hp(2.5),
        tintColor: colors.primaryGreenColor,
        resizeMode: "contain"
    },

    headerTitleText: {
        fontSize: Typography.P2,
        fontFamily: fonts.RUBIK_MEDIUM,
        color: colors.textColorBlack1
    },

    subtitleText: {
        fontSize: Typography.P6,
        fontFamily: fonts.RUBIK_REGULAR,
        marginVertical: hp("0.5"),
        color: colors.textColorGrey1
    },

    subtitleValueText: {
        fontSize: Typography.P4,
        fontFamily: fonts.RUBIK_MEDIUM,
        color: colors.textColorBlack1,
    },

    contentContainer: {
        alignItems: "center",
        paddingHorizontal: wp ('5'),
        paddingVertical: hp("2"),
        marginTop: hp(1),
        backgroundColor: "white"
    },

    orderStatusItemContainer: {
        width: "100%",
        flexDirection: "row"
    },

    orderStatusLeftContainer: {
        alignItems: "center",
        marginRight: wp("3")
    },

    orderStatusLeftIconContainer: {
        width: hp("6"),
        height: hp("6"),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp("3"),
    },

    orderStatusLeftIcon: {
        width: hp(2.5),
        height: hp(2.5),
        resizeMode: "contain"
    },

    orderStatusLine: {
        width: 2,
        height: hp("4")
    },

    orderStatusTitle: {
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.P3,
        color: colors.textColorBlack1
    },

    orderStatusSubtitle: {
        fontFamily: fonts.RUBIK_LIGHT,
        fontSize: Typography.P5,
        color: colors.textColorGrey1
    },

}

export default Styles;
