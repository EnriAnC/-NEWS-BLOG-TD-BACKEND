const {  User } = require("../models/Associations");

const controllers = {}

controllers.userByToken = async (req, res)=>{
    try {
        const authData = req.authData
        if(!authData) return res.sendStatus(404)
        const id_user = authData.id_user;
        const user = await User.findByPk(id_user, {attributes:['email']})
        if (!user) throw {msg:"Usuario no existe"}
        // console.log(cliente)
        res.status(202).json(user)
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = controllers