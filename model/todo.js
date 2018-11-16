
moduleexports = {
    url:'mongodb://localhost/test'
}
var mongoose=require('mongoose'),
    Schema= mongoose.Schema;
mongoose.connect('mongodb://8000/my_database');

var mySchema= new Schema({
    title:String,
    realeaseYear:
});

const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);