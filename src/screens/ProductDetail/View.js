import React, {Component} from 'react';
import {
    View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image
} from 'react-native';

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Text, Button, Icon, Rating} from 'react-native-elements';
import Routes from "../../navigation/Routes";
import Styles from "./Styles";
import AppHeader from "../../components/Application/AppHeader/View";
import Counter from "../../components/Global/Counter/View"
import {StackActions} from "@react-navigation/native";
import AppConfig from "../../../branding/App_config";
import Globals from "../../utils/Globals";
import assets from "../../../branding/carter/assets/Assets";
import Style from "../Login/Style";

const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

export default class SingleGroceryItem extends Component {
    constructor(props) {
        super(props);
        const { cartCount, favourite  } = this.props.route.params.itemState;
        const { ratingValue } = this.props.route.params.item;
        this.state = {
            cartCount: cartCount,
            favourite: favourite,
            rating: ratingValue
        }
    }

    _cartCountChange = (behavior) => {
        if (behavior === "add") {
            this.setState({cartCount: this.state.cartCount + 1})
        } else if (behavior === "subtract" && !(this.state.cartCount === 0)) {
            this.setState({cartCount: this.state.cartCount - 1} )
        }
    };

    render() {
        const { item } = this.props.route.params;
        return(
           <View style={[Styles.mainContainer, {paddingBottom: Globals.SAFE_AREA_INSET.bottom}]}>

               <View style={[Styles.upperImageContainer, {paddingTop: Globals.SAFE_AREA_INSET.top}]}>

                   <View style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}}>
                       <Image
                           source={item.bigImage}
                           resizeMode={"contain"}
                           style={Styles.upperImage}
                       />
                   </View>



                   <AppHeader
                       navigation={this.props.navigation}
                       transparentHeader
                       headerWithBack
                       blackIcons
                       title={""}
                   />
               </View>

               <View style={Styles.bottomContainer}>

                   <View style={Styles.priceContainer}>
                       <Text style={Styles.priceText}>{item.price}</Text>
                       <View style={{width: "50%", height: hp(2), justifyContent: "center", alignItems: "flex-end"}}>
                           <TouchableOpacity onPress={() => {
                               this.setState({favourite: !this.state.favourite})
                           }}>
                               <View>

                                   { !this.state.favourite && <Image source={assets.heart_light_empty_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorGrey1}} resizeMode={"contain"} /> }
                                   { this.state.favourite && <Image source={assets.heart_filled_icon} style={{width: hp(2), height: hp(2), tintColor: colors.iconColorRed1}} resizeMode={"contain"} /> }

                               </View>

                           </TouchableOpacity>

                       </View>
                   </View>


                   <Text style={Styles.title}>{item.title}</Text>
                   <Text style={Styles.weightText}>{item.weight}</Text>


                   <TouchableWithoutFeedback onPress={() => {
                       this.props.navigation.navigate(Routes.REVIEW_LIST)
                   }}>

                       <View style={{flexDirection: "row", alignItems: "center", marginBottom: hp("2")}}>
                           <Text style={Styles.ratingText}>{this.state.rating}</Text>
                           <Rating
                               readonly
                               defaultRating={this.state.rating}
                               imageSize={20}
                               type={"custom"}
                               style={{marginHorizontal: wp("1")}}
                           />
                           <View style={{flexDirection: "row"}}>
                               <Text style={Styles.reviewText}>[</Text>
                               <Text style={Styles.reviewText}>{"93 reviews"}</Text>
                               <Text style={Styles.reviewText}>]</Text>
                           </View>

                       </View>

                   </TouchableWithoutFeedback>


                   <Text style={Styles.detailText} numberOfLines={4}>{item.detail}</Text>

                   <View style={{flex: 1, justifyContent: "center"}}>

                       <View style={Styles.cartCounter}>
                           <Text style={Styles.cartCounterText }>QUANTITY</Text>
                           <Counter
                           />

                        </View>

                       <Button containerStyle={{width: "100%"}}
                               buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                               title={'Add To Cart'}
                               titleStyle={styles.buttonStyle}
                               onPress={() => {

                               }}/>

                   </View>


               </View>


           </View>
        );
    }
}
