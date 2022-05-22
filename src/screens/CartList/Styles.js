import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;
const styles = AppConfig.styling.default;


let Styles = {

    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
    },

    flatListContainer: {
        flex: 0.76,
        paddingBottom: hp("1"),
        paddingTop: hp("2")

    },
    bottomContainer: {
        flex: 0.24,
        backgroundColor: "white",
        justifyContent: "center",
        alignSelf: "center",
        paddingBottom: hp("5"),
        width: styles.gridWidth,
    },
    totalContainer: {
        flexDirection: "row",
        marginBottom: hp("1"),
    },
    subtotalLabelText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        color: colors.textColorGrey1

    },
    subtotalValueText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        flex: 1,
        textAlign: "right",
        color: colors.textColorGrey1
    },
    totalLabelText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P1,
        flex: 0.5,
        color: colors.textColorBlack1
    },
    totalValueText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P1,
        flex: 0.5,
        textAlign: "right",
        color: colors.textColorBlack1
    },

}

export default Styles;
