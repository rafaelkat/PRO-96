import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';

export default class Calendario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  changeDate = (valor) => {
    this.setState({
      data: valor,
    });
  };
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container1}>
          <Header
            backgroundColor={'darkcyan'}
            centerComponent={{
              text: 'Calendario',
              style: { color: 'white', fontSize: 30, fontWeight: 'bold' },
            }}
          />

          <View style={styles.container}>
            <DatePicker
              format="DD-MM-YYYY"
              style={styles.dateComponent}
              date={this.state.data}
              onDateChange={this.changeDate}
            />

            <Text style={{ fontSize: 25, color: 'white', marginTop: 30 }}>
              {this.state.data && (
                <Text>Data Selecionada: {this.state.data}</Text>
              )}
            </Text>
          </View>
          <TextInput style={styles.textStyle}
            placeholder= "Compromisso 1"
          />
           <TextInput style={styles.textStyle}
            placeholder= "Compromisso 2"
          />
           <TextInput style={styles.textStyle}
            placeholder= "Compromisso 3"
          />
           <TextInput style={styles.textStyle}
            placeholder= "Compromisso 4"
          />
           <TextInput style={styles.textStyle}
            placeholder= "Compromisso 5"
          />
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'steelblue',
  },
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
  },
  dateComponent: {
    width: 320,
    marginTop: 100,
    backgroundColor: 'white',
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    marginTop: 100,
    fontWeight: 'bold',
  },
  textStyle: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white"
  }
});
