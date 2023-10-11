const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const User = connection.define('user', {
    dni: {
        type: DataTypes.STRING,
        unique: true,
        notNull: true,
        //validate: { is: ^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE] }    
    },
    name: {
        type: DataTypes.STRING,
        notNull: true
    },
    last_name: {
        type: DataTypes.STRING,
        notNull: true
    },
    email: {
        type: DataTypes.STRING,
        notNull: true,
        validate: { isEmail: true }
    },
    password: {
        type: DataTypes.STRING,
        notNull: true
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue : "user"
    },
    contact_number: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false,
})

module.exports = User