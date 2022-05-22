import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";

const colors = AppConfig.colors.default;
const Typography = AppConfig.typography.default;
const fonts = AppConfig.fonts.default;


let Styles = {

    contentContainer: {
        paddingHorizontal: wp('3'),
        paddingVertical: hp("2"),
        backgroundColor: "white"
    },

    defaultText: {
        marginLeft: hp(1),
        alignSelf: "center",
        fontFamily: fonts.RUBIK_REGULAR,
        fontSize: Typography.P4,
        color: colors.textColorGrey1
    },


}

export default Styles;
