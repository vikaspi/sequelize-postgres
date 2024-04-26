const { DataTypes } = require("sequelize");
const { sequelize } = require('../db/db')

const Blog = sequelize.define("blog", {
    image: {
        type: DataTypes.STRING,
        allowNull: false
   },
   title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
   },
   author_id: {
     type: DataTypes.STRING,
     allowNull: false,
     references: {
        model: User, // Reference to the User model
        key: 'id'    // The column name in the User model
    }
   }
});

module.exports = Blog;