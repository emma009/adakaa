import React from 'react';
import {FlatList,} from 'react-native';
import {ReviewItem} from "../../components/Application/ReviewItem/View";

import BaseView from "../BaseView"
import Routes from "../../navigation/Routes";
import assets from "../../../branding/carter/assets/Assets";
import Globals from "../../utils/Globals";


export const ReviewList = (props) => {


    return (

        <BaseView
            navigation={props.navigation}
            title={"Reviews"}
            rightIcon={assets.plus_circle_icon}
            onRightIconPress={() => {
                props.navigation.navigate(Routes.ADD_REVIEW)
            }}
            childView={() => {

                return (

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={Globals.reviewsList}

                        renderItem={({item}) =>
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
