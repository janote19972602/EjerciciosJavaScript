window.onload = function () {

    let btnAgregarElProducto = document.getElementById('btnAgregarProducto');
    let btnMostrarElProducto = document.getElementById('btnMostrarProducto');
    let btnResfrescar = document.getElementById('boton-refrescar');


    //Variables globales: Pueden ser accedidas desde cualquier parte (botón, función, etc)
    let productosDeArreglo = [];


    btnAgregarElProducto.addEventListener('click',function () {

        capturarYcrearObjetoProductos(productosDeArreglo);
        limpiarInputsVentas(productosDeArreglo);
    })

    btnMostrarElProducto.addEventListener('click',function () {

        for (let i = 0; i < productosDeArreglo.length; i++) {
            let objetoCompraProductos = productosDeArreglo[i];
            console.log(objetoCompraProductos);
            
            crearHistorialComprasProducto(objetoCompraProductos.nombre,objetoCompraProductos.descripcion,
            objetoCompraProductos.precio,objetoCompraProductos.categoria,objetoCompraProductos.cantidadStock);
        }
        
    })

    btnResfrescar.addEventListener('click',function () {

        location.reload();
        
    })

}

//En este proyecto sistema de ventas se deberan incorporar 4 inputs y 1 select con 7 propiedades 
//que se traeran los valores con su id a traves de funciones
//y 2 botones



//NOMBRE
function obtenerNombreProducto() {

    let nombreProducto = document.getElementById('nombreProducto').value;
    return nombreProducto;
    
}


//DESCRIPCION
function obtenerDescripcionProducto() {

    let descripcionProducto = document.getElementById('descripcionProducto').value;
    return descripcionProducto;
    
}

//PRECIO
function obtenerPrecioProducto() {

    let nombreProducto = parseInt(document.getElementById('precioProducto').value);
    return nombreProducto;
    
}

//STOCK
function obtenerCantidadStock() {

    let cantidadStock = parseInt(document.getElementById('cantidadProductoStock').value);
    return cantidadStock;
    
}

//CATEGORIAS
function obtenerCategoriasProductoSelect() {

    let categorias = document.getElementById('tiposCategorias').value;
    return categorias;
}


//OBTIENE LOS RESULTADOS DE LAS COMPRAS
function obtenerResultadoCompraProductoH2() {
    
    //Se guarda el resultado
    //ingresado a traves del input "resultadoCompraProducto"
    //y que se busca por ID
    let h2ResultadoCompra = document.getElementById('resultadoCompraProducto').value;
    return h2ResultadoCompra;
}


//Crea dinamicamente la lista de LA COMPRAS QUE SE HACEN
function crearHistorialComprasProducto(nombre,descripcion,precio,categoria,cantidad) {
    console.log(cantidad);
    
    //Se va a buscar por id <ol>
    let ol = document.getElementById('productosRespuesta');

    //se crea una variable llamada li(lista que quiero crear)
    let li = document.createElement('li');

    li.innerHTML = `Nombre: ${nombre} -  Descripción: ${descripcion} - Precio: ${precio} - Catergoria: ${categoria} - Cantidad: ${cantidad}`;

    console.log(cantidad);
    
    //al ol el cual es uno solo, le agrego los li(las filas)
    ol.appendChild(li);

}


//OBTENER LA LISTA DINAMICA PARA MOSTRAR EN LA LISTA DE 
//LOS PRODUCTOS
function obtenerOlLista() {

    let ol = document.getElementById('productosRespuesta');
    return ol;
    
}

//limpia despues de llenar todo
function limpiarInputsVentas() {

    document.getElementById('nombreProducto').value = '';
    document.getElementById('descripcionProducto').value = '';
    document.getElementById('precioProducto').value = '';
    document.getElementById('cantidadProductoStock').value = '';
    document.getElementById('tiposCategorias').value = 'Selecciona una categoría';
}

//CAPTURA Y CREA OBJETOS
function capturarYcrearObjetoProductos(productosDeArreglo) {
    
    //OBTENEMOS LOS VALORES DE LOS INPUTS Y SELECT
    let nombreDelProducto = obtenerNombreProducto();
    let descripcionDelProducto = obtenerDescripcionProducto();
    let precioDelProducto = obtenerPrecioProducto();
    let categoriaDelProducto = obtenerCategoriasProductoSelect();
    let cantidadEnStock = obtenerCantidadStock();

    //CREAMOS EL OBJETO PRODUCTO CON SUS 5 PROPIEDA:VALOR
    const producto = {
        nombre: nombreDelProducto,
        descripcion: descripcionDelProducto,
        precio: precioDelProducto,
        categoria: categoriaDelProducto,
        cantidadStock: cantidadEnStock
    };

    // AGREGAR EL OBJETO PRODUCTO AL ARREGLO GLOBAL
    productosDeArreglo.push(producto);

    //MOSTRAMOS EN LA CONSOLA EL ARREGLO GLOBAL PARA VER SI FUNCIONA
    console.log(productosDeArreglo);

}

function recorrerArregloDeProductos(productosDeArreglo) {
    
    let h2Resultado = obtenerResultadoCompraProductoH2();

    //paso 1  Recorrer el arreglo de productos

    for (let i = 0; i < productosDeArreglo.length; i++) {
        let registroProductos = productosDeArreglo[i];
 
    }

    h2Resultado.textContent = `HOLA`
    
}

function crearHistorialDeCompras(nombre,descripcion,precio,categoria,cantidad) {

    //se va a buscvar por id <ol>
    let ol = document.getElementById('productosRespuesta');

    //se crea una variable llamada li(que es lo que quiero crear)
    let li = document.createElement('li');

    li.innerHTML = `Nombre:${nombre}, Descripción: ${descripcion}, Precio:${precio}, Catergoria: ${categoria}, Cantidad: ${cantidad}`;

    //al ol el cual es uno solo, se le agregan los li(las filas)
    ol.appendChild(li);
    
}






