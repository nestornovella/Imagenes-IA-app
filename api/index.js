require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const server = express()
const router = require('./src/routes/imagesRoutes')

server.use(express.json())
server.use(express.static("public"))
server.use(morgan('dev'))
server.use(cors())
server.use("/generate-image", router )

const PORT = process.env.PORT || 3001

server.get("/test", (req, res)=>{
    res.json({response: 'la aplicacion funciona correctamente!'})
})

server.listen(PORT, ()=>{console.log(`listen in port ${PORT}`)})
