//esto es un coment de una linea 

/*declarar una variable que es una variable
Es un espacio de memoria que guarda un dato 
*/

//declarar una variable LET-CONST 

//LET variable que cambia el valor en el tiempo 
//CONST variable que jamas va a cambiar 

let anioActual =2024;
const intagram = "https://www.instagram.com/";

//mostrar mensajes
console.log(anioActual);
console.log('anioActual');
console.log('Ano actual: '+ anioActual);
console.log(intagram);

//modificar contenido de una variable
anioActual = 2025;
console.log(anioActual);

document.write('<p class="parrafoDestacado">Esto es una prueba de document.write</p>');

//ventanas emergentes
alert('Hola Mundo')

//solicitar a un usuario un nombre y mostrar un saludo 

const nombreUsario = prompt('Ingrese su nombre');
console.log(nombreUsario)

document.write('<p>Bienvenido '+ nombreUsario +'</p>');

//solicitar a un usuario un precio de un producto en dolares 
const precioSolicitado = parseFloat(prompt('ingrese un valor en dolares'));
console.log(precioSolicitado)

//parseInt('50')numeros enteros
//parseFloat('50.9')numeros decimales

alert('el importe indicado corresponde a USD$'+(precioSolicitado + 2) );
