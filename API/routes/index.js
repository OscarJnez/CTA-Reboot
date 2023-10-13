const router = require('express').Router()

const userRouter = require('./user.routes')
const teamRouter = require('./team.routes')
const refereeTeamRouter = require('./refereeTeam.routes')
const refereeStatsRouter = require('./refereeStats.routes')
const footballMatchRouter = require('./footballMatch.routes')
const authenticationRouter = require('./authentication.routes')

router
  .use('/auth', authenticationRouter)
  .use('/user', userRouter)
  .use('/team', teamRouter)
  .use('/refereeTeam', refereeTeamRouter)
  .use('/stats', refereeStatsRouter)
  .use('/footballMatch', footballMatchRouter)

module.exports = router