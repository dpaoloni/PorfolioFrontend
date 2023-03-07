mes = parseInt(prompt('Ingrese mes en numero', ''));

if (mes == 1 || mes == 2 || mes == 3) {
    document.write('Corresponde al primer trimestre del año');
} else if (mes == 4 || mes == 5 || mes == 6) {
    document.write('Correspond al segundo trimestre del año');
} else if (mes == 7 || mes == 8 || mes == 9) {
    document.write('Corresponde al tercer trimestre del año');
} else {
    document.write('Corresponde al cuarto trimetre del año')
}
