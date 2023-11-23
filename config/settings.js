const mysql = require('mysql2');


const SECRET_KEY = process.env.SECRET_KEY;
const PORT = process.env.PORT;


const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    waitForConnections: process.env.WAIT_FOR_CONNECTIONS,
    connectionLimit: process.env.CONNECTION_LIMIT,
    queueLimit: process.env.QUEUE_LIMIT
});


exports.dbPool = pool.promise();
exports.PORT = PORT;