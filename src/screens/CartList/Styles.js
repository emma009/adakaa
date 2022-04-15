import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const styles = AppConfig.styling.default;


let Styles = {
    flatListContainer: {
        flex: 0.77,
        paddingBottom: hp("1"),
        paddingTop: hp("2")

    },
    bottomContainer: {
        flex: 0.23,
        backgroundColor: "white",
        justifyContent: "flex-end",
        paddingBottom: hp("3"),
    },
    totalContainer: {
        alignSelf: "center",
        flexDirection: "row",
        width: styles.gridWidth,
        marginBottom: hp("1")
    },
    subtotalLabelText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        flex: 0.5,
        color: colors.textColorGrey1

    },
    subtotalValueText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        flex: 0.5,
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
