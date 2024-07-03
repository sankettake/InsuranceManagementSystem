const mongoose = require('mongoose');
const {dbNotesRedux} = require("../connection")
const Schema = mongoose.Schema


const TemplateSchema = new Schema({
    title: {
        type: String,
        required:  [true, 'The Template title text field is required'],
    },
    type: {
        type: String,
        required:  [true, 'The Template type text field is required'],
    },
    points: {
        type: Number,
        required:  [true, 'The Template points number field is required'],
    },
})

const Template = dbNotesRedux.model('Template', TemplateSchema)

module.exports = Template;