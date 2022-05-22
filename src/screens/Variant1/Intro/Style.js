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

    introUpperContainer: {
        flex: 0.9
    },

    introItemContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },

    introItemImage: {
        width: hp("40"),
        height: hp("40"),
        resizeMode: "contain"
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
        lineHeight: hp(4),
        color: colors.textColorGrey1
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

    introLowerContainer: {
        flex: 0.1,
        width: styles.gridWidth3,
        justifyContent:  'center',
        alignSelf: "center"
    }

}

export default style;
