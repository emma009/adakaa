import React, {Component} from 'react';
import {Image, View,} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Button, Text} from 'react-native-elements';
import AppConfig from '../../../branding/App_config';
import Routes from '../../navigation/Routes';
import {StackActions} from '@react-navigation/native';
import Style from "./Style"

const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

export default class IntroScreen extends Component {

    _carousel;

    constructor(props) {
    super(props);

        this.state = {
            entries: [
                {
                    id: 1,
                    title: "Welcome to Carter grocery application",
                    subtitle: "Carter online grocery store is the no. 1 grocery application in the world",
                    headerImg: assets.intro1
                },
                {
                    id: 2,
                    title: "Best quality grocery at your doorstep",
                    subtitle: "Carter online grocery store where we deliver everything on time.",
                    headerImg: assets.intro2
                },
                {
                    id: 3,
                    title: "Peace of mind same day delivery guaranteed",
                    subtitle: "We dispatch all the order within two hours of the order being placed.",
                    headerImg: assets.intro3
                },
                {
                    id: 4,
                    title: "Big savings with seasonal discounts in all products",
                    subtitle: "We believe in providing best competitive prices to all of our customers.",
                    headerImg: assets.intro4
                },
            ],

            activeSlideIndex: 0
        }

    }


    _renderItem = ({item, index}) => {

        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>

                    <Image source={item.headerImg} style={Style.headerImage}  resizeMode={'contain'}/>
                    <Text style={Style.introUpperText}>{ item.title }</Text>
                    <Text style={Style.introLowerText}>{ item.subtitle }</Text>


            </View>
        );
    };

    render () {
        return (

            <View style={{flex: 1, backgroundColor: 'white'}}>

                <View style={Style.introUpperContainer}>

                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries}
                        renderItem={this._renderItem}
                        sliderWidth={wp('100%')}
                        itemWidth={wp('100%')}
                        onSnapToItem={(index) => this.setState({ activeSlideIndex: index })}
                    />

                    <Pagination
                        dotsLength={this.state.entries.length}
                        activeDotIndex={this.state.activeSlideIndex}
                        dotColor={colors.paginationDotActiveColor}
                        inactiveDotColor={colors.paginationDotInActiveColor}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.4}
                        carouselRef={this._carousel}
                    />

                </View>

                <View style={Style.introLowerContainer}>

                    <Button containerStyle={{width: styles.gridWidth}}
                            buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                            title={'Get Started'}
                            titleStyle={styles.buttonFontStyle}
                            onPress={() => {
                                this.props.navigation.dispatch(
                                    StackActions.replace(Routes.LOGIN_SCREEN)
                                );
                            }}/>
                </View>

            </View>

        );
    }
}
