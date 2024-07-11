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

/*
Crear una función que muestre "¡Hola, mundo!" en la consola.
*/
function saludar(){
    console.log("¡Hola mundo!");
}
saludar();

/*
Crear una función que reciba un nombre como parámetro y 
muestre "¡Hola, [nombre]!" en la consola.
*/
function saludoCompleto(nombre){
    console.log(`¡Hola, ${nombre}!`);
}
saludoCompleto("Nadia");

/*
Crear una función que reciba un número como parámetro y 
devuelva el doble de ese número.
*/
function dobleDeUnNumero(numero){
    let doble = parseFloat(numero * 2);
    console.log(doble);
    return doble;
}
dobleDeUnNumero(8);

/*
Crear una función que reciba tres números como parámetros 
y devuelva su promedio.
*/
function obtenerPromedio(numero1Prom, numero2Prom, numero3Prom){
    let promedio = parseInt(numero1Prom + numero2Prom + numero3Prom)/3;
    console.log(promedio);
    return promedio;

}
obtenerPromedio(50, 125, 125);

/*
Crear una función que reciba dos números como parámetros 
y devuelva el mayor de ellos.
*/
function mayorQue(numero1MayorQue, numero2MayorQue){
    return numero1MayorQue > numero2MayorQue ? numero1MayorQue : numero2MayorQue;

}
let numeroMayor = mayorQue(345, 987);
console.log(numeroMayor); 
/*
Crear una función que reciba un número como parámetro y 
devuelva el resultado de multiplicar ese número por sí mismo.
*/
function multiplicarPorSiMismo(unNumero){
    return (unNumero * unNumero);
}
let multiplicacion = multiplicarPorSiMismo(10980);
console.log(multiplicacion);
/*
Crea una función que calcule el índice de masa corporal 
(IMC) de una persona a partir de su altura en metros y 
peso en kilogramos, que se recibirán como parámetros.
*/

function indiceMasaCorporal(altura, peso) {
    let imc = peso / altura;
    return(imc); 

}
indiceMasaCorporal(1.59, 68);
console.log(indiceMasaCorporal);

/*
Crea una función que calcule el valor del factorial 
de un número pasado como parámetro.
 */
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 4;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);

/*
 Crea una función que convierta un valor en dólares, pasado 
 como parámetro, y devuelva el valor equivalente en reales
 (moneda brasileña,si deseas puedes hacerlo con el valor del dólar
  en tu país). Para esto, considera la cotización del dólar igual 
  a R$4,80.
 */

function conversion(dolares) {
    let ARS = 1435;
    let convertidos = 0;
    convertidos = (dolares * ARS);
    return convertidos;
}
let valorEnDolares = 190;
let valorEnPesos = conversion(190);
console.log(`${valorEnDolares} dolares son ${valorEnPesos} ARS`);

/*
Crea una función que muestre en pantalla el área y el perímetro 
de una sala rectangular, utilizando la altura y la anchura que 
se proporcionarán como parámetros.
 */

function areaSala(altura, anchura){
    area = (altura * anchura);
    perimetro = (altura + anchura)*2;
}
areaSala(35, 4);
console.log(`El area de la sala es ${area} m2 y el perímetro es ${perimetro} m.`);

/*
Crea una función que muestre en pantalla el área y el perímetro 
de una sala circular, utilizando su radio que se proporcionará 
como parámetro. Considera Pi = 3,14.
*/
function areaCircular(radio){
    areaCirculo = (3.14 * (radio*radio));
    perimetroCirculo = (3.14 * (radio * 2));
}
areaCircular(8) 
console.log(areaCirculo, perimetroCirculo);

/*
Crea una función que muestre en pantalla la tabla de multiplicar 
de un número dado como parámetro.
 */

function multiplicar(tabla){
    let contador = 1;
    while (contador <= 10){
        resultadoMulti = tabla * contador;
        console.log(`${contador} * ${tabla} = ${resultadoMulti}`)
        contador ++;
    }
}
multiplicar(3);