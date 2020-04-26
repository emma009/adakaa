import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import {Header, Icon, Image, Text, Button} from 'react-native-elements';
import AppConfig from '../../../branding/App_config';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Routes from '../../navigation/Routes';


const assets = AppConfig.assets.default;


export default class LoginScreen extends Component {

    componentDidMount(){

    }


    render () {

        return (
            <View style={{flex: 1, alignItems: 'center'}}>

                <Header
                    centerComponent={{ text: 'WELCOME', style: { color: '#fff' } }}
                    backgroundColor={'transparent'}
                    containerStyle={{
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1
                    }}
                />

                <Image source={assets.login_header} style={{ width: wp('100%'), height: hp('50%')}} />

                <View style={{flex: 1, width: wp("85%"), justifyContent: "center"}}>
                    <Text style={{fontSize: 24, fontWeight: "bold"}}>{"Welcome"}</Text>

                    <Text style={{fontSize: 18}}>{"To the world the world the world the world the world the world the world the world the world the world the world the world the world the world the world"}</Text>

                    <Button
                        ViewComponent={() => {
                            return(
                                <View style={{height: 40, flexDirection: "row", alignItems: 'center', backgroundColor: "white"}}>
                                    <View style={{marginLeft: "5%"}}>
                                        <Icon
                                            name="google"
                                            type='font-awesome'
                                            size={15}
                                            color="red"
                                        />
                                    </View>
                                    <View style={{flex: 1, alignItems: 'center'}}>
                                        <Text style={{fontSize: 18}}>{"Connect using Google"}</Text>
                                    </View>
                                </View>
                            );
                        }}
                    />

                    <Button
                        ViewComponent={() => {
                            return(
                                <View style={{height: 40, flexDirection: "row", alignItems: 'center', backgroundColor: "#6cc51d"}}>
                                    <View style={{marginLeft: "5%"}}>
                                        <Icon
                                            name="google"
                                            type='font-awesome'
                                            size={15}
                                            color="white"
                                        />
                                    </View>
                                    <View style={{flex: 1, alignItems: 'center'}}>
                                        <Text style={{fontSize: 18, color: "white"}}>{"Sign Up"}</Text>
                                    </View>
                                </View>
                            );
                        }}


                    />

                    <View style={{flexDirection:"row", alignItems: "center", justifyContent: "center"}}>
                        <Text style={{fontSize: 16}}>{"Already have an account?"}</Text>
                        <Button title={"Login"} type={"solid"} titleStyle={{color: "black "}} containerStyle={{borderWidth: 1}}/>
                    </View>
                </View>
            </View>
        )

    }

    onLoginPress = () => {

        this.props.navigation.navigate(Routes.LOGIN_FORM_SCREEN);
    };

}
