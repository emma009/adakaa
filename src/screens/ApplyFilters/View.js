import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {Button, Icon, Rating, Text} from 'react-native-elements';
import Routes from "../../navigation/Routes";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import BaseView from "../BaseView";
import AppInput from "../../components/Application/AppInput/View"
import Styles from "./Styles";
import {StackActions} from "@react-navigation/native";
import AppConfig from "../../../branding/App_config";
import Typography from "../../../branding/carter/styles/Typography";
import Fonts from "../../../branding/carter/assets/Fonts";
import TextInput from "../../components/Global/TextInput/View";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

export default class ApplyFilters extends  Component {




    render(){
        return(

            <BaseView
                navigation={this.props.navigation}
                title={"ApplyFilters"}
                rightIcon={"google"}
                onRightIconPress={() => {

                }}
                childView={() => {

                    return (

                        <View style={{flex: 1}}>

                            <ScrollView>

                                <View style={{width: "100%", backgroundColor: "white", paddingHorizontal: wp(4), paddingVertical: hp(1), borderBottomWidth: 1,
                                    borderBottomColor: "#dadada"}}>

                                    <Text style={{
                                        fontSize: Typography.P3,
                                        fontFamily: Fonts.RUBIK_MEDIUM,
                                        marginBottom: hp(1)
                                    }}>{"Price Range"}</Text>

                                    <View style={{flexDirection: "row", justifyContent: "space-between", paddingVertical: hp(1)}}>
                                        <TextInput
                                            placeholder={"Min"}
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
                                                    width: "49%"
                                                },

                                            ]}
                                            leftIconContainerStyle={{
                                                paddingRight: wp('5')
                                            }}
                                            onChangeText={(value) => {

                                            }}
                                        />

                                        <TextInput
                                            placeholder={"Max"}
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
                                                    width: "49%"
                                                },

                                            ]}
                                            leftIconContainerStyle={{
                                                paddingRight: wp('5')
                                            }}
                                            onChangeText={(value) => {

                                            }}
                                        />
                                    </View>

                                </View>

                                <View style={{width: "100%", backgroundColor: "white", paddingHorizontal: wp(4), paddingVertical: hp(1), borderBottomWidth: 1,
                                    borderBottomColor: "#dadada"}}>

                                    <Text style={{
                                        fontSize: Typography.P3,
                                        fontFamily: Fonts.RUBIK_MEDIUM,
                                        marginBottom: hp(1)
                                    }}>{"Star Rating"}</Text>


                                    <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "#F3F5F8", marginVertical: hp(1), paddingVertical: hp(0.5), paddingHorizontal: wp(2)}}>

                                        <Rating
                                            defaultRating={0}
                                            startingValue={2}
                                            // onFinishRating={(rating) => { console.log(rating) }}
                                            imageSize={hp(3)}
                                            type={"custom"}
                                            ratingBackgroundColor={"transparent"}
                                            style={{
                                                alignSelf: "flex-start",
                                            }}
                                        />

                                        <Text style={{
                                            fontSize: Typography.P5,
                                            fontFamily: Fonts.RUBIK_REGULAR,
                                            flex: 1,
                                            textAlign: "right"
                                        }}>{"3 Stars"}</Text>

                                    </View>



                                </View>

                                <View style={{width: "100%", backgroundColor: "white", paddingHorizontal: wp(4), paddingVertical: hp(1), borderBottomWidth: 1,
                                    borderBottomColor: "#dadada"}}>

                                    <Text style={{
                                        fontSize: Typography.P3,
                                        fontFamily: Fonts.RUBIK_MEDIUM,
                                        marginBottom: hp(1)
                                    }}>{"Others"}</Text>

                                    <TouchableOpacity onPress={() => {}} style={{
                                        backgroundColor: "white",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginVertical: hp("0.5"),
                                        paddingVertical: hp(0.5),
                                        borderBottomWidth: 1,
                                        borderBottomColor: "#dadada"
                                    }}>
                                        <Icon
                                            name='search'
                                            type='font-awesome'
                                            color='#b3bcca'
                                            size={15}
                                        />
                                        <Text style={{
                                            marginHorizontal: wp(3),
                                            fontFamily: Fonts.RUBIK_REGULAR,
                                            fontSize: Typography.P4,
                                            color: "#697281"
                                        }}>Discount</Text>
                                        <Icon
                                            name='google'
                                            type='font-awesome'
                                            color='#b3bcca'
                                            size={15}
                                            containerStyle={{
                                                position: "absolute",
                                                right: "5%"
                                            }}
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => {}} style={{
                                        backgroundColor: "white",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginVertical: hp("0.5"),
                                        paddingVertical: hp(0.5),
                                        borderBottomWidth: 1,
                                        borderBottomColor: "#dadada"
                                    }}>
                                        <Icon
                                            name='search'
                                            type='font-awesome'
                                            color='#b3bcca'
                                            size={15}
                                        />
                                        <Text style={{
                                            marginHorizontal: wp(3),
                                            fontFamily: Fonts.RUBIK_REGULAR,
                                            fontSize: Typography.P4,
                                            color: "#697281"
                                        }}>Free Shipping</Text>
                                        <Icon
                                            name='google'
                                            type='font-awesome'
                                            color='#b3bcca'
                                            size={15}
                                            containerStyle={{
                                                position: "absolute",
                                                right: "5%"
                                            }}
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => {}} style={{
                                        backgroundColor: "white",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginVertical: hp("0.5"),
                                        paddingVertical: hp(0.5)
                                    }}>
                                        <Icon
                                            name='search'
                                            type='font-awesome'
                                            color='#b3bcca'
                                            size={15}
                                        />
                                        <Text style={{
                                            marginHorizontal: wp(3),
                                            fontFamily: Fonts.RUBIK_REGULAR,
                                            fontSize: Typography.P4,
                                            color: "#697281"
                                        }}>Same Day Delivery</Text>
                                        <Icon
                                            name='google'
                                            type='font-awesome'
                                            color='#b3bcca'
                                            size={15}
                                            containerStyle={{
                                                position: "absolute",
                                                right: "5%"
                                            }}
                                        />
                                    </TouchableOpacity>


                                </View>

                                <View style={{width: "100%", backgroundColor: "white", paddingHorizontal: wp(4), paddingVertical: hp(1), borderBottomWidth: 1,
                                    borderBottomColor: "#dadada"}}>

                                    <Text style={{
                                        fontSize: Typography.P3,
                                        fontFamily: Fonts.RUBIK_MEDIUM,
                                        marginBottom: hp(1)
                                    }}>{"Categories"}</Text>

                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingVertical: hp(0.5),
                                        borderBottomWidth: 1,
                                        borderBottomColor: "#dadada"
                                    }}>


                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginVertical: hp("0.5"),

                                        }}>
                                            <Icon
                                                name='search'
                                                type='font-awesome'
                                                color='#b3bcca'
                                                size={15}
                                            />
                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: "#697281"
                                            }}>Fresh Fruits</Text>

                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginVertical: hp("0.5"),
                                        }}>
                                            <Icon
                                                name='search'
                                                type='font-awesome'
                                                color='#b3bcca'
                                                size={15}
                                            />
                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: "#697281"
                                            }}>Free Chicken</Text>
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingVertical: hp(0.5),
                                        borderBottomWidth: 1,
                                        borderBottomColor: "#dadada"
                                    }}>


                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginVertical: hp("0.5"),

                                        }}>
                                            <Icon
                                                name='search'
                                                type='font-awesome'
                                                color='#b3bcca'
                                                size={15}
                                            />
                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: "#697281"
                                            }}>Fresh Fruits</Text>

                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginVertical: hp("0.5"),
                                        }}>
                                            <Icon
                                                name='search'
                                                type='font-awesome'
                                                color='#b3bcca'
                                                size={15}
                                            />
                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: "#697281"
                                            }}>Free Chicken</Text>
                                        </TouchableOpacity>

                                    </View>


                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingVertical: hp(0.5),
                                        borderBottomWidth: 1,
                                        borderBottomColor: "#dadada"
                                    }}>


                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginVertical: hp("0.5"),

                                        }}>
                                            <Icon
                                                name='search'
                                                type='font-awesome'
                                                color='#b3bcca'
                                                size={15}
                                            />
                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: "#697281"
                                            }}>Fresh Fruits</Text>

                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginVertical: hp("0.5"),
                                        }}>
                                            <Icon
                                                name='search'
                                                type='font-awesome'
                                                color='#b3bcca'
                                                size={15}
                                            />
                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: "#697281"
                                            }}>Free Chicken</Text>
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingVertical: hp(0.5),
                                        borderBottomWidth: 1,
                                        borderBottomColor: "#dadada"
                                    }}>


                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginVertical: hp("0.5"),

                                        }}>
                                            <Icon
                                                name='search'
                                                type='font-awesome'
                                                color='#b3bcca'
                                                size={15}
                                            />
                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: "#697281"
                                            }}>Fresh Fruits</Text>

                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginVertical: hp("0.5"),
                                        }}>
                                            <Icon
                                                name='search'
                                                type='font-awesome'
                                                color='#b3bcca'
                                                size={15}
                                            />
                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: "#697281"
                                            }}>Free Chicken</Text>
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingVertical: hp(0.5),
                                        borderBottomWidth: 1,
                                        borderBottomColor: "#dadada"
                                    }}>


                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginVertical: hp("0.5"),

                                        }}>
                                            <Icon
                                                name='search'
                                                type='font-awesome'
                                                color='#b3bcca'
                                                size={15}
                                            />
                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: "#697281"
                                            }}>Fresh Fruits</Text>

                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginVertical: hp("0.5"),
                                        }}>
                                            <Icon
                                                name='search'
                                                type='font-awesome'
                                                color='#b3bcca'
                                                size={15}
                                            />
                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: "#697281"
                                            }}>Free Chicken</Text>
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingVertical: hp(0.5),
                                        borderBottomWidth: 1,
                                        borderBottomColor: "#dadada"
                                    }}>


                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginVertical: hp("0.5"),

                                        }}>
                                            <Icon
                                                name='search'
                                                type='font-awesome'
                                                color='#b3bcca'
                                                size={15}
                                            />
                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: "#697281"
                                            }}>Fresh Fruits</Text>

                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginVertical: hp("0.5"),
                                        }}>
                                            <Icon
                                                name='search'
                                                type='font-awesome'
                                                color='#b3bcca'
                                                size={15}
                                            />
                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: "#697281"
                                            }}>Free Chicken</Text>
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingVertical: hp(0.5),
                                    }}>


                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginVertical: hp("0.5"),

                                        }}>
                                            <Icon
                                                name='search'
                                                type='font-awesome'
                                                color='#b3bcca'
                                                size={15}
                                            />
                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: "#697281"
                                            }}>Fresh Fruits</Text>

                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => {}} style={{
                                            backgroundColor: "white",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginVertical: hp("0.5"),
                                        }}>
                                            <Icon
                                                name='search'
                                                type='font-awesome'
                                                color='#b3bcca'
                                                size={15}
                                            />
                                            <Text style={{
                                                marginHorizontal: wp(3),
                                                fontFamily: Fonts.RUBIK_REGULAR,
                                                fontSize: Typography.P4,
                                                color: "#697281"
                                            }}>Free Chicken</Text>
                                        </TouchableOpacity>

                                    </View>


                                </View>



                            </ScrollView>



                            <Button
                                buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                                title={'Apply Filters'}
                                titleStyle={styles.buttonFontStyle}
                                onPress={() => {

                                }}/>


                        </View>


                    );



                }}

            />


        );
    }
}
