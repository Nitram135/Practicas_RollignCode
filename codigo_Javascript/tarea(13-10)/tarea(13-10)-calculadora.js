//------------------------------------------------------------------------------------------
// tarea calculadora
//------------------------------------------------------------------------------------------
// ALGORITMO:
/* INICIO:
Nuestro programa debe poder interactuar con el usuario de manera dinamica. El modo de interaccion debe ser unicamente por medio de eventos clicks, los cuales se aplicaran a cada uno de los botones. Estos seran los inputs, y los mensajes seran mostrados en el visor (input con id = "display").
--Consideraciones tecnicas
el boton "limpiar", se podra armar con una funcion que devuelva a "0" el value del "display"

*/

const visor = document.querySelector("#display");
const botones = document.querySelectorAll("button");

botones.forEach((btn)=>{
       btn.addEventListener("click", ()=>{
           if(btn.innerHTML === "="){visor.value = eval(visor.value);} 
           else if (btn.innerHTML === "C"){visor.value = "";}
           else {visor.value += btn.innerHTML}  
       })
});