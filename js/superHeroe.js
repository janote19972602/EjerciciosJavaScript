window.onload = function () {

    let btnIngresoSuperHeroe = document.getElementById('btnSuperHeroePerfil');
    let btnsuperHeroe = document.getElementById('btnIngresoDeInformacion');
    
    btnIngresoSuperHeroe.addEventListener('click',function () {

        console.log("hola");
        
        let p = obtenerResultadoP();        
        p.textContent = verificarSuperHeroeIngresado();
        
    })


    btnsuperHeroe.addEventListener('click',function () {

            //Validaciones en JS:
            // 1. Siempre van al inicio del código, es decir antes que se ejecute
            //cualquier lógica o cálculo.
            //2. Validación de inputs: Se debe siempre preguntar si se ingresó 
            // un valor
            //3. Es muy recomendable crear una función que valide todos los inputs
            // y que retorne true si está todo ok. Sino debe retornar false.

            let validacion = validarInformacionIngresadaDeSuperHeroe();

            if (validacion = true) {
                let p = obtenerResultadoP();
                p.textContent = validarInformacionIngresadaDeSuperHeroe();
                p.style.color = "red";
                p.style.backgroundColor = "green";
            }
    })
}

function obtenerNombreDeSuperHeroe() {
    
    let nombreIngresadoDeSuperHeroe = document.getElementById('inputNombre').value;
    return nombreIngresadoDeSuperHeroe;
}

function obtenerEdadDeSuperHeroe() {

    let edadIngresadaDeSuperHeroe = document.getElementById('inputEdad').value;
    return edadIngresadaDeSuperHeroe;
    
}

function obtenerPoderDeSuperHeroe() {

    let superPoderDeHeroe = document.getElementById('inputSuperPoder').value;
    return superPoderDeHeroe;
    
}

function obtenerCiudadDeSuperHeroe() {

    let ciudadSuperHeroe = document.getElementById('inputCiudad').value;
    return ciudadSuperHeroe;
    
}

function obtenerHorasDeEntrenamientoDeSuperHeroe() {
    
    let horasDeEntrenamientoSuperHeroe = document.getElementById('inputHorasDeEntrenamiento').value;
    return horasDeEntrenamientoSuperHeroe;
}

function obtenerResultadoP() {

    let p = document.getElementById('resultado');
    return p;   
}

function verificarSuperHeroeIngresado() {

    let nombreDeSuperHeroe = obtenerNombreDeSuperHeroe();
    let edadDeSuperHeroe = parseInt(obtenerEdadDeSuperHeroe());
    let superPoderDeSuperHeroe = obtenerPoderDeSuperHeroe();
    let ciudadDeSuperHeroe = obtenerCiudadDeSuperHeroe();
    let horasDeEntrenamientoSuperHeroe = obtenerHorasDeEntrenamientoDeSuperHeroe();

    let mensaje = `Hola, soy ${nombreDeSuperHeroe}, tengo ${edadDeSuperHeroe} años.
    Mi superpoder secreto es ${superPoderDeSuperHeroe}
    y protejo la ciudad de ${ciudadDeSuperHeroe}.
    entreno ${horasDeEntrenamientoSuperHeroe} horas por semana, lo que me da un nivel de poder de ${horasDeEntrenamientoSuperHeroe * 10} puntos.
    !El mundo esta a salvo gracias a mí!`;
    return mensaje;
}



function validarInformacionIngresadaDeSuperHeroe() {

    let validacion = true;
    let nombreDeSuperHeroe = obtenerNombreDeSuperHeroe();
    let edadDeSuperHeroe = parseInt(obtenerEdadDeSuperHeroe());
    let superPoderDeSuperHeroe = obtenerPoderDeSuperHeroe();
    let ciudadDeSuperHeroe = obtenerCiudadDeSuperHeroe();
    let horasDeEntrenamientoSuperHeroe = obtenerHorasDeEntrenamientoDeSuperHeroe();
    let p = obtenerResultadoP();

    if (nombreDeSuperHeroe === "") {
        p.textContent = "Por favor SuperHéroe, completa todos los datos.";
        validacion = false;
    }else if (edadDeSuperHeroe === "") {
        p.textContent = "Por favor SuperHéroe, completa todos los datos.";
        validacion = false;
    }else if (superPoderDeSuperHeroe === "") {
        p.textContent = "Por favor SuperHéroe, completa todos los datos.";
        validacion = false;
    }else if(ciudadDeSuperHeroe === ""){
        p.textContent = "Por favor SuperHéroe, completa todos los datos.";
        validacion = false;
    }else if(horasDeEntrenamientoSuperHeroe === ""){
        p.textContent = "Por favor SuperHéroe, completa todos los datos.";
        validacion = false;
    }else{
        p.textContent = "Datos introducidos correctamente";
        validacion = true;
    }

    return validacion;

}