window.onload = function (){


    let btnEnviarDatosDePersonaMayor = document.getElementById('btnEnviarDatosDePersonaMayor');


    btnEnviarDatosDePersonaMayor.addEventListener('click',function () {

        let inputNombre = document.getElementById('inputNombre');
        let verificarNombre = inputNombre.value;
        let nombrePersona = verificarNombre;

        let inputEdad = document.getElementById('inputEdad');
        let verificarEdad = inputEdad.value;
        let verificarEdadPersona = parseInt(verificarEdad);
        let p = document.getElementById('resultadosEdadPersonaMayor');
        let colorTexto = document.getElementsByClassName('pColorRango');
        
        let niño = " Eres un explorador curioso";
        let adolescente = " Estas en la mejor etapa para aprender cosas nuevas";
        let adultoJoven = " Tienes toda la energia para lograr tus metas";
        let adulto = " Estas en la etapa de mayor experiencia";
        let adultoMayor = " Disfruta de tus beneficios y sabiduría acumulada";
        
        

        if (verificarEdadPersona >0 && verificarEdadPersona <= 12) {
            p.textContent = nombrePersona + niño;
            p.classList.add(colorTexto);
            // p.textContent.style.color = "red";
        }else if (verificarEdadPersona >=13 && verificarEdadPersona <= 17) {
            p.textContent = nombrePersona + adolescente;
            p.classList.add(colorTexto);
        }else if (verificarEdadPersona >= 18 && verificarEdadPersona <= 30){
            p.textContent = nombrePersona + adultoJoven;
        }else if (verificarEdadPersona >= 31 && verificarEdadPersona <=59) {
            p.textContent = nombrePersona + adulto;
        }else if (verificarEdadPersona >=60) {
            p.textContent = nombrePersona + adultoMayor;
        }
    })
}














