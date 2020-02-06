const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const configdb = require('./config/mongodb')
const Links = require('./models/Links') // mongose data model

// configdb() //start mongodb server
const list = [{
    title: 'facebook',
    href: 'www.facebook.com',
    description:'social media network'
}]

const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get('/api/links' ,function (req, res, err) {
    res.send(JSON.stringify(list))
})
app.post('/api/links', function (req, res, err) {
    console.log('fetch requested')
    console.log(req.body)
    // res.statusCode(200)
})




app.listen(3002,()=>{console.log('server started at port 3002')})