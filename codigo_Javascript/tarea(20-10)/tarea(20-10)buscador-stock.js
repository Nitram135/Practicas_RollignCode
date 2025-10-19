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

class Analisis {
    constructor(codigo, nombre,nbu,metodo,marca,indicaciones,parametros){
     this.codigo = codigo;
     this.nombre =nombre;
     this.nbu =nbu;
     this.metodo =metodo;
     this.marca =marca;
     this.indicaciones =indicaciones;
     this.parametros =parametros;
    }
}


