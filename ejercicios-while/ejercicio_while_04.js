// Ejercicio While 4: Generador de Números Aleatorios
// Usa un ciclo while para generar números aleatorios entre 1 y 100 hasta que salga el número 50. 
// Cuenta cuántos intentos tomó

let numero = 0
let intentos = 0

while (numero !== 50) {
    numero = Math.floor(Math.random() * 100) + 1
    intentos++
    console.log(`Intento ${intentos}: salió el número ${numero}`)
}
console.log(`Podemos ver el número 50 después de ${intentos} intentos.`)
