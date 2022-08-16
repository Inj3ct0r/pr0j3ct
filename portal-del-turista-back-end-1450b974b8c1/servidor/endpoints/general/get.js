/*-get.js-*/
var router = require('express').Router()
const pool = require("./../../db")
const getAll = require("./../../dao/getAllTables")

// Dynamic endpoint to get all from any stored table
router.get("/:table/all", async (req, res) => {
    try {
      const table = req.params.table;
      const query = getAll(table); 
      const result = await pool.query(query);
      res.status(200).send(result.rows);
    }
    catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = router