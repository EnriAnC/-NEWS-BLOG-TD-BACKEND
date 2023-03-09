const { Category } = require('../models/Associations');

const controllers = {}

controllers.getAll = async (req,res)=>{
    try {
        const data = await Category.findAll()
        if(data) res.json(data)
        else res.sendStatus(404)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = controllers