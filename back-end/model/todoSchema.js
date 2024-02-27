const mongoose = require('mongoose');
const { Schema } = mongoose;


const todoSchema = new Schema({
    email: String,
    username: String,
    password: String,
});


module.exports = mongoose.model('Task', todoSchema);