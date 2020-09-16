import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import fonts from "../../../branding/carter/assets/Fonts";
import Typography from "../../../branding/carter/styles/Typography";

let style = {

    introUpperContainer: {
        flex: 0.9,

    },

    introLowerContainer: {
        flex: 0.1,
        justifyContent:  'center',
        alignItems: 'center',

    },

    headerImage: {
        width: hp("40"),
        height: hp("40")
    },

    introUpperText: {
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.H6,
        width: wp("70"),
        textAlign: "center",
        marginTop: hp("5")
    },

    introLowerText: {
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P3,
        width: wp("70"),
        textAlign: "center",
        marginTop: hp("2")
    }


}

export default style;
