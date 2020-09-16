import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import AppConfig from "../../../branding/App_config";
import Globals from "../../utils/Globals";
import Typography from "../../../branding/carter/styles/Typography";

const styles = AppConfig.styling.default;
const fonts = AppConfig.fonts.default;

let Styles = {
    mainWrapper: {
        flex: 1,
        alignSelf: "center",
        width: styles.gridWidth,
        paddingBottom: hp("3"),
    },

}

export default Styles;
