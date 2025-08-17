// Ejercicio For 10: Validador de Palíndromos
// Implementa un programa que use un ciclo for para verificar si una palabra o frase es un palíndromo. 
// Debe ignorar espacios, mayúsculas y signos de puntuación.

function esPalindromo(texto) {
    let limpio = ""
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i].toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            limpio += char
        }
    }
    for (let i = 0; i < limpio.length / 2; i++) {
        if (limpio[i] !== limpio[limpio.length - 1 - i]) return false
    }
    return true
}

console.log(esPalindromo("Son robos o sobornos"))
console.log(esPalindromo("Profe tenga consideracion"))
console.log(esPalindromo("Yo hago yoga hoy"))
console.log(esPalindromo("Toco pedir ayuda a un amigo"))
