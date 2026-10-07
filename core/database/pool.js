import mysql from 'mysql2';
import dbConfig from './config.js';

const pool = mysql.createPool({
    host: dbConfig.dbHost,
    user: dbConfig.dbUser,
    password: dbConfig.dbPass,
    database: dbConfig.dbName,
    queueLimit: 10,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
});

export default pool.promise();