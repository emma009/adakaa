import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = {
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
    actualWidth: wp("85%"),

};

export default styles;
