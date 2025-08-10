// Ejercicio For 6: Calculadora de Potencias
// Implementa una función que use un ciclo for para calcular la potencia de un número sin usar Math.pow(). 
// Debe mostrar el proceso paso a paso.

function calcularPotencia(base, exponente) {
    let resultado = 1
    console.log(`Calculando ${base}^${exponente}:`)

    for (let i = 1; i <= exponente; i++) {
        resultado *= base
        console.log(`Paso ${i}: ${resultado}`)
    }

    return resultado
}

let base = 2;
let exponente = 5;
let resultadoFinal = calcularPotencia(base, exponente)

console.log(`Resultado final: ${resultadoFinal}`)