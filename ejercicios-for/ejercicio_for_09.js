// Ejercicio For 9: Simulador de Dados
// Crea un simulador que use un ciclo for para lanzar dos dados 1000 veces. 
// Calcula y muestra la frecuencia de cada suma posible (2-12) y determina cuál es la más común.


let frecuencia = {}
for (let i = 2; i <= 12; i++) {
    frecuencia[i] = 0
}
let dado1 = 1
let dado2 = 1

for (let i = 0; i < 1000; i++) {
    let suma = dado1 + dado2
    frecuencia[suma]++

    dado1++
    if (dado1 > 6) {
        dado1 = 1
        dado2++;
        if (dado2 > 6) {
            dado2 = 1
        }
    }
}

console.log("Frecuencia de cada suma:")
for (let i = 2; i <= 12; i++) {
    console.log(i + ": " + frecuencia[i])
}


let masComun = 2
for (let i = 3; i <= 12; i++) {
    if (frecuencia[i] > frecuencia[masComun]) {
        masComun = i
    }
}

console.log("La suma más común es: " + masComun)