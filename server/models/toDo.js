const mongoose = require('mongoose');
const {dbTest} = require("../connection")
const Schema = mongoose.Schema


const ToDoSchema = new Schema({
    text: {
        type: String,
        required:  [true, 'The ToDo text field is required'],
    },
})

const ToDo = dbTest.model('ToDo', ToDoSchema)

module.exports = ToDo;