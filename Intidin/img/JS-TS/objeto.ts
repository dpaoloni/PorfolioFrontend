interface Persona {
    Nombre: string;
    Apellido: string;
    Acercade: string;
    Titulos: [string,string];
}

let pofolio: Persona = {
    Nombre: "",
    Apellido: "",
    Acercade: "",
    Titulos: ["",""],
}
function GetNombre(nombre: string): void {
    const nombre1 = document.getElementById("Nombre");
    nombre1.textContent = nombre;
}

function GetApellido(apellido: string): string {
    const a =document.getElementById("Apellido");
    a.textContent=apellido;;
}

function GetAcercade(apellido: string): string {
    const a =document.getElementById("text-acercade");
    a.textContent = acercade;
    return pofolio.Acercade=acercade;
}


function showFile1(imput): void{
    let file= imput.file[0]
}

let...