const express = require('express');
const { dbPool } = require("../../config/settings")


const router = express.Router();


router.get('/', (req, res) => {
    res.send('¡Hola, esta es la página de inicio!');
});

router.get('/about', (req, res) => {
    res.json("Bienvenido a la página de 'Acerca de nosotros'");
});

router.post('/contact', (req, res) => {
    res.json("Ponte en contacto con nosotros en contact@example.com.")
});

module.exports = router;