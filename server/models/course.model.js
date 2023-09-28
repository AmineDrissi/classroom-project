const {connection} = require("./index.js")
const {DataTypes} = require("sequelize")


module.exports.Course = connection.define("courses",{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    link:{
        type : DataTypes.STRING,
        allowNull: false,
    }
})