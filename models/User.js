const { DataTypes } = require('sequelize')
const { sequelize } = require("../db/sequelize");

const User = sequelize.define('user',{
    id_user:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(25),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(60),
        allowNull: false
    },
    password:{
        type: DataTypes.STRING(255),
        allowNull: false
    },

},{
    tableName: "users",
    timestamps: false
})


module.exports = { User }