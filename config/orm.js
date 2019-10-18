// Import MySQL connection.
var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
  selectAll: function (cb) {
    connection.query("SELECT * FROM  burgers", function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (burger_name, cb) {
    connection.query("INSERT INTO burgers set ?",
      {
        burger_name: burger_name,
        devoured: false,
      }, function (err, result) {
        if (err) {
          throw err;
        }

        cb(result);
      });
  },

  updateOne: function (burgerID, cb) {
    // var query = "UPDATE burgers ";
    // query+= " WHERE id= " + burgerID;
    // query += " SET devoured = true ";
    connection.query(
      "UPDATE  burgers SET ? WHERE ?" ,[{ devoured: true }, { id: burgerID }]

      , function (err, result) {
        if (err) {
          throw err;
        }

        cb(result);
      });
  },


};

// Export the orm object for the model (cat.js).
module.exports = orm;
