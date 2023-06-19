const mongoose = require('mongoose');
const {dbTest} = require("../connection")
const Schema = mongoose.Schema


const RequestSchema = new Schema({
    type: {
        type: String,
        required:  [true, 'The Request type text field is required'],
    },
    reason: {
        type: String,
        required:  [true, 'The Request reason text field is required'],
    },
    from: {
        type: Date,
        required:  [true, 'The Request from date field is required'],
    },
    to: {
        type: Date,
        required:  [true, 'The Request to date field is required'],
    },
    duration: {
        type: Number,
        required:  [true, 'The Request duration number field is required'],
    },
})

const Request = dbTest.model('Request', RequestSchema)

module.exports = Request;