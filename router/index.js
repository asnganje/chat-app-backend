const router = require('express').Router()

router.use('/', require('./auth'))

router.get('/home', (req,res)=> {
    return res.send('This is the home page')
})

module.exports = router;