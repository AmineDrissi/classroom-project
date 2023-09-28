const {connection} = require("./index.js")
const { DataTypes} = require("sequelize")

// console.log(connection);
module.exports.Teacher = connection.define("teachers",{
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    mail:{
        type : DataTypes.STRING,
        allowNull:false,
    }
})
