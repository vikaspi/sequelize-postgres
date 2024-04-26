const { DataTypes } = require("sequelize");
const { sequelize } = require('../db/db');

// Define model
const User = sequelize.define("user", {
   user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
   },
   phone: {
     type: DataTypes.STRING,
     allowNull: false
   }
  //  by deafult it adds timestamps createdAt and updatedAt
});

module.exports = User;