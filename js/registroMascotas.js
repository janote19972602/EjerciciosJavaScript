window.onload = function () {

    //EN VARIABLES SE ALMACENARAN LOS BOTONES QUE DESPUES SE OCUPARAN
    let btnAgregarMascotas = document.getElementById('btnAgregarMascota');
    let btnMostrarMascota = document.getElementById('btnMostrarMascota');
    let btnCalcularEstadistica = document.getElementById('btnCalcularEstadisticas');
    let btnCalcularEstadisticaPorTipo = document.getElementById('btnCalcularEstadisticasPorTipo');

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

    btnCalcularEstadistica.addEventListener('click', function () {

        //verificarPerroGato(mascotasArreglo);
        //realizarCalculoDeMascotas(mascotasArreglo);
        calculoTotalDeMascotas(mascotasArreglo);
        console.log("entro");
    })


    //Estudiar el botón y su función genérica:
    btnCalcularEstadisticaPorTipo.addEventListener('click', function () {

        //Obtener el valor seleccionado por el usuario en el Select
        //1. Ir a buscar el Select por Id
        const select = document.getElementById('tiposMascotas');
        const tipo = select.value;

        console.log(tipo);        
        
        calculoTotalDeMascotasTEST(mascotasArreglo, tipo);
        
    })

}

//     // 2. Inicializa variables para almacenar las edades
//     let gatoMasJoven = Infinity;
//     let gatoMasViejo = -Infinity;
//     let perroMasJoven = Infinity;
//     let perroMasViejo = -Infinity;

// function realizarCalculoDeMascotas(mascotasArreglo) {

//     let resultadoH2 = obtenerResultadoH2Mascota();

//     for (let i = 0; i < mascotasArreglo.length; i++) {
//         const animal = mascotasArreglo[i]; //Acceder al elemento actual del array

//         if (animal.tipo === "gato" || animal.tipo === "Gato") {
//             if (animal.edad < gatoMasJoven) {
//                 gatoMasJoven = animal.edad;
//             }
//             if (animal.edad > gatoMasViejo) {
//                 gatoMasViejo = animal.edad;
//             }
//             else if (animal.tipo === "perro" || animal.tipo === "Perro") {
//                 if (animal.edad < perroMasJoven) {
//                     perroMasJoven = animal.edad;
//                 }
//                 if (animal.edad > perroMasViejo) {
//                     perroMasViejo = animal.edad;
//                 }
//             }
//         }
        
//     }

//         console.log(`Gato más joven: ${gatoMasJoven} años`);
//         console.log(`Gato más viejo: ${gatoMasViejo} años`);
//         console.log(`Perro más joven: ${perroMasJoven} años`);
//         console.log(`Perro más viejo: ${perroMasViejo} años`);

//         // 5. Llama a la función para analizar los animales
//         realizarCalculoDeMascotas(mascotasArreglo);
    
// }





function calculoTotalDeMascotas(mascotasArreglo) {

    console.log(mascotasArreglo);
    

    let resultadoH2 = obtenerResultadoH2Mascota();

    let cantidadDePerros = 0;
    let cantidadDeGatos = 0;
    

    for (let i = 0; i < mascotasArreglo.length; i++) {        
        
        let mascotas = mascotasArreglo[i];

        if (mascotas.tipo === "perro" || mascotas.tipo === "Perro" || mascotas.tipo === "perra" || mascotas.tipo === "Perra") {
            cantidadDePerros++;
                        
        }else if (mascotas.tipo === "gato" || mascotas.tipo === "Gato" || mascotas.tipo === "gata" || mascotas.tipo === "Gata") {
            cantidadDeGatos++;
        }
    }

    resultadoH2.textContent = `cantidad total de perros:${cantidadDePerros} y la cantidad de gatos: ${cantidadDeGatos}`;
    //console.log(cantidadDePerros);
    
}

//Función genérica: hace lo mismo para distintos tipos de datos
function calculoTotalDeMascotasTEST(mascotasArreglo, tipo) {

    let resultadoH2 = obtenerResultadoH2Mascota();  

    // let tipo = '';   
    let contador = 0;

    for (let i = 0; i < mascotasArreglo.length; i++) {        
        
        let mascota = mascotasArreglo[i];
        
        // tipo = 'lagartija';

        contador = contarSegunTipoMascota(mascota, tipo, contador);  
        
    }

    resultadoH2.textContent = `cantidad total de ${tipo}: ${contador}`;
    // resultadoH2.textContent = `cantidad total de perros:${cantidadDePerros} y la cantidad de gatos: ${cantidadDeGatos}`;
    //console.log(cantidadDePerros);    
}

function contarSegunTipoMascota(mascota, tipo, contador){  

    //Para poder comparar textos que son iguales, pero escritos con Mayussculas o minusculas, se deben transformar ambos a Mayúsculas.
    //Asi JS los puede comparar

    if (mascota.tipo.toUpperCase() === tipo.toUpperCase()) {
        console.log('Propiedad del objeto: ' + mascota.tipo.toUpperCase());
        console.log('Tipo: ' + tipo.toUpperCase());
        
        contador++;
    }

    return contador;
}

function verificarPerroGato(mascotasArreglo) {

    
    let resultadoH2 = obtenerResultadoH2Mascota();

    let cantidadPerros = 0; //se inicializa el contador en 0
    let cantidadGatos = 0;  //se inicializa el contador en 0

    //repetimos sobre cada mascota en el arreglo

    for (let i = 0; i < mascotasArreglo.length; i++) {
        let mascotaActual = mascotasArreglo[i];
        mascotaActual.tipo;

        if (mascotaActual.tipo === "Perro" || mascotaActual.tipo === "perro" || mascotaActual.tipo === "Perra" || mascotaActual.tipo === "perra") {
            cantidadPerros++;
        }else if (mascotaActual.tipo === "gato" || mascotaActual.tipo === "Gato" || mascotaActual.tipo === "gata" || mascotaActual.tipo === "Gata") {
            cantidadGatos++;
        }

        resultadoH2.textContent = `En total hay ${cantidadPerros} perros y ${cantidadGatos} gatos en la lista`;
        console.log(resultadoH2);
        
    }
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


