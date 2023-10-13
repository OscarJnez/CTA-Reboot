const User = require('../models/user.models')


const getAllUsers = async(req,res)=>{
    try {
        const users = await User.findAll({where: req.query})
        if(users){
            return res.status(200).json(users)
        }else{
            return res.status(404).send("User not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const getOneUser = async(req,res)=>{
    try {
        const user = await User.findByPk(req.params.userId)
        if(user){
            return res.status(200).json(user)
        }else{
            return res.status(404).send("User not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const createUser = async(req,res)=>{
    try {
        const user = await User.create(req.body)
        if(user){
            return res.status(200).json(user)
        }else{
            return res.status(404).send("User not created")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const updateUser = async(req,res)=>{
    try {
        const user = await User.update(req.body,{
            where : {
                id : req.params.userId
            }
        })
        if(user){
            return res.status(200).json({message : "user updated"})
        }else{
            return res.status(404).send("User not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const deleteUser = async(req,res)=>{
    try {
        const user = await User.destroy({
            where : {
                id : req.params.userId
            }
        })
        if(user){
            return res.status(200).json({message : "user deleted"})
        }else{
            return res.status(404).send("User not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}


module.exports = {
    getAllUsers,
    getOneUser,
    //getOwnProfile,
    createUser,
    updateUser,
    deleteUser
}