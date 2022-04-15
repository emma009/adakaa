import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import fonts from "../assets/Fonts";
import Typography from "./Typography";
import colors from "./Colors";

const styles = {

    buttonFontStyle: {
        fontFamily: fonts.RUBIK_MEDIUM
    },

    socialButton: {
        height: hp(5.5),
        flexDirection: "row",
        alignItems: 'center',
    },

    socialButtonText: {
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P3,
        width: "100%",
        textAlign: "center"
    },

    buttonStyle: {
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.P4,
        color: "#fefefc"
    },

    buttonShadow: {
        shadowColor: colors.primaryGreenColor,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2.22,

        elevation: 3,
    },


    gridWidth: wp("90%"),
    gridWidth1: wp("80%"),
    gridWidth2: wp("92%"),
    gridWidth3: wp("85%"),

};

export default styles;
