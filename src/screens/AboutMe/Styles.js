import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";

const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;


export const Styles = function (colors) {

    return {
        mainContainer: {
            flex: 1,
        },

        upperContainer: {
            flex: 0.9,
        },

        bottomButton: {
            flex: 0.1,
            justifyContent: "center",
        },

        typeHeader: {
            fontFamily: Fonts.RUBIK_MEDIUM,
            fontSize: Typography.P1,
            color: colors.headingColor,
            marginTop: hp("3"),
            marginBottom: hp("2")
        }
    }


}
