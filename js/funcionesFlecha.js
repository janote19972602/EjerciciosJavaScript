window.onload = function () {

    let ejercicio1 = document.getElementById('btnEjercicioUno');
    let ejercicio2 = document.getElementById('btnEjercicioDos');
    let ejercicio3 = document.getElementById('btnEjercicioTres');
    let ejercicio4 = document.getElementById('btnEjercicioCuatro');
    let ejercicio5 = document.getElementById('btnEjercicioCinco');
    let ejercicio6 = document.getElementById('btnEjercicioSeis');
    let ejercicio7 = document.getElementById('btnEjercicioSiete');
    let ejercicio8 = document.getElementById('btnEjercicioOcho');
    let ejercicio9 = document.getElementById('btnEjercicioNueve');
    let btnResfrescar = document.getElementById('boton-refrescar');

    btnResfrescar.addEventListener('click',function () {

        location.reload();
        
    })

    ejercicio1.addEventListener('click',function () {

        saludoSimple();
        
    })

    ejercicio2.addEventListener('click',function () {
        
        recorrerArreglo();
    })

    ejercicio3.addEventListener('click', function () {

        crearArreglo();
        
    })

    ejercicio4.addEventListener('click', function () {

        sumarElementosEnUnArreglo();
        
    })

    ejercicio5.addEventListener('click',function () {

        arrowSinParametros();
        
    })

    ejercicio6.addEventListener('click', function () {

        nombreConSaludo();
    })

    ejercicio7.addEventListener('click',function () {

        numerosMayoreADiez();
        
    })

    ejercicio8.addEventListener('click', function () {

        longitudDePalabras();
        
    })

    ejercicio9.addEventListener('click', function () {
        
        mostrarTotalPrecios();
    })



    
}

//EJERCICIO 1 Saludo simple
// e imprima Hola, NOMBRE
function saludoSimple() {

    //la variable "saludar" es la que va a tener el valor indicado
    //que se va a escribir en la variable "nombre" con parentesis
    //y llaves 
    const saludar = (nombre) => {

        //aqui se imprime por consola el saludo "hola" + el nombre
        //que es el que va a contener
        console.log(`Hola, ${nombre} te ves sexy`);
    }

    //Ejemplo
    saludar(`Alejandro`);
    
}

//Ejercicio 2 — Recorrer un arreglo
function recorrerArreglo() {

    //se declara el arreglo llamado "numeros" con 3 valores
    let numeros = [1,4,9];

    //se crea la funcion de flecha (arrow) "imprimir"
    const imprimirNumeroActual = (numero) => {

        console.log(`El Número actual del arreglo es: ${numero}`);
        
    };

    //recorrer el arreglo numeros con Foreach 
    // y llamo a arrow (funcion de flecha)
    numeros.forEach(imprimirNumeroActual);

    //esta no la entendi al 100 pero parece que igual la saque jajajaja
    
}

//EJERCICIO NUMERO 3
//Crear un Arreglo
function crearArreglo() {

    //1. defino 2 const, 1 llamada "numeros" y "duplicar"
    // en "numeros" que es un arreglo comienza con 3 valores
    // creo altiro una const llamada "duplicar" y le asigno
    //altiro lo que debe hacer, despues solo la utilizo dentro
    //del ForEach
    const numeros = [2,4,6];
    const duplicar = n => n * 2;

    //2 Recorro el arreglo y guardo mis resultados
    // se utiliza el metodo ForEach para repetir sobre cada
    //elemento/propiedad del arreglo "numeros"
    //dentro de la funcion de ForEach llamo a la funcion "duplicar"
    //con cada elemento y el resultado se agrega al nuevo arreglo
    //llamado resultado


    const resultado = [];

    numeros.forEach(n => {
        resultado.push(duplicar(n));
    });

    //3 imprimo o saco el resultado final duplicado que
    // se muestra en el 
    //contenido del arreglo

    console.log(`El resultado del nuevo arreglo es: ${resultado}`);
    
    
}

