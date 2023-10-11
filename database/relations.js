const User = require('../API/models/user.models')
const Team = require('../API/models/team.models')
const RefereeTeam = require('../API/models/refereeTeam.models')
const RefereeStats = require('../API/models/refereeStats.models')
const FootballMatch = require('../API/models/footballMatch.models')

function addRelationsToModels () {
    try {
        
        User.hasOne(RefereeStats)
        RefereeStats.belongsTo(User)

        RefereeTeam.hasMany(User)
        User.belongsTo(RefereeTeam)

        RefereeTeam.hasMany(FootballMatch)
        FootballMatch.belongsTo(RefereeTeam)

        Team.belongsToMany(FootballMatch, { through: "FootballMatch_Team", timestamps:false })
        FootballMatch.belongsToMany(Team, { through: "FootballMatch_Team", timestamps:false })

    } catch (error) {
        throw error
    }
}

module.exports = addRelationsToModels