import React from 'react';
import {View,} from 'react-native';
import {Avatar, Text} from 'react-native-elements';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Styles from "./Styles";
import StarRating from "react-native-star-rating";
import AppConfig from "../../../../branding/App_config";

const PropTypes = require('prop-types');

const styles = AppConfig.styling.default;


export const ReviewItem = (props) => {

    const {
        profileImage,
        fullName,
        reviewTime,
        rating,
        comment
    } = props;

    return (

        <View style={Styles.container}>

            <View style={Styles.upperContainer}>
                <Avatar
                    rounded
                    size={"medium"}
                    source={profileImage}
                />

                <View style={{marginLeft: wp(3)}}>
                    <Text style={Styles.nameText}>{fullName}</Text>
                    <Text style={Styles.timeText}>{reviewTime}</Text>
                </View>
            </View>

            <View style={Styles.lowerContainer}>

                <View style={Styles.ratingContainer}>
                    <Text style={Styles.ratingText}>{rating}</Text>

                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={rating}
                        starSize={hp(1.8)}
                        fullStarColor={styles.ratingStyle.fullStarColor}
                        emptyStarColor={styles.ratingStyle.emptyStarColor}
                        selectedStar={(rating) => {
                        }}
                    />
                </View>

                <Text style={Styles.commentText}>{comment}</Text>

            </View>

        </View>
    )

}


ReviewItem.propTypes = {

    profileImage: PropTypes.string,
    fullName: PropTypes.string,
    reviewTime: PropTypes.string,
    rating: PropTypes.number,
    comment: PropTypes.string

};

ReviewItem.defaultProps = {};

