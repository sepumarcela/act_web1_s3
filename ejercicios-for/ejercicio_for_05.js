// Ejercicio For 5: Invertir Cadenas de Texto
// Crea un programa que use un ciclo for para invertir una cadena de texto carácter por carácter. 
// Muestra tanto la cadena original como la invertida.


let textoOriginal = "Mi nombre es Marcela :)"
let textoInvertido = ""

for (let i = textoOriginal.length - 1; i >= 0; i--) {
    textoInvertido += textoOriginal[i]
}
console.log("Cadena original:", textoOriginal)
console.log("Cadena invertida:", textoInvertido)