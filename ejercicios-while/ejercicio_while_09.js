// Ejercicio While 9: Juego de Adivinanza Mejorado
// Crea un juego donde el usuario debe adivinar un número entre 1 y 100. 
// Usa while para dar pistas (mayor/menor) y limita a 7 intentos.

let numero = Math.floor(Math.random() * 100) + 1
let intentos = 0
let adivina

while (intentos < 7) {
    adivina = parseInt(prompt("Adivina el número (1-100)"))
    intentos++

    if (adivina == numero) {
        alert("¡Muy bien!")
        break;
    } else if (adivina < numero) {
        alert("El número es mayor")
    } else {
        alert("El número es menor")
    }
}

if (adivina != numero) {
    alert("Perdiste, vuelve a intentarlo. El número era " + numero)
}