import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View"
import Styles from "./Styles";
import screenStyles from "./Styles";
import AppConfig from "../../../branding/App_config";
import assets from "../../../branding/carter/assets/Assets";
import StarRating from "react-native-star-rating";
import AppButton from "../../components/Application/AppButton/View";

const styles = AppConfig.styling.default;


export const AddReview = (props) => {

    const [rating, setRating] = useState(4.5);

    let inputRef = useRef();

    return (

        <BaseView
            navigation={props.navigation}
            title={"Write Review"}
            childView={() => {

                return (

                    <View style={screenStyles.mainContainer}>

                        <Text style={Styles.primaryText}>What do you think?</Text>
                        <Text style={Styles.secondaryText}>Please give your rating by clicking on the stars
                            below.</Text>

                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={rating}
                            starSize={hp(5.5)}
                            fullStarColor={styles.ratingStyle.fullStarColor}
                            emptyStarColor={styles.ratingStyle.emptyStarColor}
                            selectedStar={(rating) => {
                                setRating(rating)
                            }}
                            containerStyle={screenStyles.ratingContainerStyle}
                        />

                        <AppInput
                            multilineInput
                            textInputRef= {r => (inputRef = r)}
                            leftIcon={assets.pencil_icon}
                            placeholder={"Tell us about your experience"}
                            onChangeText={(value) => {
                            }}
                        />

                        <View style={screenStyles.bottomButton}>

                            <AppButton
                                title={'Submit'}
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

}
