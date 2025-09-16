window.onload = function () {

    let botonRespuesta = document.getElementById('btnRespuesta');
    let btnFestejar = document.getElementById('btnFestejar');

    botonRespuesta.addEventListener('click',function() {

        let p = obtenerResultadoP();        
        p.textContent = verificarPersonaIngresada();
        
    })

    btnFestejar.addEventListener('click', function () {

         //Validaciones en JS:
        // 1. Siempre van al inicio del código, es decir antes que se ejecute
        //cualquier lógica o cálculo.
        //2. Validación de inputs: Se debe siempre preguntar si se ingresó 
        // un valor
        //3. Es muy recomendable crear una función que valide todos los inputs
        // y que retorne true si está todo ok. Sino debe retornar false.

        let validacion = validarInformacionIngresada();

        if (validacion == true) {
             let p = obtenerResultadoP();
             p.textContent = verificarFestejos(); 
             //darle estilos al p
             p.style.backgroundColor = 'green';
             p.style.color = 'white';        
        }
    })
}


//SE VAN A BUSCAR LOS 3 DATOS. NOMBRE EDAD Y CIUDAD POR SU ID
//Y SE GUARDAN EN VARIABLES PARA LLAMARLAS Y SER OCUPADAS 
//SOLAMENTE
function obtenerNombre() {

    let nombreIngresado = document.getElementById('inputNombre').value;
    return nombreIngresado;
}

function obtenerEdad() {

    let edadIngresada = document.getElementById('inputEdad').value;
    return edadIngresada;
    
}

function obtenerCiudad() {

    let ciudadIngresada = document.getElementById('inputCiudad').value;
    return ciudadIngresada;

}
//FIN A BUSCAR LOS DATOS INGRESADOS 

//*********************************** *

//IR A BUSCAR EL RESULTADO POR SU ID Y OCUPARLO SOLAMENTE
function obtenerResultadoP(){

    let p = document.getElementById('resultado');
    return p;
}
//

function verificarPersonaIngresada() {

    let nombre = obtenerNombre();
    let edad = parseInt(obtenerEdad());
    let ciudad = obtenerCiudad();
    let mensaje = `hola, me llamo [${nombre},
    tengo ${edad}
    y vivo en ${ciudad}]`;
    return mensaje;

}

function verificarFestejos() {

    let nombre = obtenerNombre();
    let edad = parseInt(obtenerEdad());
    let ciudad = obtenerCiudad();
    let mensaje = `!Feliz cumpleaños, ${nombre}
    el próximo año tendrás ${edad + 1}  
    ¡Saludos desde ${ciudad}!`;
    return mensaje;

}

function validarInformacionIngresada() {

    let validacion = true;
    let nombre = obtenerNombre();
    let edad = obtenerEdad();
    let ciudad = obtenerCiudad();
    let p = obtenerResultadoP();

    if (nombre === "") {
        p.textContent = "Por favor completa todos los datos antes de festejar.";
        validacion = false;
    }else if (edad === "") {
        p.textContent = "Por favor completa todos los datos antes de festejar.";
        validacion = false;
    }else if (ciudad === "") {
        p.textContent = "Por favor completa todos los datos antes de festejar.";
        validacion = false;
    }else{
        p.textContent = "Datos introducidos correctamente";
        validacion = true;
    }

    return validacion;
    
}

