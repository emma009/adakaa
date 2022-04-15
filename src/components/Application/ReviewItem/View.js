import React, {Component} from 'react';
import {View,} from 'react-native';
import {Avatar, Rating, Text} from 'react-native-elements';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styles from "./Styles";
import StarRating from "react-native-star-rating";
import colors from "../../../../branding/carter/styles/Colors";

const PropTypes = require('prop-types');


class ReviewItem extends Component {


    render () {
        const {
            profileImage,
            fullName,
            reviewTime,
            rating,
            comment
        } = this.props;

        return (

            <View style={{padding: hp(1.5), backgroundColor: "white", marginVertical: hp("0.5")}}>

                <View style={Styles.upperContainer}>
                    <Avatar
                        rounded
                        size={"medium"}
                        source={profileImage}
                    />

                    <View style={{marginLeft: "5%"}}>
                        <Text style={Styles.name}>{fullName}</Text>
                        <Text style={Styles.time}>{reviewTime}</Text>
                    </View>
                </View>

                <View style={Styles.lowerContainer}>

                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={Styles.ratingText}>{rating}</Text>

                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={2}
                            starSize={hp(1.8)}
                            fullStarColor={colors.iconColorOrange1}
                            emptyStarColor={colors.borderColorLight}
                            selectedStar={(rating) => {}}
                        />
                    </View>

                    <Text style={Styles.commentText}>{comment}</Text>

                </View>

            </View>
        )

    }

}

ReviewItem.propTypes = {

    profileImage: PropTypes.string,
    fullName: PropTypes.string,
    reviewTime: PropTypes.string,
    rating: PropTypes.number,
    comment: PropTypes.string

};

ReviewItem.defaultProps = {

};

module.exports = ReviewItem;
