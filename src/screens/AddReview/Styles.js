import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import AppConfig from "../../../branding/App_config";

const Typography = AppConfig.typography.default;
const Fonts = AppConfig.fonts.default;

export const Styles = function(colors) {

  return {
    mainContainer: {
      flex: 1,
      alignItems: "center",
    },

    primaryText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.H8,
      paddingVertical: hp("3"),
      color: colors.headingColor,
    },

    secondaryText: {
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P3,
      textAlign: "center",
      color: colors.subHeadingColor,
      width: "80%",
    },

    ratingContainerStyle: {
      paddingVertical: hp("2"),
    },


    bottomButton: {
      flex: 1,
      width: "100%",
      justifyContent: "flex-end",
    },
  };

};

export default Styles;
