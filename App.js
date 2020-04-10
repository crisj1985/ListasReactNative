import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import {ItemPersona } from './componentes/ItemPersonas';
import {recuperarPersonas, agregarPersona,actualizarPersona} from './servicios/personas'


export default class App extends Component {

 constructor ()
 {
   super();
   const personas = recuperarPersonas();
   this.state = {
                  nombre:"",
                  id : "",
                  telefono : "",
                  listaPersonas:personas,
                  actualizar: false
                }
  }

  repintarLista = ()=>{
    const personas = recuperarPersonas();
    this.setState({ listaPersonas: personas })
  }

  seleccionar = (persona)=>{
    this.setState({
      nombre: persona.nombre,
      id: persona.id,
      telefono: persona.telefono,
    })
  }

limpiar = ()=>{
  this.setState({
    nombre: '',
    id: '',
    telefono: ''
  })
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
        {!this.state.actualizar 
        ?
          <Button 
            title="Guardar" 
            onPress={()=>{
                            agregarPersona({ id: this.state.id, nombre: this.state.nombre, telefono: this.state.telefono });
                            this.repintarLista();
                            this.limpiar();
                            this.setState({actualizar:true});
                          }
                    } 
          />
        :
          <Button 
            title='Actualizar' 
            color='green' 
            onPress={() => {
                            actualizarPersona({ id: this.state.id, nombre: this.state.nombre, telefono: this.state.telefono });
                            this.repintarLista();
                            this.limpiar();
                            this.setState({ actualizar: false });    
                          }
                    } 
          />
        }
        <FlatList
          data = {this.state.listaPersonas}
          renderItem={({ item, index }) =>  { return <ItemPersona persona={item} indice={index} fnRepintar={this.repintarLista} fnSeleccionar ={this.seleccionar}/>}}
          keyExtractor = {item=>item.id}
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
    marginLeft: 20,
    marginRight: 20,
  },
});
