const User = require("../models/user.models")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



const signUp = async(req,res) => {

    try {

        if (req.body.password.length < 8) {
            return res.status(400).json({ message: 'Password too short' })   ///Validation en modelo. 
        }
        
        const salt = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
        const encrypted = bcrypt.hashSync(req.body.password, salt)
        
        req.body.password = encrypted
        const user = await User.create(req.body)

        const token = jwt.sign({ email: user.email , dni : user.dni }, process.env.SECRET , { expiresIn: '1h' })
        return res.status(200).json({
            message: 'User created',
            token: token
        })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const login = async (req, res) => {
    try {
        let user = ""
        if(Object.hasOwn(req.body,"email")){
            user = await User.findOne({
                where: {
                     email : req.body.email 
                }
            })
        }else {
             user = await User.findOne({
                where: {
                     dni : req.body.dni
                }
            })
        }


        // const user = await User.findOne({
        //     where: {
        //         [Op.or]: [{ email : req.body.email }, { dni : req.body.dni}]
        //     }
        // })

        if (!user) {
            return res.status(404).json({ message: 'Error: Wrong Email, DNI or Password' })
        }

        const comparePassword = bcrypt.compareSync(req.body.password, user.password)
        if (comparePassword) {

            const payload = { email: user.email, dni : user.dni }
            const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })
            const role = user.role
            return res.status(200).json({ token , role })
    
        } 
        else {
            return res
                .status(404)
                .json({ message: "Error: Wrong Email, DNI or Password" });
        }
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


module.exports = {
    signUp, login
}








