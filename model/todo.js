const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    Name: String,
    Age:Number,
    date: {type: Date,default: Date.now()},
    deleted: { type: Boolean, default: false
}
});

module.exports = mongoose.model('Note', NoteSchema);