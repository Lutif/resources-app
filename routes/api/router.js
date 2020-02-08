const router = require('express').Router();
const addLinksRouter = require('./links/addLink');
const getLinksRouter = require('./links/getLinks');
const deleteLinkRouter = require('./links/deleteLink');
router.use([addLinksRouter,getLinksRouter,deleteLinkRouter]);
// router.use();

module.exports= router
