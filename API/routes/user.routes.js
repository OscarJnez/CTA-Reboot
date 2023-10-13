const router = require('express').Router()

const {
    getAllUsers,
    getOneUser,
    //getOwnProfile,
    createUser,
    updateUser,
    deleteUser
  } = require('../controllers/user.controller')
const { checkAdmin } = require('../utils/autorization.utils')

//admin Routes 


  router
  .get('/', checkAdmin, getAllUsers)
  //.get('/profile', getOwnProfile)
  .get('/:userId', checkAdmin, getOneUser)
  .post('/', checkAdmin, createUser)
  .put('/:userId', checkAdmin, updateUser)
  .delete('/:userId', checkAdmin,  deleteUser)


//admin profile

  module.exports = router