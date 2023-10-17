const Team = require('../models/team.models')
const FootballMatch = require('../models/footballMatch.models')


const getAllTeams = async(req,res)=>{
    try {
        const teams = await Team.findAll({where: req.query})
        if(teams){
            return res.status(200).json(teams)
        }else{
            return res.status(404).send("Team not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const getOneTeam = async(req,res)=>{
    try {
        const team = await Team.findByPk(req.params.teamId)
        if(team){
            return res.status(200).json(team)
        }else{
            return res.status(404).send("Team not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const getAllTeamMatches = async (req, res) => {
    try {
        const team = req.params.teamId
        const matches = await FootballMatch.findAll({
            where: {
                refereeTeamId: res.locals.user.refereeTeamId
            }
        })
        let result = []
        for (i=0; i<matches.length; i++) {
            if (matches[i].getTeams({
                where: {
                    teamId: team
                }
            })) {
                result.push(matches[i])
            }
        }
        if (matches) {
            return res.status(200).json(result)
        } else {
            return res.status(404).send("Matches not found for this referee team")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}


const createTeam = async(req,res)=>{
    try {
        const team = await Team.create(req.body)
        if(team){
            return res.status(200).json(team)
        }else{
            return res.status(404).send("Team not created")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const updateTeam = async(req,res)=>{
    try {
        const team = await Team.update(req.body,{
            where : {
                id : req.params.teamId
            }
        })
        if(team){
            return res.status(200).json({message : "Team updated"})
        }else{
            return res.status(404).send("Team not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const deleteTeam = async(req,res)=>{
    try {
        const team = await Team.destroy({
            where : {
                id : req.params.teamId
            }
        })
        if(team){
            return res.status(200).json({message : "Team deleted"})
        }else{
            return res.status(404).send("Team not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}


module.exports = {
    getAllTeams,
    getOneTeam,
    getAllTeamMatches,
    createTeam,
    updateTeam,
    deleteTeam
}