const mongoose = require('mongoose');
const {dbIMS} = require("../connection")
const Schema = mongoose.Schema

const PolicySchema = new Schema({
    name: {
        type: String,
        required:  [true, 'The policy name text field is required'],
    },
    type: {
        type: String,
        required:  [true, 'The type field is required'],
    },
})

const Policy = dbIMS.model('Policy', PolicySchema)

module.exports = Policy;