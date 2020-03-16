const orm = require("../config/orm.js");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
            // console.log(res);
        });
    },
    insertOne: function (col, val, cb) {
        orm.selectAll("burgers", col, val, function (res) {
            cb(res)
            // console.log(res);
        });
    },
    updateOne: function (col, val, colSearch, valOfCol, cb) {
        orm.selectAll("burgers", col, val, colSearch, valOfCol, function (res) {
            cb(res)
            // console.log(res);
        });
    }
}

module.exports = burger;