const RefereeTeam = require('../models/refereeTeam.models')
const User = require('../models/user.models')


const getAllRefereeTeams = async(req,res)=>{
    try {
        const refereeTeams = await RefereeTeam.findAll({where: req.query})
        if(refereeTeams){
            return res.status(200).json(refereeTeams)
        }else{
            return res.status(404).send("RefereeTeam not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const getOneRefereeTeam = async(req,res)=>{
    try {
        const refereeTeam = await RefereeTeam.findByPk(req.params.RefereeTeamId)
        if(refereeTeam){
            return res.status(200).json(refereeTeam)
        }else{
            return res.status(404).send("RefereeTeam not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}
const getOwnRefereeTeam = async(req,res)=>{
    try {
        const refereeTeam = await RefereeTeam.findByPk(res.locals.user.refereeTeamId)
        if(refereeTeam){
            return res.status(200).json(refereeTeam)
        }else{
            return res.status(404).send("RefereeTeam not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const getOwnRefereeTeamStats = async (req, res) => {
    try {
        var refereeTeam = await RefereeTeam.findByPk(res.locals.user.refereeTeamId)
        const users = await refereeTeam.getUsers()
        console.log(users)
        let result = []
        for(let i=0;i < users.length;i++){
            let user = await User.findByPk(users[i].id)
            let stat =  await user.getReferee_stat()
            result.push(stat)
        }
        if (refereeTeam) {
            return res.status(200).json(result)
        }
    } catch (error) {
        return res.status(404).send(error.message)

    }
}
const getOneRefereeTeamStats = async (req, res) => {
    try {
        var refereeTeam = await RefereeTeam.findByPk(req.params.refereeTeamId)
        if (refereeTeam) {
            const users = await refereeTeam.getUsers() //que hay en users ???un array que viene del metodo especial d
            var result = []   
            for (let i = 0; i < users.length; i++) {
                let user = await User.findByPk(users[i].id) 
                let stat = await user.getReferee_stat()  
                result.push(stat)   
            }
        }
        return res.status(200).json(result) 
    } catch (error) {
        return res.status(500).send("Referee Team Stat not Found.")
    }
}

const createRefereeTeam = async(req,res)=>{
    try {
        const refereeTeam = await RefereeTeam.create(req.body)
        if(refereeTeam){
            return res.status(200).json(refereeTeam)
        }else{
            return res.status(404).send("RefereeTeam not created")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const updateRefereeTeam = async(req,res)=>{
    try {
        const refereeTeam = await RefereeTeam.update(req.body,{
            where : {
                id : req.params.refereeTeamId
            }
        })
        if(refereeTeam){
            return res.status(200).json({message : "RefereeTeam updated"})
        }else{
            return res.status(404).send("RefereeTeam not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const deleteRefereeTeam = async(req,res)=>{
    try {
        const refereeTeam = await RefereeTeam.destroy({
            where : {
                id : req.params.refereeTeamId
            }
        })
        if(refereeTeam){
            return res.status(200).json({message : "RefereeTeam deleted"})
        }else{
            return res.status(404).send("RefereeTeam not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}


module.exports = {
    getAllRefereeTeams,
    getOneRefereeTeam,
    getOneRefereeTeamStats,
    getOwnRefereeTeam,
    getOwnRefereeTeamStats,
    createRefereeTeam,
    updateRefereeTeam,
    deleteRefereeTeam
}