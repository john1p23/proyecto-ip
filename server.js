const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Guardar visitas
const visitas = [];

// Detectar IP
app.set('trust proxy', true);


// Página principal
app.get('/', (req, res) => {

    const ip =
        req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress;

    const navegador = req.headers['user-agent'];

    const fecha = new Date().toLocaleString('es-EC', {
        timeZone: 'America/Guayaquil'
    });

    // Guardar visita
    visitas.push({
        ip,
        navegador,
        fecha
    });

    console.log('Nueva visita:', ip);

    // Página negra con texto blanco
    res.send(`
        <!DOCTYPE html>
        <html>

        <head>
            <title>ERROR</title>
        </head>

        <body style="
            margin:0;
            background:black;
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
        ">

            <h1 style="
                color:white;
                font-family:Arial;
            ">
                ERROR!
            </h1>

        </body>

        </html>
    `);

});


// Admin
app.get('/admin', (req, res) => {

    res.json(visitas);

});


// Iniciar servidor
app.listen(PORT, () => {

    console.log(`Servidor funcionando en puerto ${PORT}`);

});