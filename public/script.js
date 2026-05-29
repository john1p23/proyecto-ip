const container = document.getElementById("error-container");

let texto = "";

function agregarError(){

    // Agrega MUCHOS errores
    for(let i = 0; i < 20; i++){

        texto += "ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR\n";

    }

    container.innerText = texto;

    // Auto scroll abajo
    window.scrollTo(0, document.body.scrollHeight);
}

// Va llenando la pantalla poco a poco
setInterval(agregarError, 100);