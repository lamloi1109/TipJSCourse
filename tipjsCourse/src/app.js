const express = require('express')
const app = express()
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')


// init middlewares
// morgan
app.use(morgan("dev"))

// helmet
app.use(helmet())

// compression
app.use(compression())

// init db

// init routes
app.get('/',(req, res, next) => {
    const strCompress = "TipJSdsads"
    return res.status(200).json({
        message: 'OK',
    })
})

module.exports = app 