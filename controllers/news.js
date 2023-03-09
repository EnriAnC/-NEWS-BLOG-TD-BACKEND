const { News, Category, Reaction } = require('../models/Associations'),
cloudinary = require("../config/cloudinary")

const controllers = {}

controllers.getAll = async (req,res)=>{
    try {
        const data = await News.findAll({
            include:{
                model: Category,
                required: true
            }
        })
        if(data) res.json(data)
        else res.sendStatus(404)
    } catch (error) {
        res.status(404).json(error)
    }
}

controllers.getByCategory = async (req,res)=>{
    try {
        const { id_category } = req.params
        const data = await News.findAll({where:{id_category}})
        if(data) res.json(data)
        else res.sendStatus(404)
    } catch (error) {
        res.status(404).json(error)
    }
}

controllers.postNews = async (req,res)=>{
    try {
        const { id_user } = req.authData;
        let { id_category, title, content } = req.body

        if (!id_user) return res.status(404).send({msg:"Falta id_user"})
        if (!id_category) return res.status(404).send({msg:"Falta id_category"})
        if (!title) return res.status(404).send({msg:"Falta title"})
        if (!content) return res.status(404).send({msg:"Falta content"})
        
        const img = await cloudinary.uploader.upload(req.file.path);
        if(!img.secure_url) throw {msg: "No se recibio bien la imagen"}

        const newNews = await News.create({
                id_user, id_category, title, content, img:img.secure_url
            });
        console.log(newNews)

        if (newNews) {
            res.json({newNews, msg:"Se ha posteado correctamente"})
        } else {
            res.json({msg: 'Hubo un error al postear'})
        }
    } catch (error) {
        res.status(404).json(error)
    }
}

controllers.putLike = async (req,res)=>{
    try {
        const { id_user } = req.authData;
        const { id_news } = req.params
        const reaction = await Reaction.create({
            id_news,
            id_user,
            reaction: true
        })
        const data = await News.increment({likes: 1}, { where: { id_news } })
        if(data) res.json(data)
        else res.sendStatus(404)
    } catch (error) {
        res.status(404).json(error)
    }
}

controllers.putdislike = async (req,res)=>{
    try {
        const { id_user } = req.authData;
        const { id_news } = req.params
        const reaction = await Reaction.create({
            id_news,
            id_user,
            reaction: false
        })
        const data = await News.increment({dislikes: 1}, { where: { id_news } })
        if(data) res.json(data)
        else res.sendStatus(404)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = controllers