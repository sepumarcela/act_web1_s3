// Ejercicio While 3: Validador de Contraseña
// Desarrolla un programa que use while para solicitar una contraseña hasta que cumpla con los criterios: 
// mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número.

let password
let valido = false

while (!valido) {
  password = prompt("Ingresa una contraseña (mín 8 caracteres, 1 may, 1 min y 1 núm):")

  let tieneMayuscula = false
  let tieneMinuscula = false
  let tieneNumero = false

  if (password.length >= 8) {
    for (let i = 0; i < password.length; i++) {
      let char = password[i];
      if (char >= "A" && char <= "Z") tieneMayuscula = true
      else if (char >= "a" && char <= "z") tieneMinuscula = true
      else if (char >= "0" && char <= "9") tieneNumero = true
    }
  }

  if (tieneMayuscula && tieneMinuscula && tieneNumero) {
    console.log("Contraseña correcta");
    valido = true;
  } else {
    console.log("Contraseña incorrecta. Vuelve a intentar.")
  }
}