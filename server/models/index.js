const {Sequelize, DataTypes } = require("sequelize")


const connection = new Sequelize(
    "classroom",
    "root",
    "root",
    {
        host: "localhost",
        dialect: "mysql",
    }
    );
    // console.log(connection);
    
connection.authenticate().then(()=>{console.log("connection established")})





module.exports.connection = connection
    

// console.log(Teacher);
