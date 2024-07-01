const { LOGIN } = require('../global/_var.js')

/****** DEPENDENCY ******/

const express = require('express')
const router  = express.Router()

/****** CONTROLLER ******/

const getInfoController = require('../controllers/getInfo.controllers.js')


/****** ROUTES ******/

router.post(LOGIN, getInfoController.login)


module.exports = router
