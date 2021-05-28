const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: "New York",
        zip: 54878425,
        lat: 41.15457,
        lng: 45.475412
    }
};

//console.table({persona});
console.log(persona);

const persona2 = {...persona};

console.log(persona2);