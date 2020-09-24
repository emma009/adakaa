import React, {Component} from 'react';
import {FlatList,} from 'react-native';
import ReviewItem from "../../components/Application/ReviewItem/View";

import BaseView from "../BaseView"
import Routes from "../../navigation/Routes";
import assets from "../../../branding/carter/assets/Assets";

export default class Review extends Component {

    constructor(props) {
        super(props);

        this.state = {

            reviews: [
                {
                    id: 0,
                    profileImage: require('./Assets/Images/img.png'),
                    fullName: "David Martin",
                    reviewTime: "32 minutes ago",
                    rating: 2.5,
                    comment: "Carter team is fast and always deliver fresh items. Carter team is fast and always deliver fresh items. Carter team is fast and always deliver fresh items."
                },
                {
                    id: 1,
                    profileImage: require('./Assets/Images/img.png'),
                    fullName: "David Martin",
                    reviewTime: "32 minutes ago",
                    rating: 2.5,
                    comment: "Carter team is fast and always deliver fresh items. Carter team is fast and always deliver fresh items. Carter team is fast and always deliver fresh items."
                },
                {
                    id: 2,
                    profileImage: require('./Assets/Images/img.png'),
                    fullName: "David Martin",
                    reviewTime: "32 minutes ago",
                    rating: 2.5,
                    comment: "Carter team is fast and always deliver fresh items. Carter team is fast and always deliver fresh items. Carter team is fast and always deliver fresh items."
                },
                {
                    id: 3,
                    profileImage: require('./Assets/Images/img.png'),
                    fullName: "David Martin",
                    reviewTime: "32 minutes ago",
                    rating: 2.5,
                    comment: "Carter team is fast and always deliver fresh items. Carter team is fast and always deliver fresh items. Carter team is fast and always deliver fresh items."
                },
                {
                    id: 4,
                    profileImage: require('./Assets/Images/img.png'),
                    fullName: "David Martin",
                    reviewTime: "32 minutes ago",
                    rating: 2.5,
                    comment: "Carter team is fast and always deliver fresh items. Carter team is fast and always deliver fresh items. Carter team is fast and always deliver fresh items."
                }


            ]



        }

    }


    render () {

        return (

            <BaseView
                navigation={this.props.navigation}
                title={"Reviews"}
                rightIcon={assets.plus_circle_icon}
                onRightIconPress={() => {
                    this.props.navigation.navigate(Routes.ADD_REVIEW)
                }}
                childView={() => {

                    return (

                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.reviews}

                            renderItem={({ item }) =>
                                <ReviewItem
                                   profileImage={item.profileImage}
                                   fullName={item.fullName}
                                   reviewTime={item.reviewTime}
                                   rating={item.rating}
                                   comment={item.comment}
                                />
                            }
                        />

                    );
                }}

                />

        )

    }

}
