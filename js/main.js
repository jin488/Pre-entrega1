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

function color() {

    // Un número aleatorio entre 0 y 36

    const numeroAleatorio = Math.floor(Math.random() * 37);

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
        const datosJSON =JSON.stringify(number.color);
        localStorage.setItem("color", datosJSON)
        const colorEnLocalStorage = localStorage.getItem("color");
        const colorObjeto = JSON.parse(colorEnLocalStorage)
        li.textContent = number.numero + colorObjeto;
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













