// const { DataTypes } = require("sequelize");
// const { sequelize } = require('../db/db');

// // Define model
// const User = sequelize.define("user", {
//    user_name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique:true
//    },
//    phone: {
//      type: DataTypes.STRING,
//      allowNull: false
//    }
//   //  by deafult it adds timestamps createdAt and updatedAt
// });

// module.exports = User;


const { DataTypes } = require("sequelize");
const { sequelize } = require('../db/db');

// Define model
module.exports = (sequelize,DataTypes)=>{
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
},
  {
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
    tableName:'user'
  }
);
  return User;
}
// module.exports = { User };