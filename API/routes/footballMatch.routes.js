const router = require('express').Router()

const {
    getAllFootballMatchs,
    getAllFootballMatchsAllInfo,
    getOneFootballMatch,
    getOneFootballMatchAllInfo,
    getOwnFootballMatches,
    createFootballMatch,
    updateFootballMatch,
    deleteFootballMatch
  } = require('../controllers/footballMatch.controller')
const { checkAdmin } = require('../utils/autorization.utils')


  router
  .get('/', getAllFootballMatchs)
  .get('/allInfo',getAllFootballMatchsAllInfo)
  .get('/profile', getOwnFootballMatches)
  .get('/:footballMatchId', getOneFootballMatch)
  .get('/:footballMatchId/allInfo', getOneFootballMatchAllInfo)
  .post('/', checkAdmin,  createFootballMatch)
  .put('/:footballMatchId', checkAdmin, updateFootballMatch)
  .delete('/:footballMatchId', checkAdmin, deleteFootballMatch)

  module.exports = router