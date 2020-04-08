import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import {Header, Icon, Image, Text, Button} from 'react-native-elements';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { Avatar, Rating } from 'react-native-elements';

export default class SingleReview extends Component {


    render () {
        const { img, rating } = this.props;
        return (
            <View style={{padding: "5%", backgroundColor: "white"}}>
                <View style={{flexDirection: "row", alignItems: "center", paddingBottom: "5%"}}>
                    <Avatar
                        rounded
                        size={"medium"}
                        source={img}
                    />
                    <View style={{marginLeft: "5%"}}>
                        <Text>David Martin</Text>
                        <Text>32 minutes ago</Text>
                    </View>
                </View>
                <View style={{borderTopWidth: 1, paddingTop: "5%"}}>
                    <View style={{flexDirection: "row"}}>
                        <Text>{rating}</Text>
                        <Rating
                            defaultRating={0}
                            startingValue={rating}
                            // onFinishRating={(rating) => { console.log(rating) }}
                            imageSize={20}
                            type={"custom"}
                            ratingBackgroundColor={"transparent"}
                            style={{alignSelf: "flex-start"}}
                            readonly
                            style={{marginLeft: "2%"}}
                        />
                    </View>
                    <Text>Carter team is fast and always deliver fresh quality fruits. Highly Recommend!</Text>
                </View>
            </View>
        )

    }

}
