// Ejercicio While 7: Contador de Dígitos
// Desarrolla un programa que use while para contar cuántos dígitos tiene un número entero ingresado por el usuario.

let num = Math.abs(parseInt(prompt("Ingresa un número entero:")))
let digitos = (num === 0) ? 1 : 0

while (num > 0) {
    num = Math.floor(num / 10)
    digitos++
}

console.log(`El número tiene ${digitos} dígitos.`)