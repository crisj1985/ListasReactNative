import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import {ItemPersona } from './componentes/ItemPersonas';
import {recuperarPersonas, agregarPersona} from './servicios/personas'


// const personas = [
//   { index: '10', nombre: 'Cristian' },
//   { index: '20', nombre: 'Paul' },
//   { index: '30', nombre: 'Henry' }]
export default class App extends Component {

 constructor ()
 {
   super();
   const personas = recuperarPersonas();
   this.state = {
                  nombre:"",
                  id : "",
                  telefono : "",
                  listaPersonas:personas
                }
  }

  repintarLista = ()=>{
    const personas = recuperarPersonas();
    this.setState({ listaPersonas: personas })
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Listas</Text>
        <TextInput 
          value = {this.state.id}
          placeholder = 'id'
          onChangeText={(txt) => { this.setState({ id:txt} )}}
          />
        <TextInput
          value={this.state.nombre}
          placeholder='Nombre'
          onChangeText={(txt) => { this.setState( { nombre: txt } )}}
        />
        <TextInput
          value={this.state.telefono}
          placeholder='Telefono'
          onChangeText={(txt) => { this.setState ({ telefono: txt } )}}
        />
        <Button 
          title="Guardar" 
          onPress={()=>{
                          agregarPersona({ indice: this.state.id, nombre: this.state.nombre, telefono: this.state.telefono });
                          this.repintarLista();
                       }
                  } 
        />

        <FlatList
          data = {this.state.listaPersonas}
          renderItem={({ item, index }) =>  { return <ItemPersona persona={item} indice={index} fnRepintar={this.repintarLista}/>}}
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
    alignItems: 'stretch',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
});
