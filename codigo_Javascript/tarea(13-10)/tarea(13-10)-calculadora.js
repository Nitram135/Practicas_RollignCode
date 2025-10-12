//------------------------------------------------------------------------------------------
// tarea calculadora
//------------------------------------------------------------------------------------------
// ALGORITMO:
/* INICIO:
Nuestro programa debe poder interactuar con el usuario de manera dinamica. El modo de interaccion debe ser unicamente por medio de eventos clicks, los cuales se aplicaran a cada uno de los botones. Estos seran los inputs, y los mensajes seran mostrados en el visor (input con id = "display").
--Consideraciones tecnicas
el boton "limpiar", se podra armar con una funcion que devuelva a "0" el value del "display"

*/


const num0 = document.querySelector(".zero");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");
const num4 = document.querySelector("#num4");
const num5 = document.querySelector("#num5");
const num6 = document.querySelector("#num6");
const num7 = document.querySelector("#num7");
const num8 = document.querySelector("#num8");
const num9 = document.querySelector("#num9");

const visor = document.querySelector("#display");

num0.addEventListener("click", ()=> {
       visor.value = num0.innerText;
})
num1.addEventListener("click", ()=> {
       visor.value = num1.innerText;
})
num2.addEventListener("click", ()=> {
       visor.value = num2.innerText;
})
num3.addEventListener("click", ()=> {
       visor.value = num3.innerText;
})
num4.addEventListener("click", ()=> {
       visor.value = num4.innerText;
})
num5.addEventListener("click", ()=> {
       visor.value = num5.innerText;
})
num6.addEventListener("click", ()=> {
       visor.value = num6.innerText;
})
num7.addEventListener("click", ()=> {
       visor.value = num7.innerText;
})
num8.addEventListener("click", ()=> {
       visor.value = num8.innerText;
})
num9.addEventListener("click", ()=> {
       visor.value = num9.innerText;
})

