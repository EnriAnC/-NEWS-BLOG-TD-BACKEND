const { User } = require("../models/Associations"),
    jwt = require('jsonwebtoken')
    bcrypt = require('bcrypt');

require('dotenv').config()

const controllers = {}


controllers.login = async (req,res)=>{
    try {
        let { email, password } = req.body
        if (!email) throw {msg:"Hace falta el email"}
        if (!password) throw {msg:"Hace falta el password"}
        const session = await User.findOne({where: {email}})
        // const isValid = password == session.password;
        const isValid = await bcrypt.compare(password, session.password)
        if (isValid){
            jwt.sign({id_user:session.id_user}, process.env.SECKEY, {expiresIn: "1d"}, (err, token)=>{
                res.json({
                    token
                })
            })
        } else {
            res.status(404).send({codigo:"002", msg:"El usuario o la contraseña no coinciden"})
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }

}

controllers.register = async (req,res)=>{
    try {
        // console.log(req)
        let { name, email, password } = req.body

        if (!email) return res.status(404).send({msg:"Falta email"})
        const existsEmail = await User.findOne({where:{email}})
        if (existsEmail) return res.status(401).send({msg: "El email ya se encuentra registrado", code:600})
        if (!password) return res.status(404).send({msg:"Falta password"})
        if (!name) return res.status(404).send({msg:"Falta name"})

        const newUser = await User.create({
                name,
                email,
                // password
                password: await bcrypt.hash(password, 10),
            });
        console.log(newUser)

        if (newUser) {
            res.json({usuario:newUser.email, msg:"Se ha registrado correctamente"})
        } else {
            res.json({msg: 'El usuario ya existe'})
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
}



module.exports = controllers