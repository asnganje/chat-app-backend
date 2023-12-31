// get express which return a function
const express = require('express')
const config = require('./config/app')
const router = require('./router')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(router)

const port = config.appPort;
app.listen(port, ()=> {
    console.log(`App is listening on port ${port}`);
})