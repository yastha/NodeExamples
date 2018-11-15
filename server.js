var express = require("express"),
    route = require("./Router/importer"),
    parser= require("body-parser"),
    app = express(); 

app.use(parser.json());
app.use('/api/', route);
app.listen(8000);

//http://localhost:3500/api/post

