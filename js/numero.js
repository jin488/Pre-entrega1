
// Función para guardar el número en localStorage

// BTN apuesta


const btnApostarANumero = document.querySelector("#apostarANumeros");

btnApostarANumero.addEventListener("click", function () {
    inputAQueNumero();
    btnApostarANumero.classList.add("activar");
    btnApostarANumero.innerHTML = "APUESTA  ACTIVADA"
});

let aQueNumero = document.getElementById("inputApuestaNumero");

function inputAQueNumero() {
    document.body.classList.add("mensaje-sinoInputNumeros");
    aQueNumero.style.display = "block";
}

// Guardar mas de un numero

let apostarOtroNumero = [];

function multiNumeros() {

    let numeroIngresado = document.getElementById("numeroInput").value;

        // apuesta entre 0 y 36 para la ruleta.
        if (numeroIngresado < 0 || numeroIngresado > 36) {
            alert("La apuesta no es válida. Debe ser un número entre 0 y 36."); /* AGREGAR LIBRERIA */
            return;
        }

    let grupoNumeros ={
        numeros: numeroIngresado
    }

    apostarOtroNumero.push(grupoNumeros.numeros)

// let masAbajo = document.getElementById("masAbajo");

    apostarOtroNumero.forEach(() => {

        numeroJSON = JSON.stringify(apostarOtroNumero);
        localStorage.setItem("apuesta-numeros", numeroJSON)
        const numerosEnArray = localStorage.getItem("apuesta-numeros")
        const muchosNumeros = JSON.parse(numerosEnArray)

        //         masAbajo.innerHTML = "";

        //         let li = document.createElement("li");
        //         li.classList.toggle("listaResultados");
        //         li.textContent = muchosNumeros
        //         masAbajo.appendChild(li);

    })
}

// apostar solo a un numero

function cerrarPreguntaApuestaNumeros() {

    let numeroIngresado = document.getElementById("numeroInput").value;

    // apuesta entre 0 y 36 para la ruleta.
    if (numeroIngresado < 0 || numeroIngresado > 36) {
        alert("La apuesta no es válida. Debe ser un número entre 0 y 36."); /* AGREGAR LIBRERIA */
        return;
    }

let grupoNumeros ={
    numeros: numeroIngresado
}

apostarOtroNumero.push(grupoNumeros.numeros)

apostarOtroNumero.forEach(() => {

    numeroJSON = JSON.stringify(apostarOtroNumero);
    localStorage.setItem("apuesta-numeros", numeroJSON)
    const numerosEnArray = localStorage.getItem("apuesta-numeros")
    const muchosNumeros = JSON.parse(numerosEnArray)

})

    aQueNumero.style.display = "none";
    document.body.classList.add("mensaje-sinoInputNumeros");
};

// botones para hacer funcionar las apuestas

const btnNApostar = document.querySelector("#btnN-apostar")

btnNApostar.addEventListener("click", cerrarPreguntaApuestaNumeros)

const btnNOtraApuesta = document.querySelector("#btnN-otraApuesta")

btnNOtraApuesta.addEventListener("click", multiNumeros)











// if (apuesta === resultado) {
//     console.log("¡Felicidades! Ganaste " + (cantidad * 35) + " fichas.");
//     return cantidad * 35; // Retornamos la cantidad ganada
// } else {
//     console.log("Lo siento, perdiste tu apuesta.");
//     return -cantidad; // Retornamos la cantidad perdida (negativa)
// }







