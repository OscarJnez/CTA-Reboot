const router = require('express').Router()

const {
    getAllRefereeTeams,
    getOneRefereeTeam,
    //getOwnProfile,
    createRefereeTeam,
    updateRefereeTeam,
    deleteRefereeTeam
  } = require('../controllers/refereeTeam.controller')


  router
  .get('/', getAllRefereeTeams)
  //.get('/profile', getOwnProfile)
  .get('/:refereeTeamId', getOneRefereeTeam)
  .post('/',  createRefereeTeam)
  .put('/:refereeTeamId',  updateRefereeTeam)
  .delete('/:refereeTeamId',  deleteRefereeTeam)

  module.exports = router