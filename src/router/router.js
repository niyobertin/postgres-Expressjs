const express = require("express");
const db = require('../config/config.js');
const router = express.Router();
//Getting all users from a database
router.get("/employees", (req, res) => {
    db.query('SELECT * FROM employee', (err, results) => {
        if (err) {
            throw err;
        }
        res.status(200).json(results.rows);
    });
})
//Getting a single users from a database.
router.get("/employees/:id", (req, res) => {
    const id = parseInt(req.params.id)
    db.query("SELECT * FROM employee WHERE emp_id = $1", [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});
//Creating new employee to be added to adatabase.
router.post('/employees/add', (req, res) => {
    const { emp_id, employeename, department, salary } = req.body;
    db.query('INSERT INTO employee (emp_id,employeename,department,salary) VALUES ($1,$2,$3,$4)', [emp_id, employeename, department, salary], (error, results) => {
        if (error) {
            throw error;
        }
        res.send(`New user created!`);
    });
});
// Updating an employee.
router.put('/employees/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { employeename, department, salary } = req.body;
    db.query('UPDATE employee SET employeename = $1,department = $2,salary = $3 WHERE emp_id = $4', [employeename, department, salary, id], (error, results) => {
        if (error) {
            throw error;
        }
        res.send("user updated...");
    })
})
//removing an employee.
router.delete('/employees/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    db.query("DELETE FROM employee WHERE emp_id = $1", [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.send('employee deleted.');
    });
})
module.exports = router;