import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";

const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;


export const Styles = function(styles, colors) {

    return {
        mainContainer: {
            flex: 1,
            backgroundColor: colors.headerBackground
        },

        flatListContainer: {
            flex: 0.74,
            paddingTop: hp("2"),
        },
        bottomContainerParent: {
            flex: 0.26,
            backgroundColor: colors.primaryBackground,
        },
        bottomContainer: {
            alignSelf: "center",
            backgroundColor: colors.primaryBackground,
            paddingTop: hp("1"),
            width: styles.gridWidth,
        },
        totalContainer: {
            flexDirection: "row",
            marginBottom: hp("1"),
        },
        subtotalLabelText: {
            fontFamily: Fonts.RUBIK_REGULAR,
            fontSize: Typography.P4,
            color: colors.subHeadingColor
        },
        subtotalValueText: {
            fontFamily: Fonts.RUBIK_REGULAR,
            fontSize: Typography.P4,
            flex: 1,
            textAlign: "right",
            color: colors.subHeadingColor
        },
        totalLabelText: {
            fontFamily: Fonts.RUBIK_MEDIUM,
            fontSize: Typography.P1,
            flex: 0.5,
            color: colors.headingColor
        },
        totalValueText: {
            fontFamily: Fonts.RUBIK_MEDIUM,
            fontSize: Typography.P1,
            flex: 0.5,
            textAlign: "right",
            color: colors.headingColor
        },
        horizontalDivider: {
            width: styles.gridWidth,
            height: 1,
            alignSelf: "center",
            marginBottom: hp("1"),
            backgroundColor: colors.borderColorLight
        }
    }

}

export default Styles;
