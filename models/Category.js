const { DataTypes } = require('sequelize')
const { sequelize } = require("../db/sequelize");

const Category = sequelize.define('category',{
    id_category:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    category:{
        type: DataTypes.STRING(40),
        allowNull: false,
    },
},{
    tableName: "categories",
    timestamps: false
})

module.exports = { Category }