const errores = [
    "SYSTEM FAILURE",
    "ACCESS DENIED",
    "CRITICAL ERROR",
    "FATAL ERROR",
    "CONNECTION LOST",
    "UNKNOWN ERROR",
    "KERNEL PANIC",
    "SECURITY BREACH"
];

const texto = document.getElementById("textoError");

setInterval(() => {

    const random =
        errores[Math.floor(Math.random() * errores.length)];

    texto.innerText = random;

}, 1000);


// MATRIX
const fondo = document.getElementById("fondo");

for(let i = 0; i < 100; i++){

    const linea = document.createElement("div");

    linea.classList.add("linea");

    linea.style.left = Math.random() * 100 + "vw";

    linea.style.animationDuration =
        (Math.random() * 5 + 3) + "s";

    linea.innerText =
        Math.random().toString(2).substring(2);

    fondo.appendChild(linea);
}