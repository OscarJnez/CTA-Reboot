const router = require('express').Router()

const userRouter = require('./user.routes')
router
  .use('/user', userRouter)

module.exports = router