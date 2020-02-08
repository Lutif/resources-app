const getLinksRouter = require('express').Router()
const Links =require('../../../database/models/Links')

module.exports = getLinksRouter.get('/api/links', function (req, res, err) {
    Links.find({}, (err, linksList) => {
    res.send(JSON.stringify(linksList))
    })
    
})