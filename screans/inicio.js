import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native-elements';

export default class Inicio extends React.Component{
  goToCalendario = ()=>{
    this.props.navigation.navigate("Calendario");
  }
  render(){
    return(
      <SafeAreaProvider>
        <View style={styles.container1}>
          <Header
            backgroundColor={"darkcyan"}
            centerComponent={{
              text: "Lembrete", 
              style: {color: "white", fontSize: 40, fontWeight: "bold"}
            }}
          />
          <View style={styles.container2}>
            <TouchableOpacity style={styles.button} onPress = {()=>this.goToCalendario()}>
              <Text style={styles.textStyle}> Calendario </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaProvider>
    )
  }
}




const styles = StyleSheet.create({
  container1:{
    flex: 1,
    backgroundColor: "steelblue"
  },
  container2:{
    marginTop: 50,
  },
  button: {
    backgroundColor: "gray",
    width: 200,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 100,
    borderWidth: 4,
    borderRadius: 10
  },
  textStyle:{
    color: "white",
    fontWeight: "bold",
    fontSize: 30
  }
});