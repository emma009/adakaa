import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AppConfig from "../../../../branding/App_config";

const styles = AppConfig.styling.default;
const fonts = AppConfig.fonts.default;
const colors = AppConfig.colors.default;
const Typography = AppConfig.typography.default;

let Styles = {
    mainWrapper: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
        width: styles.gridWidth,
        backgroundColor: colors.textColorGrey2,
    },

    sectionContainer: {
        alignItems: "center"
    },

    sectionHeading: {
        width: styles.gridWidth,
        flexDirection: "row",
        alignItem: "center",
        justifyContent: "space-between",
        paddingVertical: hp("1"),
        marginVertical: hp("1"),
    },

    sectionHeadingText: {
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.P2,
        color: colors.textColorBlack1
    },

    sectionRightIcon: {
        width: hp(2),
        height: hp(2),
        tintColor: colors.textColorGrey1,
        resizeMode: "contain"
    },

    sectionHeadingIcon: {
        alignSelf: "center"
    },

    promotionSliderContainer: {
        width: "100%",
        height: hp("30%")
    },

    promotionSliderActiveDot: {
        width: hp(2),
        height: hp(0.8),
        marginRight: -hp(1)
    },

    promotionSliderInActiveDot: {
        width: hp(0.8),
        height: hp(0.8)
    },

    promotionPaginationContainer: {
        position: "absolute",
        bottom: 0,
        zIndex: 1
    }

}

export default Styles;
