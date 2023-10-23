/* --- Declaración de variables --- */

let piedra;
let papel;
let tijera;
let lagarto;
let spock;
let opciones;

let piedraOr;
let papelOr;
let tijeraOr;
let lagartoOr;
let spockOr;
let opcionesOr;


let jugador;
let ordenador;

let resultado;

let marcadorJug;
let puntosJug;
let marcadorOr;
let puntosOr;


/* --- Inicialización de variables --- */

function varInit() {
    piedra = document.getElementById("piedra");
    papel = document.getElementById("papel");
    tijera = document.getElementById("tijera");
    lagarto = document.getElementById("lagarto");
    spock = document.getElementById("spock");
    opciones = [piedra, papel, tijera, lagarto, spock];

    piedraOr = document.getElementById("piedraOr");
    papelOr = document.getElementById("papelOr");
    tijeraOr = document.getElementById("tijeraOr");
    lagartoOr = document.getElementById("lagartoOr");
    spockOr = document.getElementById("spockOr");
    opcionesOr = [piedraOr, papelOr, tijeraOr, lagartoOr, spockOr];
    

    jugador = document.getElementById("jugador");
    ordenador = document.getElementById("ordenador");

    resultado = document.getElementById("resultado");

    marcadorJug = document.getElementById("puntosJug");
    puntosJug = 0;
    marcadorOr = document.getElementById("puntosOr");
    puntosOr = 0;
}


/* --- Selección del usuario --- */

function setListeners() {
    piedra.addEventListener("click", () => {
        unsetOther(piedra);
        playerSelection("piedra")
        randomEffect("piedra");
    });
    papel.addEventListener("click", () => {    
        unsetOther(papel);
        playerSelection("papel")
        randomEffect("papel");
    });
    tijera.addEventListener("click", () => {
        unsetOther(tijera);
        playerSelection("tijera")
        randomEffect("tijera");
    });
    lagarto.addEventListener("click", () => {
        unsetOther(lagarto);
        playerSelection("lagarto")
        randomEffect("lagarto");
    });
    spock.addEventListener("click", () => {
        unsetOther(spock);
        playerSelection("spock")
        randomEffect("spock");
    });
}


/* --- Desactivar el resto de selecciones --- */

function unsetOther(opcion) {
    opcion.classList.add("opcionElegida");
    for (let i = 0; i < opciones.length; i++){
        if (opcion !== opciones[i]){
            opciones[i].classList.remove("opcionElegida");
        }
    };
}

/* --- Selección jugador --- */

function playerSelection(selection) {
    jugador.innerHTML = `<img src="img/${selection}.png" alt="${selection}" width="150px">`;
    jugador.style.visibility = "visible"
}



/* --- Selección del ordenador --- */

/* Aquí he vuscado como crear una suerte de sleep() de Java en JavaScript para crear el efecto random de elección del ordenador. He visto que se hacía de manera asíncrona con promesas (objeto que se prepara para ser ejecutado en cualquier momento) y await conbinado con un setTimeout (función que hace que la ejecución pare un determinado tiempo).

Así, la explicación es: creamos una función a la que vamos a llamar "sleep()" (como en java). Esta devuelve un objeto promesa al que se le pasan dos parámetros: la resolución (callback, ejecución del objeto Promesa) y una función setTimeout que programamos con el parámetro de tiempo que queremos esperar y la resolución que devolvemos. Por último, creamos la función donde queremos aplicar el sleep() como asíncrona y utilizamos await (detenemos la ejecución hasta el cumplimiento de la promesa (el setTimeuot de 100ms) para ejecutar nuestra función sleep. */


function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function randomEffect(seleccion){
    let count = 0;
    while (count < 3) {
        for (let i = 0; i < opcionesOr.length; i++){
            opcionesOr[i].classList.add("opcionElegida");
            await sleep(100);
            opcionesOr[i].classList.remove("opcionElegida");
        };
        count++
    }; 
    game(seleccion)
}

/* --- Selección del ordenador --- */

function visualComputerSelection(computerSelection) {
    switch (computerSelection) {
        case "piedra":
            piedraOr.classList.add("opcionElegida");
            ordenador.innerHTML = '<img src="img/piedra.png" alt="piedra" width="150px">'
            break;
        case "papel":
            papelOr.classList.add("opcionElegida");
            ordenador.innerHTML = '<img src="img/papel.png" alt="piedra" width="150px">'
            break;
        case "tijera":
            tijeraOr.classList.add("opcionElegida");
            ordenador.innerHTML = '<img src="img/tijera.png" alt="piedra" width="150px">'
            break;
        case "lagarto":
            lagartoOr.classList.add("opcionElegida");
            ordenador.innerHTML = '<img src="img/lagarto.png" alt="piedra" width="150px">'
            break;
        case "spock":
            spockOr.classList.add("opcionElegida");
            ordenador.innerHTML = '<img src="img/spock.png" alt="piedra" width="150px">'
            break;
    }
    ordenador.style.visibility = "visible"
}


