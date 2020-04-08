import React, {Component} from 'react';
import {
    View, Image,
} from 'react-native';


import Carousel, {Pagination} from 'react-native-snap-carousel';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Button, Text} from 'react-native-elements';
import AppConfig from '../../branding/App_config';
import Routes from '../navigation/Routes';
import {StackActions} from '@react-navigation/native';


const assets = AppConfig.assets.default;
const colors = AppConfig.colors.default;
const styles = AppConfig.styling.default;

export default class IntroScreen extends Component {

    _carousel = '';

    constructor(props) {
        super(props);

        this.state = {
            entries: [
                {
                    id: 1,
                    title: "Title 1",
                    subtitle: "Subtitle 1",
                    headerImg: assets.intro1
                },
                {
                    id: 2,
                    title: "Title 2",
                    subtitle: "Subtitle 2",
                    headerImg: assets.intro2
                },
                {
                    id: 3,
                    title: "Title 3",
                    subtitle: "Subtitle 3",
                    headerImg: assets.intro3
                },
                {
                    id: 4,
                    title: "Title 4",
                    subtitle: "Subtitle 4",
                    headerImg: assets.intro4
                },
            ],

            activeSlideIndex: 0
        }

    }


    _renderItem = ({item, index}) => {

        return (
            <View style={{}}>
                <View style={{alignItems: 'center' }}>
                    <Image source={item.headerImg} style={{width: '90%'}} resizeMode={'contain'}/>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text h1>{ item.title }</Text>
                    <Text h4>{ item.subtitle }</Text>
                </View>
            </View>
        );
    };

    render () {
        return (

            <View style={{flex: 1, backgroundColor: 'white'}}>

                <View style={{flex: 0.8}}>

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

                <View style={{flex: 0.2, justifyContent:  'center', alignItems: 'center'}}>
                    <Button containerStyle={{width: wp('80')}}
                            buttonStyle={[{backgroundColor: colors.buttonGreenColor}, styles.buttonShadow]}
                            title={'Get Started'}
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
