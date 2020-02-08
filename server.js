// process.env.NODE_ENV = 'production';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const createdb = require('./database/createDatabase')
const path =require('path')
const Links = require('./database/models/Links')
const getrouter = require('./routes/api/links/getLinks')

// mongose data model
// process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
// const config = require("config");

const router = require('./routes/api/router')


const PORT = process.env.PORT || 3002;

createdb() //start mongodb server

// const list = [{
//     title: 'facebook',
//     href: 'www.facebook.com',
//     description:'social media network'
// }]

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router)
app.use(getrouter)

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('frontend/build'));
  
    app.get('*', (req, res) => {
      console.log('request on server')
      console.log(path.resolve(__dirname, 'client', 'build', 'index.html'));
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
  }
  

// app.use(router);

// app.get('/api/links' ,function (req, res, err) {
//     res.send(JSON.stringify(list))
// })
// app.post('/api/links', function (req, res, err) {
//     console.log('fetch requested')
//     console.log(req.body)
//     const link = new Links({ ...req.body })
//     link.save()
//     // res.statusCode(200)
// })




app.listen(PORT,()=>{console.log(`server started at port ${PORT}`)})