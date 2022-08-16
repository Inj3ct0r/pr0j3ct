const pool = require("../../db")

// Dao for promo post
module.exports = async (name, details, target, preference, duration, status, created_date, modified_date, res) => {
    try{
        await pool.query(
            "INSERT INTO promotions(name,details,target,preference,duration,status,created_date,modified_date) values($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
                                   [name,details,target,preference,duration,status,created_date,modified_date])

        return res.status(200).send("Promotion registered") 
    }
    catch (err) {
        res.status(500).send("Server error")
    }
}