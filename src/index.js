const express = require("express")

const server = express()

const cors = require("cors")

const services = require("./services")

server.use(express.json())

server.use("/api", services)

server.use(cors())

const port = process.env.PORT || 1996

server.listen(port, () => {
    console.log("Server is running on port" + port)
})