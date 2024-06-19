const mongoose = require('mongoose');
const {dbNotesRedux} = require("../connection")
const Schema = mongoose.Schema


const NoteSchema = new Schema({
    title: {
        type: String,
        required:  [true, 'The note title text field is required'],
    },
    content: {
        type: String,
        required:  [true, 'The note content text field is required'],
    }
})

const Note = dbNotesRedux.model('Note', NoteSchema)

module.exports = Note;