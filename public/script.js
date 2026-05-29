const container = document.getElementById("error-container");

const columnas = [];


// CREAR 12 COLUMNAS
for(let i = 0; i < 12; i++){

    const columna = document.createElement("div");

    columna.classList.add("columna");

    container.appendChild(columna);

    columnas.push(columna);

}


// AGREGAR MUCHOS ERROR
function agregarErrores(){

    columnas.forEach(columna => {

        for(let i = 0; i < 10; i++){

            columna.innerText += "ERROR\n";

        }

    });

}


// VELOCIDAD
setInterval(agregarErrores, 50);