const router = require('express').Router()

const {
    getAllRefereeStats,
    getOneRefereeStat,
    getOwnRefereeStats,
    createRefereeStat,
    updateRefereeStat,
    deleteRefereeStat
  } = require('../controllers/refereeStats.controller')
const { checkAdmin } = require('../utils/autorization.utils')


  router
  .get('/', getAllRefereeStats)
  .get('/profile', getOwnRefereeStats)
  .get('/:statsId', getOneRefereeStat)
  .post('/', checkAdmin, createRefereeStat)
  .put('/:statsId', checkAdmin, updateRefereeStat)
  .delete('/:statsId',  checkAdmin, deleteRefereeStat)

  module.exports = router