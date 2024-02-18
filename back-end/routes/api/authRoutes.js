const express = require("express")
const secureApi = require("../../middleware/secureApi")
const registrationController = require("../../controllers/registrationController")
const routes = express.Router()

routes.post("/registration", secureApi, registrationController)


module.exports = routes