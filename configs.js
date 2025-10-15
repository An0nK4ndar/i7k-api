/**
 * Copyright © 2025 [ balxzzy ]
 *
 * All rights reserved. This source code is the property of [ Shiina Team ].
 * Unauthorized copying, distribution, modification, or use of this file,
 * via any medium, is strictly prohibited without prior written permission.
 *
 * This software is protected under international copyright laws.
 *
 * Contact: [ pa424013@gmail.com ]
 * GitHub: https://github.com/balxz
 */
 
const express = require("express")
const path = require("path")
const fs = require("fs")
const chalk = require("chalk")
const open = require("open")
const axios = require("axios")

const SH = () => ({
    name: "i7K - API",
    version: "1.0.0",
    description: "i7K is a free, simple REST API created by iSk for the common good. Feel free to use it, but please avoid DDoS attacks.",
    banner: "https://raw.githubusercontent.com/An0nK4ndar/gambar/refs/heads/main/IMG_20251016_041044_905.jpg",
    status: "online.",
    creator: "iSk"
})
//console.log(SH())
module.exports = SH()
global.path = path
global.fs = fs
global.chalk = chalk 
global.open = open
global.axios = axios
global.app = express()
global.express = express

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    delete require.cache[file]
})
