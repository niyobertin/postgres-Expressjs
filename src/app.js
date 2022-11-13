require('dotenv').config();
const express = require('express');
const bodyPerser = require('body-parser');
const employeeRouter = require("./router/router.js");
const app = express();
app.use(bodyPerser.json());
app.use("/", employeeRouter);
console.log(process.env)
app.get("/", (req, res) => {
    res.send("<h2> This is the test for begining a project</h2>");
});
app.listen(3000, () => console.log('app is listenig on port:3000..'));