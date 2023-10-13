const router = require('express').Router()

const {
    getAllTeams,
    getOneTeam,
    //getOwnProfile,
    createTeam,
    updateTeam,
    deleteTeam
  } = require('../controllers/team.controller')
const { checkAdmin } = require('../utils/autorization.utils')


  router
  .get('/', getAllTeams)
  //.get('/profile', getOwnProfile)
  .get('/:teamId', getOneTeam)
  .post('/', checkAdmin, createTeam)
  .put('/:teamId',  checkAdmin, updateTeam)
  .delete('/:teamId',  checkAdmin, deleteTeam)

  
  module.exports = router