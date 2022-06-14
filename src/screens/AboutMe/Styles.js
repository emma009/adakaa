import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";

const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;



export const Styles = function(colors){

    return {
        mainContainer: {
            flex: 1,
        },

        bottomButton: {
            flex: 1,
            justifyContent: "flex-end",
        },

        typeHeader: {
            fontFamily: Fonts.RUBIK_MEDIUM,
            fontSize: Typography.P1,
            color: colors.headingColor,
            marginVertical: hp("2")
        }
    }



}
