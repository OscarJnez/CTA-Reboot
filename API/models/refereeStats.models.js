const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const RefereeStats = connection.define('referee_stat', {
    goals_away_team: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    goals_local_team: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    yellow_card: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    red_card: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    penalties: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    correct_offside: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    wrong_offside: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    referee_score: {
        type: DataTypes.INTEGER        
    }
  },  {
    timestamps: false,
})

module.exports = RefereeStats