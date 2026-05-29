const fondo = document.body;

function crearError() {

    const error = document.createElement("div");

    error.innerText = "ERROR";

    error.style.position = "absolute";

    error.style.left = Math.random() * window.innerWidth + "px";

    error.style.top = Math.random() * window.innerHeight + "px";

    error.style.color = "#00ff00";

    error.style.fontFamily = "Courier New";

    error.style.fontSize =
        (Math.random() * 20 + 10) + "px";

    error.style.opacity = Math.random();

    error.style.textShadow = "0 0 5px #00ff00";

    // Rotación random
    error.style.transform =
        "rotate(" + (Math.random() * 40 - 20) + "deg)";

    document.body.appendChild(error);

    // Desaparece después
    setTimeout(() => {

        error.remove();

    }, 2000);

}

// Crear errores constantemente
setInterval(() => {

    for(let i = 0; i < 5; i++){

        crearError();

    }

}, 100);