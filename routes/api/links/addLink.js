const addrouter= require('express').Router();
const Links = require('../../../database/models/Links')

module.exports= addrouter.post('/api/links', function (req, res, err) {
    console.log('fetch requested')
    console.log(req.body)
    const link = new Links({ ...req.body })
    link.save()
    // res.statusCode(200)
})
