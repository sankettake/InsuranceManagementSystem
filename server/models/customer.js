const mongoose = require('mongoose');
const {dbTest} = require("../connection")
const Schema = mongoose.Schema


const CustomerSchema = new Schema({
    firstName: {
        type: String,
        required:  [true, 'The Customer firstName text field is required'],
    },
    lastName: {
        type: String,
        required:  [true, 'The Customer firstName text field is required'],
    },
})

const Customer = dbTest.model('Customer', CustomerSchema)

module.exports = Customer;