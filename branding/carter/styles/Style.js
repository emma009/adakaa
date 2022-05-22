import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import fonts from "../assets/Fonts";
import Typography from "./Typography";
import colors from "./Colors";


const gridWidth = wp(90);
export const buttonHeight = hp(5.8);
const styles = {

    buttonShadow: {
        shadowColor: colors.primaryGreenColor,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2.22,

        elevation: 3,
        borderRadius: 5
    },


    //Button Styles
    primaryButtonStyle: {
        height: buttonHeight,

        backgroundColor: colors.buttonGreenColor,

        shadowColor: colors.primaryGreenColor,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2.22,

        elevation: 3,
    },

    primaryButtonTextStyle: {
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.P4,
        color: colors.primaryButtonTextColor
    },


    //Input Styles
    primaryInputStyle: {
        placeholderTextColor: colors.textColorGrey1,
        leftIconColor: colors.iconColorGrey1,
        backgroundColor: colors.white,
        defaultContainerStyle: {
            marginVertical: hp("0.5"),
            height: buttonHeight,
        },
        leftIconContainerStyle: {
            paddingRight: wp('3'),
            height: buttonHeight,
        },
        multilineInputHeight: {
            height: hp("30")
        }
    },

    secondaryInputStyle: {
        placeholderTextColor: colors.textColorGrey1,
        leftIconColor: colors.iconColorGrey1,
        backgroundColor: colors.textColorGrey2,
        defaultContainerStyle: {
            marginVertical: hp("0.5"),
            height: buttonHeight,
        },
        leftIconContainerStyle: {
            paddingRight: wp('3'),
            height: buttonHeight,
        },
        multilineInputHeight: {
            height: hp("30")
        }
    },


    //Header Styles
    headerStyles: {
        headerIconContainerStyle: {
            width: wp("10"),
            height: "100%",
            justifyContent: "center",
            zIndex: 1,
            alignItems: "center"
        },

        headerIconStyle: {
            width: hp(2.5),
            height: hp(2.5),
        },

        centerContainerStyle: {
            justifyContent: "center",
            height: "100%",
            zIndex: 1,
            alignItems: "center"
        }
    },

    //BaseView Styles
    baseViewStyles: {
        containerStyle: {
            flex: 1,
            backgroundColor: colors.textColorGrey2
        },

        childContainerStyle: {
            flex: 1,
            width: gridWidth,
            alignSelf:"center",
        }
    },


    //Rating Styles
    ratingStyle: {
        fullStarColor: colors.iconColorOrange1,
        emptyStarColor: colors.borderColorLight

    },

    promotionalTextStyle: {
        color: colors.primaryGreenColor,
        fontFamily: fonts.RUBIK_MEDIUM,
        fontSize: Typography.P8
    },

    gridWidth: wp("90%"),
    gridWidth3: wp("85%"),

};

export default styles;
