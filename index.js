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
  checkDB()