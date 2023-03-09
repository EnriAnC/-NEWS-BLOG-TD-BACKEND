const { Category } = require('./Category')
const { News } = require('./News')
const { Reaction } = require('./Reaction')
const { User } = require('./User')


User.hasMany(News,{
    foreignKey: 'id_user',
    targetKey: 'id_user'
})

Category.hasMany(News,{
    foreignKey: 'id_category',
    targetKey: 'id_category'
})
News.belongsTo(Category,{
    foreignKey: 'id_category',
    targetKey: 'id_category'
})

News.hasMany(Reaction,{
    foreignKey: 'id_news',
    targetKey: 'id_news'
})


module.exports =  { User, News, Category, Reaction }