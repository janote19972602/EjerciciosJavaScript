window.onload = function () {

    //EN VARIABLES SE ALMACENARAN LOS BOTONES QUE DESPUES SE OCUPARAN
    let btnAgregarMascotas = document.getElementById('btnAgregarMascota');
    let btnMostrarMascota = document.getElementById('btnMostrarMascota');
    let btnCalcularEstadistica = document.getElementById('btnCalcularEstadisticas');
    let btnCalcularEstadisticaPorTipo = document.getElementById('btnCalcularEstadisticasPorTipo');
    let btnFiltrarMayoresDeEdad = document.getElementById('btnFiltrarPorMayoresDeEdad');
    let btnRefrescarPagina = document.getElementById('boton-refrescar');
    let btnMostrarMascotaPorColor = document.getElementById('btnMostrarColorPorBoton');
    let btnNombresLargos = document.getElementById('btnMostraNombresLargos');

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

    btnFiltrarMayoresDeEdad.addEventListener('click', function () {

        verificarMascotasMayoresDeCinco(mascotasArreglo);
        console.log("hola");
        //mostrarMascotasMayoresDe5(mascotasArreglo);
    })

    //Refreca la página web
    btnRefrescarPagina.addEventListener('click', function() {
        
        location.reload();
    })

    btnMostrarMascotaPorColor.addEventListener('click', function () {

        buscarPorColores(mascotasArreglo);
        console.log("hol");
        
    })

    btnNombresLargos.addEventListener('click', function () {

        mostrarMascotasNombresLargos(mascotasArreglo);
        console.log("paz");
        
    })

}

function mostrarMascotasNombresLargos(mascotasArreglo) {

    let h2Resultado = obtenerResultadoH2Mascota(mascotasArreglo);

    //paso 1  Recorrer el arreglo de mascotas
    for (let i = 0; i < mascotasArreglo.length; i++) {
        let mascota = mascotasArreglo[i];

        // Verificar si el nombre de la mascota tiene más de 5 letras
        if (mascota.nombre.length >= 5) {

            //se va a buscvar por id <ol>
            let ol = document.getElementById('mascota');

            //se crea una variable llamada li(que es lo que quiero crear)
            let li = document.createElement('li');

            li.textContent = `${mascota.nombre}  `;
            
            //al ol el cual es uno solo, le agrego los li(las filas)
            ol.appendChild(li);
        }
    }

    h2Resultado.text = `las mascotas con nombre mayor a 5 letras:`;


    
}

//lo que debe hacer esta funcion es filtrar a los animales menores de 5 años
// que se ingresen por pantalla (inputTipoDeAnimal)
//primera opcion para mostrar animales mayores de 5 años
function verificarMascotasMayoresDeCinco(mascotasArreglo) {

    let resultadoH2 = obtenerResultadoH2Mascota(mascotasArreglo);
    // Recorremos el arreglo global de mascotas
    
    for (let i = 0; i < mascotasArreglo.length; i++) {
        let mascota = mascotasArreglo[i];
        console.log("aa");
    
         // Condición para verificar si la mascota es mayor o igual a 5 años
        if (mascota.edad >= 5) {
            console.log("hollllaaa");
            
            //se va a buscvar por id <ol>
            let ol = document.getElementById('mascota');

            //se crea una variable llamada li(que es lo que quiero crear)
            let li = document.createElement('li');

            console.log("hhhh");
            li.textContent = `Mascota:${mascota.nombre} Edad:${mascota.edad}`;
            
            //al ol el cual es uno solo, le agrego los li(las filas)
            ol.appendChild(li);
        }
    }

    resultadoH2.textContent = `las mascotas que son mayores de 5 años`;
    
}

//en esta funcion se debe preguntar si el valor ingresado de color de mascota
//ya existe en el input color de animal
function buscarPorColores(mascotasArreglo) {

    let resultadoH2 = obtenerResultadoH2Mascota(mascotasArreglo);
    let colorBuscado = buscarPorColor();


    // Recorrer el arreglo "mascotasArreglo" con un bucle for
    for (let i = 0; i < mascotasArreglo.length; i++) {

        let mascotaActual = mascotasArreglo[i];
        
        //comparamos el color de la mascota con el color buscado
        if (mascotaActual
            .color === colorBuscado) {

            //se va a buscvar por id <ol>
            let ol = document.getElementById('mascota');

            //se crea una variable llamada li(que es lo que quiero crear)
            let li = document.createElement('li');

            li.textContent = `Mascota:${mascotaActual.nombre} color:${mascotaActual.color}`;
            
            //al ol el cual es uno solo, le agrego los li(las filas)
            ol.appendChild(li);
        }

    }
    resultadoH2.textContent = `las mascotas que son de color`;
}

function calculoTotalDeMascotas(mascotasArreglo) {    

    let resultadoH2 = obtenerResultadoH2Mascota();

    let cantidadDePerros = 0;
    let cantidadDeGatos = 0;
    
    //lo que hace este for es recorrer todas las mascotas y que si en caso
    //de que se un perro le sume a la delaracion en 0, lo mismo para
    //un gato se lo suma 1 al contador
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


function buscarPorColor() {

    let obtenerColorAnimales = document.getElementById('inputColorMascota').value;
    return obtenerColorAnimales;
    
}


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


