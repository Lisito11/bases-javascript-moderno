// Desestructuracion
// Asignacion Desestructurante

const persona = {
    nombre: 'tony',
    edad:45,
    clave: 'Iron man'
}

//const {nombre1} = persona;

//const {nombre: nombre2} = persona;

//const {nombre, clave, edad} = persona;


//console.log(nombre);
//console.log(edad);
//console.log(clave);

// Desestructuracion en el argumento

const userContext = ({clave, nombre, edad, rango = "Capitán"}) => {
    
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        age: edad,
        latlng:{
            lat:14.4544,
            lng: -2.454757
        }
    }
} 

const {nombreClave, age:ages, latlng: {lat, lng}} = userContext(persona);

console.log(nombreClave, ages, lat, lng);





