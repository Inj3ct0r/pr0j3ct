/*-config.js-*/

// Library that loads environment variables from .env file
const dotenv = require('dotenv')

// Loads .env file contents into process.env, which stores them in a key-value relation
dotenv.config()

// Get enviromental variables from .env and export them as usable variables
module.exports = {
    SERVER_PORT: process.env.SERVER_PORT,
    connectionString: process.env.CONNECTION_URL,
    api_key: process.env.API_KEY,
    JWT_SECRET: process.env.JWT_SECRET
}