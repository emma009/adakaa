import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const styles = AppConfig.styling.default;


let Styles = {

    deliveryContainer: {
        height: hp("15"),
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        marginTop: hp("2")
    },

    deliveryHeader: {

        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P3,
        marginVertical: hp("1"),
        color: colors.textColorBlack1

    },

    deliveryDescription: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P5,
        lineHeight: Typography.P3,
        color: colors.textColorGrey1
    },

    deliveryPrice: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P3,
        flex: 0.2,
        textAlign: "right",
        paddingRight: wp("5"),
        color: colors.primaryGreenColor
    },

    flatListContainer: {

        flex: 0.8,
        paddingBottom: hp("1")

    },
    bottomContainer: {
        flex: 0.2,
        backgroundColor: "white",
        justifyContent: "flex-end",
        paddingBottom: hp("3")
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

    },
    subtotalValueText: {
        fontFamily: Fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        flex: 0.5,
        textAlign: "right"
    },
    totalLabelText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P1,
        flex: 0.5
    },
    totalValueText: {
        fontFamily: Fonts.RUBIK_MEDIUM,
        fontSize: Typography.P1,
        flex: 0.5,
        textAlign: "right"
    },

}

export default Styles;
