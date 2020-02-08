
// process.env.NODE_CONFIG_DIR = '../config/'
 process.env.NODE_ENV='production'
require('dotenv').config()
const mongoose = require('mongoose');
const config = require('config')
console.log('env.node_env in create database',process.env.NODE_ENV)
const password = process.env.NODE_ENV === 'production' ? process.env.DB_PASSWORD : '';


const URI = config.get('db.domain') + password + config.get('db.dbname');

console.log(URI)
module.exports= function mongoConfig () {
    mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true}) 
}