import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {eliminarPersona} from '../servicios/personas'

 export class ItemPersona extends Component{

    render(){

        const {persona,indice} = this.props;
        const { nombre, telefono } = persona;

        return (
            <View style={styles.fila} >
                <Text style={styles.principal}>{nombre}- {indice} </Text>  
                <Text style={styles.secundario}>{telefono}</Text>
                <Button title='Eliminar' color='red' onPress={()=>{
                    eliminarPersona(persona);
                    this.props.fnRepintar();
                }
                    } ></Button>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    fila: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingTop: 10, 
        paddingBottom: 10,
    },
    principal:{
        fontSize:18,
    },
    secundario:{
        fontSize: 16,
        fontStyle:'italic'
    }
});