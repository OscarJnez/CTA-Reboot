const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const RefereeTeam = connection.define('referee_team', {
    location: {
        type: DataTypes.STRING,
        notNull: true
    }
}, {
    timestamps: false,
})

module.exports = RefereeTeam