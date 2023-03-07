const nombre = prompt('Ingrese su nombre', '')
const nota = parseInt(prompt('Ingrese su nota', ''));

if (Number.isNaN(nota)) {
    Document.write('LA nota ingresada no es  valida')
} else if (nota >= 4) {
    document.write(`${nombre} estas aprobado con ${nota}`)
} else {
    document.write(`${nombre} No estas aprobado con ${nota}.Segui estudiando `)
} 
