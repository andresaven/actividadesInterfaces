# Proyecto Piedra, papel, tijera

## Descripción

Este código presenta una implementación del juego "Piedra, Papel, Tijera, Lagarto, Spock". A través de la interacción con la interfaz de usuario, el jugador puede seleccionar una de las opciones y competir contra la elección aleatoria del ordenador. El juego determina el ganador, el perdedor o un empate según las reglas definidas, y muestra el resultado al jugador.

## Funcionalidad del juego

1. El usuario ingresa su nombre en el campo correspondiente.
   
![Inicio](Piedra,%20papel,%20tijera/resources/capturas/1.png)

2. Una vez validado el nombre, el jugador puede empezar el juego.
   
![Jugador](Piedra,%20papel,%20tijera/resources/capturas/3.png)

3. El jugador selecciona una de las opciones (Piedra, Papel, Tijera, Lagarto, Spock).
   Ésta se queda fijada tanto en las opciones como en el centro de la pantalla.
   
![Opciones](Piedra,%20papel,%20tijera/resources/capturas/5.png)

4. El ordenador hace su elección aleatoriamente, se muestra el resultado del juego y se actualiza el marcador.
   La opción del ordenador se quedará fijada en las opciones y en el centro de la pantalla.
   
![Opcion Ordenador](Piedra,%20papel,%20tijera/resources/capturas/6.png)

5. Con el botón reiniciar, el juego regresa a la pantalla de introducción de nombre de jugador y resetea los valores de la partida.
    
![Reinicio](Piedra,%20papel,%20tijera/resources/capturas/9.png)


## Video explicativo de la funcionalidad del juego.

https://github.com/andresaven/actividadesInterfaces/assets/122389484/d70145b7-49f5-4e7a-94ec-b476baece717


## Estructura del código

### 1. Declaración de variables

Se declaran diversas variables para almacenar referencias a elementos del DOM y otros valores relacionados con el juego.

### 2. Inicialización de variables (`varInit`)

Esta función inicializa las variables anteriormente declaradas para hacer referencia a elementos específicos del DOM mediante `document.getElementById`.

### 3. Listeners (`setListeners`)

Esta función establece event listeners para los diferentes elementos interactivos de la interfaz, como los botones de las opciones del juego. Estos listeners se encargan de detectar cuando el usuario hace una selección y de ejecutar las funciones correspondientes.

### 4. Validación del formulario (`formValidation`)

Antes de empezar el juego, el usuario debe ingresar su nombre. Esta función valida que el nombre ingresado cumpla con ciertas reglas (en este caso, una expresión regular) y, si es válido, habilita el botón para comenzar el juego y almacena el nombre en `sessionStorage`.

### 5. Desactivar otras selecciones (`unsetOther`)

Cuando el jugador hace una selección, esta función se encarga de desactivar visualmente las otras opciones para destacar la elección del jugador.

### 6. Selección del jugador (`playerSelection`)

Esta función muestra visualmente la elección del jugador en la interfaz.

### 7. Efecto aleatorio y selección de la computadora (`randomEffect` y `visualComputerSelection`)

Para simular que la computadora está "pensando" en su elección, se crea un efecto visual donde se resaltan las opciones de manera aleatoria. Posteriormente, la computadora hace su elección aleatoriamente y se muestra visualmente en la interfaz.

### 8. Mecánica del juego (`game`)

Esta es la función principal del juego, donde se comparan las elecciones del jugador y la computadora para determinar el resultado (victoria, derrota o empate). También se actualiza el marcador según el resultado.

### 9. Evento de carga (`window.addEventListener`)

Cuando se carga la página, se ejecutan las funciones de inicialización y se configuran los listeners. También se recupera el nombre del jugador del `sessionStorage` y se muestra en la interfaz.

## Notas

- Se utiliza `sessionStorage` para almacenar temporalmente el nombre del jugador entre las diferentes páginas.
- El juego sigue las reglas definidas para "Piedra, Papel, Tijera, Lagarto, Spock", lo que significa que cada opción tiene dos formas de ganar, dos formas de perder y una forma de empatar con las demás opciones.

Espero que disfrutes el juego y ¡buena suerte!
