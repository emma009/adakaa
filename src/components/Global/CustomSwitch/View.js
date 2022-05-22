import React, {useEffect, useState} from 'react';

import {Switch} from "react-native-switch";
import AppConfig from "../../../../branding/App_config";

const colors = AppConfig.colors.default;

export const CustomSwitch = (props) => {

    const [checked, setChecked] = useState(false);

    const {
        onValueChange
    } = props;


    useEffect(() => {
        onValueChange(checked)
    }, [checked])

    return (

        <Switch
            value={checked}
            onValueChange={(val) => {
                setChecked(val)
            }}
            circleSize={17}
            barHeight={20}
            backgroundActive={colors.primaryGreenColor}
            backgroundInactive={"white"}
            circleActiveColor={"white"}
            circleInActiveColor={"transparent"}
            containerStyle={{
                borderWidth: 2,
                borderColor: checked ? colors.primaryGreenColor : colors.iconColorGrey1
            }}
            changeValueImmediately={true}
            innerCircleStyle={{
                borderWidth: checked ? 1 : 2,
                borderColor: checked ? colors.primaryGreenColor : colors.iconColorGrey1
            }}
            renderActiveText={false}
            renderInActiveText={false}
            switchLeftPx={5}
            switchRightPx={1.8}
            switchBorderRadius={20}
        />


    )


}
