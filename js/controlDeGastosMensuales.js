window.onload = function () {

    //buscar btn por su id
    let btnCalculoDeFinanzas = document.getElementById('btnCalcularFinanzas');
    let btnResfrescar = document.getElementById('boton-refrescar');

    //Refreca la página web
    btnResfrescar.addEventListener('click', function() {
        
        location.reload();
    })

    btnCalculoDeFinanzas.addEventListener('click', function () {

        capturarGastosDelArreglo();
        calcularValoresDelArreglo();
        obtenerSaldoFinal();        
    })
}

function capturarGastosDelArreglo() {

        let div = obtenerDiv();
        
        //Obtener valores de los inputs
        let nombreUsuario = obtenerNombreDelUsuario();
        let sueldoMensual = obtenerSueldoMensualDelTrabajador();
        
        //ESTOS VALORES DE LOS GASTOS SON LOS QUE SERAN MOSTRADOS
        //EN EL ARREGLO Y CADA GASTO SE SUMARA AL OTRO HASTA QUE
        //TERMINE
        let gastoAlimentacion = obtenerGastosEnAlimentacion();
        let gastoTransporte = obtenerGastosEnTransporte();
        let gastoArriendo = obtenerGastosEnArriendo();
        let gastoOcio = obtenerGastosEnOcio();

        // En este arreglo se guardaran los valores de los 4 inputs
        let valoresIngresados = [];

        //Agregar a un arreglo solamente los gastos   
        valoresIngresados.push(gastoAlimentacion);
        valoresIngresados.push(gastoTransporte);
        valoresIngresados.push(gastoArriendo);
        valoresIngresados.push(gastoOcio);

        div.innerText = `El valor de los gastos es` + valoresIngresados;    
        return valoresIngresados;
}

function calcularValoresDelArreglo(valoresIngresados) {

        let div = obtenerDiv();
        //Obtener valores de los inputs
        let nombreUsuario = obtenerNombreDelUsuario();
        let sueldoMensual = obtenerSueldoMensualDelTrabajador();

        let totalGastos = 0;
        //SUMAR LOS ELEMENTOS DEL ARREGLO, COMO YA TIENEN VALORES TRAS EL "PUSH" QUE SE LES HIZO SOLO FALTA SUMARLOS

        for (let i = 0; i < valoresIngresados.length; i++) {
            totalGastos = totalGastos + valoresIngresados[i];
        }

        div.textContent = `la suma de los valores del arreglo es ` + totalGastos.toLocaleString('es-CL');
}

function obtenerSaldoFinal() { 
    //ESTA FUNCION ME TIENE DUDANDO PORQUE ENTRA AL IF DE LA LINEA 104 y no se DONDE OBTENER LOS VALORES INGRESADOS linea 114 EN LA
    //CONSOLA ME SALE QUE NO ESTA DEFINIDA EN ESTA FUNCION PORQUE EN EL WORD DE REQUISITOS ME PIDEN QUE DEVUELVA 
    //EN LA SECCION GASTOS, TODOS LOS GASTOS Y YA LO HAGO EN "Valores Ingresados" de otra funcion que calcula los valores del
    //arreglo

        let div = obtenerDiv();
        let nombre = obtenerNombreDelUsuario();
        let sueldoMensual = obtenerSueldoMensualDelTrabajador();
        let gastoAlimentacion = obtenerGastosEnAlimentacion();
        let gastoTransporte = obtenerGastosEnTransporte();
        let gastoArriendo = obtenerGastosEnArriendo();
        let gastoOcio = obtenerGastosEnOcio();
        let sueldoFinal = sueldoMensual - (gastoAlimentacion + gastoArriendo + gastoOcio + gastoTransporte);

        div.textContent = `hola ${nombre} el sueldo final es ${sueldoFinal}`;

        let cien = 100000;

        if (sueldoFinal >= 0 ) {
            div.textContent = `!Bien hecho, ${nombre}! Te sobran ${sueldoFinal.toLocaleString('es-CL')} este mes`;
        }else if (sueldoFinal <= 0){
            div.textContent = `Cuidado, ${nombre}. Estas sobregastando por ${sueldoMensual.toLocaleString('es-CL')} `;
        }else if (sueldoFinal <= 0 && sueldoFinal == cien) {
            div.textContent = `Atención: Tu sueldo es muy bajo`;
        }

        div.textContent = `Resumen financiero de ${nombre}:
        Sueldo Mensual: ${sueldoMensual.toLocaleString('es-CL')}
        -Total de gastos: ${valoresIngresados.toLocaleString('es-CL')}
        -Saldo final: ${sueldoFinal.toLocaleString('es-CL')}`;
    }



function listaDinamica(alimentacion,transporte,arriendo,ocio) {

    //Se va a buscar por id <ul> (ul-dinamico)
    let ul = document.getElementById('ul-dinamico');

    //se crea una variable llamada li(que es lo que quiero crear)
    let li = document.createElement('li');

    

    
}



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

