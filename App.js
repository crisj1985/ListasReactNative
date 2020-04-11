import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import {ItemPersona } from './componentes/ItemPersonas';
import {recuperarPersonas, agregarPersona,actualizarPersona} from './servicios/personas'
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Badge } from "react-native-elements";


export default class App extends Component {

 constructor ()
 {
   super();
   const personas = recuperarPersonas();
   this.state = {
     nombre: "",
     id: "",
     telefono: "",
     listaPersonas: personas,
     actualizar: false,
     numPersonas: personas.length
   };
  }

  repintarLista = ()=>{
    const personas = recuperarPersonas();
    this.setState({ listaPersonas: personas, numPersonas: personas.length });
  }

  seleccionar = (persona)=>{
    this.setState({
      nombre: persona.nombre,
      id: persona.id,
      telefono: persona.telefono,
      actualizar: true,
    });
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
        <Badge value={this.state.numPersonas} status="error" />
        <Input
          value={this.state.id}
          onChangeText={(txt) => {
            this.setState({ id: txt });
          }}
          label="Id"
          leftIcon={
            <Icon name="key" size={24} color="black" style={styles.icono} />
          }
          placeholder="Id"
        />
        <Input
          value={this.state.nombre}
          onChangeText={(txt) => {
            this.setState({ nombre: txt });
          }}
          label="Nombre"
          leftIcon={
            <Icon name="user-o" size={24} color="black" style={styles.icono} />
          }
          placeholder="Nombre"
        />
        <Input
          value={this.state.telefono}
          onChangeText={(txt) => {
            this.setState({ telefono: txt });
          }}
          label="Teléfono"
          leftIcon={
            <Icon name="mobile" size={24} color="black" style={styles.icono} />
          }
          placeholder="Teléfono"
        />
        {!this.state.actualizar ? (
          <Button
            title="Guardar"
            onPress={() => {
              agregarPersona({
                id: this.state.id,
                nombre: this.state.nombre,
                telefono: this.state.telefono,
              });
              this.repintarLista();
              this.limpiar();
            }}
          />
        ) : (
          <Button
            title="Actualizar"
            color="green"
            onPress={() => {
              actualizarPersona({
                id: this.state.id,
                nombre: this.state.nombre,
                telefono: this.state.telefono,
              });
              this.repintarLista();
              this.limpiar();
              this.setState({ actualizar: false });
            }}
          />
        )}
        <FlatList
          data={this.state.listaPersonas}
          renderItem={({ item, index }) => {
            return (
              <ItemPersona
                persona={item}
                indice={index}
                fnRepintar={this.repintarLista}
                fnSeleccionar={this.seleccionar}
                numPerson={this.state.numPersonas}
              />
            );
          }}
          keyExtractor={(item) => item.id}
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
  icono:{
    marginRight:15
  }
});
