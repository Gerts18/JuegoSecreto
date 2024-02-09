let numSecreto;
let intentos;
let listaNumerosSorteados = [];
let numMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); // query selector me permite elegir un objeto de mi html
    // document me permite conectar mi javascript con HTML
    elementoHTML.innerHTML = texto;
    // innertHTML me permite modificar o insertar en una etiqueta de html
}

console.log(numSecreto);

condicionesIniciales();

function verificarIntento() {
    //let numUsuario = document.querySelector('input').value;
    let numUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numUsuario))
    //console.log(numSecreto === numUsuario)
    if (numSecreto === numUsuario) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto
        if (numUsuario > numSecreto) {
            asignarTextoElemento('p', 'El numero secreto es Menor')
        } else {
            asignarTextoElemento('p', 'El numero secreto es Mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numGenerado = Math.floor(Math.random() * numMaximo) + 1;  
    console.log(listaNumerosSorteados)

    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');

    } else {
        // Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numGenerado);
            return numGenerado;
        }
    }
}

function limpiarCaja() {
    /* let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = ''; */
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Numero Secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numMaximo}`); 
    numSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reinciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Generar el numero aleatorio
    //Indicar mensaje de intervalo de numeros
    //Inicializar el numero de intentos
    condicionesIniciales();  
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}