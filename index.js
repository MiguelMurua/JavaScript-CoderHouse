// 3) Genere 2 prompt: uno que guarde el nombre del usuario y otro que permita al usuario ingresar una nota de menos de 30 caracteres.

/////// PARA EL CASO BLOG

// TODOS LOS PUNTOS TIENEN QUE HACERSE CON FUNCIONES. CADA PUNTO PUEDE EXPRESARSE COMO UNA FUNCIÓN. LAS RESPONSABILIDADES DEBEN ESTAR SEPARADAS.
//UTILICE FUNCIONES QUE RECIBAN PARÁMETROS Y PASE ARGUMENTOS EN LA LLAMADA.

// a) Verifique que la entrada del usuario sea menor a 30 caracteres. En el caso de que no lo sea, envíe una alerta con la siguiente frase: "Esta entrada excede la cantidad de caracteres disponibles."
// b) En el caso de que el ingreso sea correcto, envíe una alerta que muestre el nombre del usuario y la nota que acaba de ingresar.
// c) Realice un bucle que envíe tres cuadros de diálogo confirm que sean las solicitudes de amistad de nuevos contactos. En cada iteración se debe poder visualizar el mensaje: "El usuario ${i} te envió una solicitud de amistad". 

const nombre = prompt(`Ingrese nombre: `)
const nota = prompt("Ingrese una nota: ")

for ( i = 0; i<nota.length ; i++) {
    if (nota.length > 31) {
        alert("Esta entrada excede la cantidad de caracteres disponibles")
        break
    }
    else {
        alert(nombre + " " + nota)
        break
    }
}


let solicitud = confirm("Nuevas solicitudes de contacto") 

if (solicitud) {
    let usuario1 = confirm ("El usuario Daniel te envió una solicitud de amistad")
    let usuario2 = confirm ("El usuario Jose te envió una solicitud de amistad")
    let usuario3 = confirm ("El usuario Mateo te envió una solicitud de amistad")
}