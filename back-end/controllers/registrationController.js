const todoSchema = require("../model/todoSchema")










let registrationController = (req, res) => {
    const { email, username, password } = req.body


    let task = new todoSchema({
        email: email,
        username: username,
        password: password,

    });

    task.save()

    res.send(task)
}

module.exports = registrationController