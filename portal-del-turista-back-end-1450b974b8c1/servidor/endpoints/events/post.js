/*-post.js-*/

var router = require('express').Router()
const postEventDao = require("../../dao/daoEvents/postEventDao")

// Post new event
router.post("/events/post", async (req, res) => {

    const { name, details, sponsor, preference, duration, status, created_date, modified_date } = req.body
    
    postEventDao(name,details,sponsor,preference,duration,status,created_date,modified_date,res)
})

module.exports = router