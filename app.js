require("dotenv/config")
const express = require("express");
const server = express();
const main = require('./src/main')

const morgan = require("morgan");
const path = require("path")
const fs = require("fs")
const cors = require("cors")

server.use(cors())

server.use(morgan("dev"))
let accessLogStream = fs.createWriteStream(path.join("./logs",'access.log'),{flags: 'a'})
server.use(morgan('combined', { stream: accessLogStream }))

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use("/public",express.static("public"))
server.use(main)

module.exports = server

