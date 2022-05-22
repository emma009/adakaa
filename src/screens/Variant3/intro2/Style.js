import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppConfig from "../../../../branding/App_config";

const colors = AppConfig.colors.default;
const fonts = AppConfig.fonts.default;
const styles = AppConfig.styling.default;
const Typography = AppConfig.typography.default;


let style = {


    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    paginationDotStyle: {
        width: hp(0.8),
        height: hp(0.8),
        marginLeft: -hp(1)
    },

    paginationInactiveDotStyle: {
        width: hp(0.8),
        height: hp(0.8)
    },

    paginationContainerStyle: {
        position: "absolute",
        width: "100%",
        alignItem: "center",
        bottom: hp(10),
        zIndex: 1
    },

    introLowerContainer: {
        position: "absolute",
        bottom: hp(3),
        width: styles.gridWidth3,
        alignSelf: "center",
        justifyContent: 'center',

    },

    introItemContainer: {
        flex: 1,
        alignItems: "center",
        paddingTop: hp(15),
        resizeMode: "cover"
    },

    introItemTitle: {
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.H7,
        width: wp("75"),
        textAlign: "center",
        marginTop: hp("5"),
        color: colors.textColorBlack1
    },

    introItemSubtitle: {
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        width: wp("75"),
        textAlign: "center",
        marginTop: hp("2"),
        lineHeight: hp(3),
        color: colors.textColorGrey1
    }

}

export default style;
