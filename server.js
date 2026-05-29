const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Aquí se guardarán las visitas
const visitas = [];

// Detectar IP correctamente
app.set('trust proxy', true);

// Carpeta pública
app.use(express.static('public'));

// Página principal
app.get('/', (req, res) => {

    const ip = req.ip;

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

    // Mostrar HTML
    res.sendFile(__dirname + '/public/index.html');

});

// Panel admin
app.get('/admin', (req, res) => {

    res.json(visitas);

});

// Encender servidor
app.listen(PORT, () => {

    console.log(`Servidor funcionando en puerto ${PORT}`);

});