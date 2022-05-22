import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Globals from "../../utils/Globals";
import Typography from "../../../branding/carter/styles/Typography";
import {buttonHeight} from "../../../branding/carter/styles/Style";

const styles = AppConfig.styling.default;
const fonts = AppConfig.fonts.default;
const colors = AppConfig.colors.default;

let Styles = {

    container: {
        flex: 1,
        backgroundColor: colors.textColorGrey2
    },

    searchContainer: {
        paddingTop: Globals.SAFE_AREA_INSET.top + hp(1),
        backgroundColor: "white",
        flexDirection: "row",
        paddingVertical: hp(1),
        paddingHorizontal: wp(5)
    },

    searchLeftIconContainer: {
        width: wp("10"),
        justifyContent: "center"
    },

    headerLeftIcon: {
        width: hp(2.5),
        height: hp(2.5),
        tintColor: colors.textColorBlack1,
        resizeMode: "contain"
    },

    searchInputContainer: [
        {
            backgroundColor: colors.textColorGrey2,
            flex: 1,
            height: buttonHeight
        },
    ],

    searchInputLeftIconContainer: [
        {
            paddingRight: wp('5'),
            height: buttonHeight
        },
    ],

    searchInputLeftIcon: {
        width: hp(2),
        height: hp(2),
        tintColor: colors.textColorBlack1,
        resizeMode: "contain"
    },

    contentContainerStyle: {
        width: styles.gridWidth, alignSelf: "center", alignItems: "center"
    },

    categoryTitleContainer: {
        width: styles.gridWidth,
        flexDirection: "row",
        alignItem: "center",
        justifyContent: "space-between",
        paddingVertical: hp("2"),
        marginTop: hp("1"),
    },

    categoryTitleText: {
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.P3,
        color: colors.textColorBlack1
    },

    categoryBtnText: {
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.P5,
        color: colors.textColorBlue1
    },

    historyItemContainer: {
        flexDirection: 'row',
        flexShrink: 1,
        flexWrap: 'wrap',
    },

    historyItemTextContainer: {
        backgroundColor: 'white',
        padding: hp(1.5),
        marginRight: hp(1),
        marginBottom: hp("0.5")
    },

    historyItemText: {
        fontSize: Typography.P6,
        fontFamily: fonts.RUBIK_REGULAR,
        color: colors.textColorGrey1
    },

    bottomButtonsContainer: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        flex: 1,
        width: styles.gridWidth,
        alignItems: "flex-end",
        marginBottom: Globals.SAFE_AREA_INSET.bottom
    },

    buttonContainer: [
        // styles.socialButton,
        // styles.buttonHeight,
        styles.primaryButtonStyle,
        {
            borderRadius: hp(0.3),
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.white,
            shadowColor: colors.textColorGrey1,
            shadowOpacity: 0
        }
    ],

    buttonIcon: {
        width: hp(2),
        height: hp(2),
        tintColor: colors.iconColorGrey1,
        left: wp("5"),
        resizeMode: "contain"
    },

    buttonText: [
        styles.primaryButtonTextStyle, {
            color: colors.textColorGrey1,
            width: "100%",
            textAlign: "center"
        }],

}

export default Styles;
