const router = require('express').Router()

const {
    getAllRefereeStats,
    getOneRefereeStat,
    //getOwnProfile,
    createRefereeStat,
    updateRefereeStat,
    deleteRefereeStat
  } = require('../controllers/refereeStats.controller')


  router
  .get('/', getAllRefereeStats)
  //.get('/profile', getOwnProfile)
  .get('/:statsId', getOneRefereeStat)
  .post('/',  createRefereeStat)
  .put('/:statsId',  updateRefereeStat)
  .delete('/:statsId',  deleteRefereeStat)

  module.exports = router