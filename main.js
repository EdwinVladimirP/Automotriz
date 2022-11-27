
//Captacion de menu hamburguesa: 
const menu = document.querySelector('.hamburguesa'); 
const navegacion = document.querySelector('.navegacion'); 
const imagenes = document.querySelectorAll('img'); 
//captacion de botones:
const contenedorMotor1 = document.querySelector('.Motor1'); 
const btnTodos = document.querySelector('.todos'); 
const btnBodyparts = document.querySelector('.bodyparts'); 
const btnMotorengine = document.querySelector('.motorengine'); 
const btnOffroad = document.querySelector('.offroad'); 
const btnExoticcustom = document.querySelector('.exoticcustom'); 


document.addEventListener('DOMContentLoaded', ()=>{
    eventos(); 
    Motor1(); 
}); 

const eventos = () =>{
    menu.addEventListener('click',abrirMenu); 
}

const abrirMenu = () =>{navegacion.classList.remove('ocultar'); 
    botonCerrar(); 
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p'); 
    const overlay = document.createElement('div'); 
    overlay.classList.add('pantalla_completa'); 
    const body = document.querySelector('body'); 
    if(document.querySelectorAll('.pantalla-completa').length > 0) return; 
    body.appendChild(overlay); 
    btnCerrar.textContent = 'x'; 
    btnCerrar.classList.add('btn-cerrar'); 
     /*while(navegacion.children[5]){
        navegacion.removeChild(navegacion.children[5]); 
     }*/
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overlay); 
}
//lazyload: 
const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const imagen = entry.target; 
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen); 
        }
    });
});
imagenes.forEach(imagen =>{
    observer.observe(imagen); 
}); 




const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click', () =>{
        navegacion.classList.add('ocultar'); 
        overlay.remove(); 
        boton.remove(); 
    }); 
    overlay.onclick = function(){
        overlay.remove(); 
        navegacion.classList.add('ocultar'); 
        boton.remove(); 
    }
}

const Motor1 = ()=>{
    let motor1Arreglo = []; 
    const Motor1 = document.querySelectorAll('.motor'); 

    Motor1.forEach(motor=> motor1Arreglo = [...motor1Arreglo, motor]); 
    const bodypartes = motor1Arreglo.filter(bodyparts=> bodyparts.getAttribute('data-motor') === 'bodyparts'); 
    const motorengines = motor1Arreglo.filter(motorengine=> motorengine.getAttribute('data-motor') === 'motorengine');
    const offroads = motor1Arreglo.filter(offroad=> offroad.getAttribute('data-motor') === 'offroad'); 
    const exoticcustoms = motor1Arreglo.filter(exoticcar=> exoticcar.getAttribute('data-motor') === 'exoticcar');

    mostrarMotor(bodypartes, motorengines, offroads, exoticcustoms, motor1Arreglo); 
}

const mostrarMotor =(bodypartes, motorengines, offroads, exoticcustoms, todos) =>{
    btnBodyparts.addEventListener('click', ()=>{
        limpiarHtml(contenedorMotor1); 
        bodypartes.forEach(bodyparts=> contenedorMotor1.appendChild(bodyparts)); 
    }); 
    btnMotorengine.addEventListener('click', ()=>{
        limpiarHtml(contenedorMotor1); 
        motorengines.forEach(motorengine=> contenedorMotor1.appendChild(motorengine)); 
    });
    btnOffroad.addEventListener('click', ()=>{
        limpiarHtml(contenedorMotor1); 
        offroads.forEach(offroad=> contenedorMotor1.appendChild(offroad)); 
    });
    btnExoticcustom.addEventListener('click', ()=>{
        limpiarHtml(contenedorMotor1); 
        exoticcustoms.forEach(exoticcar=> contenedorMotor1.appendChild(exoticcar)); 
    });
    btnTodos.addEventListener('click', ()=>{
        limpiarHtml(contenedorMotor1); 
        todos.forEach(todo=> contenedorMotor1.appendChild(todo)); 
    }); 
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild); 
    }
}














//https://www.youtube.com/watch?v=QUCJ_CpkFbo
//3:16:00 / 4:01:57











/*EJEMPLO DE COMO LLAMAR FUNCIONES FLECHA

document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp(); 
})

//hoisting: la manera en que se escanea el documento y como lo ejecuta


const iniciarApp = () =>{
    console.log('iniciar aplicación...'); 
    sumar2(); 
}




//ARROW FUNCTION O FUNCTION EXPRESSION
const sumar2 = () =>{
    console.log('funcion de flecha', 3+3); 
}
*/