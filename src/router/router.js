const express = require("express");
const db = require('../config/config.js');
const router = express.Router();

router.get("/employees", (req, res) => {
    db.query('SELECT * FROM employee', (err, results) => {
        if (err) {
            throw err;
        }
        res.status(200).json(results.rows);
    });
})
module.exports = router;