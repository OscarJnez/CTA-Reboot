const router = require('express').Router()

const {
    getAllUsers,
    getOneUser,
    //getOwnProfile,
    createUser,
    updateUser,
    deleteUser
  } = require('../controllers/user.controller')


  router
  .get('/', getAllUsers)
  //.get('/profile', getOwnProfile)
  .get('/:userId', getOneUser)
  .post('/',  createUser)
  .put('/:userId',  updateUser)
  .delete('/:userId',  deleteUser)

  module.exports = router