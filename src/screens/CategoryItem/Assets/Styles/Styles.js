import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Fonts from "../../../../../branding/carter/assets/Fonts";
import colors from "../../../../../branding/carter/styles/Colors";

let Styles = {
    categoryItemContainer: {
        width: wp("30%"),
        height: 140,
        borderRadius: 5,
    },
    imageWrapper: {
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        alignItems: "center",
        marginTop: "10%"
    },
    primaryTitle: {
        textTransform: "uppercase",
        fontFamily: Fonts.RUBIK_MEDIUM
    },
    secondaryTitle: {
        textTransform: "uppercase",
        fontFamily: Fonts.RUBIK_REGULAR
    },
    icon: {
        width: 80,
        height: 80
    }
}

export default Styles;
