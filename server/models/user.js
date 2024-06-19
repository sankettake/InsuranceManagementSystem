const mongoose = require('mongoose');
const {dbNotesRedux} = require("../connection")
const Schema = mongoose.Schema


const UserSchema = new Schema({
    firstName: {
        type: String,
        required:  [true, 'The User firstName text field is required'],
    },
    lastName: {
        type: String,
        required:  [true, 'The User lastName text field is required'],
    },
    emailId: {
        type: String,
        required:  [true, 'The User emailId text field is required'],
    },
})

const User = dbNotesRedux.model('User', UserSchema)

module.exports = User;