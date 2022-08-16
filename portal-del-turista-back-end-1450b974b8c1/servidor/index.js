/*-index.js-*/

const express = require("express")
const cors = require("cors")
const app = express()
const jwt = require("jsonwebtoken")
const bodyparser  = require("body-parser")
const { SERVER_PORT } = require('./config')
const { JWT_SECRET } = require('./config')
const jwtSecret = JWT_SECRET

// Middleware
app.use(cors())
app.use(express.json())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))

// JWT GENERATOR
const jwtGenerator = (userId) => {
    // Creates token for logged user
    if (userId) {
        const payload = {
            user: userId,
        }
        return jwt.sign(payload, jwtSecret, { expiresIn: "1hr" })
    }
    console.info(userId)
    return "invalid token"
}

module.exports = jwtGenerator

// Find the way to use app.use(require(routes))

// User operations
app.use(require('./endpoints/users/get'))
app.use(require('./endpoints/users/post'))
app.use(require('./endpoints/login/post'))

// Get all from a table
app.use(require('./endpoints/general/get'))

// Event and promos operations
app.use(require('./endpoints/promotions/post'))
app.use(require('./endpoints/events/post'))

//create article
app.post("/articulo", async (req, res) => {
    try {
        const { titulo, parrafo ,img, tipo} = req.body
        const articulo = await pool.query(
            "INSERT INTO articulo_blog(titulo, parrafo, img,tipo) VALUES($1,$2,$3,$4) RETURNING *",
            [titulo, parrafo, img, tipo]
        )
        res.json(articulo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

// Console log of succesful connection in port
app.listen(SERVER_PORT, () => {
	console.log("Servidor iniciado en puerto " + SERVER_PORT)
})