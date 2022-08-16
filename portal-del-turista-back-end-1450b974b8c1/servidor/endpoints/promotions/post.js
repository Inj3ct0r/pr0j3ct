/*-post.js-*/

var router = require('express').Router()
const postPromoDao = require("../../dao/daoPromos/postPromoDao")

// Post new promotion
router.post("/promotions/post", async (req, res) => {

    const { name, details, target, preference, duration, status, created_date, modified_date } = req.body

    postPromoDao(name,details,target,preference,duration,status,created_date,modified_date,res)
})

module.exports = router