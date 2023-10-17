const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const FootballMatch = connection.define('football_match', {
    date: {
        type: DataTypes.DATE,
        notNull: true
    },
    played: {
        type: DataTypes.BOOLEAN,
        notNull: true
    },
    goals_away: {
        type: DataTypes.INTEGER
    },
    goals_local: {
        type: DataTypes.INTEGER
    },
    red_card_local: {
        type: DataTypes.INTEGER
    },
    red_card_away: {
        type: DataTypes.INTEGER
    },
    yellow_card: {
        type: DataTypes.INTEGER
    },
    penalties: {
        type: DataTypes.INTEGER
    },referee_score: {
        type: DataTypes.DOUBLE        
    }
}, {
    timestamps: false,
})

module.exports = FootballMatch