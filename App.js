import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './modules/Login'
import Scan from './modules/Scan'

const AppNavigator = createStackNavigator({
  Home : {
    screen: Login,
    navigationOptions: {  
      header: null,  
    },
    
  },
  ScanQR : {
    screen: Scan,
    navigationOptions: {
      title:'Escanear código',

    }
  }
},{headerLayoutPreset:'center',headerMode:'float'}
);

export default createAppContainer(AppNavigator);
