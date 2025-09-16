window.onload = function () {

    //se declara una variable y lo busca por el ID del boton
    let btnAgregar = document.getElementById('btnAgregarSueldo');
    let btnResfrescar = document.getElementById('boton-refrescar');

    //función que calcula el sueldo líquido
    btnAgregar.addEventListener('click', function () {
        
        calcularSueldoLiquido();
        sueldoInferior();
        // valorMonetario();

    })

    //Refreca la página web
    btnResfrescar.addEventListener('click', function() {
        
        location.reload();
    })

    
}


function calcularSueldoLiquido() {

    //llamado al input donde sale el resultado del Sueldo Liquido
    let p = obtenerP();
    
    // declaración de variables donde se guardan las funciones que 
    // calculan los valores ingresados a traves de los inputs
    //por el cliente/usuario
    let nombreTrabajador = obtenerNombreDelTrabajador();
    let sueldoBrutoTrabajador = obtenerSueldoBrutoDelTrabajador();
    let afpTrabajador = obtenerAFPDelTrabajador();
    let descuentosSaludTrabajador = obtenerDescuentoDeSaludDelTrabajador();

    //Operaciones para calcular los descuentos de AFP y de Salud
    //realizar el calculo de los porcentajes

    let afp = sueldoBrutoTrabajador *

    //Operacion para calcular el sueldo líquido
    let sueldoLiquido = sueldoBrutoTrabajador - descuentosAFP - descuentosSalud;
    
    //Mensajes
    let mensaje = `Empleado/a: ${nombreTrabajador}
    Bruto: ${sueldoBrutoTrabajador.toLocaleString('es-CL')}
    AFP: ${descuentosAFP.toLocaleString('es-CL')}
    Salud: ${descuentosSalud.toLocaleString('es-CL')}
    Sueldo líquido aproximado: ${sueldoLiquido.toLocaleString('es-CL')}`;

    //Se devuelve la respuesta
    p.textContent = mensaje;
    return p;

}

function sueldoInferior() {

    let p = obtenerP();
    let sueldoBrutoTrabajador = obtenerSueldoBrutoDelTrabajador();
    let afpTrabajador = obtenerAFPDelTrabajador();
    let descuentosSaludTrabajador = obtenerDescuentoDeSaludDelTrabajador();

    //Operaciones para calcular los descuentos de AFP y de Salud
    let descuentosAFP = (sueldoBrutoTrabajador * (afpTrabajador / 100));
    let descuentosSalud = (sueldoBrutoTrabajador * (descuentosSaludTrabajador/100));

    //Operacion para calcular el sueldo líquido
    let sueldoLiquido = sueldoBrutoTrabajador - descuentosAFP - descuentosSalud;

         //Condición de sueldo inferior a 500mil, mostrar mensaje
    if (sueldoLiquido <= 500000 ) {
        p.textContent = "Atención: El sueldo líquido está bajo el promedio nacional";
        p.style.color = "red";
        p.style.backgroundColor = "white";
    }
}

// function valorMonetario() {

//     let p = obtenerP();
//     let sueldoBrutoTrabajador = obtenerSueldoBrutoDelTrabajador();
//     let afpTrabajador = obtenerAFPDelTrabajador();
//     let descuentosSaludTrabajador = obtenerDescuentoDeSaludDelTrabajador();

//     //Operaciones para calcular los descuentos de AFP y de Salud
//     let descuentosAFP = (sueldoBrutoTrabajador * (afpTrabajador / 100));
//     let descuentosSalud = (sueldoBrutoTrabajador * (descuentosSaludTrabajador/100));

//     //Operacion para calcular el sueldo líquido
//     let sueldoLiquido = sueldoBrutoTrabajador - descuentosAFP - descuentosSalud;
//     let formato = sueldoLiquido.toLocaleString('es-CL');
//     p.textContent = formato;
// }



function obtenerNombreDelTrabajador() {

    //Se guarda el nombre ingresado a traves del input "nombre"
    //y que se buscó por ID
    let nombreDelTrabajador = document.getElementById('nombreDelTrabajador').value;
    return nombreDelTrabajador;
    
}

function obtenerSueldoBrutoDelTrabajador() {

    //Se guarda el sueldo ingresado a traves del input "sueldoBruto"
    //y que se buscó por ID
    let sueldoBrutoDelTrabajador = parseFloat(document.getElementById('sueldoBruto').value);
    return sueldoBrutoDelTrabajador;
    
}

function obtenerAFPDelTrabajador() {

    //Se guarda el valor de la AFP 
    //ingresado a traves del input "descuentosAFP"
    //y que se busca por ID
    let afpDelTrabajador = parseFloat(document.getElementById('descuentosAFP').value);
    return afpDelTrabajador;
    
}

function obtenerDescuentoDeSaludDelTrabajador() {

    //Se guarda el valor ingresado a traves del input "descuentosSalud"
    //y que se busca por ID
    let descuentoSaludDelTrabajador = parseFloat(document.getElementById('descuentosSalud').value);
    return descuentoSaludDelTrabajador;
    
}

function obtenerP() {

    //Se guarda el resultado
    //ingresado a traves del input "resultadoSueldoLiquido"
    //y que se busca por ID
    let p = document.getElementById('resultadoSueldoLiquido');
    return p;
    
}