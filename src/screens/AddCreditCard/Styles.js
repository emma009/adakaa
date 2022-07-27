import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import AppConfig from "../../../branding/App_config";

const Typography = AppConfig.typography.default;
const Fonts = AppConfig.fonts.default;

export const Styles = function(colors) {

  return {
    mainContainer: {
      flex: 1,
    },

    parentContainer: {
      flex: 0.9,
      marginTop: hp(3),
    },

    creditCardImageStyle: {
      width: "100%",
      height: hp("30"),
      resizeMode: "cover"
    },

    defaultText: {
      marginLeft: hp(1),
      alignSelf: "center",
      fontFamily: Fonts.RUBIK_REGULAR,
      fontSize: Typography.P4,
      color: colors.headingColor,
    },


    bottomButton: {
      flex: 0.1,
      justifyContent: "center",
    },


    primaryText: {
      fontFamily: Fonts.RUBIK_MEDIUM,
      fontSize: Typography.H8,
      paddingVertical: hp("3"),
    },

    secondaryText: {
      fontFamily: Fonts.RUBIK_LIGHT,
      fontSize: Typography.P2,
      textAlign: "center",
    },

    horizontalInputsContainer: {
      flexDirection: "row",
      justifyContent: "space-between"
    },

    switchContainer: {
      flexDirection: "row",
      marginTop: hp(1)
    },

    rating: {
      paddingVertical: hp("2"),
    },
  };


};

export default Styles;
