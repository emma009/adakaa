import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppConfig from "../../../../branding/App_config";

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function(styles, scheme, colors) {

    return {
        mainWrapper: {
            flex: 1,
            alignItems: "center",
            backgroundColor: scheme === "dark" ? colors.primaryBackground : colors.secondaryBackground
        },

        categoryContainer: {
            width: styles.gridWidth,
            alignSelf: "center",
            marginVertical: hp(2)
        },

        container: {
            width: styles.gridWidth,
            alignSelf: "center"
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

        sectionHeadingIcon: {
            alignSelf: "center"
        },

        sectionRightIcon: {
            width: hp(2),
            height: hp(2),
            tintColor: colors.subHeadingColor,
            resizeMode: "contain"
        },

        categorySliderActiveText: {
            fontFamily: fonts.RUBIK_MEDIUM,
            fontSize: Typography.P2,
            color: colors.headingColor,
            marginHorizontal: 30
        },

        categorySliderInActiveText: {
            fontFamily: fonts.RUBIK_REGULAR,
            fontSize: Typography.P3,
            color: colors.headingColor,
            marginHorizontal: 10
        },

        sectionContainer: {
            width: styles.gridWidth,
            alignSelf: "center",
        },

        secondaryBannerContainer: {
            width: "48.5%",
            height: hp(30),
            resizeMode: "cover"
        },

        tertiaryBannerContainer: {
            width: "100%",
            height: hp(30),
            marginBottom: hp("1"),
            resizeMode: "cover"
        },

        promotionSliderContainer: {
            width: styles.gridWidth,
            height: hp("30%"),
            alignSelf: "center"
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
