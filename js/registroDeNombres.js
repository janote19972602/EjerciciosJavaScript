window.onload = function () {

    let btnGuardarUsuario = document.getElementById('btnGuardarUsuario');
    let btnMostrarUsuario = document.getElementById('btnMostrarUsuario');

    //Variables globales: Pueden ser accedidas desde cualquier parte (botón, función, etc)
    let arregloDeUsuarios = [];

    btnGuardarUsuario.addEventListener('click',function () {

        obtenerDatosUsuarioEnArreglo(arregloDeUsuarios);
        console.log(arregloDeUsuarios);
         
    })

    btnMostrarUsuario.addEventListener('click', function () {

        let sumaDeUsuarios = obtenerNombreDeUsuarios(arregloDeUsuarios);
        console.log(sumaDeUsuarios);

        let nombre = obtenerNombreUsuario(arregloDeUsuarios);
        crearHistorialUsuarios(nombre);
        
    })
}


//SE OBTIENE POR EL ID EL VALOR DEL INPUT
//Y SE METEN A UN ARREGLO GLOBAL LLAMADO "arreglosUsuarios[]"
function obtenerDatosUsuarioEnArreglo(arregloDeUsuarios) {

    let h2DelResultadoUsuario = obtenerResultadoDeCompra();

    //Obtener el valor del input "usuario"
    let nombreDeUsuario = obtenerNombreUsuario();
    
    //Agregar al arreglo "nombreDeUsuario"
    //arregloDeUsuarios.push(nombreDeUsuario);

    arregloDeUsuarios.push(nombreDeUsuario);

    h2DelResultadoUsuario.textContent = `los usuarios son ${arregloDeUsuarios}`;

}

function obtenerNombreDeUsuarios(arregloDeUsuarios) {

    let h2DelResultadoUsuario = obtenerResultadoDeCompra();

    //OBTENER VALOR DEL INPUT "nombreDeUsuario"

    let nombreUsuario = obtenerNombreUsuario();

    let usuarios = arregloDeUsuarios.length;

    let acumulacionUsuarios = "";

    for (let i = 0; i < arregloDeUsuarios.length; i++) {
        acumulacionUsuarios = acumulacionUsuarios+ arregloDeUsuarios[i]; 
        return acumulacionUsuarios;
    }

    h2DelResultadoUsuario.textContent = `Usuario: ` + nombreUsuario;

    return usuarios;
    
}

function obtenerNombreUsuario() {

    //Se guarda el resultado
    //ingresado a traves del input "inputNombrePersona"
    //y que se busca por ID
    let nombreUsuario = document.getElementById('inputNombrePersona').value;
    return nombreUsuario;
}


function obtenerResultadoDeCompra() {

    //Se guarda el resultado
    //ingresado a traves del input "resultadoCompra"
    //y que se busca por ID
    let h2DelResultadoUsuario = document.getElementById('resultadoUsuario');
    return h2DelResultadoUsuario;
    
}

//pCrea dinamicamente el historial de usuarios ingresados
function crearHistorialUsuarios(nombre) {

    //Cse va a buscvar por id <ol>
    let ol = document.getElementById("historialUsuarios");

    //se crea una variable llamada li(que es lo que quiero crear)
    let li = document.createElement('li');

    li.innerHTML = `${nombre}`;

    //al ol el cual es uno solo, le agrego los li(las filas)
    ol.appendChild(li);

}