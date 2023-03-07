const num1 = parseInt(prompt( 'Ingrese el primer N°'));
const num2 = parseInt(prompt( 'Ingrese el segundo N°'));
const num3 = parseInt(prompt( 'Ingrese el tercer N°'));
if (num1 > num2 && num1 > num3) {
    document.write(`el mayor es ${num1}`);
}else if (num2 > num3) {
    document.write(`el mayor es ${num2}`);
} else {
    document.write(`el mayor es ${num3}`);
}

