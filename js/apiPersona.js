window.onload = function () {


    let btnEnviarDatosDePersona = document.getElementById('btnEnviarDatosDePersona');
    let verificarOptimizado = document.getElementById('btnVerificarOptimizado');
    let cambiarColorSegunCategoria = document.getElementById('btnCambioDeColor');



    verificarOptimizado.addEventListener('click',function(){
        
        verificarMayorDeEdad();
       
        
    })

    cambiarColorSegunCategoria.addEventListener('click',function () {
        
        evaluarRangosDeEdad();
        let nombre = obtenerNombre();
        let edad = obtenerEdad();
        let categoria = 'blue';
        crearHistorialUsuarios(nombre,edad,categoria);

    })
    
}



//pendiente: falta obtener el color de la categoria
function crearHistorialUsuarios(nombre,edad,categoria) {

    //Cse va a buscvar por id <ol>
    let ol = document.getElementById("historial");

    //se crea una variable llamada li(que es lo que quiero crear)
    let li = document.createElement('li');

    li.innerHTML = `${nombre} - ${edad} años`;
    li.style.color = categoria;

    //al ol el cual es uno solo, le agrego los li(las filas)
    ol.appendChild(li);
    
}


function verificarMayorDeEdad(){

    let edad = obtenerEdad();
    let h2 = obtenerH2();

    if (edad >= 18) {
        h2.textContent = "Es mayor de edad, puede ingresar";
    }else{
        h2.textContent = "Es menor de edad, no puede ingresar";
    }
}

function evaluarRangosDeEdad() {

    let p = obtenerP();
    let edad = obtenerEdad();
    
    if (edad >0 && edad <= 12) {
        pintarParrafoResultado(p,"Eres un explorador curioso","blue");
    }else if (edad >= 13 && edad <=17) {
        pintarParrafoResultado(p,"Estas en la mejor etapa para aprender cosas nuevas","green");
    }else if (edad >=18 && edad <=30) {
        pintarParrafoResultado(p,"Tienes toda la energia para lograr tus metas","orange");
    }else if (edad >= 31 && edad <= 59) {
        pintarParrafoResultado(p,"Estas en la etapa de mayor experiencia","brown");
    }else if (edad >=60) {
        pintarParrafoResultado(p,"Disfruta de tus beneficios y sabiduría acumulada","purple");
    }

}

function pintarParrafoResultado(p,mensaje,color) {

    p.textContent = mensaje;
    p.style.color = color;
}

function obtenerEdad(){

    let edadIngresada = parseInt(document.getElementById('inputEdad').value);
    return edadIngresada;
}

function obtenerP() {
    let nombreIngresado = document.getElementById('colorDeNombreIngresadoPorEdad');
    return nombreIngresado;
}


function obtenerH2(){
    let h2 = document.getElementById('resultadosEdadPersona');
    return h2;
}

function obtenerNombre() {

    let nombreIngresado = document.getElementById('inputNombre').value;
    return nombreIngresado;
}






