require ("dotenv").config()
const express = require('express')
const morgan = require('morgan')

const addRelationsToModels = require('./database/relations')

const {
    checkConnection,
    syncModels
} = require ("./database/index")

async function checkDB () {
    await checkConnection()
    addRelationsToModels()
    await syncModels()
  }



  function startExpress () {
    const app = express()
      .use(morgan('dev'))
      .use(express.json())
  
      .use('/api', require('./API/routes/index'))
  
      .listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`)
      })
  }


  ;(async function startAPI () {
    await checkDB()
    startExpress()
  })()  