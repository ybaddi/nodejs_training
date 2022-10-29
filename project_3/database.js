const mysql = require('mysql');


const connection = mysql.createConnection(
    {
        host: 'host',
        user: 'user',
        password: 'password',
        database: 'nodejs'
    }
);

connection.connect((erreur)=>{
    if(erreur) throw erreur;
    console.log("connection failed");
});

console.log("connection success");
module.exports = connection;