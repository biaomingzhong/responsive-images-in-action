"use strict";
const express = require("express");
const favicon = require("serve-favicon");
const compression = require("compression");
let app = express();

// Run static server
app.use(compression());
app.use(express.static(__dirname));
app.listen(8080);