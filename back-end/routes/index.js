const express = require("express")
const routes = express.Router()
const apiRoutes = require("./api")

let apiBase = process.env.BASEURLAPI

routes.use(apiBase, apiRoutes)

routes.use(apiBase, (req, res) => res.send("Api not found"))

module.exports = routes