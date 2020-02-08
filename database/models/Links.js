const Schema = require('mongoose').Schema;
const Model = require('mongoose').model;


const linkSchema = new Schema({
    title: String,
    href: {
        type: String,
        required:true
    },
    description:String
})

const Link = new Model('Link', linkSchema);

module.exports= Link;