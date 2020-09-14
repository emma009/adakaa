import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

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

    }


}

export default style;