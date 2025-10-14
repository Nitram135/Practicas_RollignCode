const texto = document.querySelector("#texto");
const palabra = document.querySelector("#palabra");
const botonBuscar = document.querySelector("button");
const msjCorrecto = document.querySelector("#mensaje_correcto");
const msjError = document.querySelector("mensaje_error");


botonBuscar.addEventListener("click", ()=>{
    let resultado = "";
   if (texto.value !== "" && palabra !== ""){
      resultado = texto.value.trim().split(" ");
      resultado.forEach((i)=> {
      if (i.includes(palabra)){
        
      } 
      });
   }
});
 