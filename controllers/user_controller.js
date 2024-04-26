const User = require('../models/user_model');
const { sequelize } = require('../db/db');

const register = async (req,res)=>{
    const {userName,email,phone} = req.body;
    try {
        sequelize.sync()
        .then(async () => {
            // console.log("I am Inside")
            // Insert new row using `create()` method
            const user = {
                user_name:userName,
                email:email,
                phone:phone
            }
            await User.create(user);
            res.send({
                "statusCode":201,
                "msg":"User Created Successfully"
            });

        })
        .catch((error) => console.log('Failed to synchronize with the database:', error))
        console.log("in try");
        
    } catch (error) {
        console.log("error");
        res.send(error);
    }
}

const getAllUser = (req,res)=>{
    try {
        User.findAll()
          .then((user) => {
            if (user) {
              res.send(user);
            } else {
              console.log('User not found.');
              res.send({
                msg:"no user found"
              })
            }
          })
          .catch((error) => {
            console.error('Error querying user:', error);
            res.send(error);
          });
    } catch (error) {
        res.send(error);
    }
}


module.exports = {
    register,
    getAllUser
}