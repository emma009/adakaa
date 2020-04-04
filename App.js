import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation/RootStack';

export default class App extends Component {

    constructor() {
      super();
      console.disableYellowBox = true;
    }

  render() {

    return (

        <NavigationContainer>
          <RootStack/>
        </NavigationContainer>
    );


  }

}
