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
let todoElformulario = document.querySelector(".formularioAnalisis");
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
let btonModificarActivado = false;
const baseDatos= [];


todoElformulario.addEventListener("keydown", (e)=>{
    if (e.key === "Enter"){
     e.preventDefault();
    }
     
});


nuevo_aceptar.addEventListener("click", (e)=>{  
    if(botonNuevoActivado === false){
        todosLosInputs.forEach((i)=>{
          i.value = "";
          i.removeAttribute("readonly");
        });
        indicaciones.removeAttribute("readonly");
        indicaciones.value ="";
        parametros.innerHTML = "";
        modificar_cancelar.innerHTML = "CANCELAR";
        modificar_cancelar.type = "reset";
        nuevo_aceptar.innerHTML = "ACEPTAR";
        e.preventDefault()
        nuevo_aceptar.type = "submit"; 
        botonNuevoActivado = true;
        focus(codigo);
    }else{
        let coincidencia = false;
        for (let i in baseDatos){
            if(codigo.value === i.codigo.value){
                i.nombre.value = nombre.value;
                i.nbu.value = nbu.value;
                i.metodo.value = metodo.value;
                i.marca.value = marca.value;
                i.indicaciones.value = indicaciones.value;
                coincidencia = true
            }
        } 
        if (codigo.value !=="" && nombre.value !== "" && nbu.value !== "" && metodo.value !== "" && marca.value !== "" && indicaciones.value !== "" && coincidencia === false){
            let nuevoAnalisis = new Analisis(codigo.value,nombre.value.toUpperCase(),nbu.value,metodo.value.toUpperCase(),marca.value.toUpperCase(),indicaciones.value);
            baseDatos.push(nuevoAnalisis);
            todosLosInputs.forEach((i)=>{
            i.value = "";
            });
            indicaciones.value ="";
            parametros.innerHTML = "";
            modificar_cancelar.innerHTML = "MODIFICAR";
            modificar_cancelar.type = "button";
            nuevo_aceptar.innerHTML = "NUEVO";
            nuevo_aceptar.type = "button";
            nbu.setAttribute("readonly", "");
            metodo.setAttribute("readonly","");
            marca.setAttribute("readonly","");
            indicaciones.setAttribute("readonly","");
            botonNuevoActivado = false;
            focus(codigo);
        }else if (codigo.value === "" || nombre.value ===  ""|| nbu.value === ""|| metodo.value ===  ""|| marca.value ===  ""|| indicaciones.value === ""){
            todosLosInputs.forEach((i)=>{
            i.value = "";
            });
            indicaciones.value ="";
            parametros.innerHTML = "";
            modificar_cancelar.innerHTML = "MODIFICAR";
            modificar_cancelar.type = "button";
            nuevo_aceptar.innerHTML = "NUEVO";
            nuevo_aceptar.type = "button";
            nbu.setAttribute("readonly","");
            metodo.setAttribute("readonly","");
            marca.setAttribute("readonly","");
            indicaciones.setAttribute("readonly","");
            botonNuevoActivado = false;
            focus(codigo);
            alert(`Faltan ingreasar Datos`);
        }
    } 
});

/* aqui veremos el boton modificar*/ 
modificar_cancelar.addEventListener("click", (e)=>{
     
    if(botonNuevoActivado === false && codigo.value !== ""){
        todosLosInputs.forEach((i)=>{
          i.removeAttribute("readonly");
        });
        indicaciones.removeAttribute("readonly");
        modificar_cancelar.innerHTML = "CANCELAR";
        e.preventDefault();
        modificar_cancelar.type = "reset";
        nuevo_aceptar.innerHTML = "ACEPTAR";
        nuevo_aceptar.type = "submit";
        botonNuevoActivado = true;
    } 
    else if(botonNuevoActivado === false && codigo.value === "" ){
      alert(`Ingresar un analisis antes de modificar`);
    } 
    else{
        todosLosInputs.forEach((i)=>{
            i.value = "";
            });
            indicaciones.value ="";
            parametros.innerHTML = "";
            modificar_cancelar.innerHTML = "MODIFICAR";
            modificar_cancelar.type = "button";
            nuevo_aceptar.innerHTML = "NUEVO";
            nuevo_aceptar.type = "button";
            nbu.setAttribute("readonly", "");
            metodo.setAttribute("readonly","");
            marca.setAttribute("readonly","");
            indicaciones.setAttribute("readonly","");
            botonNuevoActivado = false;
            focus(codigo);
    }
    
    
});

codigo.addEventListener("blur",()=>{
   if (botonNuevoActivado === false && codigo.value !== ""){
       baseDatos.forEach((i)=>{
        if(i.codigo === codigo.value){
            nombre.value = i.nombre;
            nbu.value = i.nbu;
            metodo.value = i.metodo;
            marca.value = i.marca;
            indicaciones.value = i.indicaciones;
            let fila = document.createElement('tr');
            let celda = `<td>${`${i.codigo}`}</td>
                         <td>${`${i.nombre}`}</td>
                         <td>${"0"}</td>`;
             fila.innerHTML = celda;
             parametros.innerHTML = fila.innerHTML

        }
       });
   }
});



// codigo.addEventListener('blur', ()=>{
//     if(botonNuevoActivado ===false){
//        let fila = document.createElement('tr');
//        let celda = `<td>${"412"}</td>
//                    <td>${"GLUCEMIA"}</td>
//                    <td>${"0"}</td>`;
//        codigo.value = "412";
//        nombre.value = "GLUCEMIA";
//        nbu.value = "660412";
//        metodo.value= "ENZIMATICO";
//        marca.value = "GT LAB";
//        indicaciones.value = "AYUNO DE 8 HS";
//       fila.innerHTML = celda;
//       parametros.innerHTML = fila.innerHTML
//       };
      
//     }
// );

