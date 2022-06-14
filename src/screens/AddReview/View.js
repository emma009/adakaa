import React, { useRef, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View";
import { Styles } from "./Styles";
import AppConfig from "../../../branding/App_config";
import StarRating from "react-native-star-rating";
import AppButton from "../../components/Application/AppButton/View";
import { useTheme } from "@react-navigation/native";

const assets = AppConfig.assets.default;


export const AddReview = (props) => {

  //Input reference
  let inputRef = useRef();


  //Theme based styling and colors
  const { colors } = useTheme();
  const screenStyles = Styles(colors);


  //Internal states
  const [rating, setRating] = useState(4.5);
  const [experience, setExperience] = useState("");


  return (

    <BaseView
      navigation={props.navigation}
      title={"Write Review"}
      headerWithBack
      applyBottomSafeArea
      childView={() => {

        return (

          <View style={screenStyles.mainContainer}>

            <Text style={screenStyles.primaryText}>What do you think?</Text>
            <Text style={screenStyles.secondaryText}>Please give your rating by clicking on the stars
              below.</Text>

            <StarRating
              disabled={false}
              maxStars={5}
              rating={rating}
              starSize={hp(5.5)}
              fullStarColor={colors.ratingActiveColor}
              emptyStarColor={colors.ratingInActiveColor}
              selectedStar={(rating) => {
                setRating(rating);
              }}
              containerStyle={screenStyles.ratingContainerStyle}
            />

            <AppInput
              multilineInput
              textInputRef={r => (inputRef = r)}
              leftIcon={assets.pencil_icon}
              placeholder={"Tell us about your experience"}
              value={experience}
              onChangeText={(experience) => {
                setExperience(experience);
              }}
            />

            <View style={screenStyles.bottomButton}>

              <AppButton
                title={"Submit"}
                onPress={() => {
                  props.navigation.goBack();
                }}
              />

            </View>

          </View>


        );


      }}

    />


  );

};
