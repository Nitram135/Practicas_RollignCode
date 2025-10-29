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
let todosLosInputs = document.querySelectorAll(".todosLosInputs");

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

todosLosInputs.forEach((item,index,array)=>{
    item.addEventListener("keydown", (e)=>{
        if(e.key === "Enter"){
            e.preventDefault();
            let siguiente = index + 1;
            if(siguiente === array.length && !botonNuevoActivado){
                nuevo_aceptar.focus();    
            }else if(siguiente === array.length && botonNuevoActivado){
                modificar_cancelar.focus();  
            }else {
                array[siguiente].focus();
            }
        }
    });
});

/*  en esta seccion vamos a crear las funcionalidades del boton nuevo y aceptar*/
nuevo_aceptar.addEventListener("click", (e)=>{  
    if(!botonNuevoActivado && !btonModificarActivado){
        todosLosInputs.forEach((i)=>{
          i.value = "";
          i.removeAttribute("readonly");
        });
        parametros.innerHTML = "";
        modificar_cancelar.innerHTML = "CANCELAR";
        modificar_cancelar.type = "reset";
        nuevo_aceptar.innerHTML = "ACEPTAR";
        e.preventDefault()
        nuevo_aceptar.type = "submit"; 
        botonNuevoActivado = true;
        codigo.focus();
    }else if(botonNuevoActivado && !btonModificarActivado){
        let coincidencia = false;
        let inputsVacios = false;
        todosLosInputs.forEach((item)=>{
           if(!item.value){
            inputsVacios = true; 
           }
        });
        baseDatos.forEach((item,index,array)=>{
          if (array[index].codigo === codigo.value || array[index].nombre === nombre.value || array[index].nbu === nbu.value ){
            coincidencia = true;
          }
        });
        
        if (!coincidencia && !inputsVacios){
            let nuevoAnalisis = new Analisis(codigo.value,nombre.value.toUpperCase(),nbu.value,metodo.value.toUpperCase(),marca.value.toUpperCase(),indicaciones.value);
            baseDatos.push(nuevoAnalisis);
            todosLosInputs.forEach((i)=>{
            i.value = "";
            });
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
            codigo.focus();
        }else if (inputsVacios){
            todosLosInputs.forEach((i)=>{
            i.value = "";
            });
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
            codigo.focus();
            alert(`Faltan ingreasar Datos`);
        }else if(coincidencia){
            todosLosInputs.forEach((i)=>{
            i.value = "";
            });
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
            codigo.focus();
            alert(`Los datos coinciden con algun analisis ya registrado`);  
        }

    }else if (!botonNuevoActivado && btonModificarActivado){
        e.preventDefault()
        codigo.setAttribute("readonly","");
         let coincidencia = false;
         let inputsVacios = false;
         let posicion = 0;
           todosLosInputs.forEach((item)=>{
             if(!item.value){
             inputsVacios = true; 
            }
            });
         baseDatos.forEach((item,index,array)=>{
          if(item.codigo === codigo.value){
            posicion = index;
          }if(array[index].codigo !== array[posicion].codigo && (item.nombre === nombre.value || item.nbu === nbu.value)){
            coincidencia = true;
          }
         });
         if (inputsVacios){
            alert(`Faltan rellenar campos`)
         }else if (coincidencia){
            alert(`Los datos ingresados ya existen en otro analisis`);
         }else if (!inputsVacios && !coincidencia){
            baseDatos[posicion].nombre = nombre.value.toUpperCase();
            baseDatos[posicion].nbu = nbu.value;
            baseDatos[posicion].metodo = metodo.value.toUpperCase();
            baseDatos[posicion].marca = marca.value.toUpperCase();
            baseDatos[posicion].indicaciones = indicaciones.value.toUpperCase();
            todosLosInputs.forEach((item)=>{
              item.value ="";
            });
              parametros.innerHTML ="";
              codigo.removeAttribute("readonly", "")
              nbu.setAttribute("readonly", "");
              metodo.setAttribute("readonly","");
              marca.setAttribute("readonly","");
              indicaciones.setAttribute("readonly","");
              modificar_cancelar.innerHTML = "MODIFICAR";
              modificar_cancelar.type = "button";
              nuevo_aceptar.innerHTML = "NUEVO";
              nuevo_aceptar.type = "button";
              btonModificarActivado = false;
              codigo.focus;
         }
        }
    }
);

/* aqui veremos el boton modificar*/ 
modificar_cancelar.addEventListener("click", (e)=>{
     
    if(!botonNuevoActivado && !btonModificarActivado && codigo.value){
        todosLosInputs.forEach((i)=>{
          i.removeAttribute("readonly");
        });
        modificar_cancelar.innerHTML = "CANCELAR";
        e.preventDefault();
        modificar_cancelar.type = "reset";
        nuevo_aceptar.innerHTML = "ACEPTAR";
        nuevo_aceptar.type = "submit";
        btonModificarActivado = true;
    } 
    else if(!botonNuevoActivado && !btonModificarActivado && !codigo.value){
      alert(`Ingresar un analisis antes de modificar`);
    } 
    else{
        todosLosInputs.forEach((i)=>{
            i.value = "";
            });
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
            codigo.focus();
    }
    
    
});

codigo.addEventListener("blur",()=>{
   if (!botonNuevoActivado && codigo.value){
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




