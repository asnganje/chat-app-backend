// get express which return a function
const express = require('express')

const config = require('./config/app')

const app = express()

const port = config.appPort;

app.get('/', (req, res)=> {
    return res.send('Home page is here')
})

app.get('/login', (req,res)=> {
    return res.send('This is the login page')
})
app.listen(port, ()=> {
    console.log(`App is listening on port ${port}`);
})