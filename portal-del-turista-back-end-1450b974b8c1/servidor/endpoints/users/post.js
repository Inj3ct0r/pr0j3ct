/*-post.js-*/

var router = require('express').Router()
const registerDao = require("../../dao/daoUser/postUserDao")

// Register user, more detail in associated Dao
router.post("/users/post", async (req, res) => {
    
    const { name, nickname, email, country, city, state, profile, password } = req.body

    // Check if user exists by comparing email, if not, insert it into table
    registerDao(name, nickname, email, country, city, state, profile, password, res)
})

module.exports = router
