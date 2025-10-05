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
} else if(contraseña.length > 20){
    return`la contraseña debe tener maximo 20 caracteres`;
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
if(dosLetras > 0) {dosLetras = false;} else {dosLetras = true;}

switch (false){
    case dosLetras:
        return `debe incluir almenos dos letras`;
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
alert(`${validarContraseña(`MartinMayol@2025`)}`);
