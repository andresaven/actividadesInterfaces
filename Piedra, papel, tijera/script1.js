/* --- Declaración de variables --- */

let nombre;
let boton;
let nombreElegido;


/* --- Inicialización de variables --- */

function varInit() {
    nombre = document.getElementById("nombre");
    boton = document.getElementById("button");
    nombreElegido = document.getElementById("nombreElegido");
}


/* --- Listeners --- */

function setListeners() {
    nombre.addEventListener("input", ()=> {
        formValidation();
    });

    boton.addEventListener("click", () => {
        window.location.href = 'game.html';
        
    });
}


/* --- Inicio del juego --- */

function formValidation() {
    let validacion = /^[\wÁÉÍÓÚáéíóúñÑ]{2,10}$/;
    if (validacion.test(nombre.value)) {
        boton.disabled = false;
        sessionStorage.setItem("nombre", nombre.value)
        //He utilizado la propiedad de window .sessionStorage para almacenar en la sesión de navegación el nombre introducido por el usuario, de lo contrario, perdía el nombre al cargar la página.
    }else {
        boton.disabled = true;
    }
}


/* --- Carga --- */

window.addEventListener("load", () => {
    varInit();
    setListeners();
    
})