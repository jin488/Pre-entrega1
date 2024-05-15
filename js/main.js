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
    cerrarPreguntaApuesta();
});



// Funcion para simular el uso de una ruleta de casino 

let resultados = [];

let apostarOtroNumero = [];

let unicoValor = [];

function color() {

    // Un número aleatorio entre 0 y 36

    const numeroAleatorio = Math.floor(Math.random() * 37);

    numerosDeLaRuleta = numeroAleatorio

    switch (numerosDeLaRuleta) {
        case 0:
            numerosDeLaRuleta = " verde";
            break;
        case 1:
            numerosDeLaRuleta = " negro";
            break;
        case 2:
            numerosDeLaRuleta = " rojo";
            break;
        case 3:
            numerosDeLaRuleta = " negro";
            break;
        case 4:
            numerosDeLaRuleta = " rojo";
            break;
        case 5:
            numerosDeLaRuleta = " negro";
            break;
        case 6:
            numerosDeLaRuleta = " rojo";
            break;
        case 7:
            numerosDeLaRuleta = " negro";
            break;
        case 8:
            numerosDeLaRuleta = " rojo";
            break;
        case 9:
            numerosDeLaRuleta = " negro";
            break;
        case 10:
            numerosDeLaRuleta = " rojo";
            break;
        case 11:
            numerosDeLaRuleta = " negro";
            break;
        case 12:
            numerosDeLaRuleta = " rojo";
            break;
        case 13:
            numerosDeLaRuleta = " negro";
            break;
        case 14:
            numerosDeLaRuleta = " rojo";
            break;
        case 15:
            numerosDeLaRuleta = " negro";
            break;
        case 16:
            numerosDeLaRuleta = " rojo";
            break;
        case 17:
            numerosDeLaRuleta = " negro";
            break;
        case 18:
            numerosDeLaRuleta = " rojo";
            break;
        case 19:
            numerosDeLaRuleta = " negro";
            break;
        case 20:
            numerosDeLaRuleta = " rojo";
            break;
        case 21:
            numerosDeLaRuleta = " negro";
            break;
        case 22:
            numerosDeLaRuleta = " rojo";
            break;
        case 23:
            numerosDeLaRuleta = " negro";
            break;
        case 24:
            numerosDeLaRuleta = " rojo";
            break;
        case 25:
            numerosDeLaRuleta = " negro";
            break;
        case 26:
            numerosDeLaRuleta = " rojo";
            break;
        case 27:
            numerosDeLaRuleta = " negro";
            break;
        case 28:
            numerosDeLaRuleta = " rojo";
            break;
        case 29:
            numerosDeLaRuleta = " negro";
            break;
        case 30:
            numerosDeLaRuleta = " rojo";
            break;
        case 31:
            numerosDeLaRuleta = " negro";
            break;
        case 32:
            numerosDeLaRuleta = " rojo";
            break;
        case 33:
            numerosDeLaRuleta = " negro";
            break;
        case 34:
            numerosDeLaRuleta = " rojo";
            break;
        case 35:
            numerosDeLaRuleta = " negro";
            break;
        case 36:
            numerosDeLaRuleta = " rojo";
            break;
    }

    let resultado = {

        numero: numeroAleatorio,

        rnv: numerosDeLaRuleta
    };

    arrayLista.push(" " + resultado.numero)
    resultados.push(resultado);
    console.log(resultados);

    for (let i = 0; i < apostarOtroNumero.length; i++) {

        const numeroFinal = localStorage.getItem("valor-monto");

        if (numeroAleatorio == apostarOtroNumero[i]) {
            Swal.fire("Felicidades ganaste $" + (numeroFinal * 2));
        }
    }
};


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
    color();
    generarNumeros();
    mostrarResultados();
    cerrarPregunta();
});


function generarNumeros() {

    let todoAbajo = document.getElementById("abajo");

    resultados.forEach((number) => {

        const datosJSON = JSON.stringify(number.rnv);
        localStorage.setItem("color", datosJSON)
        const colorEnLocalStorage = localStorage.getItem("color");
        const colorObjeto = JSON.parse(colorEnLocalStorage)

        let li = document.createElement("li");
        todoAbajo.innerHTML = ""
        li.textContent = number.numero + colorObjeto;
        todoAbajo.appendChild(li);



        if (colorObjeto == " rojo") {
            document.body.classList.add("rojo");
            document.body.classList.remove("negro");
            document.body.classList.remove("verde");
        }

        if (colorObjeto == " negro") {
            document.body.classList.add("negro");
            document.body.classList.remove("rojo");
            document.body.classList.remove("verde");
        }

        if (colorObjeto == " verde") {
            document.body.classList.add("verde");
            document.body.classList.remove("rojo");
            document.body.classList.remove("negro");
        }
    });
};


let arrayLista = [];

