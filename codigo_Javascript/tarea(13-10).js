function cambiarSaludo() {
    const titulo = document.getElementById("saludo");
    titulo.innerText = "Hola desde javascript?"
}
function cambiarColor(){
    const mensaje = document.querySelector(".mensaje");
    mensaje.style.color = "blue";
    mensaje.style.fontSize = "24px";
}

function agregarParrafo(){
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerText = "Soy un nuevo parrafo";
    document.getElementById("contenedor").appendChild(nuevoParrafo);
}
//-------------------------------------------------------------------------------------------
// tarea de tarjeta de presentacion
//-------------------------------------------------------------------------------------------
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const rol = document.querySelector("#rol");
const image = document.querySelector("#image");
const cabecera = document.querySelector("#cabecera");
const puesto = document.querySelector("#puesto");
const contacto = document.querySelector("#contacto");
const foto = document.querySelector("#foto");

function cargar(){
    if(nombre.value && email.value && rol.value && image.value){
       cabecera.innerHTML = nombre.value;
       contacto.innerHTML = email.value;
       puesto.innerHTML = rol.value;
       foto.src = image.value;
       nombre.value = "";
       email.value = "";
       rol.value = "";
       image.value = "";
    } else {
        alert("Faltan datos");
    }
}
document.querySelector("#btn-carga").addEventListener("click", cargar);
//------------------------------------------------------------------------------------------
// tarea buscador de palabras
//------------------------------------------------------------------------------------------

let textoIngresado = document.querySelector("#texto");
let palabraBuscada = document.querySelector("#palabra");
let mensajeCorrecto = document.querySelector("#mensaje_correcto");
let mensajeError = document.querySelector("#mensaje_error");


const textoIngresadoModificado = function (textoIngresado){

    for (let i = 0; i< textoIngresado.value.length; i++){
        if( textoIngresado.value[i] !== " " && textoIngresado.value[i].toUpperCase() === textoIngresado.value[i].toLowerCase())
        {replace(textoIngresado.value[i], "")}
    }
};