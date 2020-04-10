import { Alert } from "react-native";

const personas = [
    { indice: '10', nombre: 'Cristian', telefono: "456456" },
    { indice: '20', nombre: 'Paul', telefono: "565" },
    { indice: '30', nombre: 'Henry', telefono: "23432" }
];

export const recuperarPersonas = () => personas;

export const agregarPersona = (persona) => {
    if (buscarPersona(persona) == -1)
        personas.push(persona)
    else
        Alert.alert("Id de Usuario ya ingresado")
};

const buscarPersona = (persona) => {
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].indice == persona.indice)
            return i;
    }
    return -1;
    // return personas.filter((item) => item.indice == persona.indice)
}

export const eliminarPersona = (persona) => {
    let posicion = buscarPersona(persona);
    personas.splice(posicion, 1)

}