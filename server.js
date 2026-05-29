const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Aquí se guardarán las visitas
const visitas = [];

// Detectar IP correctamente
app.set('trust proxy', true);

// Página principal
app.get('/', (req, res) => {

    const ip = req.ip;

    const navegador = req.headers['user-agent'];

    const fecha = new Date().toLocaleString();

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
        <h1>Bienvenido</h1>
        <p>Tu visita fue registrada.</p>
    `);

});

// Panel admin
app.get('/admin', (req, res) => {

    res.json(visitas);

});

// Encender servidor
app.listen(PORT, () => {

    console.log(`Servidor funcionando en http://localhost:${PORT}`);

});