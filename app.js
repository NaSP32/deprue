/*
 Cambia el contenido de la etiqueta h1 con document.querySelector 
 y asigna el siguiente texto: "Hora del Desafío".
 */
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del desafío :D";

/*
Crea una función que muestre en la consola el mensaje 
"El botón fue clicado" siempre que se presione el botón "Console".
*/
function mensajeClick() {
    console.log("El boton fue clickeado");

}

/**
Crea una función que se ejecute cuando se haga clic en el botón 
"prompt", preguntando el nombre de una ciudad de Argentina. 
Luego, muestra una alerta con el mensaje concatenando la respuesta
 con el texto: "Estuve en {ciudad} y me acordé de ti".
*/
function ingresaCiudadArgentina(){
    let ciudad = prompt('Por favor dime una ciudad de Argentina');
    alert(`Estuve en ${ciudad} y me acorde de vos <3`);
}

/*
Crea una función que muestre una alerta con el mensaje: 
"Yo amo JS" siempre que se presione el botón "Alerta".
 */
function alertJS() {
    alert('Yo amo JS');
}

/**
Al hacer clic en el botón "suma", pide 2 números y muestra 
el resultado de la suma en una alerta.
*/
function operacionSuma(){
    let numero1 = parseInt(prompt('Ingresa el primer número para realizar una suma'));
    let numero2 = parseInt(prompt('Ingresa el segundo número para realizar una suma'));
    resultado = (numero1) + (numero2); 
    alert(`El resultado de la suma de ${numero1} + ${numero2} es ${resultado}`); 
}