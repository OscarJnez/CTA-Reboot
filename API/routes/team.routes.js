const router = require('express').Router()

const {
    getAllTeams,
    getOneTeam,
    //getOwnProfile,
    createTeam,
    updateTeam,
    deleteTeam
  } = require('../controllers/team.controller')


  router
  .get('/', getAllTeams)
  //.get('/profile', getOwnProfile)
  .get('/:teamId', getOneTeam)
  .post('/',  createTeam)
  .put('/:teamId',  updateTeam)
  .delete('/:teamId',  deleteTeam)

  module.exports = router