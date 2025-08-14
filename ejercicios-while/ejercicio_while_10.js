// Ejercicio While 10: Procesador de Calificaciones
// Usa while para ingresar calificaciones de estudiantes (termina con -1). 
// Calcula el promedio, la nota más alta y más baja.

let suma = 0
let cantidad = 0
let mayor = 0
let menor = 100
let nota = 0

while (nota != -1) {
    nota = parseFloat(prompt("Ingresa calificación (-1 para terminar)"))
    if (nota != -1) {
        suma = suma + nota
        cantidad = cantidad + 1
        if (nota > mayor) {
            mayor = nota
        }
        if (nota < menor) {
            menor = nota
        }
    }
}

alert("Promedio: " + (suma / cantidad))
alert("Nota más alta: " + mayor)
alert("Nota más baja: " + menor)