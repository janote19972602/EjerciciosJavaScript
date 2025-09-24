window.onload = function () {

    let NombreProducto = document.getElementById('btnAgregarProducto');
    let PrecioProducto = document.getElementById('btnCalcularTotal');
    let VerificarPresupuesto = document.getElementById('btnVerificarPresupuesto');

    


    NombreProducto.addEventListener('click', function () {

        obtenerDatosProductoMeterEnArreglo();
        //console.log(arregloDeComprasSuper);
        
    })

    PrecioProducto.addEventListener('click', function () {

        //calcularTotalPrecios();
    })

    VerificarPresupuesto.addEventListener('click', function () {
        
    })
    
}

//SE OBTIENE POR EL ID LOS VALORES DE LOS INPUT
//Y SE METEN A UN ARREGLO GLOBAL LLAMADO "arreglosCompraSuper[]"
function obtenerDatosProductoMeterEnArreglo() {

    let h2DelResultado = obtenerResultadoDeCompra();

    //Obtener valores de los inputs
    let nombreProductoSuper = obtenerNombreProducto();
    let precioProductoSuper = obtenerPrecioProducto();

    //Variables globales: Pueden ser accedidas desde cualquier parte (botón, función, etc)
     let arregloDeComprasSuper = [];

    //Agregar al arreglo "nombreProductoSuper" y "precioDelProducto"
    //arregloDeComprasSuper.push(nombreProductoSuper);
    arregloDeComprasSuper.push(precioProductoSuper);

    h2DelResultado.textContent = `el ${nombreProductoSuper} tiene un valor de ${precioProductoSuper}`;
}

//DEBE RECIBIR COMO PARAMETRO EL ARREGLO PRECIOS
function calcularTotalPrecios() {
    
    let h2Resultado = obtenerResultadoDeCompra()

    //OBTENER VALOR DEL INPUT "PRECIOS Y NOMBRE"
    let nombreProducto = obtenerNombreProducto();
    let precioProducto = obtenerPrecioProducto();

    let precioDeCompras = arregloDeComprasSuper.length;
    console.log(precioDeCompras);
    

    let sumaDePrecios = 0;

    for (let i = 0; i < arregloDeComprasSuper.length; i++) {
        sumaDePrecios = sumaDePrecios + arregloDeComprasSuper[i];
    }

    h2Resultado.innerText = `el precio total es ${sumaDePrecios}`;



}

//DEBE RECIBIR COMO PARAMETROS 2 COSAS. 1 EL TOTAL Y 2 EL PRESUPUESTO
function verificarPresupuestoCompras() {

    
}

function obtenerNombreProducto() {

    //Se guarda el nombre ingresado a traves del input "inputNombreProducto"
    //el que se buscó por ID
    let nombreDeProducto = document.getElementById('inputNombreProducto').value;
    return nombreDeProducto;
    
}

function obtenerPrecioProducto() {

    //Se guarda la nota ingresada a traves del input "inputPrecioProducto"
    //el que se buscó por ID
    let precioDeProducto = parseFloat(document.getElementById('inputPrecioProducto').value);
    return precioDeProducto;
    
}

function obtenerResultadoDeCompra() {

    //Se guarda el resultado
    //ingresado a traves del input "resultadoCompra"
    //y que se busca por ID
    let h2DelResultado  = document.getElementById('resultadoCompra');
    return h2DelResultado;
    
}