import React from 'react';
import AppConfig from "../../../../branding/App_config";
import {Button} from "react-native-elements";

const PropTypes = require('prop-types');

const styles = AppConfig.styling.default;


const AppButton = (props) => {

    const {
        title,
        onPress,
        buttonStyle,
        titleStyle
    } = props;


    return (

        <Button
            buttonStyle={buttonStyle}
            title={title}
            titleStyle={titleStyle}
            onPress={() => {
                onPress()
            }}/>

    )
}

AppButton.propTypes = {

    title: PropTypes.string,

    onPress: PropTypes.func.isRequired,

    buttonStyle: PropTypes.any,

    titleStyle: PropTypes.any,
};

AppButton.defaultProps = {
    buttonStyle: styles.primaryButtonStyle,
    titleStyle: styles.primaryButtonTextStyle,
    title: "Text"
};

export default AppButton;

