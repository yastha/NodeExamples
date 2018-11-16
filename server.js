var express = require("express"),
    route = require("./Router/importer"),
    parser= require("body-parser"),
    app = express(); 

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
const dbConfig = require('./config/database.config.js')
const mongoose= require('mongoose');

mongoose.Promise= global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use('/api/', route);
app.listen(8000);

//http://localhost:3500/api/post

