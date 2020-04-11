import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import {eliminarPersona,actualizarPersona,imagenes} from '../servicios/personas';
import { Avatar, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";



 export class ItemPersona extends Component{

    render(){

        const { persona, indice, numPerson } = this.props;
        const { nombre, telefono,id } = persona;

        return (
          <View style={styles.fila}>
            <Avatar
              style={styles.seccionAvatar}
              rounded
              title={nombre.substring(0, 1)}
              source={imagenes[indice]}
            />
            <TouchableHighlight
              style={styles.seccionTexto}
              onPress={() => {
                  this.props.fnRepintar();
                this.props.fnSeleccionar(persona);
                
              }}
            >
              <View>
                <Text style={styles.principal}>
                  {id} - {nombre}
                </Text>
                <Text style={styles.secundario}>{telefono}</Text>
              </View>
            </TouchableHighlight>

            <Button
              color="red"
              onPress={() => {
                eliminarPersona(persona);
                this.props.fnRepintar();
              }}
              icon={<Icon name="trash-o" size={22} color="white" />}
              style={styles.seccionBotones}
            ></Button>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  fila: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    flexDirection:"row"
  },
  principal: {
    fontSize: 18,
  },
  secundario: {
    fontSize: 16,
    fontStyle: "italic",
  },
  seccionAvatar: {
    flex: 1,
  },
  seccionTexto: {
    flex: 5,
    flexDirection :'row'
  },
  seccionBotones: {
    flex: 1,
  },
});