//EJERCICIO NUMERO 4
//Sumar elementos de un Arreglo
function sumarElementosEnUnArreglo() {

    //1 se crea un arreglo llamado "numeros" y una variable 
    //llamada "suma" inicializandola en 0
    const numeros = [5,3,88,565];
    let suma = 0;

    //2 crear la funcion arrow (sumar)
    const sumar = n => suma += n;

    //se recorre y se suman los arreglos
    numeros.forEach(sumar);

    //resultado
    console.log(`La suma total es: `+ suma);
    
}

//EJERCICIO NUMERO 5
//Arreglo sin parámetros
function arrowSinParametros() {

    //1 se crea la funcion flecha y se le pasa altiro lo que va hacer
    let saludar = () => `Hola malditos insectos!`;

    //2 llamar a la funcion y se muestra el resultado
    console.log(saludar());

}

//EJERCICIO NUMERO 6
//Mostrar nombres con saludo
function nombreConSaludo() {

    //crear el arreglo "nombres" con 3 nombres(string)
    let nombres = ["Maria", "Alejandro", "Francisca"];

    //usar ForEach con una funcion flecha
    nombres.forEach(nombre => {
        console.log(`Hola que tal ${nombre}`);
        
    });
    
}

//EJERCICIO NUMERO 7
//Encontrar números mayores a 10

function numerosMayoreADiez() {

    //se crea el arreglo de numeros llamado "arregloNumeros" con
    //5 valores y se quiere ver cuales son mayores a 10
    let arregloNumeros = [5,34,8,22,1,34,68];

    //usar ForEach para recorrer el arreglo y recorrer con un IF
    //para ver los numeros que cumplan con la condicion requerida
    //mayores a 10

    arregloNumeros.forEach(numero => {
        if (numero > 10) {
            console.log(`los números mayores a 10 son: ${numero}`);
        }
    })
    //aqui se recorre el arreglo con un ForEach, se pregunta por
    //el numero que sea mayor a 10 y se muestra por consola
    
}

//EJERCICIO NUMERO 8
//Calcular longitud de palabras
function longitudDePalabras() {

    //se crear un arreglo de palabras (string)
    let arregloDePalabras = ['Diamante', 'Sol','Neblina', 'Paralelepipedo', 'luz', 'corregir', 'nacimiento'];

    //se recorre el arreglo con un ForEach y una funcion de flecha
    arregloDePalabras.forEach(largo => {
        console.log(`la palabra ${largo} tiene ${largo.length} letras`);
    });
    //lenght: propiedad que devuelve el número de elementos en una
    //colección para asi saber con exactitud lo requerido en este
    //ejercicio, la longitud de las palabras
    
}

//EJERCICIO NUMERO 9
//Mostrar el total de precios
function mostrarTotalPrecios() {

    //se declaran 1 arreglo llamado "precios" y una variable
    //llamada "total" inicializada en 0 
    let precios = [1400, 2000, 4500, 2790, 67];
    let total = 0;

    //ahora se debe sumar con ForEach el arreglo y dejarlo en total
    precios.forEach(precio =>{
        total += precio;
    })
    //el += es una forma abreviada de sumar un valor a una variable
    // y luego asignar el resultado a esa misma variable.

    //se muestra en consola el total de la suma de precios
    console.log(`El total de los precios ${precios} es: ${total}`);
    
    
}























function recorrerArregloEjemplo() {

    const frutas = ["manzana", "pera", "uva"];

    frutas.forEach(fruta => {
    console.log("Fruta actual:", fruta);
    });

    let numeros = [1,8,34,9];

    numeros.forEach(numero => {
        
        if (numero >8) {
            console.log(numero);
            
        }
    })



//  Explicación:
// forEach recorre el arreglo completo.
// En cada vuelta, la variable fruta toma el valor actual del arreglo.
// La flecha ejecuta el console.log con ese valor.
// //Salida en consola:
// Fruta actual: manzana
// Fruta actual: pera
// Fruta actual: uva
    
}
