var app1 = require("express");
var note = app1.Router();
    const notes = require("./../controller/functionality.js");
    note.post('/notes', notes.create);

    note.get('/notes', notes.findAll);
   
    note.get('/notes/:noteId', notes.findOne);
    note.put('/notes/:noteId', notes.update);
    note.patch('/notes/:noteId',notes.patch);
    note.delete('/notes/:noteId', notes.delete);
module.exports = note;