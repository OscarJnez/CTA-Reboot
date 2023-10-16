const router = require('express').Router()

const {
    getAllTeams,
    getOneTeam,
    getAllTeamMatches,
    createTeam,
    updateTeam,
    deleteTeam
  } = require('../controllers/team.controller')
const { checkAdmin } = require('../utils/autorization.utils')


  router
  .get('/', getAllTeams)
  .get('/:teamId', getOneTeam)
  .get('/:teamId/footballMatches', getAllTeamMatches)
  .post('/', checkAdmin, createTeam)
  .put('/:teamId',  checkAdmin, updateTeam)
  .delete('/:teamId',  checkAdmin, deleteTeam)

  
  module.exports = router