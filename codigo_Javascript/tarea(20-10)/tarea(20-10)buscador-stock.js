let codigo = document.querySelector("#codigo-analisis");
let nombre = document.querySelector("#nombre-analisis");
let nbu = document.querySelector("#nbu-analisis");
let metodo = document.querySelector("#metodo-reactivo");
let marca = document.querySelector("#marca-reactivo");
let indicaciones = document.querySelector("#indicaciones-analisis");
let parametros = document.querySelector("#parametros");
let agregarParametros = document.querySelector("#agregarParametros");
let formulasAsociadas = document.querySelector("#formulasAsociadas");
let valoresReferencia = document.querySelector("#valoresReferencia");
let eliminarParametros = document.querySelector("#eliminarParametros");
let importarParametros = document.querySelector("#importarParametros");
let informeVistaPrevia = document.querySelector("#informeVistaPrevia");
let modificar_cancelar = document.querySelector("#btn-cancelar");
let nuevo_aceptar = document.querySelector("#btn-aceptar");
//-------------
//aqui crearemos variables que concideremos mas utiles
let todosLosInputs = document.querySelectorAll("input");

function Analisis (codigo,nombre,nbu, metodo,marca,indicaciones){
     this.codigo = codigo;
     this.nombre = nombre;
     this.nbu = nbu;
     this.metodo = metodo;
     this.marca = marca;
     this.indicaciones =indicaciones;
}
let botonNuevoActivado = false;
const baseDatos= [];


nuevo_aceptar.addEventListener("click", ()=>{
    if(botonNuevoActivado === false){
        todosLosInputs.forEach((i)=>{
          i.value = "";
          i.removeAttribute("readonly");
        });
        indicaciones.removeAttribute("readonly")
        indicaciones.value ="";
        parametros.innerHTML = "";
        modificar_cancelar.innerHTML = "CANCELAR";
        modificar_cancelar.type = "reset";
        nuevo_aceptar.innerHTML = "ACEPTAR";
        nuevo_aceptar.type = "submit";
        botonNuevoActivado = true;
        focus(codigo);
    }else{
        if (codigo.value!=="" && nombre.value !=="" && nbu.value!==""&&metodo.value!==""&&marca.value!==""&&indicaciones.value!==""&&botonNuevoActivado===true){
            let nuevoAnalisis = new Analisis(codigo.value,nombre.value.toUpperCase(),nbu.value,metodo.value.toUpperCase(),marca.value.toUpperCase(),indicaciones.value);
            baseDatos.push(nuevoAnalisis)
            todosLosInputs.forEach((i)=>{
            i.value = "";
            });
            indicaciones.value ="";
            parametros.innerHTML = "";
            modificar_cancelar.innerHTML = "MODIFICAR";
            modificar_cancelar.type = "button";
            nuevo_aceptar.innerHTML = "NUEVO";
            nuevo_aceptar.type = "button";
            nbu.setAttribute("readonly");
            metodo.setAttribute("readonly");
            marca.setAttribute("readonly");
            indicaciones.setAttribute("readonly");
            botonNuevoActivado = false;
            focus(codigo);
        }else{
            todosLosInputs.forEach((i)=>{
            i.value = "";
            });
            indicaciones.value ="";
            parametros.innerHTML = "";
            modificar_cancelar.innerHTML = "MODIFICAR";
            modificar_cancelar.type = "button";
            nuevo_aceptar.innerHTML = "NUEVO";
            nuevo_aceptar.type = "button";
             nbu.setAttribute("readonly");
            metodo.setAttribute("readonly");
            marca.setAttribute("readonly");
            indicaciones.setAttribute("readonly");
            botonNuevoActivado = false;
            focus(codigo);
            alert(`Faltan ingreasar Datos`);
        }
    } 
});







// codigo.addEventListener('blur', ()=>{
//       let fila = document.createElement('tr');
//       let celda = `<td>${glucemia.codigo}</td>
//                    <td>${glucemia.nombre}</td>
//                    <td>${"0"}</td>`;
//       fila.innerHTML = celda;
//       parametros.innerHTML = fila.innerHTML
// });