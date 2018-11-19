const Note = require('../model/todo.js');

exports.create = async(req, res) => {
    // Validate request
    if(!req.body.Name) {
        return res.status(400).json({
            message: "Name can not be empty"
        });
    }

    // Create a Note
    const note = new Note({
        Name: req.body.Name || "UnNamed Name", 
        Age: req.body.Age,
        deleted:req.body.deleted
    });

    // Save Note in the database
try{
    const data = await note.save();
    const msg= await res.json({message: " succesfully posted"});
}
catch(err){
    res.status(500).json({
        message: "Error has occured, Cant create a new data"
    });
}
};

// Retrieve and return all notes from the database.
exports.findAll = async(req, res) => {
   try{
    const note = await Note.find({deleted: {$ne: true}}).sort({date: 'desc'});
    const msg = await res.json(note);
    return msg;
}
catch(err){
    res.status(500).json({
        message:"Error while retrieving notes"
    });
    }
};

// Find a single note with a noteId
exports.findOne = async (req, res) => {

    if(!req.params.noteId) {
        return res.status(404).json({
            message: "data not found with id " + req.params.noteId
        });            
    }

    try {
        const note = await Note.findById(req.params.noteId);
        const msg = await res.json(note);
        return msg;
    }

    catch(err) {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                message: "data not found with id "  + req.params.noteId
            });                
        }
        return res.status(500).json({
            message: "Error retrieving data with id "  + req.params.noteId
        });
    }
};
  
// Update a note identified by the id in the request
exports.update = async (req, res) => {
    // Validate Request
    if(!req.body.Age) {
        return res.status(400).send({
            message: "Age can not be empty"
        });
    }
    if(!req.body.Name) {
        return res.status(400).send({
            message: "Name can not be empty"
        });
    }
    

// Find note and update it with the request body
try{
    const note = await Note.findById(req.params.noteId);
    note.Name = req.body.Name;
    note.Age = req.body.Age;
   
    if(!note) {
        return res.status(404).send({
            message: "Note not found with id " + req.params.noteId
        });
}

const data = await note.save();
const message = await res.json({message: "successfully updated"});
}

catch(err) {
    // if(err.kind === 'ObjectId') {
    //     return res.status(404).json({
    //         message: "data not found with id "  + req.params.noteId
    //     });                
    // }
    return res.status(500).json({
        message: "Error updating note with id " +req.params.noteId,
        errMsg: err.toString()
    });
}
};



// Delete a note with the specified noteId in the request

exports.delete = async (req, res) => {

    if(!req.params.noteId) {
        return res.status(404).json({
            message: "data not found with id " + req.params.noteId
        });
    }

    try {
        const note = await Note.findByIdAndRemove(req.params.noteId);
        const msg = await res.json({message: "data deleted successfully!"});
    }

    catch(err)  {
        if(err.kind === 'ObjectId' || err.Name === 'NotFound') {
            return res.status(404).json({
                message: "data not found with id " + req.params.noteId
            });                
        }
        return res.status(500).json({
            message: "Could not delete note with id " + req.params.noteId
        });
    }
};

//update the specific value of an object
exports.patch = async (req, res) => {

    try {

        const note = await Note.findById(req.params.noteId);

        if (req.params.noteId) {
            delete req.params.noteId;
        }

        //Patch request for making the deleted boolean -> true
        note.deleted = true;


        //save it
        const save = await note.save();
        const respnose = await res.json({ message: "Updated succesfully" });
    }
    
    catch (err) {
        res.status(500).json({
            message: "Some error occurred while editing  the data."
        });
    }

};
