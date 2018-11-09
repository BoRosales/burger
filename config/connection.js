let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    root: 3306,
    user: 'root',
    password: 'Kimbo!2012',
    database: "burgers_db"
});

connection.connect(function(err){
    if(err) {
        console.log('error conenecting: ' + err.stack);
        return;
    }
    console.log('connected as id: ' + connection.threadId)
});

// Exports the connection to orm.js
module.exports = connection;   