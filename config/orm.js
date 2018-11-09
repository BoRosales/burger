// Import connection from connection.js where all the MYSQL info is
let connection = require('../config/connection.js');


// Helper functions
// Loops through and creates and array of questions marks ?
function printQuestionMarks(num) {
    let arr = [];

    for(let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    let arr = [];

    for  (let key in ob) {
        let value = ob[key];

        if(Object.hasOwnProperty.call(ob, key)) {
            
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
};

// Object for all of SQL syntax
let orm = {
selectAll: function(tableInput, cb) {
    let queryString = "SELECT *  FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    });
},

insertOne: function(table, cols, vals, cb) {
    let queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
        if (err) {
            throw err;
        }

        cb(result);
    });
},

updateOne: function(table, objColVals, condition, cb) {
    let queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString)
    connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }

        cb(result);
    });
}
// POSSIBLE DELETE FUNCTION HERE
};

// Exports the ORM object to burger.js
module.exports = orm;