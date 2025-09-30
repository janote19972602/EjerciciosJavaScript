window.onload = function () {

    //EN VARIABLES SE ALMACENARAN LOS BOTONES QUE DESPUES SE OCUPARAN
    let btnAgregarMascotas = document.getElementById('btnAgregarMascota');
    let btnMostrarMascota = document.getElementById('btnMostrarMascota');

    ////Variables globales: Pueden ser accedidas desde cualquier parte (botón, función, etc)
    let mascotasArreglo = [];

    btnAgregarMascotas.addEventListener('click',function () {
        capturarYcrearObjetoMascota(mascotasArreglo);
        limpiarInputs();
        let h2 = obtenerResultadoH2Mascota();
        h2.textContent = 'Mascota ingresada correctamente';


        console.log(mascotasArreglo);
        
    })

    btnMostrarMascota.addEventListener('click', function () {

        mostrarDatosMascota(mascotasArreglo);
        
    })

    
    
}

//en este proyecto deberan haber 4 funciones para obtener el valor
//ingresado por el usuario mascotas, 1 funcion para obtener el
//resultado y otra funcion para obtener el ol 
// y 2 botones 

function mostrarDatosMascota(mascotasArreglo) {

    for (let i = 0; i < mascotasArreglo.length; i++) {
        let objetoMascota = mascotasArreglo[i];
        crearHistorialDeMascotasIngresadas(objetoMascota.nombre,objetoMascota.edad,objetoMascota.tipo,objetoMascota.color); 
    }

    


    

    
}

function limpiarInputs() {

    document.getElementById('inputNombreAnimal').value = '';
    document.getElementById('inputEdadAnimal').value = '';
    document.getElementById('inputTipoAnimal').value = '';
    document.getElementById('inputColorAnimal').value = '';
    
    
}


function capturarYcrearObjetoMascota(mascotasArreglo) {

    let nombreMascota = obtenerNombreMascota();
    let edadMascota = obtenerEdadMascota();
    let tipoMascota = obtenerTipoAnimal();
    let colorMascota = obtenerColorAnimal();

    const mascota = {
        nombre : nombreMascota,
        tipo: tipoMascota,
        edad : edadMascota,
        color: colorMascota
    };

    mascotasArreglo.push(mascota);
    
}

//***************INICIO INPUTS MASCOTAS********************** */
//funcion que obtiene el dato ingresado por el input
function obtenerNombreMascota() {

    let nombreMascota = document.getElementById('inputNombreAnimal').value;
    return nombreMascota;
    
}

//funcion que obtiene el tipo a traves del input
function obtenerTipoAnimal() {

    let tipoAnimal = document.getElementById('inputTipoAnimal').value;
    return tipoAnimal;
    
}

//funcion que obtiene la edad a traves del input
function obtenerEdadMascota() {

    let edadMascota = parseInt(document.getElementById('inputEdadAnimal').value);
    return edadMascota;
    
}

//funcion que obtiene el color a traves del input
function obtenerColorAnimal() {

    let colorAnimal = document.getElementById('inputColorAnimal').value;
    return colorAnimal;
    
}
//**************FIN INPUTS MASCOTAS******************* */

//************************************************************* */



//**************INICIO A SECCION RESULTADO********** */
//OBTENER EL RESULTADO ANIMAL
function obtenerResultadoH2Mascota() {

    //Se guarda el resultado en el h2
    // que se busca por ID
    // "resultadoMascota"
    let h2Mascota = document.getElementById('resultadoMascota');
    return h2Mascota;
    
}
//FIN AL RESULTADO
//******************************** */



//OBTENER LA LISTA DINAMICA DE MASCOTA
function obtenerOlListaDinamica() {

    let ol = document.getElementById('mascota');
    return ol;
    
}
//FIN A OBTENER LISTA DE MASCOTA//

//CREAR UNA LISTA DINAMICAMENTE DE LA MASCOTA
function crearHistorialDeMascotasIngresadas(nombre,tipo,edad,color) {

    //se va a buscvar por id <ol>
    let ol = document.getElementById('mascota');

    //se crea una variable llamada li(que es lo que quiero crear)
    let li = document.createElement('li');

    li.innerHTML = `Mascota:${nombre}, Tipo: ${tipo}, Edad:${edad},Color:${color}`;

    //al ol el cual es uno solo, le agrego los li(las filas)
    ol.appendChild(li);
    
}
//FIN A LISTA DINAMICA MASCOTA


