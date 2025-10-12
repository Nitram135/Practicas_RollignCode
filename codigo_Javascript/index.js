// funciones de estadistica
function media(poblacion){
    let resultado = 0;
    for (let i = 0; i < poblacion.length; i++){
        resultado += poblacion[i];
    }
    return (resultado/poblacion.length).toFixed(2);
}
function desvioStandar(poblacion){
       let desvios = 0;
       for (let i = 0; i< poblacion.length; i ++){
        desvios += ((poblacion[i] - media(poblacion))**2);
       }
       return (Math.sqrt(desvios/poblacion.length)).toFixed(2);
}
function coeficienteVariacion(poblacion){
     return ((desvioStandar(poblacion)/media(poblacion))*100).toFixed(2);
}
//funciones de validacion
function validarContraseña(contraseña){
contraseña = contraseña.trim();
let dosLetras = 2;
let unaMayuscula = false;
let unaMinuscula = false;
let unNumero = false;
let unCaracterEspecial = false;
let sinEspacios = true;

if (contraseña.length < 12){
    return `La contrseña debe tener almenos 12 caracteres`;
} else{

for (let i = 0; i < contraseña.length; i++){
    
    if (contraseña[i] === contraseña[i].toUpperCase() && contraseña[i].toLowerCase() !== contraseña[i].toUpperCase())
        {unaMayuscula = true;}
    if (contraseña[i] === contraseña[i].toLowerCase() && contraseña[i].toLowerCase() !== contraseña[i].toUpperCase())
        {unaMinuscula = true;}
    if (isNaN(parseInt(contraseña[i])) !== true)
        {unNumero = true;}
    if (contraseña[i].toLowerCase() !== contraseña[i].toUpperCase())
        {dosLetras--;}
    if (contraseña[i].toUpperCase() === contraseña[i].toLowerCase() && isNaN(parseInt(contraseña[i])) === true) 
        {unCaracterEspecial = true}
    if (contraseña[i] === " ")
        {sinEspacios = false;}
}
}
if(dosLetras <= 0){dosLetras = true;} else{ dosLetras = false}

switch (false){
    case dosLetras:
        return `la contraseña debe incluir almenos dos letras`;
    case unaMayuscula:
        return `la contraseña debe contener almenos una mayuscula`;
    case unaMinuscula:
        return`la contraseña debe contener almenos una minuscula`;
    case unNumero:
        return`la contraseña debe contener almenos un numero`;
    case unCaracterEspecial:
        return`la contraseña debe contener almenos un caracter especial`;
    case sinEspacios:
        return`la contraseña no debe contener espacios`;
    default:
        return`excelente la contraseña cumple con todos los requisitos`;
}
}
//----------------------------------------------------


