const connection = require("../config/connection.js");



let orm = {
    selectAll: function (table, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            cb(result)
            // console.log(result)
        });
    },
    insertOne: function (table, col, val, cb) {
        let queryString = "INSERT INTO ?? (?) VALUES (??)";
        connection.query(queryString, [table, col, val], function (err, result) {
            if (err) throw err;
            cb(result)
            // console.log(result)
        });
    },
    updateOne: function (table, col, val, colSearch, valOfCol, cb) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, col, val, colSearch, valOfCol, cb], function (err, result) {
            if (err) throw err;
            cb(result)
            // console.log(result)
        });
    },

}









//exports orm object for the model (burger.js)
module.exports = orm;