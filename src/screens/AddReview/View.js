import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Rating, Text} from 'react-native-elements';
import Routes from "../../navigation/Routes";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View"
import Styles from "./Styles";
import {StackActions} from "@react-navigation/native";
import AppConfig from "../../../branding/App_config";
import assets from "../../../branding/carter/assets/Assets";
import StarRating from "react-native-star-rating";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

export default class AddReview extends  Component {


    constructor() {
        super();

        this.state = {}

    }


    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"Write Review"}
                childView={() => {

                    return (

                        <View style={{flex: 1, alignItems: "center"}}>

                            <Text style={Styles.primaryText}>What do you think?</Text>
                            <Text style={Styles.secondaryText}>Please give your rating by clicking on the stars below.</Text>

                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={this.state.rating}
                                starSize={hp(5.5)}
                                fullStarColor={colors.iconColorOrange1}
                                emptyStarColor={colors.borderColorLight}
                                selectedStar={(rating) => {
                                    this.setState({
                                        rating
                                    })
                                }}
                                containerStyle={{
                                    paddingVertical: hp("2")
                                }}
                            />

                            <AppInput
                                multilineInput
                                leftIcon={assets.pencil_icon}
                                leftIconColor={colors.iconColorGrey1}
                                placeholder={"Tell us about your experience"}
                                placeholderTextColor={colors.textColorGrey1}
                                onChangeText={(value) => {}}
                            />

                            <View style={{flex: 1, width: "100%", justifyContent: "flex-end", marginBottom: hp("1")}}>
                                <Button
                                        buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                        title={'Submit'}
                                        titleStyle={styles.buttonStyle}
                                        onPress={() => {
                                            // this.props.navigation.dispatch(
                                            //     StackActions.replace(Routes.LOGIN_SCREEN)
                                            // );
                                        }}/>

                            </View>


                        </View>


                    );



                }}

            />


        );
    }
}
