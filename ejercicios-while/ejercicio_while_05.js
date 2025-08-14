// Ejercicio While 5: Calculadora de Factorial
// Implementa una función que use while para calcular el factorial de un número ingresado por el usuario.

function calcularFactorial(numero) {
    let factorial = 1
    let i = numero

    while (i > 1) {
        factorial *= i
        i--
    }

    return factorial
}
let numeroUsuario = parseInt(prompt("Ingresa un número para calcular su factorial:"))

if (isNaN(numeroUsuario) || numeroUsuario < 0) {
    console.log("Ingresa un número entero positivo.")
} else {
    console.log(`El factorial de ${numeroUsuario} es ${calcularFactorial(numeroUsuario)}`)
}