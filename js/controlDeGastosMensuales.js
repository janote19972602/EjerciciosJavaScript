window.onload = function () {

    //buscar btn por su id
    let btnCalculoDeFinanzas = document.getElementById('btnCalcularFinanzas');
    console.log("hola");


    // inputs por id
    let alimentacion = document.getElementById('sueldoMensual');
    let transporte = document.getElementById('gastosEnTransporte');
    let arriendo = document.getElementById('gastosEnArriendo');
    let ocio = (document.getElementById('gastosEnOcio'));

    // aqui se guardaran los valores
    let valoresIngresados = [];


    btnCalculoDeFinanzas.addEventListener('click', function () {

        //Obtener valores de los inputs
        let nombreUsuario = obtenerNombreDelUsuario();
        let sueldoMensual = obtenerSueldoMensualDelTrabajador();
        let gastoAlimentacion = obtenerGastosEnAlimentacion();
        let gastoTransporte = obtenerGastosEnTransporte();
        let gastoArriendo = obtenerGastosEnArriendo();
        let gastoOcio = obtenerGastosEnOcio();

        //Agregar a un arreglo solamente los gastos   
        valoresIngresados.push(gastoAlimentacion);
        valoresIngresados.push(gastoTransporte);
        valoresIngresados.push(gastoArriendo);
        valoresIngresados.push(gastoOcio);

        console.log(valoresIngresados);

        //Se puede declarar un arreglo con valores dentro:
        let arreglo = [1, 3, 5, 2];

        //Se puede acceder a un elemento por su indice:
        let segundoElemento = arreglo[1];
        console.log('elemento:' + segundoElemento);

        //Un ciclo FOR permite recorrer un arreglo desde el primer elemento
        //hasta el último
        for (let indice = 0; indice < arreglo.length; indice++) {

            //Declaro una variable que va ir guardando los elementos del arreglo
            //por su índice, que en este caso es la variable i
            let elemento = arreglo[indice];
            // console.log(elemento);
        }

        //Como sumar los elementos de un arreglo.
        //Se debe declarar una variable que vaya guardando la suma de los elementos

        let suma = 0;
        for (let indice = 0; indice < arreglo.length; indice++) {

            //sumar cada elemento del arreglo a la variable que va guardando la suma
            suma = suma + arreglo[indice]; 
            console.log(suma);                      
            
        };

        //Cuando termine el FOR, la variable suma tendra la suma total de los elementos
        console.log('La suma total de los elementos es ' + suma);    
        


        
    })
    
    
}





// function guardarValoresInputsNumericosEnUnArreglo() {

//     let alimentacion = gastosAlimentacion;
//     let transporte = obtenerGastosEnTransporte();
//     let arriendo = obtenerGastosEnArriendo();
//     let ocio = obtenerGastosEnOcio();



//     let miArreglo = [];
    
// }

function obtenerNombreDelUsuario() {

    //Se guarda el nombre ingresado a traves del input "nombre"
    //y que se buscó por ID
    let nombreDelUsuario = document.getElementById('nombreDelUsuario').value;
    return nombreDelUsuario;
    
}

function obtenerSueldoMensualDelTrabajador() {

    //Se guarda el nombre ingresado a traves del input "sueldo"
    //y que se buscó por ID
    let sueldoMensual = parseFloat(document.getElementById('sueldoMensual').value);
    return sueldoMensual;
    
}

function obtenerGastosEnAlimentacion() {

    //Se guarda el nombre ingresado a traves del input "gastos alimentacion"
    //y que se buscó por ID
    let gastosAlimentacion = parseFloat(document.getElementById('gastosEnAlimentacion').value);
    return gastosAlimentacion;
    
}

function obtenerGastosEnTransporte() {

    //Se guarda el nombre ingresado a traves del input "gastos transporte"
    //y que se buscó por ID
    let gastosTransporte = parseFloat(document.getElementById('gastosEnTransporte').value);
    return gastosTransporte;
    
}

function obtenerGastosEnArriendo() {

    //Se guarda el nombre ingresado a traves del input "gastos arriendo"
    //y que se buscó por ID
    let gastosArriendo = parseFloat(document.getElementById('gastosEnArriendo').value);
    return gastosArriendo;
    
}

function obtenerGastosEnOcio() {

    //Se guarda el nombre ingresado a traves del input "gastos ocio"
    //y que se buscó por ID
    let gastosOcio = parseFloat(document.getElementById('gastosEnOcio').value);
    return gastosOcio;
    
}

function obtenerDiv() {

    //Se guarda el resultado
    //ingresado a traves del input "resultado"
    //y que se busca por ID
    let div = document.getElementById('resultado');
    return div;
    
}

