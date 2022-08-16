var router = require('express').Router()
const pool = require("../../db")
const jwtGenerator = require("../../index")

// User login
router.post("/login", async (req, res) => {
    try{ 
        const { email, password } = req.body
        const user = await pool.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email , password])
        // Check if users exists, if not, return null token
        if (user.rows.length == 1){
            const token = jwtGenerator(user.rows[0].id)
            res.json({ token })
        }
        else{
            const token = null
            res.json({ token })
        }
    } 
    
    catch (err) {
        console.error(err.message)
        res.json(err)
    }
})

module.exports = router