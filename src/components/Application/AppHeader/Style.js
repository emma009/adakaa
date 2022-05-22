import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from "../../../../branding/carter/styles/Colors";

let style = {

    transparentHeader: {
        position: "absolute",
        width: wp("100"),
        backgroundColor: "transparent",
        borderBottomWidth: 0,
        zIndex: 1
    },

    whiteHeader: {
        backgroundColor: "white",

    },

    shadow: {
        shadowColor: colors.textColorGrey1,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.22,

        elevation: 3,
        borderRadius: 5
    }



}

export default style;
