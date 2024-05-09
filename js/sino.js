//*** MODO DE APOSTAR ***//

const btnApuestas = document.querySelector("#apostar");
const btnApuesta = document.querySelector("#apuesta");

let moduloPreguntaApuesta = document.getElementById("apuesta");

//*** QUIERES APOSTAR? ***//

btnApuestas.addEventListener("click", abrirPreguntaApuesta)

function abrirPreguntaApuesta() {
    document.body.classList.add("mensaje-sinoApuesta");
    moduloPreguntaApuesta.style.display = "block";
}

function cerrarPreguntaApuesta() {
    moduloPreguntaApuesta.style.display = "none";
    document.body.classList.add("mensaje-sinoApuesta");
}

window.addEventListener("click", function (event) {
    if (event.target === moduloPreguntaApuesta) {
        cerrarPreguntaApuesta();
    }
});

const siBtnApuesta = document.querySelector("#siBtnApuesta");
const noBtnApuesta = document.querySelector("#noBtnApuesta");

window.addEventListener("click", function (event) {
    if (event.target === moduloPreguntaApuesta) {
        cerrarPreguntaApuesta();
    }
});

noBtnApuesta.addEventListener("click", cerrarPreguntaApuesta);


siBtnApuesta.addEventListener("click", function () {
    inputCuantoApuestas();
    cerrarPreguntaApuestaN();
});

//*** CUANTO QUIERES APOSTAR? ***//

let quieresApostar = document.getElementById("inputApuesta");


function inputCuantoApuestas() {
    document.body.classList.add("mensaje-sinoInput");
    quieresApostar.style.display = "block";
}