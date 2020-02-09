const getLinksRouter = require('express').Router()
const Links =require('../../../database/models/Links')

module.exports = getLinksRouter.get('/api/links', function (req, res, err) {
    // console.log('in server get links route before requesting db')
    Links.find({}, (err, linksList) => {
        // console.log('in server get links route after requesting db')
        res.send(JSON.stringify(linksList))
        
    })
    
})