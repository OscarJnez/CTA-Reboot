const FootballMatch = require('../models/footballMatch.models')


const getAllFootballMatchs = async(req,res)=>{
    try {
        const footballMatchs = await FootballMatch.findAll()
        if(footballMatchs){
            return res.status(200).json(footballMatchs)
        }else{
            return res.status(404).send("FootballMatch not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const getOneFootballMatch = async(req,res)=>{
    try {
        const footballMatch = await FootballMatch.findByPk(req.params.footballMatchId, {
            attributes: {
              exclude: ['played','goals_away','goals_local','red_card_local','red_card_away','yellow_card','penalties']
            }})
        if(footballMatch){
            return res.status(200).json(footballMatch)
        }else{
            return res.status(404).send("FootballMatch not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const createFootballMatch = async(req,res)=>{
    try {
        const footballMatch = await FootballMatch.create(req.body)
        if(footballMatch){
            return res.status(200).json(footballMatch)
        }else{
            return res.status(404).send("FootballMatch not created")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const updateFootballMatch = async(req,res)=>{
    try {
        const footballMatch = await FootballMatch.update(req.body,{
            where : {
                id : req.params.footballMatchId
            }
        })
        if(footballMatch){
            return res.status(200).json({message : "FootballMatch updated"})
        }else{
            return res.status(404).send("FootballMatch not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const deleteFootballMatch = async(req,res)=>{
    try {
        const footballMatch = await FootballMatch.destroy({
            where : {
                id : req.params.footballMatchId
            }
        })
        if(footballMatch){
            return res.status(200).json({message : "FootballMatch deleted"})
        }else{
            return res.status(404).send("FootballMatch not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}


module.exports = {
    getAllFootballMatchs,
    getOneFootballMatch,
    //getOwnProfile,
    createFootballMatch,
    updateFootballMatch,
    deleteFootballMatch
}