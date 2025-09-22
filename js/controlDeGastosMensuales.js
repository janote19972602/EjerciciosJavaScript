window.onload = function () {

    //buscar btn por su id
    let btnCalculoDeFinanzas = document.getElementById('btnCalcularFinanzas');
    let saldoFinal = document.getElementById('btnCalcularSueldoFinal');
    let btnResfrescar = document.getElementById('boton-refrescar');

    //Refreca la página web
    btnResfrescar.addEventListener('click', function() {
        
        location.reload();
    })

    // aqui se guardaran los valores
    let valoresIngresados = [];

    saldoFinal.addEventListener('click',function () {

        obtenerSaldoFinal();
     
    })

    function obtenerSaldoFinal() {

        let nombre = obtenerNombreDelUsuario();
        let sueldoMensual = obtenerSueldoMensualDelTrabajador();
        let gastoAlimentacion = obtenerGastosEnAlimentacion();
        let gastoTransporte = obtenerGastosEnTransporte();
        let gastoArriendo = obtenerGastosEnArriendo();
        let gastoOcio = obtenerGastosEnOcio();
        let sueldoFinal = sueldoMensual - (gastoAlimentacion + gastoArriendo + gastoOcio + gastoTransporte);

        let div = obtenerDiv();
        div.textContent = `hola ${nombre} el sueldo final es ${sueldoFinal}`;

        let cien = 100000;

        if (sueldoFinal >= 0 ) {
            div.textContent = `!Bien hecho, ${nombre}! Te sobran ${sueldoFinal.toLocaleString('es-CL')} este mes`;
        }else if (sueldoFinal <= 0){
            div.textContent = `Cuidado, ${nombre}. Estas sobregastando por ${sueldoMensual} `;
        }else if (sueldoFinal <= 0 && sueldoFinal == cien) {
            div.textContent = `Atención: Tu sueldo es muy bajo`;
        }
        
    }

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

        let saldoFinal = sueldoMensual - (gastoAlimentacion + gastoArriendo + gastoOcio + gastoTransporte);

        let div = obtenerDiv();

        div.textContent = `Resumen financiero de ${nombreUsuario}:
        Sueldo Mensual: ${sueldoMensual.toLocaleString('es-CL')}
        -Total de gastos: ${valoresIngresados.toLocaleString('es-CL')}
        -Saldo final: ${saldoFinal.toLocaleString('es-CL')}`;

        
        

        
        // console.log(valoresIngresados);

        // //Se puede declarar un arreglo con valores dentro:
        // let arreglo = [1, 3, 5, 2];

        // //Se puede acceder a un elemento por su indice:
        // let segundoElemento = arreglo[1];
        // console.log('elemento:' + segundoElemento);

        // //Un ciclo FOR permite recorrer un arreglo desde el primer elemento
        // //hasta el último
        // for (let indice = 0; indice < arreglo.length; indice++) {

        //     //Declaro una variable que va ir guardando los elementos del arreglo
        //     //por su índice, que en este caso es la variable i
        //     let elemento = arreglo[indice];
        //     // console.log(elemento);
        // }

        // //Como sumar los elementos de un arreglo.
        // //Se debe declarar una variable que vaya guardando la suma de los elementos

        // let suma = 0;
        // for (let indice = 0; indice < arreglo.length; indice++) {

        //     //sumar cada elemento del arreglo a la variable que va guardando la suma
        //     suma = suma + arreglo[indice]; 
        //     console.log(suma);                      
            
        // };

        // //Cuando termine el FOR, la variable suma tendra la suma total de los elementos
        // console.log('La suma total de los elementos es ' + suma);    
        


        
    })
    
    
}

// function obtenerSaldoFinal() {

//     let sueldoMensual = obtenerSueldoMensualDelTrabajador();

//     let sueldoFinal = sueldoMensual - valoresIngresados;

//     let div = obtenerDiv();
//     div.textContent = `el sueldo final es ${sueldoFinal};`;
    
    
// }





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

