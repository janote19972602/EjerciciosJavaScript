window.onload = function () {

    let btnCalcularNotas = document.getElementById('btnAgregarNota');
    let btnPromedioFinal = document.getElementById('btnCalcularPromedio');

    //Variables globales: Pueden ser accedidas desde cualquier parte (botón, función, etc)
    let arregloNotas = [];

    btnCalcularNotas.addEventListener('click',function () {

        crearNotasPorArreglo(arregloNotas);
        console.log(arregloNotas);       
        
    })

    btnPromedioFinal.addEventListener('click', function () {
        
        calcularPromedio(arregloNotas);

    })
    
}



//Esta funcion crea las notas ingresadas por el alumno a traves del input
function crearNotasPorArreglo(arregloNotas) {

    let div = obtenerDiv();

    //Obtener valores de los inputs
    let notaDeAlumno = obtenerNota();
    let asignatura = obtenerNombreAsignatura();


    // En este arreglo se guardaran los valores de los 2 inputs
    // let arregloNotasIngresadas = [];

    //Agregar al arreglo "datosIngresados" los datos
    arregloNotas.push(notaDeAlumno);

    div.textContent = `el valor de la nota es ${arregloNotas}`;

}



function calcularPromedio(arregloNotas) {

    let div = obtenerDiv();

    //OBTENER VALOR DEL INPUT "NOTA"
    let nombreAsignatura = obtenerNombreAsignatura();
    let notaEstudiante = obtenerNota();

    //Calcular el promedio del arreglo.
    //Recorrer arreglo, sumar todos los valores y luego dividir por la cantidad de elementos(notas)

   let cantidadDeNotas = arregloNotas.length;
    console.log(cantidadDeNotas);

    let sumaDeNotas = 0;

    for (let i = 0; i < arregloNotas.length; i++){
        sumaDeNotas = sumaDeNotas + arregloNotas[i];
    }

    let promedio = sumaDeNotas / cantidadDeNotas;


    if (promedio >= 4.0) {
        div.textContent = `aprobaste ${nombreAsignatura} con nota ${notaEstudiante}`;
    }else if (promedio < 4.0) {
        div.textContent = `Reprobaste ${nombreAsignatura} con nota ${notaEstudiante}`;
    }

    

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