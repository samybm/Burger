// Import ORM 
var orm = require("../config/orm.js");

var burger = {
    all: function(bb) {
        orm.all("BURGERS", function(res) {
            bb(res);
        });
    },

    //VAR FOR ARRAY-cols and vals
    create: function(cols, vals, bb) {
        orm.create("BURGERS", cols, vals, function(res) {
            bb(res)
        });
    },

    update: function(objColVals, condition, bb) {
        orm.update("BURGERS", objiColVals, condition, function(res) {
            bb(res);
        });
    },

    delete: function(condition, bb) {
        orm.delete("BURGERS", condition, function(res) {
            bb(res);
        });
    }
};

//Exports database to burgers controller js

module.exports = burger;