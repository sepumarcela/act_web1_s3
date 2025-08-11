// Ejercicio For 8: Contador de Caracteres
// Desarrolla un programa que use un ciclo for para contar la frecuencia de cada carácter en una cadena de texto. 
// Muestra los resultados ordenados alfabéticamente.

let texto = "Hola soy Marcela"
let contador = {}
let letras = []

for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i]
    if (contador[caracter]) {
        contador[caracter]++
    } else {
        contador[caracter] = 1
        letras[letras.length] = caracter
    }
}

for (let i = 0; i < letras.length - 1; i++) {
    for (let j = 0; j < letras.length - i - 1; j++) {
        if (letras[j] > letras[j + 1]) {
            let temp = letras[j]
            letras[j] = letras[j + 1]
            letras[j + 1] = temp
        }
    }
}

console.log("Frecuencia de caracteres:")
for (let i = 0; i < letras.length; i++) {
    console.log(letras[i] + ": " + contador[letras[i]])
}