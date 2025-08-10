// Ejercicio For 2: Patrón de Asteriscos
// Implementa un programa que use for para crear un patrón de asteriscos en forma de pirámide de 10 niveles de altura.

let piramide = 10;

for (let i = 1; i <= piramide; i++) { 
    let linea = ""
    
    for (let espacio = 1; espacio <= piramide - i; espacio++) {
        linea += " "
    }
    
    for (let asteriscos = 1; asteriscos <= (2 * i - 1); asteriscos++) {
        linea += "*"
    }
    
    console.log(linea)
}