//! PROXIMAMENTE
// let usuario = prompt("Ingrese su nombre");

// let valorApuesta = prompt("Ingrese la cantidad que va a apostar en cada numero");


// let apuestas = [

//     {
//         nombre: usuario,
//         apuesta: valorApuesta,
//     }
//     ];

// function numeroApostado() {
//     const numerosConApuestas = prompt("Ingrese el numero que quiere apostar");
//     apuestas.push(numerosConApuestas);
// } 

// while (true) {
//     let pregunta = prompt(`Quieres apostar?
// Si ✅     No ❌`).toLowerCase();
//     if (pregunta === "si") {
//         numeroApostado();
//     } else if (pregunta === "no") {
//         break;
//     } else {
//         alert("Opción no válida. Por favor, ingrese 'Sí' o 'No'.");
//     }
// }

// console.log(apuestas)

//Resultados de la ruleta

let resultados = []; 

// Funcion para simular el uso de una ruleta de casino

function color(rojo, negro, verde) {

    // Un número aleatorio entre 0 y 36

    const numeroAleatorio = Math.floor(Math.random() * 37);

    let numerosDeLaRuleta = numeroAleatorio;

    switch (numerosDeLaRuleta) {
        case 0:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + verde);
            break;
        case 1:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 2:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
        case 3:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 4:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
        case 5:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 6:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
        case 7:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 8:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
        case 9:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 10:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
        case 11:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 12:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
        case 13:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 14:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
        case 15:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 16:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
        case 17:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 18:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
        case 19:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 20:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
        case 21:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 22:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
        case 23:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 24:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
        case 25:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 26:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
        case 27:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 28:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
        case 29:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 30:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
        case 31:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 32:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
        case 33:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 34:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
        case 35:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + negro);
            break;
        case 36:
            alert("El numero que salio en la Ruleta es: " + numeroAleatorio + rojo);
            break;
    }

    resultados.push(numerosDeLaRuleta);

}

// Opcion de iniciar la ruleta

while (true) {
    let opcion = prompt(`Quieres tirar?
Si ✅     No ❌`).toLowerCase();
    if (opcion === "si") {
        color(" Rojo 🟥🟥", " Negro ⬜⬜", " Verde 🟩🟩");
    } else if (opcion === "no") {
        break;
    } else {
        alert("Opción no válida. Por favor, ingrese 'Sí' o 'No'.");
    }
}

// funcion para mostrar los resultados de la ruleta

function mostrarResultados() {
    console.log("Ultimos Resultados:");
    for (let i = 0; i < resultados.length; i++) {
        console.log((i + 1) + ". " + resultados[i]);
    }
}

mostrarResultados()





