const pool = require("../../db")

// Dao for user register
module.exports = async (name, nickname, email, country, state, city, profile, password, res) => {
    try {
        // Check if user exists by comparing existing emails, if it exists, throw error
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email])

        if (user.rows.length !== 0) {
            return res.status(401).send("User already exists")
        }
        // Insert into BBDD
        await pool.query(
            "INSERT INTO users(name, nickname, email, country, state, city, profile, password) values($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
                              [name, nickname, email, country, state, city, profile, password])

        return res.status(200).send("User registered") 
    }
    catch (err) {
        res.status(500).send("Server error")
    }
}