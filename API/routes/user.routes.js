const router = require('express').Router()

const {
    getAllUsers,
    getOneUser,
    getOwnProfile,
    createUser,
    updateUser,
    updateOwnProfile,
    updatePassword,
    deleteUser,
    deleteProfile
  } = require('../controllers/user.controller')
const { checkAdmin } = require('../utils/autorization.utils')

//admin Routes 


  router
  .get('/', checkAdmin, getAllUsers)
  .get('/profile', getOwnProfile)
  .get('/:userId', checkAdmin, getOneUser)
  .post('/', checkAdmin, createUser)
  .put('/profile',updateOwnProfile)
  .put('/password',updatePassword)
  .put('/:userId', checkAdmin, updateUser)
  .delete('/profile',deleteProfile)
  .delete('/:userId', checkAdmin,  deleteUser)
  


//admin profile

  module.exports = router