let resultados = [];

// Funcion para simular el uso de una ruleta de casino
// DOM AGREGADO 

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
    
        
    arrayLista.forEach( () => {


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



