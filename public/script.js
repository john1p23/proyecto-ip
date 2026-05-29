const container = document.getElementById("error-container");

// Crear columnas
const columnas = [];

for(let i = 0; i < 4; i++){

    const columna = document.createElement("div");

    columna.classList.add("columna");

    container.appendChild(columna);

    columnas.push(columna);
}


// Agregar MUCHOS errores
function agregarErrores(){

    columnas.forEach(columna => {

        // Agrega varias líneas cada vez
        for(let i = 0; i < 15; i++){

            columna.innerText += "ERROR\n";

        }

    });

}


// Velocidad rápida
setInterval(agregarErrores, 80);