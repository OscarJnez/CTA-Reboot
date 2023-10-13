const router = require('express').Router()

const {
    getAllFootballMatchs,
    getOneFootballMatch,
    //getOwnProfile,
    createFootballMatch,
    updateFootballMatch,
    deleteFootballMatch
  } = require('../controllers/footballMatch.controller')
const { checkAdmin } = require('../utils/autorization.utils')


  router
  .get('/', getAllFootballMatchs)
  //.get('/profile', getOwnProfile)
  .get('/:footballMatchId', getOneFootballMatch)
  .post('/', checkAdmin,  createFootballMatch)
  .put('/:footballMatchId', checkAdmin, updateFootballMatch)
  .delete('/:footballMatchId', checkAdmin, deleteFootballMatch)

  module.exports = router