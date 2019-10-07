import React, { Component } from 'react';
import { Text, View, StyleSheet,Vibration,Alert} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {Button} from 'native-base';
class Scan extends Component {
  state = {
    hasCameraPermission: null,// El permiso para acceder a la camara empieza nulo
    scanned: false,//No se ha escaneado nada
    
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {//Solicita el permiso para utilizar la camara
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    
  }

  StartVibrationFunction=()=>{//Metodo para vibrar apenas escanee un dato
      Vibration.vibrate(300) ;
    }
  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Permiso para acceder a la camara</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No se puede acceder a la cámara!</Text>;
    }
    return (
      <View style={{flex:1,backgroundColor: 'black',}}>
        <View
          style={{
            flex: 0.92,  
          }}>
          <BarCodeScanner 
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
        <View style={{flex:0.08,alignItems:'center',backgroundColor:'black'}}>
          {scanned && (
              <Button block bordered success  style={{justifyContent:'center',high:30}} onPress={() => this.setState({ scanned: false })}> 
                <Text style={{textAlign:'center',color:'white',fontSize:17,fontWeight:'bold'}}>Toca para escanear de nuevo</Text>

              </Button>
              
            )}
        </View>    
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    this.StartVibrationFunction();
    Alert.alert('Escaner exitoso','El código No. '+data+' ha sido escaneado!.');
  };
}
export default Scan