function mostrarResultados() {
    let masAbajo = document.getElementById("masAbajo");


    arrayLista.forEach(() => {


        const datoJSON = JSON.stringify(arrayLista);
        localStorage.setItem("lista-numeros", datoJSON)
        const arrayEnLocalStorage = localStorage.getItem("lista-numeros")
        const numeros123 = JSON.parse(arrayEnLocalStorage)

        masAbajo.innerHTML = "";

        if (arrayLista.length > 10) {
            arrayLista.shift();
        }

        let li = document.createElement("li");
        li.classList.toggle("listaResultados");
        li.textContent = numeros123
        masAbajo.appendChild(li);

    })
}


//*** CUANTO QUIERES APOSTAR? ***//
// ingresar el monto

let quieresApostar = document.getElementById("inputApuesta");


function inputCuantoApuestas() {
    document.body.classList.add("mensaje-sinoInput");
    quieresApostar.style.display = "block";
}

const escribirEnForm = document.querySelector("#textoForm");

function montoApuesta() {
    let escribirEnInput = document.getElementById("dineroDeApuesta").value;

    // apuesta entre 0 y 36 para la ruleta.
    if (escribirEnInput < 500 || escribirEnInput > 5000) {
        Swal.fire({
            title: `La cantidad debe estar dentro de los límites.
                        (Min: $500,00 - Max:$5.000,00)`,
            color: "rgb(25, 138, 25)",
            position: "center-top",
            background: "#3f200f",
        })
            return;
    }else if(escribirEnInput >= 500 || escribirEnInput <= 5000){
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Apuesta realizada",
            background:"rgb(10, 88, 10)",
            color: "black"
        });
    }
    

    unicoValor.push(escribirEnInput)

    localStorage.setItem("valor-monto", unicoValor);
}
    
function cerrarPreguntaApuestaN() {
    moduloPreguntaApuesta.style.display = "none";
    document.body.classList.add("mensaje-sinoApuestaNumero");
}

const siBtnInput = document.querySelector("#siBtnInput");
const noBtnInput = document.querySelector("#noBtnInput");

siBtnInput.addEventListener("click", (e) => {
    e.preventDefault();
    montoApuesta();
// aka
    cerrarPreguntaApuestaN();
})

noBtnInput.addEventListener("click", cerrarPreguntaApuestaN);



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

function multiNumeros() {

    let numeroIngresado = document.getElementById("numeroInput").value;

    // apuesta entre 0 y 36 para la ruleta.
    if (numeroIngresado < 0 || numeroIngresado > 36) {
        Swal.fire({
            title: "La apuesta no es válida. Debe ser un número entre 0 y 36.",
            color: "green",
            background: "black"
        }) 
        return;
    }

    let grupoNumeros = {
        numeros: numeroIngresado
    }

    apostarOtroNumero.push(grupoNumeros.numeros)

    let unaApuesta = document.getElementById("unaApuesta");

    apostarOtroNumero.forEach(() => {

        numeroJSON = JSON.stringify(apostarOtroNumero);
        localStorage.setItem("apuesta-numeros", numeroJSON)
        const numerosEnArray = localStorage.getItem("apuesta-numeros")
        const muchosNumeros = JSON.parse(numerosEnArray)
        unaApuesta.innerHTML = "";

        if (apostarOtroNumero.length > 20) {
            alert("exediste el limite de apuestas")
        }

        let li = document.createElement("li");
        li.classList.toggle("listaResultados2");
        li.textContent = muchosNumeros;
        unaApuesta.appendChild(li);
    })
}

// apostar solo a un numero

function cerrarPreguntaApuestaNumeros() {

    let numeroIngresado = document.getElementById("numeroInput").value;

    // apuesta entre 0 y 36 para la ruleta.
    if (numeroIngresado < 0 || numeroIngresado > 36) {
        Swal.fire({
            title: "La apuesta no es válida. Debe ser un número entre 0 y 36.",
            color: "green",
            background: "black"
        }) 
        return;
    }

    let grupoNumeros = {
        numeros: numeroIngresado
    }

    apostarOtroNumero.push(grupoNumeros.numeros)

    apostarOtroNumero.forEach(() => {

        let unaApuesta = document.getElementById("unaApuesta");

        numeroJSON = JSON.stringify(apostarOtroNumero);
        localStorage.setItem("apuesta-numeros", numeroJSON)
        const numerosEnArray = localStorage.getItem("apuesta-numeros")
        const muchosNumeros = JSON.parse(numerosEnArray)

        unaApuesta.innerHTML = "";

        if (apostarOtroNumero.length > 20) {
            alert("exediste el limite de apuestas")
        }

        let li = document.createElement("li");
        li.classList.toggle("listaResultados2");
        li.textContent = muchosNumeros;
        unaApuesta.appendChild(li);
    })

    

    aQueNumero.style.display = "none";
    document.body.classList.add("mensaje-sinoInputNumeros");
};



// botones para hacer funcionar las apuestas

const btnNApostar = document.querySelector("#btnN-apostar")

btnNApostar.addEventListener("click", cerrarPreguntaApuestaNumeros)

const btnNOtraApuesta = document.querySelector("#btnN-otraApuesta")

btnNOtraApuesta.addEventListener("click", multiNumeros)






