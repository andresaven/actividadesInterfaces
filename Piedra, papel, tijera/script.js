let piedra;
let papel;
let tijeras;
let lagarto;
let spock;

let piedraOr;
let papelOr;
let tijerasOr;
let lagartoOr;
let spockOr;

let opcionElegida;
let jugador;
let ordenador;

let resultado;

let puntosJug;
let puntosOr;





function varInit() {
    piedra = document.getElementById("piedra");
    papel = document.getElementById("papel");
    tijeras = document.getElementById("tijeras");
    lagarto = document.getElementById("lagarto");
    spock = document.getElementById("spock");

    piedraOr = document.getElementById("piedraOr");
    papelOr = document.getElementById("papelOr");
    tijerasOr = document.getElementById("tijerasOr");
    lagartoOr = document.getElementById("lagartoOr");
    spockOr = document.getElementById("spockOr");

    opcionElegida = "opcionElegida";
    jugador = document.getElementById("jugador");
    ordenador = document.getElementById("ordenador");

    resultado = document.getElementById("resultado");

    puntosJug = document.getElementById("puntosJug");
    puntosOr = document.getElementById("puntosOr");
}

function setListeners() {
    piedra.addEventListener("click", () => {
        piedra.classList.add(opcionElegida);

        selection(piedra)
    });
    papel.addEventListener("click", () => {
        papel.classList.add(opcionElegida);

        selection(papel)
    });
    tijeras.addEventListener("click", () => {
        tijeras.classList.add(opcionElegida);

        selection(tijeras)
    });
    lagarto.addEventListener("click", () => {
        lagarto.classList.add(opcionElegida);

        selection(lagarto)
    });
    spock.addEventListener("click", () => {
        spock.classList.add(opcionElegida);

        selection(spock)
    });
}

function selection() {
    ;
}


window.addEventListener("load", () => {
    varInit();
    setListeners();
})