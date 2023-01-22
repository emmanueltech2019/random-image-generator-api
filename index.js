const express = require("express")
require("dotenv").config()
const PORT = process.env.PORT || 4000


const app = express()
// Enabla body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("",require("./routes/openAiRoutes"))


app.listen(PORT,()=>{
    console.log(`Server started on Port 4000`)
})