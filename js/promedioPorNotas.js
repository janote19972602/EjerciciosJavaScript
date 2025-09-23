window.onload = function () {

    let btnCalcularNotas = document.getElementById('btnAgregarNota');
    let btnPromedioFinal = document.getElementById('btnCalcularPromedio');

    btnCalcularNotas.addEventListener('click',function () {

        crearNotasPorArreglo();
        
    })

    btnPromedioFinal.addEventListener('click', function () {
        
        calcularPromedio()

    })
    
}



//Esta funcion crea las notas ingresadas por el alumno a traves del input
function crearNotasPorArreglo() {

    let div = obtenerDiv();

    //Obtener valores de los inputs
    let notaDeAlumno = obtenerNota();
    let asignatura = obtenerNombreAsignatura();


    // En este arreglo se guardaran los valores de los 2 inputs
    let arregloNotasIngresadas = [];

    //Agregar al arreglo "datosIngresados" los datos
    arregloNotasIngresadas.push(notaDeAlumno);

    div.textContent = `el valor de la nota es ${arregloNotasIngresadas}`;
    return arregloNotasIngresadas;

}



function calcularPromedio(arregloNotasIngresadas) {

    let div = obtenerDiv();

    //OBTENER VALOR DEL INPUT "NOTA"
    let nombreAsignatura = obtenerNombreAsignatura();
    let notaEstudiante = obtenerNota();

    let promedio = arregloNotasIngresadas;

    if (promedio < 4.0) {
        div.textContent = `aprobaste ${nombreAsignatura} con nota ${notaEstudiante}`;
    }else if (promedio > 4.0) {
        div.textContent = `Reprobaste ${nombreAsignatura} con nota ${notaEstudiante}`;
    }

    

    return promedio;
}

function generarMensaje(promedio) {

    let div = obtenerDiv();

}



function obtenerNombreAsignatura() {

    //Se guarda el nombre ingresado a traves del input "inputNombreAsignatura"
    //el que se buscó por ID
    let nombreAsignatura = document.getElementById('inputNombreAsignatura').value;
    return nombreAsignatura;
    
}

function obtenerNota() {

    //Se guarda la nota ingresada a traves del input "inputNota"
    //el que se buscó por ID
    let notas = parseFloat(document.getElementById('inputNota').value);
    return notas;
    
}

function obtenerDiv() {

    //Se guarda el resultado
    //ingresado a traves del input "resultado"
    //y que se busca por ID
    let div  = document.getElementById('resultado');
    return div;
    
}