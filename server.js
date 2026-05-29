const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;


// Aquí se guardarán las visitas
const visitas = [];


// Detectar IP correctamente
app.set('trust proxy', true);


// Página principal
app.get('/', (req, res) => {

    const ip =
        req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress ||
        "IP no detectada";

    const navegador = req.headers['user-agent'];

    // Hora Ecuador
    const fecha = new Date().toLocaleString('es-EC', {
        timeZone: 'America/Guayaquil'
    });

    // Guardar visita
    visitas.push({
        ip,
        navegador,
        fecha
    });

    console.log('Nueva visita:', {
        ip,
        fecha
    });

    res.send(`
        <h1>ERROR!</h1>
    `);

});


// Panel admin
app.get('/admin', (req, res) => {

    res.json(visitas);

});


// Encender servidor
app.listen(PORT, () => {

    console.log(`Servidor funcionando en puerto ${PORT}`);

});