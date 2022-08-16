/*-db.js-*/

// Create a Postgres pool containing connection data
const Pool = require("pg").Pool

// Gets connection url from config, which contains all required parameters to connect with ElephantSQL
const { connectionString } = require('./config')
// Api key was included but presumably it is not mandatory
const { api_key } = require('./config')

const pool = new Pool({
    connectionString,
    api_key
})

module.exports = pool