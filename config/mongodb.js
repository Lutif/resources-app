const mongoose = require('mongoose');
const config = require('config')
module.exports= function mongoConfig () {
    mongoose.connect("mongodb://localhost:2017/links",{useNewUrlParser:true,useUnifiedTopology:true})

}