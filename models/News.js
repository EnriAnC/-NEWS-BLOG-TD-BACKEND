const { DataTypes } = require('sequelize')
const { sequelize } = require("../db/sequelize");
const { Category } = require('./Category');
const { User } = require('./User');


const News = sequelize.define('News',{
    id_news:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: User,
            key:'id_user'
        }
    },
    id_category:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Category,
            key:'id_category'
        }
    },
    title:{
        type: DataTypes.STRING(60),
        allowNull: false
    },
    img:{
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    content:{
        type: DataTypes.STRING(4000),
        allowNull: false
    },
    likes:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    dislikes:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
    }   
},{
    tableName: "News",
    timestamps: true,
    updatedAt: false,
})



module.exports = { News }