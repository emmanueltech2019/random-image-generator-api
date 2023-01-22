const express = require("express")
const { generateImage } = require("../controllers/openAiController")

const routes =  express.Router()

routes.post("/generateimage", generateImage)

module.exports=routes