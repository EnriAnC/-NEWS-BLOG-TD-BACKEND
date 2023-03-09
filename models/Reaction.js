const { DataTypes } = require('sequelize')
const { sequelize } = require("../db/sequelize");
const { News } = require('./News');
const { User } = require('./User');

const Reaction = sequelize.define('reaction',{
    id_news:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references:{
            model: News,
            key:"id_news"
        }
    },
    id_user:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references:{
            model: User,
            key:"id_user"
        }
    },
    reaction:{
        type: DataTypes.BOOLEAN,
        // if value == 0: Dislike, if value == 1: Like
    }
},{
    tableName: "reactions",
    timestamps: false
})

module.exports = { Reaction }