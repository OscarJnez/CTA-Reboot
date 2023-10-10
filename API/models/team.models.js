const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Team = connection.define('team', {
    club_name: {
        type: DataTypes.STRING,
        notNull: true
    },
    player_sheets: {
        type: DataTypes.INTEGER,
        notNull: true
    },
    coach: {
        type: DataTypes.STRING,
        notNull: true,
    },
    location: {
        type: DataTypes.STRING,
        notNull: true
    },
    sending_off: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false,
})

module.exports = Team

