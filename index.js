// get express which return a function
const express = require('express')

// call the express function
const app = express()

// create port, routes and let app listen to that port
const port = 3005
// create routes using get
app.get('/', (req, res)=> {
    return res.send('Home page is here')
})

app.get('/login', (req,res)=> {
    return res.send('This is the login page')
})
app.listen(port, ()=> {
    console.log(`App is listening on port ${port}`);
})