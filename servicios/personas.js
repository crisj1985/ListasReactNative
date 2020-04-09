import { Alert } from "react-native";

const personas = [
    { indice: '10', nombre: 'Cristian', telefono: "456456" },
    { indice: '20', nombre: 'Paul', telefono: "565" },
    { indice: '30', nombre: 'Henry', telefono: "23432" }
];

export const recuperarPersonas = () => personas;

export const agregarPersona = (persona) => {
    if (buscarPersona(persona).length < 1)
        personas.push(persona)
    else
        Alert.alert("Usuario ya ingresado")
};

const buscarPersona = (persona) => {
    return personas.filter((item) => item.indice == persona.indice)
}