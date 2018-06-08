var orm = require("../config/orm.js");

var tourInfo = {
    all: function(table, cb) {
        orm.all(table, function(res) {
            cb(res);
        });
    },
    create: function(table, cols, vals, cb) {
        orm.create(table, cols, vals, function(res) {
            cb(res);
            return res;
        });
    },
    update: function(table, objColVals, condition, cb) {
        orm.update(table, objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(table, condition, cb) {
        orm.delete(table, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = tourInfo;