//Defino las variables que vamos a utilizar a nivel global

let usuario;
let botonInicio;
let mostrarJuego;
let nombreJugador;
let piedra;
let papel;
let tijeras;
let lagarto;
let spock;
let imgOrdenador;
let imgJugador;
let imprimirResultado;
let reiniciar;
let puntosJugador=0;
let puntosOrdenador=0;



//Cargamos la página con "listeners" e inicializamos las variables dentro del listener.

window.addEventListener("load", ()=>{

    usuario= document.getElementById("usuario");
    botonInicio=document.getElementById("botonInicio");    
    mostrarJuego=document.getElementById("mostrarJuego");
    mostrarJuego.style.display="none";   
    botonInicio.disabled="true";
    usuario.focus();          
    nombreJugador=document.getElementById("nombreJugador");
    piedra=document.getElementById("botonPiedra");
    papel=document.getElementById("botonPapel");
    tijeras=document.getElementById("botonTijeras");
    lagarto=document.getElementById("botonLagarto");
    spock=document.getElementById("botonSpock");
    imgOrdenador=document.getElementById("imgOrdenador");
    imgJugador=document.getElementById("imgJugador");   
    imprimirResultado=document.getElementById("imprimirResultado");
    reiniciar=document.getElementById("reiniciar");
    


 //Función activacion boton inicio de partida cuando el usuario introduce su nombre.
    usuario.addEventListener("input", ()=>{

        if(usuario.value.length >= 3){
            botonInicio.disabled =false;
        }else{
            botonInicio.disabled =true;
        }
    })
 

 //Función en la que el juego se muestra por pantalla en cuanto el usuario hace click en Iniciar Juego.

    botonInicio.addEventListener("click", ()=>{
        mostrarJuego.style.display="flex";
        nombreJugador.value=usuario.value;

    })

//Ponemos a la escucha todas las opciones del juego que vienen definidas en HTML como "button".Al hacer click en el botón seleccionado se lanza la función "jugar".

    piedra.addEventListener("click", ()=>{
        jugar("piedra");                          
    })
    papel.addEventListener("click", ()=>{
        jugar("papel");
    })
    tijeras.addEventListener("click", ()=>{
        jugar("tijeras");
    })
    lagarto.addEventListener("click", ()=>{
        jugar("lagarto");
    })
    spock.addEventListener("click", ()=>{
        jugar("spock");
    })


//Ponemos a la escucha el botón de reiniciar la partida, de manera que se restablecen todos los valores a cero al hacer click sobre él.

    reiniciar.addEventListener("click", ()=>{
        puntosJugador=0;
        puntosOrdenador=0;
        resultadoJugador.textContent=puntosJugador;
        resultadoOrdenador.textContent=puntosOrdenador;
        imprimirResultado.textContent="";        
        usuario.value="";
        nombreJugador.value=usuario.value;
        mostrarJuego.style.display="none";
        imgJugador.src="/imagenes/jugador.png";
        imgOrdenador.src="/imagenes/ordenador.png";

    })


//Función que aúna las funciones ('reglasJuego', 'puntos','imprimirPuntos') la opción escogida por el jugador, la del ordenador, las compara y genera un resultado (puntos).

    function jugar(opcionJugador){

        let opcionOrdenador;
        let resultado;
        let opcionesOrdenador=["piedra","papel","tijeras","lagarto","spock"]

        opcionOrdenador=opcionesOrdenador[Math.floor(Math.random() * opcionesOrdenador.length)];

        resultado=reglasJuego(opcionJugador,opcionOrdenador);

        imgJugador.src="/imagenes/"+opcionJugador+".png";
        imgOrdenador.src="/imagenes/"+opcionOrdenador+".png";

        puntos(resultado);
        imprimirPuntos();


}

//Definimos en una función las distintas opciones que puede escoger el jugador con sus resultados (empate, pierdes, ganas)

    function reglasJuego(opcionJugador,opcionOrdenador){

        if(opcionJugador===opcionOrdenador){
            return "¡EMPATE!";
        }else if(
            (opcionJugador==="piedra" && (opcionOrdenador==="tijeras" || opcionOrdenador==="lagarto")) ||
            (opcionJugador==="papel" && (opcionOrdenador==="piedra" || opcionOrdenador==="spock")) ||
            (opcionJugador==="tijeras" && (opcionOrdenador==="papel" || opcionOrdenador==="lagarto")) ||
            (opcionJugador==="lagarto" && (opcionOrdenador==="spock" || opcionOrdenador==="papel")) ||
            (opcionJugador==="spock" && (opcionOrdenador==="tijeras" || opcionOrdenador==="piedra")) 
        ){
            return( "¡GANAS!");

        }else{       
            return("¡PIERDES!");
        }
    }   
    
//Función que calcula el número de veces que gan el jugador y el ordenador.

    function puntos(resultado){                

        if(resultado === "¡GANAS!"){
            imprimirResultado.textContent="¡GANAS!"
            puntosJugador++;
        }else if (resultado ==="¡PIERDES!"){
            imprimirResultado.textContent="¡PIERDES!"
            puntosOrdenador++;
        }else if(resultado ==="¡EMPATE!"){
            imprimirResultado.textContent="¡EMPATE!"

        }

    }
   
//Función que imprime los resultados obtenidos por el jugador y el ordenador. 

    function imprimirPuntos(){
        let resultadoJugador=document.getElementById("resultadoJugador");
        let resultadoOrdenador=document.getElementById("resultadoOrdenador");
        resultadoJugador.textContent=puntosJugador;
        resultadoOrdenador.textContent=puntosOrdenador;
    }
       
   

});

 



 

       
    
      
    
             
    

   
    
    