import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import FoodItem from "../../components/Application/FoodItem/View";
import Styles from "./Styles";
import styles from "../../../branding/carter/styles/Style";
import Globals from "../../utils/Globals";
import {Icon} from "react-native-elements";
import AppInput from "../../components/Application/AppInput/View";
import TextInput from "../../components/Global/TextInput/View";
import Routes from "../../navigation/Routes";
import Typography from "../../../branding/carter/styles/Typography";
import fonts from "../../../branding/carter/assets/Fonts";

const searchHistoryArray = [
    "Fresh Apricots",
    "Frozen Pizza",
    "Bananas",
    "Cheetos",
    "Discounted Items",
    "Fresh Vegetables",
]


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return(

            <View  style={[{flex: 1}]}>

                <View style={{paddingTop: Globals.SAFE_AREA_INSET.top, paddingRight: wp(5), backgroundColor: "white", flexDirection: "row", paddingVertical: hp(2)}}>

                    <TouchableWithoutFeedback onPress={() => {this.props.navigation.goBack()}}>
                        <View style={{width: wp("10"), justifyContent: "center"}}>
                            <Icon
                                name="google"
                                type='font-awesome'
                                size={hp("3")}
                                color={"black"}
                            />
                        </View>
                    </TouchableWithoutFeedback>

                    <TextInput
                        placeholder={"Search"}
                        placeholderTextColor={"black"}
                        leftIcon={
                            <Icon
                                name={"google"}
                                type='font-awesome'
                                size={15}
                                color={"#697281"}
                            />}
                        containerStyle={[
                            {
                                backgroundColor: "#F3F5F8",
                                flex: 1
                            },

                        ]}
                        leftIconContainerStyle={{
                            paddingRight: wp('5')
                        }}
                        onChangeText={(value) => {

                        }}
                    />



                </View>


                <View style={{alignItems: "center"}}>
                    <TouchableOpacity  onPress={() => {this.props.navigation.navigate(Routes.APPLY_FILTERS)}}>
                        <View style={{
                            width: styles.gridWidth,
                            flexDirection: "row",
                            alignItem: "center",
                            justifyContent: "space-between",
                            paddingVertical: hp("2"),
                            marginTop: hp("1"),
                        }}>
                            <Text style={{
                                fontFamily: fonts.RUBIK_MEDIUM,
                                fontSize: Typography.P3
                            }}>Search History</Text>
                            <Text style={{
                                fontFamily: fonts.RUBIK_MEDIUM,
                                fontSize: Typography.P5
                            }}>Clear</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row', flexShrink: 1, flexWrap: 'wrap'}}>
                        {searchHistoryArray.map(item => {
                            return (
                                <View
                                    style={{
                                        backgroundColor: 'white',
                                        padding: hp(1),
                                        marginHorizontal: hp(1),
                                        marginBottom: hp("0.5")
                                    }}>
                                    <Text
                                        ellipsizeMode={'tail'}
                                        style={{fontSize: Typography.P6, fontFamily: fonts.RUBIK_MEDIUM}}>
                                        {item}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>

                    <TouchableOpacity  onPress={() => {}}>
                        <View style={{
                            width: styles.gridWidth,
                            flexDirection: "row",
                            alignItem: "center",
                            justifyContent: "space-between",
                            paddingVertical: hp("2"),
                            marginTop: hp("1"),
                        }}>
                            <Text style={{
                                fontFamily: fonts.RUBIK_MEDIUM,
                                fontSize: Typography.P3
                            }}>Discover More</Text>
                            <Text style={{
                                fontFamily: fonts.RUBIK_MEDIUM,
                                fontSize: Typography.P5
                            }}>Refresh</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row', flexShrink: 1, flexWrap: 'wrap'}}>
                        {searchHistoryArray.map(item => {
                            return (
                                <View
                                    style={{
                                        backgroundColor: 'white',
                                        padding: hp(1),
                                        marginHorizontal: hp(1),
                                        marginBottom: hp("0.5")
                                    }}>
                                    <Text
                                        ellipsizeMode={'tail'}
                                        style={{fontSize: Typography.P6, fontFamily: fonts.RUBIK_MEDIUM}}>
                                        {item}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                </View>



            </View>

        );
    }
}
