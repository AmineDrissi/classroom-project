const {connection} = require("./index.js")
const {DataTypes} = require("sequelize")



module.exports.Student = connection.define("students",{
    name: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull : false,
    },
    mail : {
        type : DataTypes.STRING,
        allowNull : false,
    }
})