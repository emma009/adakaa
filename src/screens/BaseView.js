import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';
import AppHeader from "../components/Application/AppHeader/View";
import styles from "../../branding/carter/styles/Style";
import Globals from "../utils/Globals";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import AppConfig from "../../branding/App_config";
const colors = AppConfig.colors.default;

const PropTypes = require('prop-types');

class BaseView extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        let {
            navigation,
            showAppHeader,
            title,
            childView,
            rightIcon,
            onRightIconPress,
            applyBottomSafeArea
        } = this.props;

        return(
            <View style={[{flex: 1, backgroundColor: colors.textColorGrey2}, !showAppHeader && {marginTop: Globals.SAFE_AREA_INSET.top}]}>

                {
                    showAppHeader &&
                    <StatusBar backgroundColor={"white"} barStyle="dark-content" />

                }

                {
                    showAppHeader &&

                    <AppHeader
                        navigation={navigation}
                        headerWithBack
                        whiteHeader
                        rightIcon={rightIcon}
                        onRightIconPress={() => rightIcon !== "" && onRightIconPress()}
                        title={title}
                    />

                }

                <View style={[{flex: 1, width: styles.gridWidth2, alignSelf:"center", marginBottom: applyBottomSafeArea ? Globals.SAFE_AREA_INSET.bottom: 0},]}>
                    {childView()}
                </View>


            </View>


        );
    }
}

BaseView.propTypes = {

    navigation: PropTypes.any,
    showAppHeader: PropTypes.bool,
    title: PropTypes.string,
    childView:              PropTypes.node,
    rightIcon: PropTypes.string,
    onRightIconPress: PropTypes.func,
    applyBottomSafeArea: PropTypes.bool,

};

BaseView.defaultProps = {

    rightIcon: "",
    applyBottomSafeArea: true,
    showAppHeader: true,

};

module.exports = BaseView;
