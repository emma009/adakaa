import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const Styles = function(scheme, colors) {

    return {
        container: {
            borderRadius: hp(0.3),
            justifyContent: "center"
        },

        icon: {
            width: hp(2.5),
            height: hp(2.5),
            position: "absolute",
            left: wp("5"),
            resizeMode: "contain"
        },

        title: {
            width: "100%",
            textAlign: "center"
        }
    }

}
