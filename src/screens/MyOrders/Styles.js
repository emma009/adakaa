import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;


let Styles = {

    headerContainer: {
        height: hp("13"),
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: wp("5"),
    },

    headerContainerActive: {
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColorLight
    },

    headerLeftIconContainer: {
        width: hp("7"),
        height: hp("7"),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp("3.5"),
        backgroundColor: colors.secondaryGreenColor,
        marginRight: wp(3),
    },

    headerLeftIcon: {
        width: hp(3.5),
        height: hp(3.5),
        resizeMode: "contain"
    },

    headerTitleText: {
        fontSize: Typography.P2,
        fontFamily: Fonts.RUBIK_MEDIUM,
    },

    headerSubtitleText: {
        fontSize: Typography.P6,
        fontFamily: Fonts.RUBIK_REGULAR,
        marginVertical: hp("0.5"),
        color: colors.textColorGrey1
    },

    headerSubtitleValueText: {
        fontSize: Typography.P4,
        fontFamily: Fonts.RUBIK_MEDIUM,
    },

    headerRightIconContainer: {
        flex: 1,
        alignItems: "flex-end",
        paddingRight: wp("5")
    },

    headerRightIcon: {
        width: hp(2.5),
        height: hp(2.5),
        tintColor: colors.primaryGreenColor
    },

    headerOrderDeliverContainer: {
        flexDirection: "row",
        height: hp(5),
        paddingLeft: wp("5"),
        alignItems: "center",
        backgroundColor: "white"
    },

    headerOrderDeliverCircle: {
        backgroundColor: colors.iconColorGrey1,
        width: hp("1.2"),
        height: hp("1.2"),
        borderRadius: hp("0.6"),
        marginRight: wp("2")
    },

    headerOrderDeliverDateText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P5,
        color: colors.textColorGrey1,
        flex: 1,
        textAlign: "right",
        paddingRight: wp("5")
    },

    contentContainerStyle: {
        paddingHorizontal: wp('3'),
        paddingVertical: hp("2"),
        backgroundColor: "white",
        flex: 1,
        alignItems: "center"
    },

    contentItemContainer: {
        flexDirection: "row",
    },

    contentItemLeftContainer: {
        alignItems: "center",
        marginRight: wp("2")
    },

    contentItemCircle: {
        width: hp("2"),
        height: hp("2"),
        borderRadius: hp("1"),
    },

    contentItemLine: {
        width: 2,
        height: hp("3")
    },

    contentItemLeftText: {
        flex: 0.5,
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P6,
        color: colors.textColorBlack1
    },

    contentItemRightText: {
        flex: 0.5,
        textAlign: "right",
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P6,
        color: colors.textColorGrey1
    },

}

export default Styles;
