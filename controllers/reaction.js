const { Reaction } = require('../models/Associations');

const controllers = {}

controllers.getAll = async (req,res)=>{
    try {
        const data = await Reaction.findAll()
        if(data) res.json(data)
        else res.sendStatus(404)
    } catch (error) {
        res.status(404).json(error)
    }
}

controllers.getByNewsId = async (req,res)=>{
    try {
        const { id_news } = req.params;
        const data = await Reaction.findAll({where:{id_news}})
        if(data) res.json(data)
        else res.sendStatus(404)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = controllers