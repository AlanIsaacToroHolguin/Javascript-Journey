/* 
Exercise 17:

Mostrar todos los numeros impares que haya entre dos 
numeros que nos de el usuario.
*/


let num1 =parseInt(("Dime el primer numero"));

let num2=parseInt(("Dime el primer numero"));

while(num1 < num2){
    num1++;

    if (num1 % 2 != 0){ 
    console.log(`El ${num1} es impar`)
}

}