import React, {Component} from 'react';
import {View,} from 'react-native';
import {Avatar, Rating, Text} from 'react-native-elements';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styles from "./Styles";

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

            <View style={{padding: hp(1), backgroundColor: "white", marginVertical: hp("0.5")}}>

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
                        <Rating
                            defaultRating={0}
                            startingValue={rating}
                            // onFinishRating={(rating) => { console.log(rating) }}
                            imageSize={20}
                            type={"custom"}
                            ratingBackgroundColor={"transparent"}
                            style={{alignSelf: "flex-start", marginLeft: "2%"}}
                            readonly
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
