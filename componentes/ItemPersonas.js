import React, { Component } from 'react';
import { Text, View } from 'react-native';

 export class ItemPersona extends Component{

    render(){

        const {persona,indice} = this.props;
        const { nombre, telefono } = persona;

        return (
            <View>
                <Text>{nombre}- {indice} </Text>  
                <Text>{telefono}</Text>
            </View>
            
        );
    }
}