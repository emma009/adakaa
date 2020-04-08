import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import {Header, Icon, Image, Text, Button} from 'react-native-elements';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Routes from "../../navigation/Routes";
import SingleReview from "./SingleReview";

export default class Review extends Component {


    render () {

        return (
            <View style={{width: wp("100%"), height: hp("100%"), backgroundColor: "grey", alignItems: "center"}}>
                <View style={{width: wp("85%")}}>
                    <Button
                        title={"Add review"}
                        containerStyle={{marginBottom: "5%"}}
                        onPress={() => this.props.navigation.navigate(Routes.SUBMIT_REVIEW)}
                    />
                    <SingleReview
                        rating={4.5}
                        img={require('./Assets/Images/img.png')}
                    />
                </View>
            </View>
        )

    }

}
