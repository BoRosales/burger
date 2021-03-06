// Require the ORM from ORM.JS
let orm = require('../config/orm.js');

let burgers =  {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res){
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    },
    
    delete: function(condition, cb) {
        orm.delete('burgers', condition, function(res) {
            cb(res);
        });
    }
};

// exports the burgers object
module.exports = burgers;