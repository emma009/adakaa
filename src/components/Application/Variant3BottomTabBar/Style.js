import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppConfig from "../../../../branding/App_config";
import Globals from "../../../utils/Globals";


const colors = AppConfig.colors.default;


let Style = {

    container: {
        flexDirection: 'row',
        backgroundColor: colors.primaryGreenColor,
    },

    bottomTabContainer: {
        flex: 1,
        height: hp(6.5),
        backgroundColor: colors.primaryGreenColor,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: Globals.SAFE_AREA_INSET.bottom
    },

    bottomTabItemContainer: {
        borderRadius: hp(2.5),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },

    bottomTabIcon: {
        width: hp(3),
        height: hp(3),
        resizeMode: "contain"
    }

}

export default Style;
