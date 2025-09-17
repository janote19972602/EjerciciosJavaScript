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

        let valorAlimentacion = alimentacion.value;
        let valorTransporte = transporte.value;
        let valorArriendo = arriendo.value;
        let valorOcio = ocio.value;

        let nuevosValores = [valorAlimentacion]

        valoresIngresados.push(valorAlimentacion);
        valoresIngresados.push(valorTransporte);
        valoresIngresados.push(valorArriendo);
        valoresIngresados.push(valorOcio);

        console.log(valoresIngresados);
        



        
   
       


        
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

// function obtenerGastosEnAlimentacion() {

//     //Se guarda el nombre ingresado a traves del input "gastos alimentacion"
//     //y que se buscó por ID
//     let gastosAlimentacion = parseFloat(document.getElementById('gastosEnAlimentacion').value);
//     return gastosAlimentacion;
    
// }

// function obtenerGastosEnTransporte() {

//     //Se guarda el nombre ingresado a traves del input "gastos transporte"
//     //y que se buscó por ID
//     let gastosTransporte = parseFloat(document.getElementById('gastosEnTransporte').value);
//     return gastosTransporte;
    
// }

// function obtenerGastosEnArriendo() {

//     //Se guarda el nombre ingresado a traves del input "gastos arriendo"
//     //y que se buscó por ID
//     let gastosArriendo = parseFloat(document.getElementById('gastosEnArriendo').value);
//     return gastosArriendo;
    
// }

// function obtenerGastosEnOcio() {

//     //Se guarda el nombre ingresado a traves del input "gastos ocio"
//     //y que se buscó por ID
//     let gastosOcio = parseFloat(document.getElementById('gastosEnOcio').value);
//     return gastosOcio;
    
// }

function obtenerDiv() {

    //Se guarda el resultado
    //ingresado a traves del input "resultado"
    //y que se busca por ID
    let div = document.getElementById('resultado');
    return div;
    
}

