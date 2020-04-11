import { Alert } from "react-native";

const personas = [
    { id: '1', nombre: 'Cristiano', telefono: "456456" },
    { id: '2', nombre: 'Pálido Narizón', telefono: "565" },
    { id: '3', nombre: 'Iniesta', telefono: "23432" }
];

export const imagenes = [
    // require("../imagenes/bean.jpeg"),
    {
        uri: "https://st-listas.20minutos.es/images/2011-12/311753/3275033_640px.jpg",
    },
    {
        uri: "https://st-listas.20minutos.es/images/2011-12/311753/3275034_249px.jpg",
    },
    {
        uri: "https://st-listas.20minutos.es/images/2011-12/311753/3275030_640px.jpg",
    },
];

export const recuperarPersonas = () => personas;

export const agregarPersona = (persona) => {
    if (buscarPersona(persona) == -1) {
        if (persona.nombre == "" || persona.telefono == "")
            Alert.alert('Debe ingresar todos los campos');
        personas.push(persona);
    } else
        Alert.alert("Id de Usuario ya ingresado")
};

const buscarPersona = (persona) => {
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].id == persona.id)
            return i;
    }
    return -1;
    // return personas.filter((item) => item.indice == persona.indice)
}

export const eliminarPersona = (persona) => {
    let posicion = buscarPersona(persona);
    personas.splice(posicion, 1)

}

export const actualizarPersona = (persona) => {
    let posicion = buscarPersona(persona);
    if (posicion != -1) {
        personas[posicion].nombre = persona.nombre;
        personas[posicion].telefono = persona.telefono;
    }



}