/* --- Mecánica del juego --- */

function game(selection) {
    let randomNumber = Math.floor(Math.random() * 5);
    let computerOptions = ["piedra", "papel", "tijera", "lagarto", "spock"]
    let computerSelection = computerOptions[randomNumber]
    visualComputerSelection(computerSelection);

    if (selection === computerSelection) {
        resultado.textContent = "Empate";
        resultado.style.visibility = "visible"; 
    }else if (
    //     switch (selection) {
    //         case "piedra":
    //             if (computerSelection === "papel" || computerSelection === "spock") {
    //                 resultado.textContent = "Has perdido";
    //                 resultado.style.visibility = "visible"; 
    //                 puntosOr++;
    //                 marcadorOr.textContent = puntosOr
    //             } else {
    //                 resultado.textContent = "¡Has ganado!";
    //                 resultado.style.visibility = "visible"; 
    //                 puntosJug++;
    //                 marcadorJug.textContent = puntosJug
    //             }
    //             break;
    //         case "papel":
    //             if (computerSelection === "tijera" || computerSelection === "lagarto") {
    //                 resultado.textContent = "Has perdido";
    //                 resultado.style.visibility = "visible"; 
    //                 puntosOr++;
    //                 marcadorOr.textContent = puntosOr
    //             } else {
    //                 resultado.textContent = "¡Has ganado!";
    //                 resultado.style.visibility = "visible"; 
    //                 puntosJug++;
    //                 marcadorJug.textContent = puntosJug
    //             }
    //             break;
    //         case "tijera":
    //             if (computerSelection === "piedra" || computerSelection === "spock") {
    //                 resultado.textContent = "Has perdido";
    //                 resultado.style.visibility = "visible"; 
    //                 puntosOr++;
    //                 marcadorOr.textContent = puntosOr
    //             } else {
    //                 resultado.textContent = "¡Has ganado!";
    //                 resultado.style.visibility = "visible"; 
    //                 puntosJug++;
    //                 marcadorJug.textContent = puntosJug
    //             }
    //             break;
    //         case "lagarto":
    //             if (computerSelection === "tijera" || computerSelection === "piedra") {
    //                 resultado.textContent = "Has perdido";
    //                 resultado.style.visibility = "visible"; 
    //                 puntosOr++;
    //                 marcadorOr.textContent = puntosOr
    //             } else {
    //                 resultado.textContent = "¡Has ganado!";
    //                 resultado.style.visibility = "visible"; 
    //                 puntosJug++;
    //                 marcadorJug.textContent = puntosJug
    //             }
    //             break;
    //         case "spock":
    //             if (computerSelection === "papel" || computerSelection === "lagarto") {
    //                 resultado.textContent = "Has perdido";
    //                 resultado.style.visibility = "visible"; 
    //                 puntosOr++;
    //                 marcadorOr.textContent = puntosOr
    //             } else {
    //                 resultado.textContent = "¡Has ganado!";
    //                 resultado.style.visibility = "visible"; 
    //                 puntosJug++;
    //                 marcadorJug.textContent = puntosJug
    //             }
    //             break;

    //     }
    // } 
        
        
        (selection === "piedra" && computerSelection === "papel") || (selection === "piedra" && computerSelection === "spock") ||

        (selection === "papel" && computerSelection === "tijera") || (selection === "papel" && computerSelection === "lagarto") ||

        (selection === "tijera" && computerSelection === "piedra") ||
        (selection === "tijera" && computerSelection === "spock") ||

        (selection === "lagarto" && computerSelection === "piedra") || (selection === "lagarto" && computerSelection === "tijera") ||

        (selection === "spock" && computerSelection === "papel") || 
        (selection === "spock" && computerSelection === "lagarto") ){

        resultado.textContent = "Has perdido";
        resultado.style.visibility = "visible"; 

        puntosOr++;
        marcadorOr.textContent = puntosOr
    } else {
        resultado.textContent = "¡Has ganado!";
        resultado.style.visibility = "visible"; 

        puntosJug++;
        marcadorJug.textContent = puntosJug
    }
}

/* --- Marcador --- */

function scoreboard(resultado) {
    
    
}



/* --- Carga --- */

window.addEventListener("load", () => {
    varInit();
    setListeners();
})