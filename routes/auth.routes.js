const express = require('express')
const router = express.Router()
const signIn = require('../controllers/auth.controller.js')

router.post('/signin',signIn.signIn)

module.exports = router