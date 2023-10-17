const router = require('express').Router()

const userRouter = require('./user.routes')
const teamRouter = require('./team.routes')
const refereeTeamRouter = require('./refereeTeam.routes')
const refereeStatsRouter = require('./refereeStats.routes')
const footballMatchRouter = require('./footballMatch.routes')
const authenticationRouter = require('./authentication.routes')
const { checkAuth, checkAdmin } = require('../utils/autorization.utils')

router
  .use('/auth',  authenticationRouter)
  .use('/user', checkAuth, userRouter)
  .use('/team', checkAuth, teamRouter)
  .use('/refereeTeam', checkAuth, refereeTeamRouter)
  .use('/stats', checkAuth, refereeStatsRouter)
  .use('/footballMatch', checkAuth, footballMatchRouter)

module.exports = router