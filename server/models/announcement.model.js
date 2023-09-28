const {connection} = require("./index.js")
const {DataTypes} = require("sequelize")


module.exports.Announcement = connection.define("Announcements",{
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    body:{
        type : DataTypes.STRING,
        allowNull: false,
    }
})