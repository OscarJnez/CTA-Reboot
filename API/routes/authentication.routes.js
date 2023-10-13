const router = require('express').Router()
const { signUp, login } = require("../controllers/authentication.controller.js");

router.post('/signup', signUp)
router.post('/login', login)


module.exports = router
