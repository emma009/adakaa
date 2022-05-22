import React from 'react';
import {StatusBar, View} from 'react-native';
import AppHeader from "../components/Application/AppHeader/View";
import Globals from "../utils/Globals";
import AppConfig from "../../branding/App_config";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

const PropTypes = require('prop-types');

const colors = AppConfig.colors.default;
const commonStyles = AppConfig.styling.default;


const BaseView = (props) => {

    let {
        navigation,
        showAppHeader,
        title,
        childView,
        headerWithBack,
        rightIcon,
        onRightIconPress,
        applyBottomSafeArea,
        containerStyle,
        childContainerStyle
    } = props;

    return (
        <View style={[
            containerStyle,
            !showAppHeader && {
                marginTop: Globals.SAFE_AREA_INSET.top
            }]}>

            {
                showAppHeader &&
                <StatusBar backgroundColor={colors.white} barStyle="dark-content"/>

            }

            {
                showAppHeader &&

                <AppHeader
                    navigation={navigation}
                    headerWithBack={headerWithBack}
                    whiteHeader
                    rightIcon={rightIcon}
                    onRightIconPress={() => rightIcon !== "" && onRightIconPress()}
                    title={title}
                />

            }

            <View style={[
                childContainerStyle,
                {marginBottom: applyBottomSafeArea ? Globals.SAFE_AREA_INSET.bottom ? Globals.SAFE_AREA_INSET.bottom : hp(1) : 0}
            ]
            }>
                {childView()}
            </View>


        </View>


    );
}

BaseView.propTypes = {

    navigation: PropTypes.any,
    showAppHeader: PropTypes.bool,
    headerWithBack: PropTypes.bool,
    title: PropTypes.string,
    childView: PropTypes.node,
    rightIcon: PropTypes.string,
    onRightIconPress: PropTypes.func,
    applyBottomSafeArea: PropTypes.bool,

};

BaseView.defaultProps = {

    ...commonStyles.baseViewStyles,
    rightIcon: "",
    headerWithBack: true,
    applyBottomSafeArea: true,
    showAppHeader: true,
};

export default BaseView;
