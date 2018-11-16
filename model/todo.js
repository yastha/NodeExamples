
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

