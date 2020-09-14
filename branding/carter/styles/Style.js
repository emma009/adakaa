import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import fonts from "../assets/Fonts";
import Typography from "./Typography";

const styles = {

    buttonFontStyle: {
        fontFamily: fonts.RUBIK_MEDIUM
    },

    socialButton: {
        height: 40,
        flexDirection: "row",
        alignItems: 'center',
        paddingLeft: wp("5")
    },

    socialButtonText: {
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P3,
        width: "100%",
        textAlign: "center"
    },

    buttonShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },

    actualWidth: wp("90%"),

    gridWidth: wp("90%"),

    gridSize: {
        width: wp("90%")
    },

};

export default styles;
