/*-get.js-*/

var router = require('express').Router()
const pool = require("./../../db")

// Get users depending of query
router.get("/users/get", async (req, res) => {
    try {
      // Change it for relevant user get
    }
    catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = router