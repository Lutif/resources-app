const getLinksRouter = require('express').Router()
const Links =require('../../../database/models/Links')

const list = [{
    title: 'facebook',
    href: 'www.facebook.com',
    description:'social media network'
}]
module.exports = getLinksRouter.get('/api/links', function (req, res, err) {
    Links.find({}, (err, linksList) => {
    res.send(JSON.stringify(linksList))
    })
    
})