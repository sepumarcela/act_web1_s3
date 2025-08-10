// Ejercicio For 3: Análisis de Array de Números
// Dado un array de 20 números aleatorios, usa un ciclo for para encontrar: 
// el número mayor, el menor, la suma total, el promedio, y cuántos números son pares e impares.


let numeros = [12, 45, 67, 23, 89, 34, 22, 90, 56, 78, 11, 9, 5, 100, 44, 61, 73, 28, 37, 80]

console.log("Array de números:", numeros)

let mayor = numeros[0]
let menor = numeros[0]
let suma = 0
let pares = 0
let impares = 0

for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    
    if (num > mayor) mayor = num
    if (num < menor) menor = num
    suma += num
    
   
    if (num % 2 === 0) {
        pares++
    } else {
        impares++
    }
}

let promedio = suma / numeros.length

console.log("Número mayor:", mayor)
console.log("Número menor:", menor)
console.log("Suma total:", suma)
console.log("Promedio:", promedio.toFixed(2))
console.log("Cantidad de pares:", pares)
console.log("Cantidad de impares:", impares)