import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AppConfig from "../../../../branding/App_config";

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function(styles, scheme, colors) {

    return {
        mainWrapper: {
            flex: 1,
            alignItems: "center",
            backgroundColor: scheme ? colors.primaryBackground : colors.secondaryBackground,
        },

        sectionContainer: {
            width: styles.gridWidth,
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
            color: colors.headingColor
        },

        sectionRightIcon: {
            width: hp(2),
            height: hp(2),
            tintColor: colors.subHeadingColor,
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

}
