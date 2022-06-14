import React from "react";
import { Animated, Image, TouchableOpacity, useColorScheme, View } from "react-native";

import { Text } from "react-native-elements";
import PropTypes from "prop-types";
import AppConfig from "../../../../branding/App_config";
import { Styles } from "./Style";
import Easing from "react-native/Libraries/Animated/src/Easing";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useTheme } from "@react-navigation/native";

const assets = AppConfig.assets.default;

//Animation Constants
const activeAnimConfig = {
  toValue: 1,
  duration: 300,
  easing: Easing.linear,
  useNativeDriver: true,
};

const deActiveAnimConfig = {
  toValue: 0,
  duration: 300,
  easing: Easing.linear,
  useNativeDriver: true,
};


export const FavouriteItem = (props) => {

  //Theme based styling and colors
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const itemStyles = Styles(scheme, colors);


  const {
    isActive,
    item,
    onDeletePress,
  } = props;

  const renderRightActions = (progress, dragX) => {
    return (

      <TouchableOpacity
        onPress={() => {
          onDeletePress();
        }}
        style={itemStyles.rightSwipeContainer}>

        <Image
          source={assets.trash_icon}
          style={itemStyles.rightSwipeIcon} />

      </TouchableOpacity>

    );
  };


  const child = () => {


    const spin = item.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "180deg"],
    });

    if (isActive) {
      Animated.timing(
        item.spinValue,
        activeAnimConfig,
      ).start();
    } else {
      Animated.timing(
        item.spinValue,
        deActiveAnimConfig,
      ).start();
    }

    return <Swipeable
      key={item.key}
      friction={2}
      leftThreshold={80}
      rightThreshold={40}
      renderRightActions={renderRightActions}
      containerStyle={ itemStyles.swipeableContainerParent }>

      <View style={ itemStyles.swipeableContainer }>

        <View style={ itemStyles.swipeableMainContainer }>

          <View style={[itemStyles.leftImageContainer, { backgroundColor: item.color }]}>
            <Image
              source={assets.cart_regular_icon}
              style={itemStyles.leftImage} resizeMode={"contain"} />

          </View>

          <View style={{}}>
            <Text style={itemStyles.titleText}>{item.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={itemStyles.subtitleText}>{"Total Items: "}</Text>
              <Text style={itemStyles.subtitleText}>{item.totalItems}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={itemStyles.subtitleText}>{"Added on: "}</Text>
              <Text style={itemStyles.subtitleText}>{item.addedOn}</Text>
            </View>

          </View>


        </View>

        <View style={itemStyles.rightIconContainer}>
          <Animated.Image source={assets.drop_down_icon} style={[
            { transform: [{ rotate: spin }] },
            itemStyles.rightIcon,
          ]} resizeMode={"contain"} />
        </View>

      </View>

    </Swipeable>;
  };

  return (
    <View
      style={
        [
          itemStyles.container,
          { marginBottom: 0 },
          isActive && itemStyles.childActiveContainer ,
        ]
      }>
      {child()}
    </View>
  );

};

FavouriteItem.propTypes = {
  isActive: PropTypes.bool,
  item: PropTypes.any,
};

FavouriteItem.defaultProps = {};


