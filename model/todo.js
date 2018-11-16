const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    Name: String,
    Age:Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);