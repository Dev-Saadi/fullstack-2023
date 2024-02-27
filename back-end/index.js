require('dotenv').config()
const express = require("express");
const app = express();
var cors = require('cors')
const secureApi = require("./middleware/secureApi")
const routes = require("./routes")
const mongoConfig = require('./config/mongoConfig')
const todoSchema = require('./model/todoSchema')



mongoConfig();
app.use(cors());
app.use(express.json());
app.use(routes);


app.post("/api/v1/auth/registration", secureApi, (req, res) => {
    const { email, username, password } = req.body


    let task = new todoSchema({
        email: email,
        username: username,
        password: password,

    });

    task.save()

    res.send(task)
})


app.get("/api/v1/auth/registration", async function (req, res) {

    let data = await todoSchema.find()

    res.send(data)
})


app.listen(8000, () => {
    console.log("port connected");
})