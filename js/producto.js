    window.onload = function () {

    let btnAgregar = document.getElementById('btnAgregarProducto');

    btnAgregar.addEventListener('click',function () {
        agregarProducto();
    })
    
};

function agregarProducto() {

    let precioProducto = obtenerPrecioProducto();
    let cantidadProducto = obtenerCantidadProducto();
    let nombreProducto = obtenerNombreProducto();

    let valorFinal = precioProducto * cantidadProducto;

    let h2 = obtenerH2();
    h2.textContent = `El valor del producto ${nombreProducto}, es $${valorFinal}`;
    
}

function productoFinalizado() {

    let mensaje = agregarProducto();
    let h2 = obtenerH2();
    let nombre = nombreProducto();

    h2.textContent = "El producto es " + nombre + mensaje;
    
}

function obtenerNombreProducto(){

    let nombreProducto = document.getElementById('nombreProducto').value;
    return nombreProducto;

}

function obtenerPrecioProducto(){

    let precioProducto = parseInt(document.getElementById('precioProducto').value);
    return precioProducto;

}

function obtenerCantidadProducto(){

    let cantidadProducto = parseInt(document.getElementById('cantidadProducto').value);
    return cantidadProducto;

}

function obtenerH2 (){

    let h2 = document.getElementById('resultadoCompra');
    return h2; 
}


