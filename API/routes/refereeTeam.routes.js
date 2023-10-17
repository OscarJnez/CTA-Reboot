const router = require('express').Router()

const {
    getAllRefereeTeams,
    getOneRefereeTeam,
    getOneRefereeTeamStats,
    getOwnRefereeTeam,
    getOwnRefereeTeamStats,
    createRefereeTeam,
    updateRefereeTeam,
    deleteRefereeTeam
  } = require('../controllers/refereeTeam.controller')
const { checkAdmin } = require('../utils/autorization.utils')


  router
  .get('/', getAllRefereeTeams)
  .get('/profile', getOwnRefereeTeam)
  .get('/profile/stats', getOwnRefereeTeamStats)
  .get('/:refereeTeamId/stats', getOwnRefereeTeamStats)
  .get('/:refereeTeamId', getOneRefereeTeam)
  .post('/', checkAdmin, createRefereeTeam)
  .put('/:refereeTeamId', checkAdmin,  updateRefereeTeam)
  .delete('/:refereeTeamId', checkAdmin, deleteRefereeTeam)

  module.exports = router