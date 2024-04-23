const btnapuesta = document.querySelector("#apostar");

btnapuesta.addEventListener("click", apostar)


// FUNCION PARA APOSTAR: AUN SIN DOM
let apuestas = [];

function apostar() {

    while (true) {
        let pregunta = `Quieres apostar?
        Si ✅     No ❌`
        pregunta.toLowerCase();
        if (pregunta === "si") {

            const apuestaRealizada = {
                nombre: prompt("Escribe tu nombre"),
                apuesta: prompt("Cuanto quieres apostar"),
                numero: prompt("A que numero queres apostar")
            };

            apuestas.push(apuestaRealizada);
            funcionApuesta(apuestaRealizada);
        } else if (pregunta === "no") {
            break;
        } else {
            alert("Opción no válida. Por favor, ingrese 'Sí' o 'No'.");
        }
    }
    console.log(apuestas)
}


function funcionApuesta({ apuesta, numero }) {

    // apuesta entre 0 y 36 para la ruleta.
    if (numero < 0 || numero > 36) {
        alert("La apuesta no es válida. Debe ser un número entre 0 y 36.");
        return;
    }

    if (apuesta <= 0) {
        alert("La cantidad apostada debe ser mayor que cero.");
        return;
    }
}

let resultados = [];

// Funcion para simular el uso de una ruleta de casino
// DOM AGREGADO 

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

    let resultado = {

        numero: numeroAleatorio,

        color: (numeroAleatorio % 2 == 0) ? "rojo" : "negro"
    };

    resultados.push(resultado);
    console.log(resultados)
}

// Opcion de iniciar la ruleta con DOM

const btnRuleta = document.querySelector("#tirar-ruleta");
const tirada = document.querySelector("#tirada");
let moduloPregunta = document.getElementById("tirada");
let siBtn = document.getElementById("siBtn");
let noBtn = document.getElementById("noBtn");

btnRuleta.addEventListener("click", abrirPregunta)

function abrirPregunta() {
    document.body.classList.add("mensaje-sino");
    moduloPregunta.style.display = "block";
}

function cerrarPregunta() {
    moduloPregunta.style.display = "none";
    document.body.classList.add("mensaje-sino");
}

window.addEventListener("click", function (event) {
    if (event.target === moduloPregunta) {
        cerrarPregunta();
    }
});

noBtn.addEventListener("click", cerrarPregunta);

siBtn.addEventListener("click", function () {
    color(" Rojo 🟥🟥", " Negro ⬜⬜", " Verde 🟩🟩");
    generarNumeros();
    cerrarPregunta();
});


function generarNumeros() {
    let abajo = document.getElementById("abajo");
    abajo.innerHTML = "";

    resultados.forEach( (number) => {
        let li = document.createElement("li");
        li.textContent = number.numero;
        abajo.appendChild(li)
    })
}

function mostrarResultados() {
    let masAbajo = document.getElementById("masAbajo");
    abajo.innerHTML = "";

    resultados.forEach( (string) => {
        let li = document.createElement("li");
        li.textContent = string.color;
        masAbajo.appendChild(li)
    })
}

localStorage.setItem(resultados[0, 1])












