const Link = require( '../../../database/models/Links');
const router = require('express').Router();


module.exports= router.delete('/api/links', function (req, res,err) {
    if (err) { console.log(err) };
    const id = req.body.id;
    // console.log(id)
    Link.deleteOne({ _id: id }, function (err) {
        if (err) {
          console.log(err)
        }
        Link.find({}, (err, linksList) => {
            // console.log(linksList)
            res.send(JSON.stringify(linksList))
            })
            
        })

})