
const escribirEnForm = document.querySelector("#textoForm");

function montoApuesta() {
    let escribirEnInput = document.getElementById("dineroDeApuesta").value;
    
    if (escribirEnInput !== "") {
        escribirEnInput = parseFloat(escribirEnInput);
        localStorage.setItem("valor-monto", escribirEnInput)
        alert("tostify")
    }
}
    
function cerrarPreguntaApuestaN() {
    moduloPreguntaApuesta.style.display = "none";
    document.body.classList.add("mensaje-sinoApuestaNumero");
}

const siBtnInput = document.querySelector("#siBtnInput");
const noBtnInput = document.querySelector("#noBtnInput");


siBtnInput.addEventListener("click", function (){
    montoApuesta();
    cerrarPreguntaApuestaN();
})

noBtnInput.addEventListener("click", cerrarPreguntaApuestaN);
