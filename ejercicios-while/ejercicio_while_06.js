// Ejercicio While 6: Búsqueda en Array
// Crea un programa que use while para buscar un elemento específico en un array de 15 números aleatorios. 
// Muestra en qué posición se encontró.

let array = []
for (let i = 0; i < 15; i++) {
    array.push(Math.floor(Math.random() * 100) + 1)
}

console.log("Array generado:", array)

let numeroBuscado = parseInt(prompt("Ingresa el número que quieres buscar:"))

let i = 0
let encontrado = -1

while (i < array.length) {
    if (array[i] === numeroBuscado) {
        encontrado = i
        break;
    }
    i++
}

if (encontrado !== -1) {
    console.log(`Número encontrado en la posición ${encontrado}`)
} else {
    console.log("El número no se encuentra en el array.")
}