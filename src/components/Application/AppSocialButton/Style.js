import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';


let Style = {

    container: {
        borderRadius: hp(0.3),
        justifyContent: "center"
    },

    icon: {
        width: hp(2),
        height: hp(2),
        position: "absolute",
        left: wp("5"),
        resizeMode: "contain"
    },

    title: {
        width: "100%",
        textAlign: "center"
    }

}

export default Style;
