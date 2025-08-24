/*
Ejercicio 1:

Calcula cuántas horas le llevaría llegar a la Luna a una nave espacial y guarda el resultado en una variable.

La distancia desde la Tierra hasta la Luna es de 384.400 kilómetros.

La velocidad de la nave es de 1225 kilómetros por hora.
*/

// Distancia en kilómetros
const distanciaLuna = 384400;

// Velocidad en km/h
const velocidadNave = 1225;

// Calcular tiempo = distancia / velocidad
const horas = distanciaLuna / velocidadNave;

// Mostrar resultado
console.log("La nave tardaría " + horas + " horas en llegar a la Luna.");
