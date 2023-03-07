function validarLargo(texto, LarrgoRequerido) {
    return texto.length >= LarrgoRequerido
}
function validarForm() {
    const nombreValido = true
    const paswordValido = validarLargo(document.form1.text1.value, 5);
    const resultado = nombreValido && paswordValido;
    if (resultado) {
        alert('Es Valido')
    } else {
        alert('No es valida')
    }
}