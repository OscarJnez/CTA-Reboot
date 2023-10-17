const RefereeStats = require('../models/refereeStats.models')


const getAllRefereeStats = async(req,res)=>{
    try {
        const refereeStats = await RefereeStats.findAll({where: req.query})
        if(refereeStats){
            return res.status(200).json(RefereeStats)
        }else{
            return res.status(404).send("RefereeStat not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const getOneRefereeStat = async(req,res)=>{
    try {
        const refereeStat = await RefereeStats.findByPk(req.params.refereeStatsId)
        if(refereeStat){
            return res.status(200).json(refereeStat)
        }else{
            return res.status(404).send("RefereeStat not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}
const getOwnRefereeStats = async(req,res)=>{
    try {
        const refereeStat = await RefereeStats.findByPk(res.locals.user.id)
        if(refereeStat){
            return res.status(200).json(refereeStat)
        }else{
            return res.status(404).send("RefereeStat not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const createRefereeStat = async(req,res)=>{
    try {
        const refereeStat = await RefereeStats.create(req.body)
        if(refereeStat){
            return res.status(200).json(refereeStat)
        }else{
            return res.status(404).send("RefereeStat not created")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const updateRefereeStat = async(req,res)=>{
    try {
        const refereeStat = await RefereeStats.update(req.body,{
            where : {
                id : req.params.refereeStatsId
            }
        })
        if(refereeStat){
            return res.status(200).json({message : "RefereeStat updated"})
        }else{
            return res.status(404).send("RefereeStat not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const deleteRefereeStat = async(req,res)=>{
    try {
        const refereeStat = await RefereeStats.destroy({
            where : {
                id : req.params.refereeStatsId
            }
        })
        if(refereeStat){
            return res.status(200).json({message : "RefereeStat deleted"})
        }else{
            return res.status(404).send("RefereeStat not found")
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}


module.exports = {
    getAllRefereeStats,
    getOneRefereeStat,
    getOwnRefereeStats,
    createRefereeStat,
    updateRefereeStat,
    deleteRefereeStat
}