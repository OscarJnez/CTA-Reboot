require ("dotenv").config()

const {
    checkConnection,
    syncModels
} = require ("./database/index")

checkConnection ()