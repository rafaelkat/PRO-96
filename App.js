import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Calendario from './screens/calendario';
import Inicio from './screens/inicio';

export default class App extends React.Component{
  render(){ 
    return(
     <View style={styles.conteiner}>
      <AppContainer/>
     </View>
    )
  } 
}

var AppNavigator = createSwitchNavigator({
  Inicio : Inicio,
  Calendario : Calendario
});
const AppContainer = createAppContainer(AppNavigator)
 

const styles = StyleSheet.create({
  conteiner:{
    flex: 1
  }
});