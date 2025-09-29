window.onload = function () {

    //EN VARIABLES SE ALMACENARAN LOS BOTONES QUE DESPUES SE OCUPARAN
    let btnVerificarPersona = document.getElementById('btnVerificarAccesoPersona');
    let btnMostrarResultadosDePersona = document.getElementById('btnMostrarResultadosPersona');
    let btnResfrescar = document.getElementById('boton-refrescar');
    let btnCrearObjeto = document.getElementById('btnCrearObjeto');


    ////Variables globales: Pueden ser accedidas desde cualquier parte (botón, función, etc)
    let mensajes = [];

    btnVerificarPersona.addEventListener('click', function(){

        determinarPersonaMayorDeEdad(mensajes);
        //console.log(mensajes);
        
    })
    btnMostrarResultadosDePersona.addEventListener('click', function () {

        //ESTE FOR LO QUE HACE ES QUE RECORRE TODOS LOS NOMBRES Y LOS ALMACENA EN LA VARIABLE
        //LLAMADA "NOMBRE PARA MOSTRARLO EN PANTALLA CON UNA LISTA "OL"
        console.log(mensajes);
        
        for (let i = 0; i < mensajes.length; i++) {
            let nombre  = mensajes[i];
            crearHistorialUsuariosIngresados(nombre);
        }

    })

    //Refreca la página web
    btnResfrescar.addEventListener('click', function() {

        console.log(mensajes);

        for (let i = 0; i < mensajes.length; i++) {
            let objetoPersona = mensajes[i];
            console.log(objetoPersona);

            crearHistorialUsuariosIngresados(objetoPersona.edad);
            
        }
        
        //location.reload();
    })

    btnCrearObjeto.addEventListener('click',function () {
        
        let nombre = obtenerNombrePersona();
        let edad = obtenerEdadPersona();
        //CREAR OBJETO PERSONA

        const persona = {
            nombre: nombre,
            edad: edad
        };

        mensajes.push(persona);

    })

    

}

//DETERMINAR LA EDAD DE LA PERSONA
function determinarPersonaMayorDeEdad(mensajes) {

    let obtenerResultado = obtenerResultadoH2();

    let nombre = obtenerNombrePersona();
    let edad = obtenerEdadPersona();

    let personas = mensajes.length;

    //CON UNA CONDICIONAL IF-ELSE SE ENCARGA DE EVALUAR LA EDAD DE LA PERSONA
    //E INMEDIATAMENTE HACE UN PUSH CONCATENANDOLE EL MENSAJE CON EL NOMBRE

    let mensaje = '';
    if (edad >= 18) {
        mensaje = `${nombre} es mayor de edad, puede ingresar al sistema`;
        obtenerResultado.classList.add('mayorDeEdad');
       // mensajes.push(`${nombre} es mayor de edad, puede ingresar al sistema`);
       // obtenerResultado.innerHTML =`${nombre} es mayor de edad, puede ingresar al sistema`;
    }else if (edad < 18){
        mensaje = `${nombre} es menor de edad, no puede ingresar al sistema`;
        obtenerResultado.classList.add('menorDeEdad');
        // mensajes.push(`${nombre} es menor de edad, no puede ingresar al sistema`);
        // obtenerResultado.innerHTML =`${nombre} es menor de edad, no puede ingresar al sistema`;
    }
    mensajes.push(mensaje);
    obtenerResultado.innerHTML = mensaje;

    

}

//OBTENER EL NOMBRE DE LA PERSONA
function obtenerNombrePersona() {

    //Se buscar por ID en el input "inputNombrePersona"
    let nombrePersona = document.getElementById('inputNombrePersona').value;
    return nombrePersona;
    
}

//OBTENER EDAD DE LA PERSONA
function obtenerEdadPersona() {

    //Se buscar por ID en el input "inputEdadPersona"
    let edadPersona = parseFloat(document.getElementById('inputEdadPersona').value);
    return edadPersona;
    
}

//OBTENER EL RESULTADO
function obtenerResultadoH2() {

    //Se guarda el resultado en el h2
    // que se busca por ID
    // "resultadoPersonaMayorMenor"
    let H2personaMayorMenor = document.getElementById('resultadoPersonaMayorMenor');
    return H2personaMayorMenor;
    
}

//OBTENER LA LISTA DINAMICA
function obtenerOlLista() {

    let ol = document.getElementById('mayorMenorPersona');
    return ol;
    
}

//CREAR UNA LISTA DINAMICAMENTE
function crearHistorialUsuariosIngresados(nombre) {

    //se va a buscvar por id <ol>
    let ol = document.getElementById('mayorMenorPersona');

    //se crea una variable llamada li(que es lo que quiero crear)
    let li = document.createElement('li');

    li.innerHTML = `${nombre}`;

    //al ol el cual es uno solo, le agrego los li(las filas)
    ol.appendChild(li);
    
}

//SERAN 6 FUNCIONES LAS CUALES SE VAN A ENCARGAR DE
// 1 OBTENER EL NOMBRE DE LA PERSONA (SERA UN STRING "CADENA DE TEXTO")
// 2 OBTENER LA EDAD DE LA PERSONA (SERA UN ENTERO)
// 3 OBTENER EL RESULTADO DE LA EDAD DE LA PERSONA
// 4 OBTENER UNA LISTA DINAMICA DONDE SE MOSTRARAN LOS DATOS DE LAS PERSONAS (NOMBRE Y EDAD)
// 5 CREAR UN HISTORIAL DE LOS DATOS DE LA PERSONA "NOMBRE Y EDAD"
// 6 DETERMINAR 

