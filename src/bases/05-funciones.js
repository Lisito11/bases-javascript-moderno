// Funciones en JS

//const arrowFunction = () => ("Algo");


const saludar = function (nombre){
    return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {return `Hola, ${nombre}`};

const saludar3 = (nombre) =>  `Hola, ${nombre}`;

const saludar4 = () =>  `Hola Mundo`;

console.log(saludar);
console.log(saludar2);
console.log(saludar3);
console.log(saludar4);


const getUser = () => {
    return {
        uid: 'ABC123', 
        username: 'Juansito653'
    }
};

const getUser2 = () => ({uid: 'ABC123', username: 'Juansito653'});

console.log(getUser());
console.log(getUser2());

// Tarea

function getUserActive(nombre){
    return {
        uid: "ABC234",
        username: nombre
    }
}

const usuariosActivo = getUserActive("Lisanny");

console.log(usuariosActivo);


const getUserActive2 = (nombre) => ({uid: 'ABC123', username: nombre});

console.log(getUserActive2("Andres"));





