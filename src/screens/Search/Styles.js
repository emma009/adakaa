import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Globals from "../../utils/Globals";

const fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

export const Styles = function(scheme, styles, colors) {

    return {
        container: {
            flex: 1,
            backgroundColor: colors.secondaryBackground
        },

        searchContainer: {
            // paddingTop: Globals.SAFE_AREA_INSET.top + hp(1),
            backgroundColor: colors.primaryBackground,
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
            tintColor: colors.headingColor,
            resizeMode: "contain"
        },

        searchInputContainer: [
            {
                backgroundColor: colors.inputSecondaryBackground,
                flex: 1,
                height: styles.buttonHeight
            },
        ],

        searchInputLeftIconContainer: [
            {
                paddingRight: wp('5'),
                height: styles.buttonHeight
            },
        ],

        searchInputLeftIcon: {
            width: hp(2),
            height: hp(2),
            tintColor: colors.headingColor,
            resizeMode: "contain"
        },

        contentContainerStyle: {
            width: styles.gridWidth,
            alignSelf: "center",
            alignItems: "center"
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
            color: colors.headingColor
        },

        categoryBtnText: {
            fontFamily: fonts.RUBIK_MEDIUM,
            fontSize: Typography.P5,
            color: colors.subHeadingQuaternaryColor
        },

        historyItemContainer: {
            flexDirection: 'row',
            flexShrink: 1,
            flexWrap: 'wrap',
        },

        historyItemTextContainer: {
            backgroundColor: colors.primaryBackground,
            padding: hp(1.5),
            marginRight: hp(1),
            marginBottom: hp("0.5")
        },

        historyItemText: {
            fontSize: Typography.P6,
            fontFamily: fonts.RUBIK_REGULAR,
            color: colors.subHeadingColor
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
            styles.primaryButtonStyle,
            {
                borderRadius: hp(0.3),
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: colors.primaryBackground,
                shadowColor: colors.subHeadingColor,
                shadowOpacity: 0
            }
        ],

        buttonIcon: {
            width: hp(2),
            height: hp(2),
            tintColor: colors.inactiveColor,
            left: wp("5"),
            resizeMode: "contain"
        },

        buttonText: [
            styles.primaryButtonTextStyle, {
                color: colors.subHeadingColor,
                width: "100%",
                textAlign: "center"
            }
        ],

        imageSearchButton: {
            flex: 0.5,
            marginRight: hp(1)
        },

        voiceSearchButton: {
            flex: 0.5
        }

    }

}
