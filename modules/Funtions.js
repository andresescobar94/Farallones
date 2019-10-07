import React from 'react';//import React from 'react';
import {Footer, FooterTab,Item,Icon,Label,
Input,CardItem,Body,Card,Button} from 'native-base';
import {View, Text, StyleSheet,Image,Alert,Button as BButton,TouchableOpacity} from 'react-native'// Se  importan los componentes a utilizar del frame work
import {FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons'
import { yellow } from '../node_modules/ansi-colors';

function Header(props){
return(
    <View style={styles.header1}>
        <View style={styles.header1left}>
            <Image source={require('../assets/farallones2.jpg')} style={styles.logo_farallones}/>  
        </View>     
        <View style={styles.header1right}>
            <Image source={require('../assets/logo_christus.png')} style={styles.logo_christus}/> 
        </View>      
    </View>
    
)
}
function Login(props){ 
return(
    <View style={{flex:1,height:400}}>
        <View style={{flex:0.001,backgroundColor:'gray'}}>
            <Text style={{fontSize:1}}></Text>
        </View>
        
        <View style={{flex:1.2,flexDirection:'row'}}>
            <View style={{flex:0.1}}/>
            <View style={{flex:1,justifyContent:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <CardItem bordered style={{backgroundColor:'transparent'}}>
                    <Icon active name='paper'/>              
                    <Text style={styles.titulo}>Gestión de gases medicinales</Text>  
                    </CardItem>
                </View>              
                <CardItem bordered style={{backgroundColor:'transparent'}}> 
                    <Body>
                        <Item floatingLabel last inlineLabel>
                            <Icon active name='person'/>
                            <Label>Usuario</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last inlineLabel>
                            <Icon active name='lock'/>
                            <Label >Contraseña</Label>
                            <Input />
                        </Item>
                    </Body>
                </CardItem>
                <View style={{alignItems:'center',marginTop:20}}>
                    <TouchableOpacity>
                        <Button rounded dark style={{marginTop:10, justifyContent:'center',width:260}}>
                            <Text style={styles.texto_ingresar}>Ingresar</Text>
                        </Button>  
                    </TouchableOpacity>
                </View> 
            </View>       
            <View style={{flex:0.1}}/>    
        </View>
    </View>
)    
}

function FFooter(props) {//function FFooter(props){
    contacto = () => {Alert.alert('IN-BIONIC S.A.S.','This product is protected by copyright and distributed under licenses restricting copying, distribution, and decompilation.')}   
    return(
        <Footer>
            <FooterTab style={{backgroundColor:'black'}}>
                <Button onPress={() => props.nav.navigate('ScanQR')}>
                    <FontAwesome name='qrcode' style={{fontSize:27,color:'white'}}/>
                    <Text style={{color:'white'}}>Escanear</Text>
                </Button>
                <Button >
                    <MaterialCommunityIcons name="qrcode-edit" style={{fontSize:27,color:'white'}}/>
                    <Text style={{color:'white'}}>Etiquetar</Text>
                </Button>
                <Button onPress={this.contacto}>
                    <Image source={require('../assets/inbionic.png')}
                    style={styles.logo_inbionic}>
                    </Image>
                    <Text style={{color:'white'}}>Contact</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
    };

const styles=StyleSheet.create({
  logo_inbionic : {
    width : 35,
    height : 35,    
  },    
  header1 : {
    marginTop : 0,
    flex : 0.24,
    backgroundColor : 'transparent',
    flexDirection : 'row'
  },
  logo_farallones : {
    width : 80,
    height : 80,
    marginTop:22,
    left:10,
    borderRadius : 25,
  },
  header1left : {
    flex : 0.3,
    alignItems : 'center',
    justifyContent : 'center'
  },
  logo_christus : {
    width : 300,
    height : 120,
    marginTop:25,
    left : 0
  },
  header1right : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },   
  titulo : {
    fontWeight : 'bold',
    fontSize : 18,
    textAlign : 'center',
    color : 'rgb(113,60,140)',
    left : 0,
  },
  texto_ingresar : {
    fontWeight : 'bold',
    fontSize : 18,
    textAlign : 'center',
    color : 'white',
  },
})

export {FFooter,Header,Login}
