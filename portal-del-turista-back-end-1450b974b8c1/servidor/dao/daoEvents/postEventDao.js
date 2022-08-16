const pool = require("../../db")

// Dao for event post
module.exports = async (name, details, sponsor, preference, duration, status, created_date, modified_date, res) => {
    try{
        await pool.query(
            "INSERT INTO events(name,details,sponsor,preference,duration,status,created_date,modified_date) values($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
                               [name,details,sponsor,preference,duration,status,created_date,modified_date])

        return res.status(200).send("Event registered") 
    }
    catch (err) {
        res.status(500).send("Server error")
    }
}