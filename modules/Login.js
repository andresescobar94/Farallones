import React, { Component } from 'react';
import {Content} from 'native-base';
import {View,StyleSheet,ImageBackground} from 'react-native'// Se  importan los componentes a utilizar del frame work
import {FFooter,Header,Login as F_Login} from './Funtions';

class Login extends Component {
//source={require('../assets/fondo.jpg')}
  render() {
    return (
      <ImageBackground style={styles.container} >
        <Content>
        <Header/>        
        <F_Login/>
        </Content>
        <FFooter nav={this.props.navigation}/>       
      </ImageBackground>
      
    )
  }
}

const styles = StyleSheet.create({
container : {
  flex : 1,
},
})
export default Login