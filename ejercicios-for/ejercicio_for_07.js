// Ejercicio For 7: Matriz de Suma
// Usa ciclos for anidados para crear una matriz 5x5 donde cada elemento sea la suma de sus índices (fila + columna). 
// Muestra la matriz formateada.

let matriz = []

for (let fila = 0; fila < 5; fila++) {
    let filaActual = []
    for (let columna = 0; columna < 5; columna++) {
        filaActual.push(fila + columna)
    }
    matriz.push(filaActual)
}
console.log("Matriz 5x5 con suma de índices:")
for (let fila = 0; fila < matriz.length; fila++) {
    console.log(matriz[fila].join("\t"))
}