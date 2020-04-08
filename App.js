import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


// const personas = [
//   { index: '10', nombre: 'Cristian' },
//   { index: '20', nombre: 'Paul' },
//   { index: '30', nombre: 'Henry' }]
export default class App extends Component {

 constructor (){
   super();
   this.state = {
     personas: [
       { indice: '10', nombre: 'Cristian' },
       { indice: '20', nombre: 'Paul' },
       { indice: '30', nombre: 'Henry' }]
   }
 }

  render(){
    return (
      <View style={styles.container}>
        <Text>Listas</Text>
        <FlatList
          data = {this.state.personas}
          renderItem = {item=><Text>{item.item.nombre}</Text>}
          keyExtractor = {item=>item.indice}
        />
      </View>
    );

  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
