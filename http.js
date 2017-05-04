const express = require("express")
const favicon = require("serve-favicon")
const compression = require("compression")
const path = require("path")
let app = express()

// Run static server
app.use(compression())
app.use(favicon(path.join(__dirname, 'favicon.ico')))
app.use(express.static(__dirname))
app.listen(8080)