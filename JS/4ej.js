const valor1 = prompt('Ingrese su primer numero');
const valor2 = prompt('Ingrese su segundo numero');

const suma = parseInt(valor1) + parseInt(valor2);

//con el parseIn se  convierte al strin en un numero de esa manera se pude sumar y no concatenar
//const valor2 = parseInt(prompt('Ingrese su segundo numero'));

const producto = valor1 * valor2;
// no hace falta  pasarlo  a numero porque la  multiplicacion no concatena

console.log(suma);
console.log(producto);
