const router = require('express').Router()

const {
    getAllFootballMatchs,
    getOneFootballMatch,
    //getOwnProfile,
    createFootballMatch,
    updateFootballMatch,
    deleteFootballMatch
  } = require('../controllers/footballMatch.controller')


  router
  .get('/', getAllFootballMatchs)
  //.get('/profile', getOwnProfile)
  .get('/:footballMatchId', getOneFootballMatch)
  .post('/',  createFootballMatch)
  .put('/:footballMatchId',  updateFootballMatch)
  .delete('/:footballMatchId',  deleteFootballMatch)

  module.exports = router