const nombre = "Lisanny";
const apellido = "Peña";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido} ${2+2+0}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return `Hola ${nombre}`;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);