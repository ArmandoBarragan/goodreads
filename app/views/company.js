const express = require('express');
const { dbPool } = require("../../config/settings")


const router = express.Router();


router.get('/', (req, res) => {
    dbPool.getConnection((err, connection) => {
        // Use the connection for queries
        connection.query('SELECT 1 + 1 AS result', (queryErr, results) => {
            // Release the connection back to the `dbPool`
            connection.release();
            
            if (queryErr) {
              console.error('Error executing query:', queryErr);
            }
        
            console.log('Query result:', results);
        
            // Close the dbPool when done (optional)
            dbPool.end((endErr) => {
              if (endErr) {
                console.error('Error closing dbPool:', endErr);
              }
        
              console.log('Connection dbPool closed.');
            });
          });
        if (err) {
          console.error('Error getting connection from dbPool:', err);
        }
    });
    res.send('¡Hola, esta es la página de inicio!');

});

router.get('/about', (req, res) => {
    res.json("Bienvenido a la página de 'Acerca de nosotros'");
});

router.post('/contact', (req, res) => {
    res.json("Ponte en contacto con nosotros en contact@example.com.")
});

module.exports = router;