let messege: string = 'Hellow World';
interface Persona{
    Nombre: string;
    Apellido: string;
    Acercade: string;
    Titulos: [string, string]
}

let porfolio: Persona={
    Nombre: "",
    Apellido:"",
    Acercade:"",
    Titulos: ["","" ]
}

function GetNombre(nombre: string): void{
    const nombre1 = document.getElementById("Nombre");
    nombre1.textContent = nombre;
}

function GetApellido(apellido: string): string{
    const a = document.getElementById("Apellido");
    a.texContent = apellido;
    return porfolio.Apellido=apellido;
}

function GetAcercade(acercade: string): string{
    const a = document.getElementById("text-acercade");
    a.texContent = acercade;
    return porfolio.Acercade=acercade;
}